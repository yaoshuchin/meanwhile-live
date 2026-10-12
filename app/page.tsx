'use client';

import { useState, useEffect, useMemo, useCallback, Suspense } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Languages } from 'lucide-react';
import CamModal from '@/components/CamModal';
import ControlsBar from '@/components/ControlsBar';
import AmbientMixer from '@/components/AmbientMixer';
import TimeTable from '@/components/TimeTable';
import HelpModal from '@/components/HelpModal';
import SuggestModal from '@/components/SuggestModal';
import CoffeeModal from '@/components/CoffeeModal';
import { useLanguage, type Language } from '@/context/LanguageContext';
import { computeCityConditions } from '@/lib/client-conditions';
import { withBasePath } from '@/lib/base-path';
import type { CamPoint } from '@/components/GlobeViewer';

// Load GlobeViewer strictly on client side
const GlobeViewer = dynamic(() => import('@/components/GlobeViewer'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center bg-[#05090b] text-[#93a6ac] text-sm">
      正在加載 3D 地球儀與衛星氣象資料…
    </div>
  ),
});

function HomeContent() {
  const { lang, setLang, t } = useLanguage();
  const searchParams = useSearchParams();
  const queryCamId = searchParams.get('cam');

  const [cameras, setCameras] = useState<CamPoint[]>([]);
  const [activeMood, setActiveMood] = useState<string>('all');
  const [activeCam, setActiveCam] = useState<CamPoint | null>(null);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [onlyFavorites, setOnlyFavorites] = useState<boolean>(false);
  const [liveOnly, setLiveOnly] = useState<boolean>(false);

  // Modals & Drawers
  const [ambientOpen, setAmbientOpen] = useState<boolean>(false);
  const [timeTableOpen, setTimeTableOpen] = useState<boolean>(false);
  const [helpOpen, setHelpOpen] = useState<boolean>(false);
  const [suggestOpen, setSuggestOpen] = useState<boolean>(false);
  const [coffeeOpen, setCoffeeOpen] = useState<boolean>(false);
  const [loadingWeather, setLoadingWeather] = useState<boolean>(true);

  // Focus Timer States
  const [timerMinutes, setTimerMinutes] = useState<number>(25);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  // Load Favorites from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('meanwhile_favs');
      if (stored) {
        setFavorites(new Set(JSON.parse(stored)));
      }
    } catch {}
  }, []);

  const toggleFavorite = useCallback((id: string) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try {
        localStorage.setItem('meanwhile_favs', JSON.stringify([...next]));
      } catch {}
      return next;
    });
  }, []);

  // Fetch Conditions & Cameras
  useEffect(() => {
    // Immediate offline-first computation so globe appears without delay
    const initialCams = computeCityConditions();
    setCameras(initialCams);
    if (queryCamId) {
      const found = initialCams.find((c: CamPoint) => c.id === queryCamId);
      if (found) setActiveCam(found);
    }

    setLoadingWeather(true);
    fetch(withBasePath('/api/conditions'))
      .then((res) => {
        if (!res.ok) throw new Error('API unavailable on static host');
        return res.json();
      })
      .then((data) => {
        if (data.cams) {
          setCameras(data.cams);
          if (queryCamId) {
            const found = data.cams.find((c: CamPoint) => c.id === queryCamId);
            if (found) setActiveCam(found);
          }
        }
      })
      .catch(() => {
        // Static export mode: initialCams already applied cleanly
      })
      .finally(() => setLoadingWeather(false));
  }, [queryCamId]);

  // Keyboard shortcut: 'F' for fullscreen
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        e.target instanceof HTMLSelectElement
      )
        return;

      if (e.key === 'f' || e.key === 'F') {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(() => {});
        } else {
          document.exitFullscreen().catch(() => {});
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Focus Timer Interval
  useEffect(() => {
    if (!isTimerRunning || timeLeft === null) return;
    if (timeLeft <= 0) {
      setIsTimerRunning(false);
      alert('🎉 專注時間結束！休息一下吧。');
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

  // Filtered Cameras
  const filteredCameras = useMemo(() => {
    return cameras.filter((cam) => {
      if (onlyFavorites && !favorites.has(cam.id)) return false;
      if (liveOnly && cam.hasKnownLive === false) return false;
      if (activeMood === 'all') return true;
      return cam.condition === activeMood;
    });
  }, [cameras, activeMood, onlyFavorites, favorites, liveOnly]);

  // Counts for each mood tab
  const counts = useMemo(() => {
    const res: Record<string, number> = { all: cameras.length };
    cameras.forEach((c) => {
      res[c.condition] = (res[c.condition] || 0) + 1;
    });
    return res;
  }, [cameras]);

  // Random Pick (Shuffle)
  const handleRandomPick = () => {
    const pool = filteredCameras.length > 0 ? filteredCameras : cameras;
    if (pool.length === 0) return;
    const random = pool[Math.floor(Math.random() * pool.length)];
    setActiveCam(random);
  };

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-[#05090b]">
      {/* Background Star Texture */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center mix-blend-screen opacity-90"
        style={{ backgroundImage: `url('/textures/night-sky-v2.jpg')` }}
      />

      {/* Top Header */}
      <header className="pointer-events-none absolute inset-x-0 top-0 z-20 flex flex-col gap-1 p-5 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-xl font-bold tracking-tight text-[#e4ecee] sm:text-2xl drop-shadow-md">
              {t('app.title')}
            </h1>
            <p className="mt-1 max-w-xl text-xs sm:text-sm text-[#93a6ac] leading-relaxed">
              {loadingWeather ? t('app.loading_weather') : t('app.tagline')}
            </p>
          </div>

          {/* Navigation & Language */}
          <div className="pointer-events-auto flex items-center gap-2">
            <nav className="hidden items-center gap-2 sm:flex">
              <Link
                href="/animalia?when=day&animal"
                className="group inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/55 px-3 py-1 text-2xs font-medium text-white shadow-sm backdrop-blur-md transition-all hover:border-white/50 hover:bg-black/80"
              >
                <span>{t('nav.animal')}</span>
                <span className="opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </Link>
              <Link
                href="/vehicula"
                className="group inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/55 px-3 py-1 text-2xs font-medium text-white shadow-sm backdrop-blur-md transition-all hover:border-white/50 hover:bg-black/80"
              >
                <span>{t('nav.vehicle')}</span>
                <span className="opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </Link>
            </nav>

            <div className="relative flex items-center">
              <Languages
                size={13}
                className="pointer-events-none absolute left-2.5 z-10 text-white"
              />
              <select
                aria-label="語言"
                className="cursor-pointer appearance-none rounded-full border border-white/20 bg-black/55 py-1 pl-7 pr-3 text-2xs font-medium text-white shadow-sm backdrop-blur-md transition-all hover:border-white/50 hover:bg-black/80 outline-none"
                value={lang}
                onChange={(e) => setLang(e.target.value as Language)}
              >
                <option value="zh-Hant" className="bg-[#0a1114] text-white">
                  繁體中文
                </option>
                <option value="en" className="bg-[#0a1114] text-white">
                  English
                </option>
                <option value="ja" className="bg-[#0a1114] text-white">
                  日本語
                </option>
              </select>
            </div>
          </div>
        </div>
      </header>

      {/* 3D Interactive Globe */}
      <GlobeViewer
        cameras={filteredCameras}
        activeCam={activeCam}
        onSelectCam={(cam) => setActiveCam(cam)}
      />

      {/* Floating Timetable on Left */}
      <TimeTable
        isOpen={timeTableOpen}
        onClose={() => setTimeTableOpen(false)}
        cameras={filteredCameras}
        activeCam={activeCam}
        onSelectCam={(cam) => setActiveCam(cam)}
      />

      {/* Live Stream Dialog */}
      <CamModal
        cam={activeCam}
        onClose={() => setActiveCam(null)}
        isFavorite={activeCam ? favorites.has(activeCam.id) : false}
        onToggleFavorite={toggleFavorite}
      />

      {/* Ambient Music Companion Modal */}
      <AmbientMixer
        isOpen={ambientOpen}
        onClose={() => setAmbientOpen(false)}
      />

      {/* Help Modal */}
      <HelpModal
        isOpen={helpOpen}
        onClose={() => setHelpOpen(false)}
        cameraCount={cameras.length}
      />

      {/* Suggest Modal */}
      <SuggestModal
        isOpen={suggestOpen}
        onClose={() => setSuggestOpen(false)}
      />

      {/* Coffee Modal */}
      <CoffeeModal
        isOpen={coffeeOpen}
        onClose={() => setCoffeeOpen(false)}
      />

      {/* Bottom Controls Bar */}
      <ControlsBar
        activeMood={activeMood}
        onSelectMood={(mood) => {
          setActiveMood(mood);
          setOnlyFavorites(false);
        }}
        counts={counts}
        onlyFavorites={onlyFavorites}
        onToggleOnlyFavorites={() => setOnlyFavorites(!onlyFavorites)}
        favoritesCount={favorites.size}
        liveOnly={liveOnly}
        onToggleLiveOnly={() => setLiveOnly(!liveOnly)}
        onRandomPick={handleRandomPick}
        onOpenAmbient={() => setAmbientOpen(true)}
        onToggleTimeTable={() => setTimeTableOpen(!timeTableOpen)}
        isTimeTableOpen={timeTableOpen}
        onOpenSuggest={() => setSuggestOpen(true)}
        onOpenHelp={() => setHelpOpen(true)}
        onOpenCoffee={() => setCoffeeOpen(true)}
        timerMinutes={timerMinutes}
        onTimerChange={(m) => setTimerMinutes(m)}
        isTimerRunning={isTimerRunning}
        onToggleTimer={handleToggleTimer}
        formattedTimeLeft={formattedTimeLeft}
      />

      {/* Footer Info */}
      <footer className="pointer-events-none absolute bottom-3 right-4 z-10 hidden items-center gap-3 lg:flex text-2xs text-[#93a6ac]">
        <p className="inline-flex items-center gap-2 rounded-full border border-[#1e2f36] bg-[#0a1114]/70 px-3 py-1 shadow-lg backdrop-blur-md">
          <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>{t('footer.welcome')}</span>
        </p>
        <p>{t('footer.rights')}</p>
        <a
          href="https://meanwhile-cam.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-[#0a1114]/80 px-3 py-1 text-2xs text-amber-300 shadow-md backdrop-blur-md transition-all hover:bg-white/10 hover:text-amber-200"
        >
          <span>{t('btn.ref')}</span>
          <span className="text-3xs opacity-80">↗</span>
        </a>
      </footer>
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="h-screen w-screen bg-[#05090b]" />}>
      <HomeContent />
    </Suspense>
  );
}
