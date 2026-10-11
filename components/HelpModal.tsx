'use client';

import { X, Sparkles, MapPin, Eye, Moon, Clock } from 'lucide-react';
import Link from 'next/link';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
  cameraCount: number;
}

export default function HelpModal({
  isOpen,
  onClose,
  cameraCount,
}: HelpModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl border border-[#1e2f36] bg-[#0a1114] p-6 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#1e2f36] pb-4">
          <div className="flex items-center gap-2">
            <Sparkles size={18} className="text-[#4fa8d8]" />
            <h3 className="text-base font-bold text-[#e4ecee]">
              網站介紹與使用說明
            </h3>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-[#93a6ac] hover:bg-white/10 hover:text-[#e4ecee]"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="mt-4 space-y-4 text-xs sm:text-sm text-[#93a6ac] leading-relaxed max-h-[70vh] overflow-y-auto pr-1">
          <p className="text-sm font-medium text-[#e4ecee]">
            此刻，你的心情如何？找個地方陪著你吧。
          </p>
          <p>
            Meanwhile 把全世界 {cameraCount} 個地方的即時直播攝影機，放在同一顆地球上。這裡不是選地點，而是選心情：挑一種天氣或時刻，地球上就只留下此刻符合的地方。
          </p>

          <div className="space-y-3 pt-2">
            <div className="rounded-xl border border-[#1e2f36] bg-[#0d161a] p-3">
              <h4 className="font-semibold text-[#e4ecee] mb-1">
                1. 挑一種心情
              </h4>
              <p className="text-2xs text-[#93a6ac]">
                畫面底下的條件列：陽光普照、陰天、正在下雨、正在下雪、日出日落、此刻深夜。旁邊的數字是此刻符合的地方有幾個。
              </p>
            </div>

            <div className="rounded-xl border border-[#1e2f36] bg-[#0d161a] p-3">
              <h4 className="font-semibold text-[#e4ecee] mb-1">
                2. 點地球上的圖釘
              </h4>
              <p className="text-2xs text-[#93a6ac]">
                打開那個地方此刻的直播。拖曳可以轉動地球；左邊的時刻表依當地時間排列，也可以直接點。
              </p>
            </div>

            <div className="rounded-xl border border-[#1e2f36] bg-[#0d161a] p-3">
              <h4 className="font-semibold text-[#e4ecee] mb-1">
                3. 讓它陪你
              </h4>
              <p className="text-2xs text-[#93a6ac]">
                把喜歡的環境音加進混音台，幾個地方的聲音可以疊在一起。按 F 進入沉浸模式，介面會收起來，只留地球與直播。
              </p>
            </div>

            <div className="rounded-xl border border-[#1e2f36] bg-[#0d161a] p-3">
              <h4 className="font-semibold text-[#e4ecee] mb-1">
                4. 要讀書的話，開個計時
              </h4>
              <p className="text-2xs text-[#93a6ac]">
                長度從選單挑，15 分到 60 分：倒數到了自動提醒。選「陪讀」就不設終點，往上累加。
              </p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-5 flex items-center justify-between border-t border-[#1e2f36] pt-4">
          <Link
            href="/places"
            onClick={onClose}
            className="text-xs text-[#4fa8d8] hover:underline"
          >
            先看所有攝影機清單 →
          </Link>
          <button
            onClick={onClose}
            className="rounded-lg bg-[#1e343d] px-4 py-1.5 text-xs font-medium text-[#e4ecee] hover:bg-[#2a4753] transition-colors"
          >
            開始探索
          </button>
        </div>
      </div>
    </div>
  );
}
