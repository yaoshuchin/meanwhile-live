'use client';

import { X, Coffee, ExternalLink } from 'lucide-react';

interface CoffeeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CoffeeModal({ isOpen, onClose }: CoffeeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-2xl border border-[#1e2f36] bg-[#0a1114] p-6 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#1e2f36] pb-4">
          <div className="flex items-center gap-2">
            <Coffee size={20} className="text-amber-400" />
            <h3 className="text-base font-bold text-[#e4ecee]">贊助說明</h3>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-[#93a6ac] hover:bg-white/10 hover:text-[#e4ecee]"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="mt-4 space-y-3.5 text-xs text-[#93a6ac] leading-relaxed">
          <p>
            Buy Me a Coffee 是全球超過百萬創作者使用的知名平台。金流全權由國際金融巨頭 Stripe 安全加密處理（支援 Apple Pay / Google Pay / 國際信用卡），無需註冊帳號，且預設皆為單次贊助，絕無自動續扣或個人卡號資料外洩的疑慮喔！
          </p>

          <div className="space-y-2 rounded-xl border border-[#1e2f36] bg-[#0d161a] p-3">
            <div>
              <span className="font-semibold text-[#e4ecee]">金額自由：</span>
              <span> 可自由輸入任意金額（最低只要 $1 美金）。</span>
            </div>
            <div>
              <span className="font-semibold text-[#e4ecee]">付款便利：</span>
              <span> 支援 Visa / MasterCard / JCB 及 Apple Pay / Google Pay。</span>
            </div>
            <div>
              <span className="font-semibold text-[#e4ecee]">免註冊：</span>
              <span> 填寫暱稱與留言即可直接贊助，無需註冊帳號！</span>
            </div>
          </div>

          <p className="font-medium text-[#e4ecee]">
            感謝每一位使用軟體與贊助支持的朋友！❤️
          </p>
        </div>

        {/* CTA */}
        <div className="mt-5 flex items-center justify-between border-t border-[#1e2f36] pt-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg px-3 py-1.5 text-xs text-[#93a6ac] hover:bg-white/5"
          >
            關閉說明
          </button>
          <a
            href="https://buymeacoffee.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-amber-500/20 px-4 py-1.5 text-xs font-semibold text-amber-300 hover:bg-amber-500/30 transition-colors"
          >
            <span>前往贊助頁面</span>
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}
