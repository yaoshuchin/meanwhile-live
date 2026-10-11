'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Timer,
  LayoutList,
  Heart,
  Shuffle,
  WandSparkles,
  Maximize2,
  ChevronDown,
  ChevronUp,
  ListOrdered,
  Radio,
  MapPinPlus,
  HelpCircle,
  Coffee,
} from 'lucide-react';

export const MOOD_TABS = [
  { id: 'all', label: '全部點位', color: '#7d99a3' },
  { id: 'clear', label: '陽光普照', color: '#f59e0b' },
  { id: 'overcast', label: '陰天', color: '#94a3b8' },
  { id: 'raining', label: '正在下雨', color: '#38bdf8' },
  { id: 'snowing', label: '正在下雪', color: '#e0f2fe' },
  { id: 'golden', label: '日出日落', color: '#fb923c' },
  { id: 'night', label: '此刻深夜', color: '#818cf8' },
];

interface ControlsBarProps {
  activeMood: string;
  onSelectMood: (mood: string) => void;
  counts: Record<string, number>;
  onlyFavorites: boolean;
  onToggleOnlyFavorites: () => void;
  favoritesCount: number;
  liveOnly: boolean;
  onToggleLiveOnly: () => void;
  onRandomPick: () => void;
  onOpenAmbient: () => void;
  onToggleTimeTable: () => void;
  isTimeTableOpen: boolean;
  onOpenSuggest: () => void;
  onOpenHelp: () => void;
  onOpenCoffee: () => void;
  timerMinutes: number;
  onTimerChange: (min: number) => void;
  isTimerRunning: boolean;
  onToggleTimer: () => void;
  formattedTimeLeft: string;
}

