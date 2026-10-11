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
  MapPinPlus,
  HelpCircle,
  Coffee,
  Radio,
  Search,
} from 'lucide-react';
import { ANIMAL_CATEGORIES, WHEN_TABS } from '@/data/animals';

interface AnimalControlsBarProps {
  activeCategory: string;
  onSelectCategory: (cat: string) => void;
  activeWhen: string;
  onSelectWhen: (when: string) => void;
  counts: Record<string, number>;
  whenCounts: Record<string, number>;
  searchKeyword: string;
  onSearchChange: (kw: string) => void;
  onRandomPick: () => void;
  onOpenAmbient: () => void;
  onToggleTimeTable: () => void;
  isTimeTableOpen: boolean;
  onOpenHelp: () => void;
  onOpenCoffee: () => void;
  timerMinutes: number;
  onTimerChange: (min: number) => void;
  isTimerRunning: boolean;
  onToggleTimer: () => void;
  formattedTimeLeft: string;
}

export default function AnimalControlsBar({
  activeCategory,
  onSelectCategory,
  activeWhen,
  onSelectWhen,
  counts,
  whenCounts,
  searchKeyword,
  onSearchChange,
  onRandomPick,
  onOpenAmbient,
  onToggleTimeTable,
  isTimeTableOpen,
  onOpenHelp,
  onOpenCoffee,
  timerMinutes,
  onTimerChange,
  isTimerRunning,
  onToggleTimer,
  formattedTimeLeft,
}: AnimalControlsBarProps) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 flex flex-col items-start p-4 sm:p-6 transition-all duration-300">
      {!collapsed && (
        <div className="flex flex-col items-start gap-2.5 max-w-2xl">
          {/* Card 1: Multi-row Filter Card */}
          <div className="pointer-events-auto flex flex-col gap-2 rounded-2xl border border-white/60 bg-white/80 p-3 shadow-xl backdrop-blur-md">
            {/* Row 1: Animal Category Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              {ANIMAL_CATEGORIES.map((cat) => {
                const active = activeCategory === cat.id;
                const count = counts[cat.id] ?? 0;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => onSelectCategory(cat.id)}
                    className={`group flex items-center gap-1.5 rounded-full px-2.5 py-1 text-left transition-all ${
                      active
                        ? 'bg-[#1e343d] text-white font-medium shadow-sm'
                        : 'text-slate-600 hover:bg-slate-200/60'
                    }`}
                  >
                    {cat.id !== 'all' && (
                      <span
                        className="h-2 w-2 rounded-full shrink-0"
                        style={{ backgroundColor: cat.color }}
                      />
                    )}
                    <span className="text-xs leading-none">{cat.icon}</span>
                    <span className="text-2xs">{cat.label}</span>
                    {cat.id !== 'all' && (
                      <span className="font-mono text-3xs tabular-nums opacity-60">
                        {count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Row 2: Timing / When Pills */}
            <div className="flex flex-wrap items-center gap-1.5 border-t border-slate-200/60 pt-2">
              {WHEN_TABS.map((w) => {
                const active = activeWhen === w.id;
                const count = whenCounts[w.id] ?? 0;
                return (
                  <button
                    key={w.id}
                    type="button"
                    onClick={() => onSelectWhen(w.id)}
                    className={`group flex items-center gap-1.5 rounded-full px-2.5 py-1 text-left transition-all ${
                      active
                        ? 'bg-[#1e343d] text-white font-medium shadow-sm'
                        : 'text-slate-600 hover:bg-slate-200/60'
                    }`}
                  >
                    <span
                      className="h-2 w-2 rounded-full shrink-0"
                      style={{ backgroundColor: w.color }}
                    />
                    <span className="text-2xs">{w.label}</span>
                    <span className="font-mono text-3xs tabular-nums opacity-60">
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Row 3: Keyword Search Input */}
            <div className="relative flex items-center pt-1">
              <Search
                size={13}
                className="pointer-events-none absolute left-2.5 text-slate-400"
              />
              <input
                type="text"
                value={searchKeyword}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="獅子、企鵝…"
                className="w-full rounded-full border border-slate-200 bg-white/70 py-1 pl-8 pr-3 text-2xs text-slate-800 placeholder-slate-400 focus:border-[#3b82f6] focus:bg-white outline-none transition-all"
              />
            </div>
          </div>

          {/* Card 2: Focus Timer */}
          <div className="pointer-events-auto flex items-center gap-2 rounded-2xl border border-white/60 bg-white/80 p-1.5 px-3 shadow-xl backdrop-blur-md">
            {isTimerRunning ? (
              <span className="font-mono text-xs font-bold text-emerald-600 px-1">
                ⏱ {formattedTimeLeft}
              </span>
            ) : (
              <select
                value={timerMinutes}
                onChange={(e) => onTimerChange(Number(e.target.value))}
                className="cursor-pointer rounded bg-transparent px-1 py-1 text-2xs text-slate-800 outline-none"
              >
                <option value={15}>15 分</option>
                <option value={25}>25 分</option>
                <option value={45}>45 分</option>
                <option value={60}>60 分</option>
                <option value={0}>陪讀 · 不限時</option>
              </select>
            )}

            <button
              type="button"
              onClick={onToggleTimer}
              className={`flex items-center gap-1.5 rounded-xl px-2.5 py-1 text-2xs transition-colors ${
                isTimerRunning
                  ? 'bg-rose-500/20 text-rose-600 font-medium'
                  : 'bg-[#d8eaf5] text-[#1e343d] hover:bg-[#c6e0f0] font-medium'
              }`}
            >
              <Timer size={13} />
              <span>{isTimerRunning ? '停止' : '開始專注'}</span>
            </button>
          </div>

          {/* Card 3: Action Toolbar (8 Buttons matching original) */}
          <div className="pointer-events-auto flex items-center gap-1 rounded-2xl border border-white/60 bg-white/80 p-1.5 shadow-xl backdrop-blur-md text-slate-700">
            {/* 1. Time table */}
            <button
              type="button"
              onClick={onToggleTimeTable}
              title="時刻表"
              className={`rounded-xl p-2 transition-colors ${
                isTimeTableOpen
                  ? 'bg-[#d8eaf5] text-[#1e343d]'
                  : 'hover:bg-slate-200/60'
              }`}
            >
              <ListOrdered size={16} />
            </button>

            {/* 2. List */}
            <Link
              href="/places"
              title="所有攝影機清單"
              className="rounded-xl p-2 hover:bg-slate-200/60"
            >
              <LayoutList size={16} />
            </Link>

            {/* 3. Live Radio */}
            <button
              type="button"
              title="直播中"
              className="rounded-xl p-2 hover:bg-slate-200/60"
            >
              <Radio size={16} />
            </button>

            {/* 4. Favorite */}
            <button
              type="button"
              title="我的最愛"
              className="rounded-xl p-2 hover:bg-slate-200/60"
            >
              <Heart size={16} />
            </button>

            {/* 5. Shuffle */}
            <button
              type="button"
              onClick={onRandomPick}
              title="隨機換地方"
              className="rounded-xl p-2 hover:bg-slate-200/60"
            >
              <Shuffle size={16} />
            </button>

            {/* 6. Sound */}
            <button
              type="button"
              onClick={onOpenAmbient}
              title="挑一個聲音陪我"
              className="rounded-xl p-2 hover:bg-slate-200/60"
            >
              <WandSparkles size={16} />
            </button>

            {/* 7. Fullscreen */}
            <button
              type="button"
              onClick={toggleFullscreen}
              title="沉浸全螢幕 (F)"
              className="rounded-xl p-2 hover:bg-slate-200/60"
            >
              <Maximize2 size={16} />
            </button>

            {/* 8. Help */}
            <button
              type="button"
              onClick={onOpenHelp}
              title="說明"
              className="rounded-xl p-2 hover:bg-slate-200/60"
            >
              <HelpCircle size={16} />
            </button>

            {/* 9. Coffee */}
            <button
              type="button"
              onClick={onOpenCoffee}
              title="請我喝杯咖啡"
              className="rounded-xl p-2 hover:bg-slate-200/60 text-amber-600"
            >
              <Coffee size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Collapse Button */}
      <button
        type="button"
        onClick={() => setCollapsed(!collapsed)}
        className="pointer-events-auto mt-2 inline-flex items-center gap-1.5 rounded-full border border-white/60 bg-white/80 px-3 py-1 text-2xs text-slate-700 shadow-md backdrop-blur-md transition-colors hover:bg-white"
      >
        {collapsed ? (
          <>
            <ChevronUp size={12} />
            <span>展開設定列</span>
          </>
        ) : (
          <>
            <ChevronDown size={12} />
            <span>收起設定列</span>
          </>
        )}
      </button>
    </div>
  );
}
