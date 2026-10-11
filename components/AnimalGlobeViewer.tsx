'use client';

import '@/app/three-polyfill';
import { useEffect, useRef, useState } from 'react';
import Globe from 'globe.gl';
import * as THREE from 'three';
import type { AnimalPoint } from '@/data/animals';

interface AnimalGlobeViewerProps {
  cameras: AnimalPoint[];
  matchedIds: Set<string>;
  activeCam: AnimalPoint | null;
  onSelectCam: (cam: AnimalPoint) => void;
  onOpenClusterModal: (cams: AnimalPoint[]) => void;
  when: string;
}

const PIN_SVG_PATH =
  'M12 32.2C12 32.2 22.5 19.6 22.5 12.2C22.5 6.1 17.8 1.4 12 1.4C6.2 1.4 1.5 6.1 1.5 12.2C1.5 19.6 12 32.2 12 32.2Z';

const CATEGORY_COLORS: Record<string, string> = {
  penguin: '#3b82f6',
  bear: '#c2703c',
  savanna: '#f5a524',
  bird: '#ec4899',
  ocean: '#06b6d4',
  zoo: '#b06cf0',
  forest: '#22a355',
};

const VERTEX_SHADER = `
  varying vec3 vNormal;
  varying vec2 vUv;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const FRAGMENT_SHADER = `
  #define PI 3.141592653589793
  uniform sampler2D dayTexture;
  uniform sampler2D nightTexture;
  uniform vec2 sunPosition;
  uniform vec2 globeRotation;
  varying vec3 vNormal;
  varying vec2 vUv;

  float toRad(in float a) {
    return a * PI / 180.0;
  }

  vec3 polarToCartesian(in vec2 c) {
    float theta = toRad(90.0 - c.x);
    float phi = toRad(90.0 - c.y);
    return vec3(
      sin(phi) * cos(theta),
      cos(phi),
      sin(phi) * sin(theta)
    );
  }

  void main() {
    float invLon = toRad(globeRotation.x);
    float invLat = -toRad(globeRotation.y);
    mat3 rotX = mat3(
      1, 0, 0,
      0, cos(invLat), -sin(invLat),
      0, sin(invLat), cos(invLat)
    );
    mat3 rotY = mat3(
      cos(invLon), 0, sin(invLon),
      0, 1, 0,
      -sin(invLon), 0, cos(invLon)
    );
    vec3 sunDirection = rotX * rotY * polarToCartesian(sunPosition);

    float intensity = dot(normalize(vNormal), normalize(sunDirection));
    float blend = smoothstep(-0.180, -0.030, intensity);

    vec4 dayColor = texture2D(dayTexture, vUv) * 0.95;
    vec4 nightColor = texture2D(nightTexture, vUv);
    gl_FragColor = mix(nightColor, dayColor, blend);
    gl_FragColor.a = 1.0;
  }
