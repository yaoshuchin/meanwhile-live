'use client';

import '@/app/three-polyfill';
import { useEffect, useRef } from 'react';
import Globe from 'globe.gl';

export interface CamPoint {
  id: string;
  city: string;
  country: string;
  countryCode: string;
  lat: number;
  lng: number;
  condition: string;
  temperatureC: number;
  localTime: string;
  description: string;
  defaultVideoId: string;
  hasKnownLive?: boolean;
  scene?: string;
  [key: string]: any;
}

interface GlobeViewerProps {
  cameras: CamPoint[];
  activeCam: CamPoint | null;
  onSelectCam: (cam: CamPoint) => void;
}

const PIN_SVG_PATH =
  'M12 0C5.373 0 0 5.373 0 12c0 9 12 21 12 21s12-12 12-21c0-6.627-5.373-12-12-12z';

const CONDITION_COLORS: Record<string, string> = {
  clear: '#f59e0b',
  overcast: '#94a3b8',
  raining: '#38bdf8',
  snowing: '#e0f2fe',
  golden: '#fb923c',
  night: '#818cf8',
};

export default function GlobeViewer({
  cameras,
  activeCam,
  onSelectCam,
}: GlobeViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<any>(null);
  const activeCamRef = useRef<CamPoint | null>(activeCam);
  activeCamRef.current = activeCam;

  // Initialize Globe
  useEffect(() => {
    if (!containerRef.current) return;

    const globe = (Globe as any)()(containerRef.current)
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
      .backgroundColor('rgba(0,0,0,0)')
      .showAtmosphere(true)
      .atmosphereColor('#4fa8d8')
      .atmosphereAltitude(0.18);

    // Load GeoJSON for country outlines
    fetch('/geo/countries-110m-v2.geo.json')
      .then((res) => res.json())
      .then((geoData) => {
        globe
          .polygonsData(geoData.features)
          .polygonCapColor(() => 'rgba(30, 56, 66, 0.28)')
          .polygonSideColor(() => 'rgba(0, 0, 0, 0)')
          .polygonStrokeColor(() => 'rgba(90, 140, 160, 0.45)');
      })
      .catch((err) => console.warn('Could not load local GeoJSON:', err));

    // Setup Custom Map Pin HTML Elements
    globe
      .htmlElementsData([])
      .htmlLat('lat')
      .htmlLng('lng')
      .htmlAltitude(0.012)
      .htmlElement((d: any) => {
        const cam = d as CamPoint;
        const isActive = activeCamRef.current?.id === cam.id;
        const color = CONDITION_COLORS[cam.condition] || '#7d99a3';
        const height = isActive ? 40 : 28;
        const width = Math.round(0.72 * height);

        const el = document.createElement('div');
        el.className = 'group cursor-pointer select-none';
        el.style.transform = 'translate(-50%, -100%)';
        el.style.pointerEvents = 'auto';

        const activeGlow = isActive
          ? `<path d="${PIN_SVG_PATH}" fill="none" stroke="#05090b" stroke-width="7" stroke-linejoin="round" opacity="0.45"/>
             <path d="${PIN_SVG_PATH}" fill="none" stroke="#ffffff" stroke-width="3.4" stroke-linejoin="round"/>`
          : '';

        el.innerHTML = `
          <div class="relative transition-transform duration-200 hover:scale-125">
            <svg width="${width}" height="${height}" viewBox="0 0 24 33" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:block;overflow:visible">
              ${activeGlow}
              <path d="${PIN_SVG_PATH}" fill="${color}" stroke="${color}" stroke-width="1.4" stroke-linejoin="round"/>
              <circle cx="12" cy="12" r="3.6" fill="#05090b" fill-opacity="0.55"/>
            </svg>
            <div class="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block whitespace-nowrap rounded-md border border-[#1e2f36] bg-[#0a1114]/90 px-2 py-1 text-2xs text-[#e4ecee] shadow-lg backdrop-blur-md">
              <span class="font-bold text-[#4fa8d8]">${cam.city}</span> · ${cam.country}
            </div>
          </div>
        `;

        el.addEventListener('click', (e) => {
          e.stopPropagation();
          onSelectCam(cam);
        });

        return el;
      });

    // Setup Rings for Active Pin Pulse
    globe
      .ringAltitude(0.015)
      .ringMaxRadius(7.5)
      .ringPropagationSpeed(2.5)
      .ringRepeatPeriod(900);

    // Initial View (Focus on Asia / East Asia)
    globe.pointOfView({ lat: 25, lng: 120, altitude: 2.1 }, 1200);

    globeRef.current = globe;

    const handleResize = () => {
      if (containerRef.current && globeRef.current) {
        globeRef.current.width(containerRef.current.clientWidth);
        globeRef.current.height(containerRef.current.clientHeight);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (globeRef.current) {
        try {
          globeRef.current._destructor?.();
        } catch {}
      }
    };
  }, []);

  // Update HTML elements when cameras or activeCam changes
  useEffect(() => {
    if (!globeRef.current) return;
    globeRef.current.htmlElementsData(cameras);
  }, [cameras, activeCam]);

  // Update Rings & POV when activeCam changes
  useEffect(() => {
    if (!globeRef.current) return;
    if (activeCam) {
      globeRef.current
        .ringsData([activeCam])
        .ringLat('lat')
        .ringLng('lng')
        .ringColor(
          () => (t: number) =>
            `rgba(79, 168, 216, ${Math.max(0, (1 - t) * 0.95)})`
        );

      globeRef.current.pointOfView(
        { lat: activeCam.lat, lng: activeCam.lng, altitude: 1.5 },
        1200
      );
    } else {
      globeRef.current.ringsData([]);
    }
  }, [activeCam]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 h-full w-full overflow-hidden"
    />
  );
}
