'use client';

import { useState } from 'react';
import { X, MapPinPlus, CheckCircle2 } from 'lucide-react';

interface SuggestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SuggestModal({ isOpen, onClose }: SuggestModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [place, setPlace] = useState('');
  const [url, setUrl] = useState('');
  const [reason, setReason] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!place || !url) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl border border-[#1e2f36] bg-[#0a1114] p-6 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#1e2f36] pb-4">
          <div className="flex items-center gap-2">
            <MapPinPlus size={18} className="text-[#4fa8d8]" />
            <h3 className="text-base font-bold text-[#e4ecee]">推薦一個地方</h3>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-[#93a6ac] hover:bg-white/10 hover:text-[#e4ecee]"
          >
            <X size={18} />
          </button>
        </div>

        {submitted ? (
          <div className="py-10 text-center space-y-3">
            <CheckCircle2 size={40} className="mx-auto text-emerald-400" />
            <h4 className="text-base font-semibold text-[#e4ecee]">謝謝你的分享！</h4>
            <p className="text-xs text-[#93a6ac]">
              我們會親自打開你推薦的直播看過，若適合播放就會加入地球儀。
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <p className="text-xs text-[#93a6ac]">
              知道哪裡有好看的 YouTube 直播攝影機嗎？告訴我們。每一則推薦都會有人親自看過。
            </p>

            <div>
              <label className="block text-2xs font-semibold text-[#93a6ac] mb-1">
                地點名稱 <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                required
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                placeholder="例如：日本・函館山夜景"
                className="w-full rounded-lg border border-[#1e2f36] bg-[#0d161a] px-3 py-2 text-xs text-[#e4ecee] placeholder-[#5a6e75] focus:border-[#4fa8d8] outline-none"
              />
            </div>

            <div>
              <label className="block text-2xs font-semibold text-[#93a6ac] mb-1">
                YouTube 直播網址 <span className="text-rose-400">*</span>
              </label>
              <input
                type="url"
                required
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://www.youtube.com/watch?v=..."
                className="w-full rounded-lg border border-[#1e2f36] bg-[#0d161a] px-3 py-2 text-xs text-[#e4ecee] placeholder-[#5a6e75] focus:border-[#4fa8d8] outline-none"
              />
            </div>

            <div>
              <label className="block text-2xs font-semibold text-[#93a6ac] mb-1">
                為什麼推薦
              </label>
              <textarea
                rows={3}
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="這台攝影機看得到什麼？什麼時候最好看？"
                className="w-full rounded-lg border border-[#1e2f36] bg-[#0d161a] px-3 py-2 text-xs text-[#e4ecee] placeholder-[#5a6e75] focus:border-[#4fa8d8] outline-none"
              />
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg px-3 py-1.5 text-xs text-[#93a6ac] hover:bg-white/5"
              >
                取消
              </button>
              <button
                type="submit"
                className="rounded-lg bg-[#1e343d] px-4 py-1.5 text-xs font-medium text-[#e4ecee] hover:bg-[#2a4753] transition-colors"
              >
                送出推薦
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