`;

export default function AnimalGlobeViewer({
  cameras,
  matchedIds,
  activeCam,
  onSelectCam,
  onOpenClusterModal,
  when,
}: AnimalGlobeViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<any>(null);
  const shaderMatRef = useRef<THREE.ShaderMaterial | null>(null);

  const activeCamRef = useRef<AnimalPoint | null>(activeCam);
  activeCamRef.current = activeCam;

  const matchedIdsRef = useRef<Set<string>>(matchedIds);
  matchedIdsRef.current = matchedIds;

  const onOpenClusterModalRef = useRef(onOpenClusterModal);
  onOpenClusterModalRef.current = onOpenClusterModal;

  // Initialize Globe
  useEffect(() => {
    if (!containerRef.current) return;

    const globe = (Globe as any)()(containerRef.current, {
      rendererConfig: { alpha: true, antialias: true },
    })
      .backgroundColor('rgba(0,0,0,0)')
      .showAtmosphere(true)
      .atmosphereColor('#4fb3e8')
      .atmosphereAltitude(0.18);

    // Load GeoJSON for country outlines
    fetch('/geo/countries-110m-v2.geo.json')
      .then((res) => res.json())
      .then((geoData) => {
        globe
          .polygonsData(geoData.features)
          .polygonCapColor(() => 'rgba(30, 58, 95, 0.14)')
          .polygonSideColor(() => 'rgba(0, 0, 0, 0)')
          .polygonStrokeColor(() => '#2e6c87')
          .polygonAltitude(0.004);
      })
      .catch((err) => console.warn('Could not load local GeoJSON:', err));

    // Load Earth Day & Night Textures with Custom Shader
    const textureLoader = new THREE.TextureLoader();
    Promise.all([
      textureLoader.loadAsync('/textures/earth-day-v2.jpg'),
      textureLoader.loadAsync('/textures/earth-night-v2.jpg'),
    ]).then(([dayTex, nightTex]) => {
      const shaderMaterial = new THREE.ShaderMaterial({
        uniforms: {
          dayTexture: { value: dayTex },
          nightTexture: { value: nightTex },
          sunPosition: { value: new THREE.Vector2(0, 20) },
          globeRotation: { value: new THREE.Vector2(0, 0) },
        },
        vertexShader: VERTEX_SHADER,
        fragmentShader: FRAGMENT_SHADER,
      });
      shaderMatRef.current = shaderMaterial;
      globe.globeMaterial(shaderMaterial);

      globe.onZoom(({ lng, lat }: { lng: number; lat: number }) => {
        shaderMaterial.uniforms.globeRotation.value.set(lng, lat);
      });
    });

    // Setup Custom Map Pin HTML Elements
    globe
      .htmlElementsData([])
      .htmlLat('lat')
      .htmlLng('lng')
      .htmlAltitude(0.012)
      .htmlElement((d: any) => {
        const item = d;
        const el = document.createElement('div');
        el.style.transform = 'translate(-50%, -100%)';
        el.style.pointerEvents = 'auto';

        if (item.kind === 'cluster') {
          // Render Cluster Bubble (Numbers: 4, 2, 8...)
          const count = item.count;
          const r = Math.min(24, 12 + count);
          const size = r * 2;
          const bg = item.hasMatched ? '#1e3a5f' : '#4a6472';
          const textFill = '#ffffff';

          el.style.transform = 'translate(-50%, -50%)';
          el.innerHTML = `
            <div style="cursor: pointer;" title="點擊檢視 ${count} 個現場" class="group hover:scale-110 transition-transform">
              <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
                <circle cx="${r}" cy="${r}" r="${r}" fill="${bg}" opacity="0.88" stroke="#ffffff" stroke-width="2" />
                <text x="${r}" y="${r}" text-anchor="middle" dominant-baseline="central"
                  font-family="system-ui, sans-serif" font-size="${Math.round(r * 0.9)}" font-weight="700" fill="${textFill}">
                  ${count}
                </text>
              </svg>
            </div>
          `;

          // CRITICAL: Clicking cluster opens the Animal List Modal!
          el.addEventListener('click', (e) => {
            e.stopPropagation();
            onOpenClusterModalRef.current(item.members);
          });
          return el;
        }

        // Single Camera Pin
        const cam = item.cam as AnimalPoint;
        const isActive = activeCamRef.current?.id === cam.id;
        const isMatched = matchedIdsRef.current.has(cam.id);
        const color = isMatched ? CATEGORY_COLORS[cam.category] || '#3b82f6' : '#4a6472';
        const height = isActive ? 42 : isMatched ? 32 : 22;
        const width = Math.round(0.72 * height);

        const activeGlow = isActive
          ? `<path d="${PIN_SVG_PATH}" fill="none" stroke="#05090b" stroke-width="7" stroke-linejoin="round" opacity="0.45"/>
             <path d="${PIN_SVG_PATH}" fill="none" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round"/>`
          : '';

        el.innerHTML = `
          <div class="relative group cursor-pointer transition-transform duration-200 hover:scale-125">
            <svg width="${width}" height="${height}" viewBox="0 0 24 33" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:block;overflow:visible">
              ${activeGlow}
              <path d="${PIN_SVG_PATH}" fill="${color}" stroke="${color}" stroke-width="1.5" stroke-linejoin="round"/>
              <circle cx="12" cy="12" r="3.6" fill="#ffffff" fill-opacity="${isActive ? '1' : '0.8'}"/>
            </svg>
            <div class="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 hidden group-hover:block whitespace-nowrap rounded-md border border-[#1e2f36] bg-[#0a1114]/95 px-2.5 py-1 text-2xs text-[#e4ecee] shadow-xl backdrop-blur-md z-30">
              <span class="font-bold text-[#4fa8d8]">${cam.city}</span> · ${cam.animals.join('、')}
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

    // Initial View
    globe.pointOfView({ lat: 25, lng: -95, altitude: 2.2 }, 1200);

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

  // Update HTML Elements with Clustering
  useEffect(() => {
    if (!globeRef.current) return;

    const active = activeCam;
    const elements: any[] = [];
    const clusters: Array<{ lat: number; lng: number; cams: AnimalPoint[] }> = [];

    cameras.forEach((cam) => {
      if (active && cam.id === active.id) {
        elements.push({ kind: 'cam', lat: cam.lat, lng: cam.lng, cam });
        return;
      }

      // Check if close to an existing cluster
      let foundCluster = false;
      for (const cl of clusters) {
        const dLat = Math.abs(cl.lat - cam.lat);
        const dLng = Math.abs(cl.lng - cam.lng);
        if (dLat < 7.5 && dLng < 7.5) {
          cl.cams.push(cam);
          cl.lat = (cl.lat + cam.lat) / 2;
          cl.lng = (cl.lng + cam.lng) / 2;
          foundCluster = true;
          break;
        }
      }

      if (!foundCluster) {
        clusters.push({ lat: cam.lat, lng: cam.lng, cams: [cam] });
      }
    });

    clusters.forEach((cl) => {
      if (cl.cams.length === 1) {
        elements.push({
          kind: 'cam',
          lat: cl.cams[0].lat,
          lng: cl.cams[0].lng,
          cam: cl.cams[0],
        });
      } else {
        const hasMatched = cl.cams.some((c) => matchedIds.has(c.id));
        elements.push({
          kind: 'cluster',
          lat: cl.lat,
          lng: cl.lng,
          count: cl.cams.length,
          members: cl.cams,
          hasMatched,
        });
      }
    });

    globeRef.current.htmlElementsData(elements);
  }, [cameras, matchedIds, activeCam]);

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
            `rgba(59, 130, 246, ${Math.max(0, (1 - t) * 0.95)})`
        );

      globeRef.current.pointOfView(
        { lat: activeCam.lat, lng: activeCam.lng, altitude: 1.6 },
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