export default function ControlsBar({
  activeMood,
  onSelectMood,
  counts,
  onlyFavorites,
  onToggleOnlyFavorites,
  favoritesCount,
  liveOnly,
  onToggleLiveOnly,
  onRandomPick,
  onOpenAmbient,
  onToggleTimeTable,
  isTimeTableOpen,
  onOpenSuggest,
  onOpenHelp,
  onOpenCoffee,
  timerMinutes,
  onTimerChange,
  isTimerRunning,
  onToggleTimer,
  formattedTimeLeft,
}: ControlsBarProps) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 flex flex-col items-center gap-2 p-3 sm:p-5 transition-all duration-300">
      {!collapsed && (
        <div className="flex flex-col items-center gap-2 max-w-full">
          {/* Row 1: Mood Filter Tabs */}
          <nav
            aria-label="條件篩選"
            className="pointer-events-auto flex flex-wrap justify-center gap-1 rounded-xl border border-[#1e2f36] bg-[#0a1114]/85 p-1.5 shadow-lg shadow-black/25 backdrop-blur-md"
          >
            {MOOD_TABS.map((tab) => {
              const active = activeMood === tab.id && !onlyFavorites;
              const count = counts[tab.id] ?? 0;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => onSelectMood(tab.id)}
                  className={`group flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4fa8d8] ${
                    active
                      ? 'bg-[#1e343d] text-[#e4ecee] font-semibold'
                      : 'text-[#93a6ac] hover:bg-[#152228] hover:text-[#e4ecee]'
                  }`}
                >
                  <span
                    className="h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: tab.color }}
                  />
                  <span className="text-2xs font-medium">{tab.label}</span>
                  <span className="font-mono text-2xs tabular-nums opacity-60">
                    {count}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Row 2: Pomodoro Focus Timer Card */}
          <div className="pointer-events-auto flex items-center gap-2 rounded-xl border border-[#1e2f36] bg-[#0a1114]/85 p-1.5 px-3 shadow-lg shadow-black/25 backdrop-blur-md">
            {isTimerRunning ? (
              <span className="font-mono text-xs font-bold text-emerald-400 px-1">
                ⏱ {formattedTimeLeft}
              </span>
            ) : (
              <select
                value={timerMinutes}
                onChange={(e) => onTimerChange(Number(e.target.value))}
                className="cursor-pointer rounded bg-transparent px-1 py-1 text-2xs text-[#e4ecee] transition-colors hover:bg-[#152228] outline-none"
              >
                <option value={15} className="bg-[#0a1114]">15 分</option>
                <option value={25} className="bg-[#0a1114]">25 分</option>
                <option value={45} className="bg-[#0a1114]">45 分</option>
                <option value={60} className="bg-[#0a1114]">60 分</option>
                <option value={0} className="bg-[#0a1114]">陪讀 · 不限時</option>
              </select>
            )}

            <button
              type="button"
              onClick={onToggleTimer}
              className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-2xs transition-colors ${
                isTimerRunning
                  ? 'bg-rose-500/20 text-rose-300 hover:bg-rose-500/30 font-medium'
                  : 'bg-[#1e343d] text-[#e4ecee] hover:bg-[#2a4753] font-medium'
              }`}
            >
              <Timer size={14} />
              <span>{isTimerRunning ? '停止' : '開始專注'}</span>
            </button>
          </div>

          {/* Row 3: Action Toolbar (10 Buttons) */}
          <div className="pointer-events-auto flex items-center gap-1 rounded-xl border border-[#1e2f36] bg-[#0a1114]/85 p-1.5 shadow-lg shadow-black/25 backdrop-blur-md">
            {/* 1. Timetable */}
            <button
              type="button"
              onClick={onToggleTimeTable}
              title="時刻表"
              className={`rounded-lg p-2 transition-colors ${
                isTimeTableOpen
                  ? 'bg-[#1e343d] text-[#4fa8d8]'
                  : 'text-[#93a6ac] hover:bg-[#152228] hover:text-[#e4ecee]'
              }`}
            >
              <ListOrdered size={16} />
            </button>

            {/* 2. Places link */}
            <Link
              href="/places"
              title="所有攝影機清單"
              className="rounded-lg p-2 text-[#93a6ac] transition-colors hover:bg-[#152228] hover:text-[#e4ecee]"
            >
              <LayoutList size={16} />
            </Link>

            {/* 3. Live Only Toggle */}
            <button
              type="button"
              onClick={onToggleLiveOnly}
              title={liveOnly ? '只看能播的（已開啟）' : '只看能播的（已關閉）'}
              className={`rounded-lg p-2 transition-colors ${
                liveOnly
                  ? 'bg-[#1e343d] text-emerald-400'
                  : 'text-[#93a6ac] hover:bg-[#152228] hover:text-[#e4ecee]'
              }`}
            >
              <Radio size={16} />
            </button>

            {/* 4. Favorite toggle */}
            <button
              type="button"
              onClick={onToggleOnlyFavorites}
              title={`只看我的最愛（${favoritesCount} 個）`}
              className={`rounded-lg p-2 transition-colors ${
                onlyFavorites
                  ? 'bg-[#1e343d] text-rose-400'
                  : 'text-[#93a6ac] hover:bg-[#152228] hover:text-[#e4ecee]'
              }`}
            >
              <Heart size={16} fill={onlyFavorites ? 'currentColor' : 'none'} />
            </button>

            {/* 5. Shuffle */}
            <button
              type="button"
              onClick={onRandomPick}
              title="帶我去一個地方 (隨機)"
              className="rounded-lg p-2 text-[#93a6ac] transition-colors hover:bg-[#152228] hover:text-[#e4ecee]"
            >
              <Shuffle size={16} />
            </button>

            {/* 6. Ambient Sound */}
            <button
              type="button"
              onClick={onOpenAmbient}
              title="挑一個聲音陪我 (音樂伴讀)"
              className="rounded-lg p-2 text-[#93a6ac] transition-colors hover:bg-[#152228] hover:text-[#e4ecee]"
            >
              <WandSparkles size={16} />
            </button>

            {/* 7. Suggest a place */}
            <button
              type="button"
              onClick={onOpenSuggest}
              title="推薦一個地方"
              className="rounded-lg p-2 text-[#93a6ac] transition-colors hover:bg-[#152228] hover:text-[#e4ecee]"
            >
              <MapPinPlus size={16} />
            </button>

            {/* 8. Fullscreen */}
            <button
              type="button"
              onClick={toggleFullscreen}
              title="沉浸全螢幕 (F)"
              className="rounded-lg p-2 text-[#93a6ac] transition-colors hover:bg-[#152228] hover:text-[#e4ecee]"
            >
              <Maximize2 size={16} />
            </button>

            {/* 9. Help */}
            <button
              type="button"
              onClick={onOpenHelp}
              title="網站介紹與使用說明"
              className="rounded-lg p-2 text-[#93a6ac] transition-colors hover:bg-[#152228] hover:text-[#e4ecee]"
            >
              <HelpCircle size={16} />
            </button>

            {/* 10. Buy Coffee */}
            <button
              type="button"
              onClick={onOpenCoffee}
              title="請我喝杯咖啡"
              className="rounded-lg p-2 text-amber-400/80 transition-colors hover:bg-[#152228] hover:text-amber-300"
            >
              <Coffee size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Collapse / Expand Toggle Button */}
      <button
        type="button"
        onClick={() => setCollapsed(!collapsed)}
        className="pointer-events-auto inline-flex items-center gap-1.5 rounded-lg border border-[#1e2f36] bg-[#0a1114]/85 px-3 py-1 text-2xs text-[#93a6ac] backdrop-blur-md transition-colors hover:bg-[#152228] hover:text-[#e4ecee]"
      >
        {collapsed ? (
          <>
            <ChevronUp size={13} />
            <span>展開設定列</span>
          </>
        ) : (
          <>
            <ChevronDown size={13} />
            <span>收起設定列</span>
          </>
        )}
      </button>
    </div>
  );
}
