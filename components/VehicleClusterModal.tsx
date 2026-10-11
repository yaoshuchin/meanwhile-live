'use client';

import { X } from 'lucide-react';
import type { VehiclePoint } from '@/data/vehicles';

interface VehicleClusterModalProps {
  cams: VehiclePoint[] | null;
  onClose: () => void;
  onSelectCam: (cam: VehiclePoint) => void;
}

const CATEGORY_COLORS: Record<string, string> = {
  aviation: '#ec4899',
  rail: '#f5a524',
  maritime: '#22a355',
};

const CATEGORY_ICONS: Record<string, string> = {
  aviation: '✈️',
  rail: '🚆',
  maritime: '🚢',
};

export default function VehicleClusterModal({
  cams,
  onClose,
  onSelectCam,
}: VehicleClusterModalProps) {
  if (!cams || cams.length === 0) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-4 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        className="flex w-full max-w-sm flex-col gap-2 rounded-2xl border border-white/60 bg-white/95 p-4 shadow-2xl backdrop-blur-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-slate-200/70 pb-2.5">
          <h3 className="text-sm sm:text-base font-bold text-slate-800">
            挑一個現場（共 {cams.length} 個）
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1 text-slate-500 hover:bg-slate-100 hover:text-slate-800"
          >
            <X size={17} />
          </button>
        </div>

        <ul className="flex flex-col gap-1 max-h-[60vh] overflow-y-auto pr-1">
          {cams.map((cam) => {
            const color = CATEGORY_COLORS[cam.category] || '#ec4899';
            const icon = CATEGORY_ICONS[cam.category] || '🚦';
            return (
              <li key={cam.id}>
                <button
                  type="button"
                  onClick={() => {
                    onSelectCam(cam);
                    onClose();
                  }}
                  className="flex w-full items-center justify-between rounded-xl p-2.5 text-left transition-all hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#ec4899]"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span
                      className="h-2.5 w-2.5 shrink-0 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                    <span className="text-base shrink-0">{icon}</span>
                    <div className="truncate">
                      <div className="text-xs sm:text-sm font-semibold text-slate-800 truncate">
                        {cam.city}
                      </div>
                      <div className="text-3xs text-slate-500 truncate">
                        {cam.subjects.join('、')} · {cam.country}
                      </div>
                    </div>
                  </div>

                  <span className="font-mono text-xs text-slate-400 shrink-0 ml-2">
                    {cam.localTime || ''}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
