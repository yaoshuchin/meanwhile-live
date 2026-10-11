import SunCalc from 'suncalc';
import { CAMERAS } from '@/data/cameras';
import { ANIMAL_CAMERAS, type AnimalPoint } from '@/data/animals';
import { VEHICLE_CAMERAS, type VehiclePoint } from '@/data/vehicles';
import type { CamPoint } from '@/components/GlobeViewer';

function resolveCityCondition(weatherCode: number, sunAltitudeDeg: number): string {
  if (sunAltitudeDeg >= -6 && sunAltitudeDeg <= 6) return 'golden';
  if (sunAltitudeDeg < -6) return 'night';
  if (weatherCode >= 71 && weatherCode <= 77) return 'snowing';
  if ((weatherCode >= 51 && weatherCode <= 67) || (weatherCode >= 80 && weatherCode <= 82)) return 'raining';
  if (weatherCode === 3) return 'overcast';
  return 'clear';
}

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

export function computeCityConditions(): CamPoint[] {
  const now = new Date();
  return CAMERAS.map((cam) => {
    const sunPos = SunCalc.getPosition(now, cam.lat, cam.lng);
    const sunAltitudeDeg = (sunPos.altitude * 180) / Math.PI;
    const isNight = sunAltitudeDeg < -6;
    const condition = resolveCityCondition(0, sunAltitudeDeg);

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
      weatherCode: 0,
      temperatureC: isNight ? 18 : 24,
      precipitationMm: 0,
      isNight,
      sunAltitudeDeg: Number(sunAltitudeDeg.toFixed(1)),
      auroraChance: 0,
      localTime,
      sunRising: sunAltitudeDeg > -6 && sunAltitudeDeg < 15,
      hasKnownLive: true,
    };
  });
}

export function computeAnimalConditions(): AnimalPoint[] {
  const now = new Date();
  const currentMonth = now.getMonth() + 1;

  return ANIMAL_CAMERAS.map((cam) => {
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
      isPeak,
      condition: solarCondition,
      localTime,
      temperatureC: 18,
      hasKnownLive: true,
    };
  });
}

export function computeVehicleConditions(): VehiclePoint[] {
  const now = new Date();

  return VEHICLE_CAMERAS.map((cam) => {
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
      condition: solarCondition,
      localTime,
      temperatureC: 20,
      hasKnownLive: true,
    };
  });
}
