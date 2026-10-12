'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'zh-Hant' | 'en' | 'ja';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const DICTIONARY: Record<Language, Record<string, string>> = {
  'zh-Hant': {
    // Top Nav & Title
    'app.title': '此刻的世界',
    'app.tagline': '挑一種天氣或時刻，在地球儀上選一個喜歡的城市陪伴你。',
    'app.loading_weather': '正在讀取全球天氣…',
    'nav.city': '全球城市現場',
    'nav.animal': '全球動物現場',
    'nav.vehicle': '全球交通現場',
    'nav.places': '所有攝影機',
    
    // Animal Page
    'animal.title': '全球動物現場 · Animalia Live',
    'animal.subtitle': '選一個現場，看看牠們此刻在做什麼。',
    'animal.cams_count': '個現場',
    'animal.matched_count': '此刻符合條件的有',
    'animal.filtering': '篩選中',
    'animal.show_all': '✕ 顯示全部',
    'animal.by_time': '依當地時間',
    'animal.switch_cam': '← → 換現場',
    
    // Vehicle Page
    'vehicle.title': '全球交通現場 · Vehicula Live',
    'vehicle.subtitle': '選一個現場，看飛機起降、火車進站或大船入港。',
    
    // Moods
    'mood.all': '全部地點',
    'mood.clear': '陽光普照',
    'mood.overcast': '陰天',
    'mood.raining': '正在下雨',
    'mood.snowing': '正在下雪',
    'mood.golden': '日出日落',
    'mood.night': '此刻深夜',
    'mood.favs': '我的最愛',
    'mood.live_only': '只看直播',
    
    // Animal categories
    'animal_cat.all': '所有動物',
    'animal_cat.penguin': '企鵝',
    'animal_cat.bear': '熊',
    'animal_cat.savanna': '草原',
    'animal_cat.bird': '鳥類',
    'animal_cat.ocean': '海洋',
    'animal_cat.zoo': '動物園',
    'animal_cat.forest': '森林',
    
    // Vehicle categories
    'vehicle_cat.all': '全部交通',
    'vehicle_cat.aviation': '飛機',
    'vehicle_cat.rail': '鐵道',
    'vehicle_cat.maritime': '船與運河',
    
    // When
    'when.all': '全部現場',
    'when.day': '此刻白天',
    'when.golden': '晨昏時分',
    'when.night': '夜景',
    'when.peak': '活躍期',
    
    // Controls Bar & Footer
    'btn.shuffle': '隨機換地方',
    'btn.sound': '挑一個聲音陪我',
    'btn.fullscreen': '沉浸全螢幕 (F)',
    'btn.timetable': '時刻表',
    'btn.suggest': '推薦地點',
    'btn.help': '網站介紹與說明',
    'btn.ref': '參考自李佳恩',
    'btn.collapse': '收合設定列',
    'btn.expand': '展開設定列',
    'footer.welcome': '歡迎來到 Meanwhile',
    'footer.visits': '累積造訪次數：30,130 次',
    'footer.rights': '© 2026 Studio0808 智造實驗室 · All rights reserved.',
    'modal.close': '關閉',
    'modal.local_time': '當地時間',
    'modal.map': '地圖',
    'modal.watch_yt': '前往 YouTube 觀看',
  },
  'en': {
    'app.title': 'Meanwhile',
    'app.tagline': 'Choose a mood or time, and pick a city on the globe to keep you company.',
    'app.loading_weather': 'Loading global weather…',
    'nav.city': 'City Cams',
    'nav.animal': 'Animalia Live',
    'nav.vehicle': 'Vehicula Live',
    'nav.places': 'All Cameras',
    
    'animal.title': 'Animalia Live',
    'animal.subtitle': 'Pick a camera and see what they are doing right now.',
    'animal.cams_count': 'cameras',
    'animal.matched_count': 'Matching right now:',
    'animal.filtering': 'Filtering',
    'animal.show_all': '✕ Show All',
    'animal.by_time': 'By local time',
    'animal.switch_cam': '← → Switch',
    
    'vehicle.title': 'Vehicula Live',
    'vehicle.subtitle': 'Watch planes landing, trains rolling, or ships crossing waterways.',
    
    'mood.all': 'All Places',
    'mood.clear': 'Sunny',
    'mood.overcast': 'Overcast',
    'mood.raining': 'Raining',
    'mood.snowing': 'Snowing',
    'mood.golden': 'Golden Hour',
    'mood.night': 'Night Time',
    'mood.favs': 'Favorites',
    'mood.live_only': 'Live Only',
    
    'animal_cat.all': 'All Animals',
    'animal_cat.penguin': 'Penguins',
    'animal_cat.bear': 'Bears',
    'animal_cat.savanna': 'Savanna',
    'animal_cat.bird': 'Birds',
    'animal_cat.ocean': 'Ocean',
    'animal_cat.zoo': 'Zoos',
    'animal_cat.forest': 'Forest',
    
    'vehicle_cat.all': 'All Transport',
    'vehicle_cat.aviation': 'Aviation',
    'vehicle_cat.rail': 'Railroads',
    'vehicle_cat.maritime': 'Ships & Canals',
    
    'when.all': 'All Cams',
    'when.day': 'Daytime',
    'when.golden': 'Golden Hour',
    'when.night': 'Night',
    'when.peak': 'Peak Months',
    
    'btn.shuffle': 'Random Place',
    'btn.sound': 'Ambient Sound',
    'btn.fullscreen': 'Fullscreen (F)',
    'btn.timetable': 'Timetable',
    'btn.suggest': 'Suggest Camera',
    'btn.help': 'About & Help',
    'btn.ref': 'Inspired by Chia-En Lee',
    'btn.collapse': 'Collapse Bar',
    'btn.expand': 'Expand Bar',
    'footer.welcome': 'Welcome to Meanwhile',
    'footer.visits': 'Total Visits: 30,130',
    'footer.rights': '© 2026 Studio0808 Lab · All rights reserved.',
    'modal.close': 'Close',
    'modal.local_time': 'Local Time',
    'modal.map': 'Map',
    'modal.watch_yt': 'Watch on YouTube',
  },
  'ja': {
    'app.title': 'Meanwhile · その時、世界は',
    'app.tagline': '天気や時刻を選び、地球儀から好きな街を見つけて寄り添いましょう。',
    'app.loading_weather': '世界各地の天気を取得中…',
    'nav.city': '世界の街中ライブ',
    'nav.animal': '世界のどうぶつ',
    'nav.vehicle': '世界の交通ライブ',
    'nav.places': 'すべてのカメラ',
    
    'animal.title': '世界どうぶつライブ · Animalia Live',
    'animal.subtitle': 'ライブカメラを選んで、今どうぶつたちが何をしているか眺めてみましょう。',
    'animal.cams_count': 'ヶ所',
    'animal.matched_count': '現在条件に一致:',
    'animal.filtering': '絞り込み中',
    'animal.show_all': '✕ すべて表示',
    'animal.by_time': '現地時間順',
    'animal.switch_cam': '← → 切替',
    
    'vehicle.title': '世界交通ライブ · Vehicula Live',
    'vehicle.subtitle': '飛行機の離着陸、列車の発着、運河を行き交う船を眺めてみましょう。',
    
    'mood.all': 'すべての場所',
    'mood.clear': '快晴・晴れ',
    'mood.overcast': '曇り',
    'mood.raining': '雨天',
    'mood.snowing': '降雪中',
    'mood.golden': '朝焼け・夕焼け',
    'mood.night': '真夜中',
    'mood.favs': 'お気に入り',
    'mood.live_only': 'ライブ配信のみ',
    
    'animal_cat.all': 'すべてのどうぶつ',
    'animal_cat.penguin': 'ペンギン',
    'animal_cat.bear': 'クマ',
    'animal_cat.savanna': 'サバンナ',
    'animal_cat.bird': '野鳥・猛禽類',
    'animal_cat.ocean': '海の生き物',
    'animal_cat.zoo': '動物園',
    'animal_cat.forest': '森林野生動物',
    
    'vehicle_cat.all': 'すべての交通',
    'vehicle_cat.aviation': '飛行機',
    'vehicle_cat.rail': '鉄道',
    'vehicle_cat.maritime': '船・運河',
    
    'when.all': 'すべてのカメラ',
    'when.day': 'いま昼間',
    'when.golden': '朝夕マジックアワー',
    'when.night': '夜景',
    'when.peak': '見頃・活動期',
    
    'btn.shuffle': 'ランダム移動',
    'btn.sound': '環境音・BGM',
    'btn.fullscreen': 'フルスクリーン (F)',
    'btn.timetable': 'タイムテーブル',
    'btn.suggest': 'カメラ提案',
    'btn.help': 'サイトについて',
    'btn.ref': '原案：李佳恩 (Chia-En Lee)',
    'btn.collapse': '設定バーを折りたたむ',
    'btn.expand': '設定バーを展開',
    'footer.welcome': 'Meanwhile へようこそ',
    'footer.visits': '累計アクセス数：30,130 回',
    'footer.rights': '© 2026 Studio0808 Lab · All rights reserved.',
    'modal.close': '閉じる',
    'modal.local_time': '現地時間',
    'modal.map': 'マップ',
    'modal.watch_yt': 'YouTube で視聴',
  },
};

const LanguageContext = createContext<LanguageContextType>({
  lang: 'zh-Hant',
  setLang: () => {},
  t: (key) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('zh-Hant');

  useEffect(() => {
    try {
      const stored = localStorage.getItem('meanwhile_lang') as Language;
      if (stored && (stored === 'zh-Hant' || stored === 'en' || stored === 'ja')) {
        setLangState(stored);
      }
    } catch {}
  }, []);

  const setLang = (nextLang: Language) => {
    setLangState(nextLang);
    try {
      localStorage.setItem('meanwhile_lang', nextLang);
    } catch {}
  };

  const t = (key: string): string => {
    return DICTIONARY[lang]?.[key] || DICTIONARY['zh-Hant']?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
