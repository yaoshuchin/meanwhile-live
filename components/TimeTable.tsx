'use client';

import { useMemo } from 'react';
import { ChevronLeft, ChevronRight, X, Clock, Sun, Moon, Cloud, CloudRain, CloudSnow, Sunset } from 'lucide-react';
import type { CamPoint } from './GlobeViewer';

interface TimeTableProps {
  isOpen: boolean;
  onClose: () => void;
  cameras: CamPoint[];
  activeCam: CamPoint | null;
  onSelectCam: (cam: CamPoint) => void;
}

export default function TimeTable({
  isOpen,
  onClose,
  cameras,
  activeCam,
  onSelectCam,
}: TimeTableProps) {
  // Sort cameras by local time
  const sortedCameras = useMemo(() => {
    return [...cameras].sort((a, b) => {
      const timeA = a.localTime || '00:00';
      const timeB = b.localTime || '00:00';
      return timeA.localeCompare(timeB);
    });
  }, [cameras]);

  // Navigate next / prev camera
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

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'clear':
        return <Sun size={14} className="text-amber-400" />;
      case 'overcast':
        return <Cloud size={14} className="text-slate-400" />;
      case 'raining':
        return <CloudRain size={14} className="text-sky-400" />;
      case 'snowing':
        return <CloudSnow size={14} className="text-blue-200" />;
      case 'golden':
        return <Sunset size={14} className="text-orange-400" />;
      case 'night':
      default:
        return <Moon size={14} className="text-indigo-400" />;
    }
  };

  if (!isOpen) return null;

  return (
    <aside
      aria-label="時刻表"
      className="pointer-events-auto absolute left-4 top-24 bottom-24 z-20 flex w-72 flex-col rounded-2xl border border-[#1e2f36] bg-[#0a1114]/90 p-4 shadow-2xl backdrop-blur-md animate-in slide-in-from-left duration-200"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#1e2f36] pb-3">
        <div className="flex items-center gap-2">
          <Clock size={16} className="text-[#4fa8d8]" />
          <h2 className="text-sm font-bold text-[#e4ecee]">時刻表</h2>
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

      {/* Prev / Next Shortcuts */}
      <div className="my-2.5 flex items-center justify-between rounded-lg bg-[#0d161a] px-3 py-1.5 text-2xs text-[#93a6ac]">
        <span>← → 換地方</span>
        <div className="flex items-center gap-1">
          <button
            onClick={handlePrev}
            title="上一個地方"
            className="rounded p-1 text-[#93a6ac] hover:bg-white/10 hover:text-[#e4ecee]"
          >
            <ChevronLeft size={14} />
          </button>
          <button
            onClick={handleNext}
            title="下一個地方"
            className="rounded p-1 text-[#93a6ac] hover:bg-white/10 hover:text-[#e4ecee]"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* Scrollable list */}
      <div className="flex-1 overflow-y-auto space-y-1 pr-1 custom-scrollbar">
        {sortedCameras.map((cam) => {
          const isSelected = activeCam?.id === cam.id;
          return (
            <button
              key={cam.id}
              onClick={() => onSelectCam(cam)}
              className={`flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-left transition-all ${
                isSelected
                  ? 'bg-[#1e343d] text-[#e4ecee] ring-1 ring-[#4fa8d8]'
                  : 'text-[#93a6ac] hover:bg-[#152228] hover:text-[#e4ecee]'
              }`}
            >
              <div className="flex items-center gap-2 min-w-0">
                <span className="shrink-0">{getWeatherIcon(cam.condition)}</span>
                <div className="truncate">
                  <div className="truncate text-xs font-medium text-[#e4ecee]">
                    {cam.city}
                  </div>
                  <div className="truncate text-3xs text-[#93a6ac]">
                    {cam.country}
                  </div>
                </div>
              </div>

              <div className="text-right shrink-0">
                <div className="font-mono text-xs font-semibold text-[#e4ecee]">
                  {cam.localTime || '--:--'}
                </div>
                <div className="text-3xs text-[#93a6ac]">
                  {cam.temperatureC !== undefined ? `${cam.temperatureC}°C` : ''}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
