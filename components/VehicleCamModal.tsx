'use client';

import { useState, useEffect } from 'react';
import { X, ExternalLink, MapPin } from 'lucide-react';
import { withBasePath } from '@/lib/base-path';
import type { VehiclePoint } from '@/data/vehicles';

interface VehicleCamModalProps {
  cam: VehiclePoint | null;
  onClose: () => void;
}

export default function VehicleCamModal({ cam, onClose }: VehicleCamModalProps) {
  const [videoId, setVideoId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!cam) {
      setVideoId(null);
      return;
    }

    setVideoId(cam.defaultVideoId || 'jfKfPfyJRdk');
    fetch(withBasePath(`/api/vehicle-live/${cam.id}`))
      .then((res) => {
        if (!res.ok) throw new Error('API unavailable on static host');
        return res.json();
      })
      .then((data) => {
        if (data.videoId) {
          setVideoId(data.videoId);
        }
      })
      .catch(() => {
        // Fallback defaultVideoId is already set
      });
  }, [cam]);

  if (!cam) return null;

  return (
    <div className="pointer-events-none fixed inset-y-0 right-0 z-40 flex w-full max-w-sm sm:max-w-md flex-col justify-start p-3 sm:p-5 pt-16 sm:pt-20">
      <div className="pointer-events-auto flex flex-col w-full overflow-hidden rounded-2xl border border-white/60 bg-white/95 text-slate-800 shadow-2xl backdrop-blur-xl animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200/80 px-4 py-3 bg-slate-50/80">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="size-2 rounded-full bg-pink-500 animate-pulse shrink-0" />
            <h3 className="text-sm font-bold text-slate-800 truncate">
              {cam.city}
            </h3>
            <span className="rounded-full bg-slate-200/70 px-2 py-0.5 text-3xs text-slate-600 shrink-0">
              {cam.country}
            </span>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <span className="rounded-full bg-pink-100 px-2 py-0.5 text-3xs text-pink-600 font-medium">
              {cam.subjects.join('、')}
            </span>
            <button
              onClick={onClose}
              className="rounded-lg p-1 text-slate-400 hover:bg-slate-200 hover:text-slate-700 transition-colors"
              title="關閉"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video w-full bg-black">
          {loading ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-xs text-slate-400">
              <div className="h-6 w-6 animate-spin rounded-full border-2 border-pink-500 border-t-transparent" />
              <span>正在連接全球交通即時直播串流…</span>
            </div>
          ) : videoId ? (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&playsinline=1&modestbranding=1&rel=0`}
              title={cam.city}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full border-0"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-xs text-slate-400">
              目前無可用的直播串流
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-200/80 px-4 py-2.5 bg-slate-50/80 text-2xs text-slate-600">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <MapPin size={12} className="text-pink-500" />
              <span>
                {cam.lat.toFixed(2)}°, {cam.lng.toFixed(2)}°
              </span>
            </div>
            <div>
              當地：<span className="font-mono font-medium text-slate-800">{cam.localTime || '--:--'}</span>
            </div>
          </div>

          {videoId && (
            <a
              href={`https://www.youtube.com/watch?v=${videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-pink-600 font-medium hover:underline"
            >
              <span>YouTube 觀看</span>
              <ExternalLink size={11} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
