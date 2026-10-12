import type { Metadata } from 'next';
import './globals.css';
import './three-polyfill';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  title: 'Meanwhile · 此刻的世界',
  description: '不是選地點，而是選心情。挑一種天氣或時刻，地球儀上就只留下此刻符合的即時直播 —— 選一個喜歡的城市陪伴你。',
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant" className="dark">
      <body className="bg-[#05090b] text-[#e4ecee] antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
