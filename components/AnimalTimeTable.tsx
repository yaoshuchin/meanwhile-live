'use client';

import { useMemo } from 'react';
import { ChevronLeft, ChevronRight, X, Clock } from 'lucide-react';
import type { AnimalPoint } from '@/data/animals';

interface AnimalTimeTableProps {
  isOpen: boolean;
  onClose: () => void;
  cameras: AnimalPoint[];
  activeCam: AnimalPoint | null;
  onSelectCam: (cam: AnimalPoint) => void;
}

export default function AnimalTimeTable({
  isOpen,
  onClose,
  cameras,
  activeCam,
  onSelectCam,
}: AnimalTimeTableProps) {
  const sortedCameras = useMemo(() => {
    return [...cameras].sort((a, b) => {
      const timeA = a.localTime || '00:00';
      const timeB = b.localTime || '00:00';
      return timeA.localeCompare(timeB);
    });
  }, [cameras]);

  const currentIndex = activeCam
    ? sortedCameras.findIndex((c) => c.id === activeCam.id)
    : -1;

  const handlePrev = () => {
    if (sortedCameras.length === 0) return;
    const nextIdx =
      currentIndex <= 0 ? sortedCameras.length - 1 : currentIndex - 1;
    onSelectCam(sortedCameras[nextIdx]);
  };

  const handleNext = () => {
    if (sortedCameras.length === 0) return;
    const nextIdx =
      currentIndex === -1 || currentIndex >= sortedCameras.length - 1
        ? 0
        : currentIndex + 1;
    onSelectCam(sortedCameras[nextIdx]);
  };

  if (!isOpen) return null;

  return (
    <aside
      aria-label="動物時刻表"
      className="pointer-events-auto absolute left-4 top-24 bottom-24 z-20 flex w-80 flex-col rounded-2xl border border-[#1e2f36] bg-[#0a1114]/90 p-4 shadow-2xl backdrop-blur-md animate-in slide-in-from-left duration-200"
    >
      <div className="flex items-center justify-between border-b border-[#1e2f36] pb-3">
        <div className="flex items-center gap-2">
          <Clock size={16} className="text-[#3b82f6]" />
          <h2 className="text-sm font-bold text-[#e4ecee]">動物時刻表</h2>
          <span className="rounded-full bg-[#1e343d] px-2 py-0.5 text-3xs text-[#93a6ac]">
            依當地時間
          </span>
        </div>
        <button
          onClick={onClose}
          className="rounded-lg p-1 text-[#93a6ac] transition-colors hover:bg-white/10 hover:text-[#e4ecee]"
        >
          <X size={16} />
        </button>
      </div>

      <div className="my-2.5 flex items-center justify-between rounded-lg bg-[#0d161a] px-3 py-1.5 text-2xs text-[#93a6ac]">
        <span>← → 換動物現場</span>
        <div className="flex items-center gap-1">
          <button
            onClick={handlePrev}
            title="上一個動物現場"
            className="rounded p-1 text-[#93a6ac] hover:bg-white/10 hover:text-[#e4ecee]"
          >
            <ChevronLeft size={14} />
          </button>
          <button
            onClick={handleNext}
            title="下一個動物現場"
            className="rounded p-1 text-[#93a6ac] hover:bg-white/10 hover:text-[#e4ecee]"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto space-y-1 pr-1 custom-scrollbar">
        {sortedCameras.map((cam) => {
          const isSelected = activeCam?.id === cam.id;
          return (
            <button
              key={cam.id}
              onClick={() => onSelectCam(cam)}
              className={`flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-left transition-all ${
                isSelected
                  ? 'bg-[#1e343d] text-[#e4ecee] ring-1 ring-[#3b82f6]'
                  : 'text-[#93a6ac] hover:bg-[#152228] hover:text-[#e4ecee]'
              }`}
            >
              <div className="flex flex-col min-w-0 pr-2">
                <span className="truncate text-xs font-semibold text-[#e4ecee]">
                  {cam.city}
                </span>
                <span className="truncate text-3xs text-blue-400">
                  {cam.animals.join('、')} · {cam.country}
                </span>
              </div>

              <div className="font-mono text-xs font-bold text-[#e4ecee] shrink-0">
                {cam.localTime || '--:--'}
              </div>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
