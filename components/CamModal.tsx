'use client';

import { useState, useEffect } from 'react';
import { X, Heart, ExternalLink, MapPin, Volume2, Radio } from 'lucide-react';
import { withBasePath } from '@/lib/base-path';
import { CamPoint } from './GlobeViewer';

interface CamModalProps {
  cam: CamPoint | null;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export default function CamModal({
  cam,
  onClose,
  isFavorite,
  onToggleFavorite,
}: CamModalProps) {
  const [videoId, setVideoId] = useState<string>('');
  const [loadingStream, setLoadingStream] = useState<boolean>(false);

  useEffect(() => {
    if (!cam) return;
    setVideoId(cam.defaultVideoId || 'jfKfPfyJRdk');

    // Attempt dynamic live stream id if backend API is present
    fetch(withBasePath(`/api/live/${cam.id}`))
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
        // Fallback defaultVideoId is already active
      });
  }, [cam]);

  if (!cam) return null;

  const weatherBadge = {
    clear: '☀️ 陽光普照',
    overcast: '☁️ 陰天',
    raining: '🌧️ 正在下雨',
    snowing: '❄️ 正在下雪',
    golden: '🌅 日出日落',
    night: '🌙 此刻深夜',
  }[cam.condition] || '🌤️ 晴朗';

  return (
    <div className="absolute right-4 top-20 z-40 w-96 max-w-[calc(100vw-32px)] flex flex-col overflow-hidden rounded-xl border border-[#1e2f36] bg-[#0a1114]/90 p-4 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-right-4 duration-300">
      {/* Header */}
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <h2 className="text-base font-bold text-[#e4ecee] tracking-tight">
              {cam.city}
            </h2>
            <span className="rounded bg-[#1e2f36] px-1.5 py-0.5 text-3xs font-medium text-[#93a6ac]">
              {cam.country}
            </span>
          </div>
          <div className="mt-1 flex items-center gap-2 text-2xs text-[#93a6ac] font-mono">
            <span>當地 {cam.localTime}</span>
            <span>·</span>
            <span>{cam.temperatureC}°C</span>
            <span>·</span>
            <span className="font-sans text-[#4fa8d8]">{weatherBadge}</span>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => onToggleFavorite(cam.id)}
            title={isFavorite ? '從我的最愛移除' : '加入我的最愛'}
            className={`rounded-md p-1.5 transition-colors ${
              isFavorite
                ? 'text-rose-400 hover:bg-rose-500/10'
                : 'text-[#93a6ac] hover:bg-white/10 hover:text-[#e4ecee]'
            }`}
          >
            <Heart size={16} fill={isFavorite ? 'currentColor' : 'none'} />
          </button>
          <button
            onClick={onClose}
            className="rounded-md p-1.5 text-[#93a6ac] transition-colors hover:bg-white/10 hover:text-[#e4ecee]"
            title="關閉"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Video Player */}
      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black/80 border border-white/5 shadow-inner">
        {videoId ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1&enablejsapi=1`}
            title={cam.city}
            className="h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs text-[#93a6ac]">
            載入直播中…
          </div>
        )}
      </div>

      {/* Description */}
      <div className="mt-3">
        <p className="text-xs leading-relaxed text-[#c3d0d4] line-clamp-3 hover:line-clamp-none transition-all">
          {cam.description}
        </p>
      </div>

      {/* Footer Info */}
      <div className="mt-4 flex items-center justify-between border-t border-[#1e2f36] pt-3 text-2xs text-[#93a6ac]">
        <div className="flex items-center gap-1.5">
          <Radio size={12} className="text-emerald-400" />
          <span>LIVE 現場直播</span>
        </div>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${cam.lat},${cam.lng}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-[#4fa8d8] hover:underline"
        >
          <MapPin size={12} />
          <span>地圖</span>
        </a>
      </div>
    </div>
  );
}
