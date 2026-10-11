# Meanwhile · 此刻的世界 (本地完整版)

本專案已完整複製與建置於本機目錄：`C:\antigravity\1151009複製網頁`

## 🌟 快速啟動方式

* **方式一（最簡單）**：在資料夾中雙擊點擊 `start.bat`，系統將自動啟動本地伺服器並在預設瀏覽器打開 `http://localhost:3000`。
* **方式二（終端機）**：
  ```bash
  node server.js
  ```
  打開瀏覽器造訪：`http://localhost:3000`

---

## 🧭 系統功能介紹

1. **3D 互動數位地球儀**：
   * 搭載平滑視角縮放與飛行聚焦。
   * 顯示全球 110m 國家與陸地多邊形輪廓（已離線儲存於 `public/geo/countries-110m-v2.geo.json`）。
   * 點選點位會自動旋轉聚焦並展開即時攝影機視窗。

2. **即時氣象與太陽日夜演算**：
   * 透過 Open-Meteo API 即時查詢全球 129 處氣溫與天氣現象代碼。
   * 透過 SunCalc 計算太陽高度角，自動識別當地的日出、日落、深夜、下雨、下雪、晴朗狀態。

3. **心情篩選器（Mood Filter）**：
   * 包含：全部點位、陽光普照、陰天、正在下雨、正在下雪、日出日落、此刻深夜。
   * 即時統計各心情標籤的點位數量。

4. **全球 YouTube 即時直播**：
   * 嵌入高畫質 YouTube Live 現場畫面（例如東京澀谷、台北 101、紐約時代廣場等）。
   * 支援我的最愛收藏（儲存於瀏覽器 localStorage）。

5. **音樂伴讀與專注番茄鐘**：
   * 「挑一個聲音陪我」：提供 Lo-Fi Hip Hop、咖啡廳爵士、古典樂混音伴讀。
   * 專注計時器：支援 15 / 25 / 45 / 60 分鐘或陪讀不限時計時。
   * 沉浸全螢幕：按鍵盤 `F` 鍵即可一鍵全螢幕。

6. **所有攝影機總覽頁面**：
   * 訪問路徑：`http://localhost:3000/places`
   * 支援關鍵字搜尋，依各大洲與國家階層式瀏覽。

---

## 📁 核心目錄結構

```
C:\antigravity\1151009複製網頁
├── app/
│   ├── api/
│   │   ├── conditions/route.ts   # 即時氣象與日夜計算 API
│   │   └── live/[camId]/route.ts # YouTube 直播串流解析 API
│   ├── places/page.tsx           # 所有攝影機分類列表與搜尋頁
│   ├── globals.css               # 全域 Tailwind CSS 樣式
│   ├── layout.tsx                # 網站共用版型與語系
│   └── page.tsx                  # 首頁 3D 地球儀與主控台
├── components/
│   ├── GlobeViewer.tsx           # 3D 地球儀核心組件 (globe.gl / Three.js)
│   ├── CamModal.tsx              # 直播視窗與資訊卡片
│   ├── ControlsBar.tsx           # 底部心情篩選與工具列
│   └── AmbientMixer.tsx          # 音樂伴讀混音器
├── data/
│   └── cameras.ts                # 129 個攝影機點位完整資料庫（中英日介紹）
├── public/
│   ├── geo/                      # 全球國家向量 GeoJSON 檔案
│   └── textures/                 # 夜空星空背景貼圖
├── server.js                     # 本地伺服器啟動腳本
├── start.bat                     # Windows 一鍵啟動捷徑
└── package.json
```
