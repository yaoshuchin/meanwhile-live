import { NextResponse } from 'next/server';
import SunCalc from 'suncalc';
import { CAMERAS } from '@/data/cameras';

export const revalidate = 180; // Cache for 3 minutes

function resolveCondition(weatherCode: number, sunAltitudeDeg: number): string {
  // Golden hour when sun altitude is between -6 and +6 degrees
  if (sunAltitudeDeg >= -6 && sunAltitudeDeg <= 6) return 'golden';
  if (sunAltitudeDeg < -6) return 'night';
  if (weatherCode >= 71 && weatherCode <= 77) return 'snowing';
  if ((weatherCode >= 51 && weatherCode <= 67) || (weatherCode >= 80 && weatherCode <= 82)) return 'raining';
  if (weatherCode === 3) return 'overcast';
  return 'clear';
}

export async function GET() {
  const now = new Date();

  // Try fetching live weather from Open-Meteo in chunks of 50 to avoid URL length issues
  const chunkSize = 40;
  const weatherMap: Record<string, { temp: number; code: number; precip: number }> = {};

  try {
    for (let i = 0; i < CAMERAS.length; i += chunkSize) {
      const chunk = CAMERAS.slice(i, i + chunkSize);
      const lats = chunk.map((c) => c.lat).join(',');
      const lngs = chunk.map((c) => c.lng).join(',');
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lats}&longitude=${lngs}&current=temperature_2m,weather_code,precipitation`;
      
      const res = await fetch(url, { next: { revalidate: 300 } });
      if (res.ok) {
        const data = await res.json();
        const items = Array.isArray(data) ? data : [data];
        items.forEach((item, idx) => {
          const cam = chunk[idx];
          if (cam && item.current) {
            weatherMap[cam.id] = {
              temp: item.current.temperature_2m ?? 20,
              code: item.current.weather_code ?? 0,
              precip: item.current.precipitation ?? 0,
            };
          }
        });
      }
    }
  } catch (err) {
    console.warn('Open-Meteo fetch warning:', err);
  }

  const results = CAMERAS.map((cam) => {
    // Sun position calculations
    const sunPos = SunCalc.getPosition(now, cam.lat, cam.lng);
    const sunAltitudeDeg = (sunPos.altitude * 180) / Math.PI;
    const isNight = sunAltitudeDeg < -6;

    // Weather fallback
    const weather = weatherMap[cam.id] || { temp: 21, code: 0, precip: 0 };
    const condition = resolveCondition(weather.code, sunAltitudeDeg);

    // Format local time
    let localTime = '--:--';
    try {
      localTime = new Intl.DateTimeFormat('zh-TW', {
        timeZone: cam.timeZone,
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }).format(now);
    } catch {
      localTime = '12:00';
    }

    return {
      ...cam,
      condition,
      weatherCode: weather.code,
      temperatureC: weather.temp,
      precipitationMm: weather.precip,
      isNight,
      sunAltitudeDeg: Number(sunAltitudeDeg.toFixed(1)),
      auroraChance: 0,
      localTime,
      sunRising: sunAltitudeDeg > -6 && sunAltitudeDeg < 15,
      hasKnownLive: true,
    };
  });

  return NextResponse.json({ cams: results });
}
