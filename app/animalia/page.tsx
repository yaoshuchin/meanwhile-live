'use client';

import { useState, useEffect, useMemo, Suspense } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Languages, ChevronLeft, ChevronRight, X, Heart, Coffee, ExternalLink } from 'lucide-react';
import AnimalCamModal from '@/components/AnimalCamModal';
import ClusterModal from '@/components/ClusterModal';
import AnimalControlsBar from '@/components/AnimalControlsBar';
import AmbientMixer from '@/components/AmbientMixer';
import HelpModal from '@/components/HelpModal';
import CoffeeModal from '@/components/CoffeeModal';
import { computeAnimalConditions } from '@/lib/client-conditions';
import { withBasePath } from '@/lib/base-path';
import type { AnimalPoint } from '@/data/animals';

const AnimalGlobeViewer = dynamic(
  () => import('@/components/AnimalGlobeViewer'),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 flex items-center justify-center bg-[#dbeefe] text-slate-600 text-sm">
        正在加載全球動物 3D 地球儀…
      </div>
    ),
  }
);

function AnimaliaContent() {
  const searchParams = useSearchParams();
  const rawAnimal = searchParams.get('animal');
  const queryAnimal = rawAnimal && rawAnimal !== '' ? rawAnimal : 'all';
  const queryWhen = searchParams.get('when') || 'all';

  const [cameras, setCameras] = useState<AnimalPoint[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>(queryAnimal);
  const [activeWhen, setActiveWhen] = useState<string>(queryWhen);
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [activeCam, setActiveCam] = useState<AnimalPoint | null>(null);
  const [clusterCams, setClusterCams] = useState<AnimalPoint[] | null>(null);

  // Modals & Panels
  const [ambientOpen, setAmbientOpen] = useState(false);
  const [timeTableOpen, setTimeTableOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [coffeeOpen, setCoffeeOpen] = useState(false);

  // Focus Timer
  const [timerMinutes, setTimerMinutes] = useState(25);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Fetch Animal Data
  useEffect(() => {
    const initialCams = computeAnimalConditions();
    setCameras(initialCams);
    if (queryAnimal && queryAnimal !== 'all') {
      const match = initialCams.find(
        (c: AnimalPoint) => c.category === queryAnimal
      );
      if (match) setActiveCam(match);
    }

    fetch(withBasePath('/api/animal-conditions'))
      .then((res) => {
        if (!res.ok) throw new Error('API unavailable on static host');
        return res.json();
      })
      .then((data) => {
        if (data.cams) {
          setCameras(data.cams);
          if (queryAnimal && queryAnimal !== 'all') {
            const match = data.cams.find(
              (c: AnimalPoint) => c.category === queryAnimal
            );
            if (match) setActiveCam(match);
          }
        }
      })
      .catch(() => {
        // Static export mode: initialCams already applied cleanly
      });
  }, [queryAnimal]);

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
      if (activeWhen === 'peak' && !cam.isPeak) return false;
      if (searchKeyword.trim()) {
        const kw = searchKeyword.toLowerCase();
        const cityMatch = cam.city.toLowerCase().includes(kw);
        const animalMatch = cam.animals.some((a) =>
          a.toLowerCase().includes(kw)
        );
        if (!cityMatch && !animalMatch) return false;
      }
      return true;
    });
  }, [cameras, activeCategory, activeWhen, searchKeyword]);

  // Set of matched camera IDs
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
      if (c.isPeak) res['peak'] = (res['peak'] || 0) + 1;
    });
    return res;
  }, [cameras]);

  const handleRandomPick = () => {
    const pool = filteredCameras.length > 0 ? filteredCameras : cameras;
    if (pool.length === 0) return;
    const random = pool[Math.floor(Math.random() * pool.length)];
    setActiveCam(random);
  };

  // Sorted list for Quick Switcher
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
      {/* Sky day/night background gradient */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-[#bfe0f8] via-[#d5ebfa] to-[#e8f4fc]" />

      {/* Top Header */}
      <header className="pointer-events-none absolute inset-x-0 top-0 z-20 flex flex-col gap-1 p-5 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <h1 className="text-xl font-bold tracking-tight text-[#162a38] sm:text-2xl drop-shadow-sm">
              全球動物現場 · Animalia Live
            </h1>
            <p className="text-xs sm:text-sm text-[#46657a]">
              選一個現場，看看牠們此刻在做什麼。
            </p>

            {/* Total and matched summary */}
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

            {/* Active filter pill tag with "Show All" */}
            {(activeCategory !== 'all' || activeWhen !== 'all') && (
              <div className="mt-1 flex items-center gap-1.5 text-2xs">
                <span className="text-[#52778f]">篩選中</span>
                <span className="rounded-full bg-white/80 px-2.5 py-0.5 font-medium text-[#162a38] shadow-sm backdrop-blur-sm">
                  {activeCategory === 'penguin' ? '企鵝' : activeCategory} ·{' '}
                  {activeWhen === 'day' ? '此刻白天' : activeWhen}
                </span>
                <button
                  onClick={() => {
                    setActiveCategory('all');
                    setActiveWhen('all');
                    setSearchKeyword('');
                  }}
                  className="rounded-full bg-[#1e343d] px-2.5 py-0.5 font-medium text-white shadow-sm hover:bg-[#2c4c59] transition-colors"
                >
                  ✕ 顯示全部
                </button>
              </div>
            )}

            {/* Local time switcher dropdown matching screenshot */}
            <div className="pointer-events-auto mt-2 inline-flex items-center gap-3 rounded-2xl border border-white/60 bg-white/80 px-3 py-1.5 shadow-md backdrop-blur-md text-2xs text-[#162a38] w-fit">
              <span>依當地時間</span>
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
          </div>

          {/* Right Header Navigation matching screenshot */}
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
              href="/vehicula"
              className="group inline-flex items-center gap-1.5 rounded-full border border-slate-700/30 bg-[#1e2f38]/90 px-3 py-1.5 text-2xs font-medium text-white shadow-md backdrop-blur-md transition-all hover:bg-[#16242c]"
            >
              <img
                src="/icons/vehicula.svg"
                alt=""
                className="size-3.5 rounded"
              />
              <span>全球交通現場</span>
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

      {/* 3D Realistic Animal Globe */}
      <AnimalGlobeViewer
        cameras={cameras}
        matchedIds={matchedIds}
        activeCam={activeCam}
        onSelectCam={(cam) => setActiveCam(cam)}
        onOpenClusterModal={(cams) => setClusterCams(cams)}
        when={activeWhen}
      />

      {/* Cluster Selection Modal (for numbers: 8, 4, 2, 3...) */}
      <ClusterModal
        cams={clusterCams}
        onClose={() => setClusterCams(null)}
        onSelectCam={(cam) => setActiveCam(cam)}
      />

      {/* Video Modal */}
      <AnimalCamModal
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

      {/* Bottom Animal Controls Bar (White pill cards matching screenshot) */}
      <AnimalControlsBar
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
          <span>累積造訪次數：30,130 次</span>
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

export default function AnimaliaPage() {
  return (
    <Suspense
      fallback={<div className="h-screen w-screen bg-[#cde4f7]" />}
    >
      <AnimaliaContent />
    </Suspense>
  );
}
