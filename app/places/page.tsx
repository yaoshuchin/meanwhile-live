'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowLeft, Search, Radio, MapPin } from 'lucide-react';
import { CAMERAS } from '@/data/cameras';

const CONTINENT_MAP: Record<string, { name: string; countries: string[] }> = {
  asia: {
    name: '亞洲',
    countries: ['日本', '南韓', '泰國', '尼泊爾', '印尼', '越南', '土耳其', '以色列', '台灣', '印度', '阿聯', '香港', '馬來西亞', '斯里蘭卡', '菲律賓', '新加坡'],
  },
  oceania: {
    name: '大洋洲',
    countries: ['澳洲', '紐西蘭', '斐濟'],
  },
  europe: {
    name: '歐洲',
    countries: ['英國', '法國', '義大利', '西班牙', '德國', '荷蘭', '希臘', '挪威', '冰島', '瑞士', '奧地利', '葡萄牙', '捷克', '芬蘭', '瑞典', '愛爾蘭', '比利時', '丹麥', '波蘭', '克羅埃西亞'],
  },
  africa: {
    name: '非洲',
    countries: ['南非', '埃及', '肯亞', '摩洛哥'],
  },
  'north-america': {
    name: '北美洲',
    countries: ['美國', '加拿大', '墨西哥'],
  },
  'south-america': {
    name: '南美洲',
    countries: ['巴西', '阿根廷', '祕魯', '智利', '哥倫比亞'],
  },
};

export default function PlacesPage() {
  const [search, setSearch] = useState('');

  // Filtered cameras based on search keyword
  const filteredCams = useMemo(() => {
    if (!search.trim()) return CAMERAS;
    const q = search.toLowerCase();
    return CAMERAS.filter(
      (c) =>
        c.city.toLowerCase().includes(q) ||
        c.country.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.scene.toLowerCase().includes(q)
    );
  }, [search]);

  // Group filtered cams by continent and country
  const continentGroups = useMemo(() => {
    const res: Record<string, { name: string; count: number; countries: Record<string, typeof CAMERAS> }> = {};

    Object.entries(CONTINENT_MAP).forEach(([key, info]) => {
      res[key] = { name: info.name, count: 0, countries: {} };
    });

    filteredCams.forEach((cam) => {
      let foundContinent = 'asia';
      for (const [cKey, cInfo] of Object.entries(CONTINENT_MAP)) {
        if (cInfo.countries.includes(cam.country)) {
          foundContinent = cKey;
          break;
        }
      }

      if (!res[foundContinent]) {
        res[foundContinent] = { name: '其他', count: 0, countries: {} };
      }

      res[foundContinent].count += 1;
      if (!res[foundContinent].countries[cam.country]) {
        res[foundContinent].countries[cam.country] = [];
      }
      res[foundContinent].countries[cam.country].push(cam);
    });

    return res;
  }, [filteredCams]);

  return (
    <main className="min-h-screen overflow-y-auto bg-[#05090b] text-[#e4ecee] select-text">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 pb-24 pt-8 sm:px-8">
        {/* Header */}
        <header className="flex flex-col gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 self-start rounded-md py-1 text-xs text-[#93a6ac] transition-colors hover:text-[#e4ecee]"
          >
            <ArrowLeft size={14} />
            <span>回到地球</span>
          </Link>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            所有攝影機
          </h1>
          <p className="max-w-[65ch] text-sm text-[#93a6ac]">
            地球儀適合閒逛，這一頁適合查詢：每個地方在哪、看得到什麼、此刻有沒有直播。按「在地球上看」會直接打開那台攝影機。
          </p>
        </header>

        {/* Sticky Search & Navigation */}
        <div className="sticky top-0 z-20 -mx-5 flex flex-col gap-3 border-b border-[#1e2f36] bg-[#05090b]/90 px-5 py-3 backdrop-blur-md sm:-mx-8 sm:px-8">
          <p className="font-mono text-2xs text-[#93a6ac]">
            {filteredCams.length} 個點位 · 依區域與國家分類
          </p>

          <div className="relative flex items-center">
            <Search size={16} className="pointer-events-none absolute left-3 text-[#93a6ac]" />
            <input
              type="search"
              placeholder="搜尋城市、國家或關鍵字，例如：澀谷、台灣、雪、富士山"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-[#1e2f36] bg-[#0a1114] py-2 pl-9 pr-3 text-sm text-[#e4ecee] placeholder:text-[#5f7780] focus:border-[#4fa8d8] outline-none"
            />
          </div>

          {/* Jump to Continent */}
          <nav aria-label="依洲跳轉" className="flex flex-wrap gap-2">
            {Object.entries(continentGroups).map(([key, group]) => {
              if (group.count === 0) return null;
              return (
                <a
                  key={key}
                  href={`#continent-${key}`}
                  className="rounded-md border border-[#1e2f36] px-2.5 py-1 text-xs text-[#e4ecee] transition-colors hover:bg-[#101a1e]"
                >
                  {group.name}
                  <span className="ml-1.5 font-mono text-[#93a6ac]">{group.count}</span>
                </a>
              );
            })}
          </nav>
        </div>

        {/* Grouped Camera Cards */}
        <div className="flex flex-col gap-12 mt-4">
          {Object.entries(continentGroups).map(([cKey, group]) => {
            if (group.count === 0) return null;
            return (
              <section
                key={cKey}
                id={`continent-${cKey}`}
                className="flex scroll-mt-44 flex-col gap-6"
              >
                <h2 className="flex items-baseline gap-2 text-xl font-bold text-[#e4ecee] border-b border-[#1e2f36] pb-2">
                  {group.name}
                  <span className="font-mono text-sm font-normal text-[#93a6ac]">
                    {group.count} 台
                  </span>
                </h2>

                {Object.entries(group.countries).map(([country, cams]) => (
                  <div key={country} className="flex flex-col gap-3">
                    <h3 className="text-base font-semibold text-[#c3d0d4] flex items-center gap-2">
                      <MapPin size={14} className="text-[#4fa8d8]" />
                      <span>{country}</span>
                      <span className="font-mono text-xs font-normal text-[#93a6ac]">
                        {cams.length} 台
                      </span>
                    </h3>

                    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {cams.map((cam) => (
                        <li
                          key={cam.id}
                          className="flex flex-col gap-2 rounded-xl border border-[#1e2f36] bg-[#0a1114] p-4 transition-all hover:border-[#4fa8d8]/50 hover:bg-[#0d161a]"
                        >
                          <div className="flex items-baseline justify-between gap-3">
                            <h4 className="text-base font-medium text-[#e4ecee]">
                              {cam.city}
                            </h4>
                            <span className="shrink-0 rounded bg-[#1e2f36] px-1.5 py-0.5 text-3xs font-medium text-[#93a6ac]">
                              {cam.scene}
                            </span>
                          </div>

                          <p className="text-xs text-[#93a6ac] leading-relaxed line-clamp-3">
                            {cam.description}
                          </p>

                          <Link
                            href={`/?cam=${cam.id}&mood=all`}
                            className="mt-auto self-start pt-2 text-xs font-medium text-[#4fa8d8] hover:underline"
                          >
                            在地球上看 →
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}
