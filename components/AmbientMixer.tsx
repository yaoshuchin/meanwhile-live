'use client';

import { useState } from 'react';
import { X, Music2, Volume2, VolumeX, Sparkles } from 'lucide-react';

interface AmbientMixerProps {
  isOpen: boolean;
  onClose: () => void;
}

const TRACKS = [
  { id: 'music-lofi', title: 'Lofi Hip Hop', desc: '放鬆與專注節奏', videoId: 'jfKfPfyJRdk' },
  { id: 'music-jazz', title: 'Coffee Jazz', desc: '咖啡廳悠閒爵士樂', videoId: 'Dx5qF6327n8' },
  { id: 'music-classical', title: 'Classical Focus', desc: '巴哈與莫札特古典樂', videoId: '4xDzrJKXOOY' },
];

export default function AmbientMixer({ isOpen, onClose }: AmbientMixerProps) {
  const [activeTrackId, setActiveTrackId] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(false);

  if (!isOpen) return null;

  const currentTrack = TRACKS.find((t) => t.id === activeTrackId);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-2xl border border-[#1e2f36] bg-[#0a1114] p-5 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#1e2f36]">
          <div className="flex items-center gap-2">
            <Sparkles size={18} className="text-[#4fa8d8]" />
            <h3 className="text-base font-semibold text-[#e4ecee]">挑一個聲音陪我</h3>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-[#93a6ac] hover:bg-white/10 hover:text-[#e4ecee]"
          >
            <X size={18} />
          </button>
        </div>

        {/* Track selection */}
        <div className="mt-4 flex flex-col gap-2.5">
          {TRACKS.map((t) => {
            const isPlaying = activeTrackId === t.id;
            return (
              <div
                key={t.id}
                onClick={() => setActiveTrackId(isPlaying ? null : t.id)}
                className={`flex cursor-pointer items-center justify-between rounded-xl border p-3.5 transition-all ${
                  isPlaying
                    ? 'border-[#4fa8d8] bg-[#1e343d]/60 text-[#e4ecee]'
                    : 'border-[#1e2f36] bg-[#0d161a] text-[#93a6ac] hover:border-white/20 hover:text-[#e4ecee]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`rounded-lg p-2 ${isPlaying ? 'bg-[#4fa8d8]/20 text-[#4fa8d8]' : 'bg-white/5'}`}>
                    <Music2 size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-[#e4ecee]">{t.title}</h4>
                    <p className="text-2xs text-[#93a6ac]">{t.desc}</p>
                  </div>
                </div>

                <span className={`text-2xs font-semibold px-2.5 py-1 rounded-full ${
                  isPlaying ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/5 text-[#93a6ac]'
                }`}>
                  {isPlaying ? '播放中' : '選擇'}
                </span>
              </div>
            );
          })}
        </div>

        {/* Hidden Audio Iframe Player */}
        {currentTrack && !isMuted && (
          <iframe
            key={currentTrack.id}
            src={`https://www.youtube.com/embed/${currentTrack.videoId}?autoplay=1&playsinline=1&enablejsapi=1`}
            title={currentTrack.title}
            className="hidden"
            allow="autoplay"
          />
        )}

        {/* Footer controls */}
        {currentTrack && (
          <div className="mt-4 flex items-center justify-between border-t border-[#1e2f36] pt-3 text-xs text-[#93a6ac]">
            <span>正在播放：{currentTrack.title}</span>
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="flex items-center gap-1.5 rounded-lg px-2 py-1 hover:bg-white/5 text-[#e4ecee]"
            >
              {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
              <span>{isMuted ? '解除靜音' : '靜音'}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
