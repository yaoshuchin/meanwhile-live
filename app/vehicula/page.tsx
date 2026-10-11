'use client';

import { useState, useEffect, useMemo, Suspense } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Languages, ChevronLeft, ChevronRight, Moon, Sun, Coffee } from 'lucide-react';
import VehicleCamModal from '@/components/VehicleCamModal';
import VehicleClusterModal from '@/components/VehicleClusterModal';
import VehicleControlsBar from '@/components/VehicleControlsBar';
import AmbientMixer from '@/components/AmbientMixer';
import HelpModal from '@/components/HelpModal';
import CoffeeModal from '@/components/CoffeeModal';
import { computeVehicleConditions } from '@/lib/client-conditions';
import { withBasePath } from '@/lib/base-path';
import type { VehiclePoint } from '@/data/vehicles';

const VehicleGlobeViewer = dynamic(
  () => import('@/components/VehicleGlobeViewer'),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 flex items-center justify-center bg-[#cde4f7] text-slate-600 text-sm">
        正在加載全球交通 3D 地球儀…
      </div>
    ),
  }
);

function VehiculaContent() {
  const searchParams = useSearchParams();
  const rawType = searchParams.get('type');
  const queryType = rawType && rawType !== '' ? rawType : 'all';
  const queryWhen = searchParams.get('when') || 'all';

  const [cameras, setCameras] = useState<VehiclePoint[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>(queryType);
  const [activeWhen, setActiveWhen] = useState<string>(queryWhen);
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [activeCam, setActiveCam] = useState<VehiclePoint | null>(null);
  const [clusterCams, setClusterCams] = useState<VehiclePoint[] | null>(null);

  // Modals
  const [ambientOpen, setAmbientOpen] = useState(false);
  const [timeTableOpen, setTimeTableOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [coffeeOpen, setCoffeeOpen] = useState(false);

  // Focus Timer
  const [timerMinutes, setTimerMinutes] = useState(25);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Fetch Vehicle Data
  useEffect(() => {
    const initialCams = computeVehicleConditions();
    setCameras(initialCams);
    if (queryType && queryType !== 'all') {
      const match = initialCams.find(
        (c: VehiclePoint) => c.category === queryType
      );
      if (match) setActiveCam(match);
    }

    fetch(withBasePath('/api/vehicle-conditions'))
      .then((res) => {
        if (!res.ok) throw new Error('API unavailable on static host');
        return res.json();
      })
      .then((data) => {
        if (data.cams) {
          setCameras(data.cams);
          if (queryType && queryType !== 'all') {
            const match = data.cams.find(
              (c: VehiclePoint) => c.category === queryType
            );
            if (match) setActiveCam(match);
          }
        }
      })
      .catch(() => {
        // Static export mode: initialCams already applied cleanly
      });
  }, [queryType]);

  // Focus Timer countdown
  useEffect(() => {
    if (!isTimerRunning || timeLeft === null) return;
    if (timeLeft <= 0) {
      setIsTimerRunning(false);
      alert('🎉 專注時間結束！');
      return;
    }
    const interval = setInterval(() => {
      setTimeLeft((t) => (t !== null && t > 0 ? t - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [isTimerRunning, timeLeft]);

  const handleToggleTimer = () => {
    if (isTimerRunning) {
      setIsTimerRunning(false);
      setTimeLeft(null);
    } else {
      if (timerMinutes === 0) {
        setIsTimerRunning(true);
        setTimeLeft(null);
      } else {
        setTimeLeft(timerMinutes * 60);
        setIsTimerRunning(true);
      }
    }
  };

  const formattedTimeLeft = useMemo(() => {
    if (timerMinutes === 0 && isTimerRunning) return '陪讀中';
    if (timeLeft === null) return '25:00';
    const m = Math.floor(timeLeft / 60);
    const s = timeLeft % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }, [timeLeft, timerMinutes, isTimerRunning]);

  // Filter Cameras
  const filteredCameras = useMemo(() => {
    return cameras.filter((cam) => {
      if (activeCategory !== 'all' && cam.category !== activeCategory) {
        return false;
      }
      if (activeWhen === 'day' && cam.condition !== 'day') return false;
      if (activeWhen === 'night' && cam.condition !== 'night') return false;
      if (activeWhen === 'golden' && cam.condition !== 'golden') return false;
      if (searchKeyword.trim()) {
        const kw = searchKeyword.toLowerCase();
        const cityMatch = cam.city.toLowerCase().includes(kw);
        const subjMatch = cam.subjects.some((s) =>
          s.toLowerCase().includes(kw)
        );
        if (!cityMatch && !subjMatch) return false;
      }
      return true;
    });
  }, [cameras, activeCategory, activeWhen, searchKeyword]);

  const matchedIds = useMemo(() => {
    return new Set(filteredCameras.map((c) => c.id));
  }, [filteredCameras]);

  // Category counts
  const categoryCounts = useMemo(() => {
    const res: Record<string, number> = { all: cameras.length };
    cameras.forEach((c) => {
      res[c.category] = (res[c.category] || 0) + 1;
    });
    return res;
  }, [cameras]);

  // When counts
  const whenCounts = useMemo(() => {
    const res: Record<string, number> = { all: cameras.length };
    cameras.forEach((c) => {
      res[c.condition || 'day'] = (res[c.condition || 'day'] || 0) + 1;
    });
    return res;
  }, [cameras]);

  const handleRandomPick = () => {
    const pool = filteredCameras.length > 0 ? filteredCameras : cameras;
    if (pool.length === 0) return;
    const random = pool[Math.floor(Math.random() * pool.length)];
    setActiveCam(random);
  };

  // Sorted list for Time Table Drawer matching screenshot
  const sortedCameras = useMemo(() => {
    return [...filteredCameras].sort((a, b) =>
      (a.localTime || '00:00').localeCompare(b.localTime || '00:00')
    );
  }, [filteredCameras]);

  const currentIdx = activeCam
    ? sortedCameras.findIndex((c) => c.id === activeCam.id)
    : -1;

  const handlePrevCam = () => {
    if (sortedCameras.length === 0) return;
    const idx = currentIdx <= 0 ? sortedCameras.length - 1 : currentIdx - 1;
    setActiveCam(sortedCameras[idx]);
  };

  const handleNextCam = () => {
    if (sortedCameras.length === 0) return;
    const idx =
      currentIdx === -1 || currentIdx >= sortedCameras.length - 1
        ? 0
        : currentIdx + 1;
    setActiveCam(sortedCameras[idx]);
  };

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-[#cde4f7]">
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-[#bfe0f8] via-[#d5ebfa] to-[#e8f4fc]" />

      {/* Top Header */}
      <header className="pointer-events-none absolute inset-x-0 top-0 z-20 flex flex-col gap-1 p-5 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <h1 className="text-xl font-bold tracking-tight text-[#162a38] sm:text-2xl drop-shadow-sm">
              全球交通現場 · Vehicula Live
            </h1>
            <p className="text-xs sm:text-sm text-[#46657a]">
              選一個現場，看看此刻誰正在起飛、進站或過閘。
            </p>

            <div className="flex items-center gap-1.5 text-xs text-[#52778f]">
              <span>{cameras.length} 個現場</span>
              <span>·</span>
              <span>
                此刻符合條件的有{' '}
                <strong className="text-[#162a38]">
                  {filteredCameras.length} 個
                </strong>
              </span>
            </div>

            {/* Left-side Floating Timetable list as shown in the screenshot */}
            <div className="pointer-events-auto mt-2 flex flex-col w-64 rounded-2xl border border-white/60 bg-white/85 shadow-lg backdrop-blur-md overflow-hidden text-2xs text-[#162a38]">
              {/* Header */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-slate-200/60">
                <span className="font-semibold text-slate-700">依當地時間</span>
                <div className="flex items-center gap-1 text-[#52778f]">
                  <span>← → 換現場</span>
                  <button
                    onClick={handlePrevCam}
                    className="rounded p-0.5 hover:bg-slate-200"
                  >
                    <ChevronLeft size={13} />
                  </button>
                  <button
                    onClick={handleNextCam}
                    className="rounded p-0.5 hover:bg-slate-200"
                  >
                    <ChevronRight size={13} />
                  </button>
                </div>
              </div>

              {/* Scrollable Items */}
              <div className="max-h-36 overflow-y-auto space-y-1 p-1.5 custom-scrollbar">
                {sortedCameras.slice(0, 15).map((cam) => {
                  const isSelected = activeCam?.id === cam.id;
                  const isNight = cam.condition === 'night';
                  return (
                    <button
                      key={cam.id}
                      onClick={() => setActiveCam(cam)}
                      className={`flex w-full items-center justify-between rounded-lg px-2 py-1.5 text-left transition-all ${
                        isSelected
                          ? 'bg-[#d8eaf5] text-[#162a38] font-semibold'
                          : 'hover:bg-slate-100 text-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 truncate">
                        <span className="font-mono text-3xs tabular-nums text-slate-500">
                          {cam.localTime}
                        </span>
                        <span>{isNight ? '🌙' : '☁️'}</span>
                        <span className="truncate">{cam.city}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Header Navigation */}
          <div className="pointer-events-auto flex items-center gap-2">
            <Link
              href="/"
              className="group inline-flex items-center gap-1.5 rounded-full border border-slate-700/30 bg-[#1e2f38]/90 px-3 py-1.5 text-2xs font-medium text-white shadow-md backdrop-blur-md transition-all hover:bg-[#16242c]"
            >
              <img
                src="/icons/meanwhile.svg"
                alt=""
                className="size-3.5 rounded"
              />
              <span>全球城市現場</span>
              <span className="text-3xs opacity-70">↗</span>
            </Link>

            <Link
              href="/animalia?when=day&animal"
              className="group inline-flex items-center gap-1.5 rounded-full border border-slate-700/30 bg-[#1e2f38]/90 px-3 py-1.5 text-2xs font-medium text-white shadow-md backdrop-blur-md transition-all hover:bg-[#16242c]"
            >
              <span>🐾</span>
              <span>全球動物現場</span>
              <span className="text-3xs opacity-70">↗</span>
            </Link>

            <div className="relative flex items-center">
              <Languages
                size={13}
                className="pointer-events-none absolute left-2.5 z-10 text-white"
              />
              <select
                aria-label="語言"
                className="cursor-pointer appearance-none rounded-full border border-slate-700/30 bg-[#1e2f38]/90 py-1.5 pl-7 pr-3 text-2xs font-medium text-white shadow-md backdrop-blur-md outline-none"
                defaultValue="zh-Hant"
              >
                <option value="zh-Hant" className="bg-[#1e2f38] text-white">
                  繁體中文
                </option>
                <option value="en" className="bg-[#1e2f38] text-white">
                  English
                </option>
                <option value="ja" className="bg-[#1e2f38] text-white">
                  日本語
                </option>
              </select>
            </div>
          </div>
        </div>
      </header>

      {/* 3D Realistic Vehicle Globe */}
      <VehicleGlobeViewer
        cameras={cameras}
        matchedIds={matchedIds}
        activeCam={activeCam}
        onSelectCam={(cam) => setActiveCam(cam)}
        onOpenClusterModal={(cams) => setClusterCams(cams)}
        when={activeWhen}
      />

      {/* Cluster Modal (e.g. 4, 6, 3, 5, 2...) */}
      <VehicleClusterModal
        cams={clusterCams}
        onClose={() => setClusterCams(null)}
        onSelectCam={(cam) => setActiveCam(cam)}
      />

      {/* Video Modal */}
      <VehicleCamModal
        cam={activeCam}
        onClose={() => setActiveCam(null)}
      />

      {/* Modals */}
      <AmbientMixer
        isOpen={ambientOpen}
        onClose={() => setAmbientOpen(false)}
      />

      <HelpModal
        isOpen={helpOpen}
        onClose={() => setHelpOpen(false)}
        cameraCount={cameras.length}
      />

      <CoffeeModal
        isOpen={coffeeOpen}
        onClose={() => setCoffeeOpen(false)}
      />

      {/* Bottom Controls Bar */}
      <VehicleControlsBar
        activeCategory={activeCategory}
        onSelectCategory={(cat) => setActiveCategory(cat)}
        activeWhen={activeWhen}
        onSelectWhen={(w) => setActiveWhen(w)}
        counts={categoryCounts}
        whenCounts={whenCounts}
        searchKeyword={searchKeyword}
        onSearchChange={(kw) => setSearchKeyword(kw)}
        onRandomPick={handleRandomPick}
        onOpenAmbient={() => setAmbientOpen(true)}
        onToggleTimeTable={() => setTimeTableOpen(!timeTableOpen)}
        isTimeTableOpen={timeTableOpen}
        onOpenHelp={() => setHelpOpen(true)}
        onOpenCoffee={() => setCoffeeOpen(true)}
        timerMinutes={timerMinutes}
        onTimerChange={(m) => setTimerMinutes(m)}
        isTimerRunning={isTimerRunning}
        onToggleTimer={handleToggleTimer}
        formattedTimeLeft={formattedTimeLeft}
      />

      {/* Footer Info Matching Screenshot */}
      <footer className="pointer-events-none absolute bottom-3 right-4 z-20 hidden items-center gap-4 lg:flex text-2xs text-[#46657a]">
        <div className="pointer-events-auto inline-flex items-center gap-1.5 rounded-full border border-white/60 bg-white/80 px-3 py-1 shadow-sm backdrop-blur-md">
          <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>累積造訪次數：1,601 次</span>
        </div>
        <p>© 2026 Studio0808 智造實驗室 · All rights reserved.</p>
        <button
          onClick={() => setCoffeeOpen(true)}
          className="pointer-events-auto inline-flex items-center gap-1.5 rounded-full border border-white/60 bg-white/80 px-3 py-1 text-2xs text-slate-700 shadow-sm backdrop-blur-md hover:bg-white"
        >
          <Coffee size={13} className="text-amber-500" />
          <span>請我喝杯咖啡</span>
        </button>
      </footer>
    </main>
  );
}

export default function VehiculaPage() {
  return (
    <Suspense fallback={<div className="h-screen w-screen bg-[#cde4f7]" />}>
      <VehiculaContent />
    </Suspense>
  );
}
