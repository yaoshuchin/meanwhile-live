import { NextResponse } from 'next/server';
import { ANIMAL_CAMERAS } from '@/data/animals';
import SunCalc from 'suncalc';

export const dynamic = 'force-dynamic';

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
  const currentMonth = now.getMonth() + 1;

  const camsWithCondition = ANIMAL_CAMERAS.map((cam) => {
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
    const isPeak = cam.peakMonths ? cam.peakMonths.includes(currentMonth) : false;

    return {
      ...cam,
      solarCondition,
      isPeak,
      condition: solarCondition,
      localTime,
      temperatureC: 18,
      hasKnownLive: true,
    };
  });

  return NextResponse.json({
    cams: camsWithCondition,
    fetchedAt: now.toISOString(),
  });
}
