import { NextResponse } from 'next/server';
import { VEHICLE_CAMERAS } from '@/data/vehicles';
import SunCalc from 'suncalc';

function getSolarCondition(lat: number, lng: number, now: Date): string {
  try {
    const sunPos = SunCalc.getPosition(now, lat, lng);
    const altitudeDeg = (sunPos.altitude * 180) / Math.PI;

    if (altitudeDeg < -6) return 'night';
    if (altitudeDeg >= -6 && altitudeDeg <= 8) return 'golden';
    return 'day';
  } catch {
    return 'day';
  }
}

export async function GET() {
  const now = new Date();

  const camsWithCondition = VEHICLE_CAMERAS.map((cam) => {
    let localTime = '--:--';
    try {
      localTime = new Intl.DateTimeFormat('en-GB', {
        timeZone: cam.timeZone,
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }).format(now);
    } catch {}

    const solarCondition = getSolarCondition(cam.lat, cam.lng, now);

    return {
      ...cam,
      solarCondition,
      condition: solarCondition,
      localTime,
      temperatureC: 20,
      hasKnownLive: true,
    };
  });

  return NextResponse.json({
    cams: camsWithCondition,
    fetchedAt: now.toISOString(),
  });
}
