// Global Animal Cameras Dataset (86 Cameras)
export interface AnimalPoint {
  id: string;
  city: string;
  country: string;
  countryCode: string;
  lat: number;
  lng: number;
  timeZone: string;
  scene?: string;
  setting?: string;
  ambientAudio?: boolean;
  silent?: boolean;
  category: 'penguin' | 'bear' | 'savanna' | 'bird' | 'ocean' | 'zoo' | 'forest';
  animals: string[];
  peakMonths?: number[];
  isPeak?: boolean;
  afterDark?: string | boolean;
  bestAt?: string;
  hours?: any;
  indoor?: boolean;
  discovery?: {
    query: string;
    match: string[];
    exclude?: string[];
  };
  defaultVideoId?: string;
  condition?: string;
  temperatureC?: number;
  localTime?: string;
  hasKnownLive?: boolean;
}

export const ANIMAL_CATEGORIES = [
  { id: 'all', label: '所有動物', icon: '🐾', color: '#8aa6b8' },
  { id: 'penguin', label: '企鵝', icon: '🐧', color: '#3b82f6' },
  { id: 'bear', label: '熊', icon: '🐻', color: '#c2703c' },
  { id: 'savanna', label: '非洲草原', icon: '🦁', color: '#f5a524' },
  { id: 'bird', label: '鳥巢與餵鳥台', icon: '🦅', color: '#ec4899' },
  { id: 'ocean', label: '海裡與水族館', icon: '🐠', color: '#06b6d4' },
  { id: 'zoo', label: '動物園', icon: '🦒', color: '#b06cf0' },
  { id: 'forest', label: '森林動物', icon: '🦊', color: '#22a355' },
];

export const WHEN_TABS = [
  { id: 'all', label: '全部時段', color: '#8aa6b8' },
  { id: 'day', label: '白天活躍', color: '#ffc83d' },
  { id: 'golden', label: '晨昏時分', color: '#ff7b54' },
  { id: 'night', label: '夜間探險', color: '#8ab4ff' },
  { id: 'peak', label: '當季精彩', color: '#34c38f' },
];

export const ANIMAL_CAMERAS: AnimalPoint[] = [
  {
    "id": "antipodes",
    "city": "安蒂波德斯群島 · 直立冠企鵝",
    "country": "紐西蘭",
    "countryCode": "NZ",
    "lat": -49.6833,
    "lng": 178.7667,
    "timeZone": "Pacific/Auckland",
    "scene": "coast",
    "setting": "wild",
    "ambientAudio": true,
    "category": "penguin",
    "animals": [
      "直立冠企鵝"
    ],
    "peakMonths": [
      9,
      10,
      11,
      12,
      1,
      2
    ],
    "discovery": {
      "query": "Antipodes Island penguin live cam TawakiCam",
      "match": [
        "Antipodes",
        "Tawaki"
      ]
    }
  },
  {
    "id": "marlborough-sounds",
    "city": "馬爾堡峽灣 · 藍企鵝巢",
    "country": "紐西蘭",
    "countryCode": "NZ",
    "lat": -41.2,
    "lng": 174.05,
    "timeZone": "Pacific/Auckland",
    "scene": "coast",
    "setting": "wild",
    "ambientAudio": true,
    "category": "penguin",
    "animals": [
      "藍企鵝"
    ],
    "peakMonths": [
      8,
      9,
      10,
      11,
      12
    ],
    "discovery": {
      "query": "Hamilton Bay Cottage Korora penguin nest cam live",
      "match": [
        "Hamilton Bay"
      ]
    }
  },
  {
    "id": "oamaru",
    "city": "奧馬魯 · 藍企鵝",
    "country": "紐西蘭",
    "countryCode": "NZ",
    "lat": -45.0966,
    "lng": 170.9714,
    "timeZone": "Pacific/Auckland",
    "scene": "coast",
    "setting": "wild",
    "ambientAudio": false,
    "silent": true,
    "category": "penguin",
    "animals": [
      "藍企鵝"
    ],
    "discovery": {
      "query": "Oamaru penguins live cam",
      "match": [
        "Oamaru",
        "Ōamaru"
      ]
    }
  },
  {
    "id": "taiaroa-head",
    "city": "泰阿羅阿角 · 皇家信天翁",
    "country": "紐西蘭",
    "countryCode": "NZ",
    "lat": -45.7747,
    "lng": 170.7278,
    "timeZone": "Pacific/Auckland",
    "scene": "coast",
    "setting": "wild",
    "ambientAudio": true,
    "category": "bird",
    "animals": [
      "皇家信天翁"
    ],
    "discovery": {
      "query": "Northern Royal Albatross Cam RoyalCam",
      "match": [
        "Royal Albatross",
        "RoyalCam"
      ]
    }
  },
  {
    "id": "werribee",
    "city": "維利比 · 開放式動物園",
    "country": "澳洲",
    "countryCode": "AU",
    "lat": -37.9186,
    "lng": 144.669,
    "timeZone": "Australia/Melbourne",
    "scene": "nature",
    "setting": "zoo",
    "ambientAudio": false,
    "silent": true,
    "category": "zoo",
    "animals": [
      "獅子"
    ],
    "discovery": {
      "query": "Werribee Open Range Zoo lion cam",
      "match": [
        "Werribee"
      ]
    }
  },
  {
    "id": "melbourne-giraffe",
    "city": "墨爾本動物園 · 長頸鹿",
    "country": "澳洲",
    "countryCode": "AU",
    "lat": -37.783,
    "lng": 144.9505,
    "timeZone": "Australia/Melbourne",
    "scene": "nature",
    "setting": "zoo",
    "ambientAudio": false,
    "silent": true,
    "category": "zoo",
    "animals": [
      "長頸鹿"
    ],
    "afterDark": "asleep",
    "discovery": {
      "query": "Zoos Victoria Giraffe Cam",
      "match": [
        "Zoos Victoria"
      ],
      "exclude": [
        "Lion",
        "Snow Leopard",
        "Penguin"
      ]
    }
  },
  {
    "id": "melbourne-snow-leopard",
    "city": "墨爾本動物園 · 雪豹",
    "country": "澳洲",
    "countryCode": "AU",
    "lat": -37.7842,
    "lng": 144.952,
    "timeZone": "Australia/Melbourne",
    "scene": "nature",
    "setting": "zoo",
    "ambientAudio": false,
    "silent": true,
    "category": "zoo",
    "animals": [
      "雪豹"
    ],
    "afterDark": "asleep",
    "discovery": {
      "query": "Zoos Victoria Snow Leopards Outdoor Cam",
      "match": [
        "Zoos Victoria"
      ],
      "exclude": [
        "Lion",
        "Giraffe",
        "Penguin"
      ]
    }
  },
  {
    "id": "melbourne-penguin",
    "city": "墨爾本動物園 · 小藍企鵝",
    "country": "澳洲",
    "countryCode": "AU",
    "lat": -37.7854,
    "lng": 144.9535,
    "timeZone": "Australia/Melbourne",
    "scene": "coast",
    "setting": "zoo",
    "ambientAudio": false,
    "silent": true,
    "category": "penguin",
    "animals": [
      "藍企鵝"
    ],
    "discovery": {
      "query": "Zoos Victoria Penguin Cam",
      "match": [
        "Zoos Victoria"
      ],
      "exclude": [
        "Lion",
        "Giraffe",
        "Snow Leopard"
      ]
    }
  },
  {
    "id": "shiretoko",
    "city": "知床 · 世界遺產森林",
    "country": "日本",
    "countryCode": "JP",
    "lat": 44.0911,
    "lng": 145.0229,
    "timeZone": "Asia/Tokyo",
    "scene": "nature",
    "setting": "wild",
    "ambientAudio": true,
    "category": "forest",
    "animals": [
      "蝦夷鹿",
      "棕熊",
      "北狐"
    ],
    "bestAt": "night",
    "discovery": {
      "query": "知床 動物観察カメラライブ",
      "match": [
        "知床",
        "Shiretoko"
      ]
    }
  },
  {
    "id": "asahiyama",
    "city": "旭川 · 旭山動物園",
    "country": "日本",
    "countryCode": "JP",
    "lat": 43.7682,
    "lng": 142.48,
    "timeZone": "Asia/Tokyo",
    "scene": "nature",
    "setting": "zoo",
    "ambientAudio": false,
    "silent": true,
    "category": "zoo",
    "animals": [
      "狼",
      "海豹"
    ],
    "discovery": {
      "query": "旭山動物園 24時間ライブ",
      "match": [
        "旭山動物園",
        "Asahiyama"
      ]
    }
  },
  {
    "id": "oarai",
    "city": "大洗 · 海洋世界大洗水族館",
    "country": "日本",
    "countryCode": "JP",
    "lat": 36.314,
    "lng": 140.592,
    "timeZone": "Asia/Tokyo",
    "scene": "underwater",
    "setting": "aquarium",
    "ambientAudio": false,
    "category": "ocean",
    "animals": [
      "沙虎鯊",
      "魟魚"
    ],
    "discovery": {
      "query": "アクアワールド大洗水族館 シロワニ ライブ",
      "match": [
        "大洗水族館",
        "アクアワールド"
      ]
    }
  },
  {
    "id": "okutama",
    "city": "奧多摩 · 演習林夜間觀察",
    "country": "日本",
    "countryCode": "JP",
    "lat": 35.8173,
    "lng": 139.0794,
    "timeZone": "Asia/Tokyo",
    "scene": "nature",
    "setting": "wild",
    "ambientAudio": true,
    "category": "forest",
    "animals": [
      "日本鹿",
      "亞洲黑熊",
      "日本獼猴"
    ],
    "bestAt": "night",
    "discovery": {
      "query": "奥多摩 夜の動物観察カメラ",
      "match": [
        "奥多摩"
      ]
    }
  },
  {
    "id": "izoo",
    "city": "河津 · iZoo 爬蟲類動物園",
    "country": "日本",
    "countryCode": "JP",
    "lat": 34.7457,
    "lng": 138.99,
    "timeZone": "Asia/Tokyo",
    "scene": "nature",
    "setting": "zoo",
    "ambientAudio": false,
    "silent": true,
    "category": "zoo",
    "animals": [
      "象龜",
      "爬蟲類"
    ],
    "discovery": {
      "query": "体感型動物園 iZoo ゾウガメ LIVE",
      "match": [
        "iZoo"
      ]
    }
  },
  {
    "id": "karuizawa",
    "city": "輕井澤 · 野鳥與松鼠",
    "country": "日本",
    "countryCode": "JP",
    "lat": 36.348,
    "lng": 138.597,
    "timeZone": "Asia/Tokyo",
    "scene": "nature",
    "setting": "wild",
    "ambientAudio": true,
    "category": "bird",
    "animals": [
      "野鳥",
      "松鼠"
    ],
    "discovery": {
      "query": "軽井沢 小さな鳥とリスのLIVE",
      "match": [
        "小さな鳥とリス"
      ]
    }
  },
  {
    "id": "nihondaira",
    "city": "靜岡 · 日本平動物園",
    "country": "日本",
    "countryCode": "JP",
    "lat": 34.9747,
    "lng": 138.4297,
    "timeZone": "Asia/Tokyo",
    "scene": "nature",
    "setting": "zoo",
    "ambientAudio": false,
    "silent": true,
    "category": "bear",
    "animals": [
      "北極熊"
    ],
    "hours": {
      "open": "09:00",
      "close": "16:30",
      "closedWeekday": 1,
      "offHours": "stream-card"
    },
    "discovery": {
      "query": "日本平動物園 ホッキョクグマ ライブカメラ",
      "match": [
        "日本平動物園"
      ]
    }
  },
  {
    "id": "satsukiyama",
    "city": "池田 · 五月山動物園",
    "country": "日本",
    "countryCode": "JP",
    "lat": 34.834,
    "lng": 135.433,
    "timeZone": "Asia/Tokyo",
    "scene": "nature",
    "setting": "zoo",
    "ambientAudio": false,
    "silent": true,
    "category": "zoo",
    "animals": [
      "袋熊"
    ],
    "discovery": {
      "query": "五月山動物園 ウォンバット ライブカメラ",
      "match": [
        "五月山動物園",
        "Satsukiyama"
      ]
    }
  },
  {
    "id": "kumamoto-zoo",
    "city": "熊本市動植物園",
    "country": "日本",
    "countryCode": "JP",
    "lat": 32.7776,
    "lng": 130.742,
    "timeZone": "Asia/Tokyo",
    "scene": "nature",
    "setting": "zoo",
    "ambientAudio": false,
    "silent": true,
    "category": "zoo",
    "animals": [
      "大象"
    ],
    "hours": {
      "open": "08:00",
      "close": "17:00",
      "offHours": "stream-card"
    },
    "discovery": {
      "query": "熊本市動植物園 定点ライブカメラ",
      "match": [
        "熊本市動植物園"
      ],
      "exclude": [
        "マサイキリン",
        "Giraffe"
      ]
    }
  },
  {
    "id": "kumamoto-giraffe",
    "city": "熊本市動植物園 · 長頸鹿",
    "country": "日本",
    "countryCode": "JP",
    "lat": 32.7769,
    "lng": 130.7434,
    "timeZone": "Asia/Tokyo",
    "scene": "nature",
    "setting": "zoo",
    "ambientAudio": false,
    "silent": true,
    "category": "zoo",
    "animals": [
      "長頸鹿"
    ],
    "hours": {
      "open": "08:00",
      "close": "17:00",
      "offHours": "stream-card"
    },
    "discovery": {
      "query": "熊本市動植物園 マサイキリン ライブカメラ",
      "match": [
        "マサイキリン"
      ],
      "exclude": [
        "アフリカゾウ",
        "Elephant"
      ]
    }
  },
  {
    "id": "shoushan-meerkat",
    "city": "高雄 · 壽山動物園狐獴",
    "country": "台灣",
    "countryCode": "TW",
    "lat": 22.6353,
    "lng": 120.2757,
    "timeZone": "Asia/Taipei",
    "scene": "nature",
    "setting": "zoo",
    "ambientAudio": false,
    "silent": true,
    "category": "zoo",
    "animals": [
      "狐獴"
    ],
    "hours": {
      "open": "09:00",
      "close": "17:00",
      "offHours": "animals-inside"
    },
    "discovery": {
      "query": "壽山動物園 狐獴 4K Live",
      "match": [
        "壽山動物園",
        "Shoushan Zoo"
      ],
      "exclude": [
        "孟加拉虎",
        "Rogy360"
      ]
    }
  },
  {
    "id": "shoushan-tiger",
    "city": "高雄 · 壽山動物園孟加拉虎",
    "country": "台灣",
    "countryCode": "TW",
    "lat": 22.6366,
    "lng": 120.2745,
    "timeZone": "Asia/Taipei",
    "scene": "nature",
    "setting": "zoo",
    "ambientAudio": false,
    "silent": true,
    "category": "zoo",
    "animals": [
      "孟加拉虎"
    ],
    "hours": {
      "open": "09:00",
      "close": "17:00",
      "offHours": "animals-inside"
    },
    "discovery": {
      "query": "壽山動物園 孟加拉虎 360 Live",
      "match": [
        "壽山動物園"
      ],
      "exclude": [
        "狐獴",
        "Meerkat"
      ]
    }
  },
  {
    "id": "nmmba-beluga",
    "city": "屏東 · 海生館白鯨池",
    "country": "台灣",
    "countryCode": "TW",
    "lat": 22.0466,
    "lng": 120.6988,
    "timeZone": "Asia/Taipei",
    "scene": "underwater",
    "setting": "aquarium",
    "ambientAudio": false,
    "category": "ocean",
    "animals": [
      "白鯨"
    ],
    "hours": {
      "open": "09:00",
      "close": "17:00",
      "offHours": "lights-off"
    },
    "discovery": {
      "query": "海生館 白鯨池直播 Beluga",
      "match": [
        "海生館",
        "NMMBA",
        "國立海洋生物博物館"
      ]
    }
  },
  {
    "id": "chengdu-panda",
    "city": "成都 · 大熊貓繁育研究基地",
    "country": "中國",
    "countryCode": "CN",
    "lat": 30.7333,
    "lng": 104.15,
    "timeZone": "Asia/Shanghai",
    "scene": "nature",
    "setting": "zoo",
    "ambientAudio": false,
    "silent": true,
    "category": "zoo",
    "animals": [
      "大熊貓"
    ],
    "afterDark": "replay",
    "discovery": {
      "query": "Panda 24/7 HD Live At Chengdu Panda Base",
      "match": [
        "Chengdu Panda Base",
        "Chengdu"
      ]
    }
  },
  {
    "id": "ol-donyo",
    "city": "丘魯丘陵 · 奧多尼奧旅館",
    "country": "肯亞",
    "countryCode": "KE",
    "lat": -2.63,
    "lng": 37.86,
    "timeZone": "Africa/Nairobi",
    "scene": "nature",
    "setting": "wild",
    "ambientAudio": true,
    "category": "savanna",
    "animals": [
      "大象",
      "長頸鹿",
      "斑馬",
      "獅子"
    ],
    "discovery": {
      "query": "ol Donyo Lodge wildlife live stream",
      "match": [
        "ol Donyo"
      ]
    }
  },
  {
    "id": "tsavo",
    "city": "查沃西 · 芬奇哈頓斯",
    "country": "肯亞",
    "countryCode": "KE",
    "lat": -2.95,
    "lng": 37.99,
    "timeZone": "Africa/Nairobi",
    "scene": "nature",
    "setting": "wild",
    "ambientAudio": true,
    "category": "savanna",
    "animals": [
      "河馬",
      "大象",
      "鱷魚"
    ],
    "discovery": {
      "query": "Finch Hattons live wildlife camera Tsavo",
      "match": [
        "Finch Hattons",
        "Tsavo"
      ]
    }
  },
  {
    "id": "amboseli",
    "city": "安博塞利 · 吉力馬札羅山下",
    "country": "肯亞",
    "countryCode": "KE",
    "lat": -2.679,
    "lng": 37.226,
    "timeZone": "Africa/Nairobi",
    "scene": "nature",
    "setting": "wild",
    "ambientAudio": true,
    "category": "savanna",
    "animals": [
      "大象",
      "長頸鹿",
      "斑馬",
      "角馬"
    ],
    "discovery": {
      "query": "Tortilis Camp Amboseli waterhole live",
      "match": [
        "Tortilis",
        "Amboseli"
      ]
    }
  },
  {
    "id": "mpala",
    "city": "萊基皮亞 · 姆帕拉水塘",
    "country": "肯亞",
    "countryCode": "KE",
    "lat": 0.293,
    "lng": 36.899,
    "timeZone": "Africa/Nairobi",
    "scene": "nature",
    "setting": "wild",
    "ambientAudio": true,
    "category": "savanna",
    "animals": [
      "大象",
      "細紋斑馬",
      "長頸鹿",
      "狒狒"
    ],
    "discovery": {
      "query": "Watering Hole in Kenya Mpala live",
      "match": [
        "Mpala"
      ]
    }
  },
  {
    "id": "mara-bushtops",
    "city": "馬賽馬拉 · 布什托普斯",
    "country": "肯亞",
    "countryCode": "KE",
    "lat": -1.47,
    "lng": 35.37,
    "timeZone": "Africa/Nairobi",
    "scene": "nature",
    "setting": "wild",
    "ambientAudio": true,
    "category": "savanna",
    "animals": [
      "獅子",
      "獵豹",
      "角馬",
      "瞪羚"
    ],
    "discovery": {
      "query": "Mara Bushtops live safari webcam",
      "match": [
        "Bushtops"
      ]
    }
  },
  {
    "id": "mara-river",
    "city": "馬拉河 · 角馬渡河點",
    "country": "肯亞",
    "countryCode": "KE",
    "lat": -1.555,
    "lng": 35.03,
    "timeZone": "Africa/Nairobi",
    "scene": "nature",
    "setting": "wild",
    "ambientAudio": true,
    "category": "savanna",
    "animals": [
      "角馬",
      "斑馬",
      "河馬",
      "鱷魚"
    ],
    "peakMonths": [
      7,
      8,
      9,
      10
    ],
    "discovery": {
      "query": "Mara River crossing live cam",
      "match": [
        "Mara River"
      ]
    }
  },
  {
    "id": "tembe",
    "city": "坦貝大象公園",
    "country": "南非",
    "countryCode": "ZA",
    "lat": -26.94,
    "lng": 32.476,
    "timeZone": "Africa/Johannesburg",
    "scene": "nature",
    "setting": "wild",
    "ambientAudio": true,
    "category": "savanna",
    "animals": [
      "大象",
      "犀牛",
      "疣豬",
      "羚羊"
    ],
    "discovery": {
      "query": "Tembe Elephant Park live stream",
      "match": [
        "Tembe"
      ]
    }
  },
  {
    "id": "majete",
    "city": "馬傑特野生動物保護區",
    "country": "馬拉威",
    "countryCode": "MW",
    "lat": -15.97,
    "lng": 34.7,
    "timeZone": "Africa/Blantyre",
    "scene": "nature",
    "setting": "wild",
    "ambientAudio": false,
    "silent": true,
    "category": "savanna",
    "animals": [
      "大象",
      "羚羊",
      "水牛",
      "疣豬"
    ],
    "peakMonths": [
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "discovery": {
      "query": "Majete Thawale Lodge live Malawi",
      "match": [
        "Majete"
      ]
    }
  },
  {
    "id": "djuma",
    "city": "沙比沙 · 朱馬保護區",
    "country": "南非",
    "countryCode": "ZA",
    "lat": -24.8617,
    "lng": 31.5333,
    "timeZone": "Africa/Johannesburg",
    "scene": "nature",
    "setting": "wild",
    "ambientAudio": true,
    "category": "savanna",
    "animals": [
      "豹",
      "獅子",
      "大象",
      "鬣狗",
      "長頸鹿"
    ],
    "discovery": {
      "query": "Djuma Cam live stream Sabi Sand",
      "match": [
        "Djuma"
      ]
    }
  },
  {
    "id": "olifants",
    "city": "巴魯萊 · 奧勒芬茲河",
    "country": "南非",
    "countryCode": "ZA",
    "lat": -24.05,
    "lng": 31.1,
    "timeZone": "Africa/Johannesburg",
    "scene": "nature",
    "setting": "wild",
    "ambientAudio": true,
    "category": "savanna",
    "animals": [
      "河馬",
      "鱷魚",
      "大象",
      "水牛"
    ],
    "discovery": {
      "query": "Olifants River wildlife live stream Kruger",
      "match": [
        "Olifants River"
      ]
    }
  },
  {
    "id": "hwange",
    "city": "萬基國家公園 · 水塘",
    "country": "辛巴威",
    "countryCode": "ZW",
    "lat": -19.05,
    "lng": 26.95,
    "timeZone": "Africa/Harare",
    "scene": "nature",
    "setting": "wild",
    "ambientAudio": true,
    "category": "savanna",
    "animals": [
      "大象",
      "水牛",
      "長頸鹿",
      "羚羊"
    ],
    "peakMonths": [
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "discovery": {
      "query": "Hwange waterhole live wildlife camera",
      "match": [
        "Hwange"
      ]
    }
  },
  {
    "id": "victoria-falls",
    "city": "維多利亞瀑布 · 旅館水塘",
    "country": "辛巴威",
    "countryCode": "ZW",
    "lat": -17.9243,
    "lng": 25.8572,
    "timeZone": "Africa/Lusaka",
    "scene": "nature",
    "setting": "wild",
    "ambientAudio": true,
    "category": "savanna",
    "animals": [
      "大象",
      "水牛",
      "疣豬",
      "禿鷹"
    ],
    "discovery": {
      "query": "Victoria Falls Safari Lodge waterhole live cam",
      "match": [
        "Victoria Falls Safari Lodge"
      ]
    }
  },
  {
    "id": "senyati",
    "city": "卡薩內 · 森亞提水塘",
    "country": "波札那",
    "countryCode": "BW",
    "lat": -17.795,
    "lng": 25.173,
    "timeZone": "Africa/Gaborone",
    "scene": "nature",
    "setting": "wild",
    "ambientAudio": true,
    "category": "savanna",
    "animals": [
      "大象",
      "水牛"
    ],
    "peakMonths": [
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "discovery": {
      "query": "Senyati Waterhole live Botswana",
      "match": [
        "Senyati"
      ]
    }
  },
  {
    "id": "tau",
    "city": "馬迪克韋 · 陶氏水塘",
    "country": "南非",
    "countryCode": "ZA",
    "lat": -24.78,
    "lng": 26.28,
    "timeZone": "Africa/Johannesburg",
    "scene": "nature",
    "setting": "wild",
    "ambientAudio": true,
    "category": "savanna",
    "animals": [
      "獅子",
      "大象",
      "犀牛",
      "斑馬"
    ],
    "discovery": {
      "query": "Tau Game Lodge live stream Madikwe",
      "match": [
        "Tau Game Lodge",
        "Madikwe"
      ]
    }
  },
  {
    "id": "boteti",
    "city": "博泰蒂河 · 斑馬遷徙",
    "country": "波札那",
    "countryCode": "BW",
    "lat": -20.16,
    "lng": 24.63,
    "timeZone": "Africa/Gaborone",
    "scene": "nature",
    "setting": "wild",
    "ambientAudio": true,
    "category": "savanna",
    "animals": [
      "斑馬",
      "大象",
      "河馬"
    ],
    "peakMonths": [
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "discovery": {
      "query": "Meno a Kwena Boteti River live zebra migration",
      "match": [
        "Meno a Kwena",
        "Boteti"
      ]
    }
  },
  {
    "id": "stony-point",
    "city": "貝蒂灣 · 史東尼角企鵝",
    "country": "南非",
    "countryCode": "ZA",
    "lat": -34.3733,
    "lng": 18.8933,
    "timeZone": "Africa/Johannesburg",
    "scene": "coast",
    "setting": "wild",
    "ambientAudio": true,
    "category": "penguin",
    "animals": [
      "非洲企鵝"
    ],
    "discovery": {
      "query": "Stony Point African penguins live cam",
      "match": [
        "Stony Point"
      ]
    }
  },
  {
    "id": "onguma",
    "city": "埃托沙東 · 翁古馬水塘",
    "country": "納米比亞",
    "countryCode": "NA",
    "lat": -18.731,
    "lng": 17.049,
    "timeZone": "Africa/Windhoek",
    "scene": "nature",
    "setting": "wild",
    "ambientAudio": true,
    "category": "savanna",
    "animals": [
      "大象",
      "長頸鹿",
      "斑馬",
      "羚羊"
    ],
    "peakMonths": [
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "discovery": {
      "query": "Onguma Waterhole live Namibia",
      "match": [
        "Onguma"
      ]
    }
  },
  {
    "id": "okaukuejo",
    "city": "埃托沙 · 奧考奎約水塘",
    "country": "納米比亞",
    "countryCode": "NA",
    "lat": -19.1817,
    "lng": 15.9206,
    "timeZone": "Africa/Windhoek",
    "scene": "nature",
    "setting": "wild",
    "ambientAudio": true,
    "category": "savanna",
    "animals": [
      "黑犀牛",
      "大象",
      "長頸鹿",
      "獅子",
      "劍羚"
    ],
    "peakMonths": [
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "discovery": {
      "query": "Etosha Okaukuejo waterhole live stream",
      "match": [
        "Okaukuejo"
      ]
    }
  },
  {
    "id": "namib-desert",
    "city": "納米比沙漠 · 水塘",
    "country": "納米比亞",
    "countryCode": "NA",
    "lat": -24.117,
    "lng": 15.905,
    "timeZone": "Africa/Windhoek",
    "scene": "nature",
    "setting": "wild",
    "ambientAudio": true,
    "category": "savanna",
    "animals": [
      "劍羚",
      "跳羚",
      "鴕鳥",
      "長頸鹿",
      "豺"
    ],
    "discovery": {
      "query": "Namibia live stream in the Namib Desert",
      "match": [
        "Namib Desert"
      ]
    }
  },
  {
    "id": "tiszalok",
    "city": "蒂薩洛克 · 小鴞巢",
    "country": "匈牙利",
    "countryCode": "HU",
    "lat": 48.02,
    "lng": 21.38,
    "timeZone": "Europe/Budapest",
    "scene": "nature",
    "setting": "wild",
    "ambientAudio": true,
    "category": "bird",
    "animals": [
      "小鴞"
    ],
    "discovery": {
      "query": "Little Owl Nest Cam Tiszalök live",
      "match": [
        "Tiszalök",
        "Tiszalok"
      ]
    }
  },
  {
    "id": "siofok",
    "city": "希歐福克 · 白腹毛腳燕巢",
    "country": "匈牙利",
    "countryCode": "HU",
    "lat": 46.904,
    "lng": 18.058,
    "timeZone": "Europe/Budapest",
    "scene": "nature",
    "setting": "wild",
    "ambientAudio": true,
    "category": "bird",
    "animals": [
      "白腹毛腳燕"
    ],
    "peakMonths": [
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "discovery": {
      "query": "House Martin Nest Cam Siófok live",
      "match": [
        "Siófok",
        "Siofok"
      ]
    }
  },
  {
    "id": "bad-salzungen",
    "city": "巴特薩爾聰根 · 白鸛巢",
    "country": "德國",
    "countryCode": "DE",
    "lat": 50.811,
    "lng": 10.233,
    "timeZone": "Europe/Berlin",
    "scene": "nature",
    "setting": "wild",
    "ambientAudio": false,
    "silent": true,
    "category": "bird",
    "animals": [
      "白鸛"
    ],
    "peakMonths": [
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "discovery": {
      "query": "Storchennest Live Webcam Bad Salzungen",
      "match": [
        "Bad Salzungen"
      ]
    }
  },
  {
    "id": "lago-maggiore",
    "city": "馬焦雷湖 · 湖底",
    "country": "義大利",
    "countryCode": "IT",
    "lat": 45.968,
    "lng": 8.653,
    "timeZone": "Europe/Rome",
    "scene": "underwater",
    "setting": "wild",
    "ambientAudio": false,
    "category": "ocean",
    "animals": [
      "河鱸",
      "淡水魚"
    ],
    "discovery": {
      "query": "PersiCam webcam Lago Maggiore",
      "match": [
        "PersiCam",
        "Lago Maggiore"
      ]
    }
  },
  {
    "id": "uplengen",
    "city": "烏普倫根 · 餵鳥台與刺蝟",
    "country": "德國",
    "countryCode": "DE",
    "lat": 53.22,
    "lng": 7.75,
    "timeZone": "Europe/Berlin",
    "scene": "nature",
    "setting": "wild",
    "ambientAudio": true,
    "category": "bird",
    "animals": [
      "野鳥",
      "刺蝟"
    ],
    "discovery": {
      "query": "Bird Feeder Cam Hedgehog Uplengen live",
      "match": [
        "Uplengen"
      ]
    }
  },
  {
    "id": "fotherdale",
    "city": "約克郡 · 倉鴞與白鼬",
    "country": "英國",
    "countryCode": "GB",
    "lat": 54.04,
    "lng": -0.73,
    "timeZone": "Europe/London",
    "scene": "nature",
    "setting": "wild",
    "ambientAudio": true,
    "category": "bird",
    "animals": [
      "倉鴞",
      "紅隼",
      "灰林鴞",
      "白鼬"
    ],
    "discovery": {
      "query": "Robert E Fuller live barn owls Fotherdale",
      "match": [
        "Fotherdale",
        "Robert E Fuller"
      ]
    }
  },
  {
    "id": "poole-harbour",
    "city": "普爾港 · 魚鷹巢",
    "country": "英國",
    "countryCode": "GB",
    "lat": 50.69,
    "lng": -2.02,
    "timeZone": "Europe/London",
    "scene": "coast",
    "setting": "wild",
    "ambientAudio": true,
    "category": "bird",
    "animals": [
      "魚鷹"
    ],
    "peakMonths": [
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "discovery": {
      "query": "Poole Harbour Osprey Nest Camera live",
      "match": [
        "Poole Harbour"
      ]
    }
  },
  {
    "id": "urdaibai",
    "city": "烏爾代拜 · 河口濕地",
    "country": "西班牙",
    "countryCode": "ES",
    "lat": 43.379,
    "lng": -2.675,
    "timeZone": "Europe/Madrid",
    "scene": "coast",
    "setting": "wild",
    "ambientAudio": true,
    "category": "bird",
    "animals": [
      "琵鷺",
      "鷺鷥",
      "候鳥",
      "魚鷹"
    ],
    "peakMonths": [
      8,
      9,
      10
    ],
    "discovery": {
      "query": "Urdaibai Bird Center wildlife cam live",
      "match": [
        "Urdaibai"
      ]
    }
  },
  {
    "id": "holnicote",
    "city": "荷尼寇特 · 河狸窩",
    "country": "英國",
    "countryCode": "GB",
    "lat": 51.2,
    "lng": -3.56,
    "timeZone": "Europe/London",
    "scene": "nature",
    "setting": "wild",
    "ambientAudio": true,
    "category": "forest",
    "animals": [
      "河狸"
    ],
    "discovery": {
      "query": "Beaver Lodge live National Trust Holnicote",
      "match": [
        "Holnicote"
      ]
    }
  },
  {
    "id": "sierra-morena",
    "city": "莫雷納山脈 · 伊比利猞猁",
    "country": "西班牙",
    "countryCode": "ES",
    "lat": 38.23,
    "lng": -4.05,
    "timeZone": "Europe/Madrid",
    "scene": "mountain",
    "setting": "wild",
    "ambientAudio": false,
    "silent": true,
    "category": "forest",
    "animals": [
      "伊比利猞猁"
    ],
    "discovery": {
      "query": "Lince ibérico directo Sierra Morena",
      "match": [
        "Sierra Morena"
      ]
    }
  },
  {
    "id": "arlington-court",
    "city": "阿靈頓莊園 · 倉鴞巢",
    "country": "英國",
    "countryCode": "GB",
    "lat": 51.139,
    "lng": -3.978,
    "timeZone": "Europe/London",
    "scene": "nature",
    "setting": "wild",
    "ambientAudio": true,
    "category": "bird",
    "animals": [
      "倉鴞"
    ],
    "discovery": {
      "query": "Barn Owl Nest live National Trust Arlington Court",
      "match": [
        "Arlington Court"
      ]
    }
  },
  {
    "id": "denmark-forest",
    "city": "日德蘭北部 · 森林餵食點",
    "country": "丹麥",
    "countryCode": "DK",
    "lat": 57.15,
    "lng": 9.95,
    "timeZone": "Europe/Copenhagen",
    "scene": "nature",
    "setting": "wild",
    "ambientAudio": true,
    "category": "forest",
    "animals": [
      "獾",
      "赤狐",
      "貂",
      "野鳥"
    ],
    "discovery": {
      "query": "Wildlife In The Forest 24/7 LIVE Morten Hilmer",
      "match": [
        "Morten Hilmer"
      ]
    }
  },
  {
    "id": "bonaire-reef",
    "city": "波奈島 · 珊瑚礁",
    "country": "荷屬加勒比",
    "countryCode": "BQ",
    "lat": 12.163,
    "lng": -68.281,
    "timeZone": "America/Kralendijk",
    "scene": "underwater",
    "setting": "wild",
    "ambientAudio": false,
    "silent": true,
    "category": "ocean",
    "animals": [
      "珊瑚礁魚",
      "海龜"
    ],
    "discovery": {
      "query": "Harbour Village Bonaire Coral Reef live",
      "match": [
        "Bonaire"
      ]
    }
  },
  {
    "id": "seal-island",
    "city": "緬因州 · 海豹島海鸚",
    "country": "美國",
    "countryCode": "US",
    "lat": 43.887,
    "lng": -68.739,
    "timeZone": "America/New_York",
    "scene": "coast",
    "setting": "wild",
    "ambientAudio": true,
    "category": "bird",
    "animals": [
      "海鸚",
      "燕鷗"
    ],
    "peakMonths": [
      4,
      5,
      6,
      7,
      8
    ],
    "discovery": {
      "query": "Seal Island Maine puffin live cam",
      "match": [
        "Seal Island",
        "Puffin Loafing Ledge"
      ]
    }
  },
  {
    "id": "trevor-zoo",
    "city": "米爾布魯克 · 崔弗動物園",
    "country": "美國",
    "countryCode": "US",
    "lat": 41.785,
    "lng": -73.692,
    "timeZone": "America/New_York",
    "scene": "nature",
    "setting": "zoo",
    "ambientAudio": true,
    "category": "zoo",
    "animals": [
      "小熊貓"
    ],
    "hours": {
      "open": "09:00",
      "close": "17:00",
      "offHours": "animals-inside"
    },
    "discovery": {
      "query": "Trevor Zoo red pandas live",
      "match": [
        "Trevor-Lovejoy",
        "Trevor Zoo"
      ]
    }
  },
  {
    "id": "oyster-bay",
    "city": "長島牡蠣灣 · 魚鷹巢",
    "country": "美國",
    "countryCode": "US",
    "lat": 40.866,
    "lng": -73.532,
    "timeZone": "America/New_York",
    "scene": "coast",
    "setting": "wild",
    "ambientAudio": true,
    "category": "bird",
    "animals": [
      "魚鷹"
    ],
    "peakMonths": [
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "discovery": {
      "query": "Osprey Cam Live Oyster Bay",
      "match": [
        "Oyster Bay"
      ]
    }
  },
  {
    "id": "sapsucker-woods",
    "city": "綺色佳 · 康乃爾餵鳥台",
    "country": "美國",
    "countryCode": "US",
    "lat": 42.48,
    "lng": -76.451,
    "timeZone": "America/New_York",
    "scene": "nature",
    "setting": "wild",
    "ambientAudio": true,
    "category": "bird",
    "animals": [
      "紅雀",
      "山雀",
      "啄木鳥",
      "松鼠"
    ],
    "peakMonths": [
      12,
      1,
      2
    ],
    "discovery": {
      "query": "Cornell Lab FeederWatch Cam Sapsucker Woods live",
      "match": [
        "Sapsucker Woods",
        "FeederWatch"
      ]
    }
  },
  {
    "id": "animal-adventure",
    "city": "哈珀斯維爾 · 動物探險公園",
    "country": "美國",
    "countryCode": "US",
    "lat": 42.172,
    "lng": -75.62,
    "timeZone": "America/New_York",
    "scene": "nature",
    "setting": "zoo",
    "ambientAudio": false,
    "silent": true,
    "category": "zoo",
    "animals": [
      "長頸鹿"
    ],
    "hours": {
      "open": "10:00",
      "close": "17:00",
      "offHours": "animals-inside"
    },
    "discovery": {
      "query": "Animal Adventure Park giraffe cam",
      "match": [
        "Animal Adventure Park"
      ]
    }
  },
  {
    "id": "nctc",
    "city": "西維吉尼亞 · 白頭海鵰巢",
    "country": "美國",
    "countryCode": "US",
    "lat": 39.487,
    "lng": -77.815,
    "timeZone": "America/New_York",
    "scene": "nature",
    "setting": "wild",
    "ambientAudio": true,
    "category": "bird",
    "animals": [
      "白頭海鵰"
    ],
    "peakMonths": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "discovery": {
      "query": "NCTC Eagle Nest live camera",
      "match": [
        "NCTC"
      ]
    }
  },
  {
    "id": "pittsburgh-zoo",
    "city": "匹茲堡動物園 · 企鵝",
    "country": "美國",
    "countryCode": "US",
    "lat": 40.484,
    "lng": -79.922,
    "timeZone": "America/New_York",
    "scene": "nature",
    "setting": "zoo",
    "ambientAudio": false,
    "silent": true,
    "category": "penguin",
    "animals": [
      "非洲企鵝"
    ],
    "discovery": {
      "query": "Pittsburgh Zoo penguin cam live",
      "match": [
        "Pittsburgh Zoo"
      ]
    }
  },
  {
    "id": "islamorada",
    "city": "伊斯拉莫拉達 · 大海鰱碼頭",
    "country": "美國",
    "countryCode": "US",
    "lat": 24.913,
    "lng": -80.636,
    "timeZone": "America/New_York",
    "scene": "coast",
    "setting": "wild",
    "ambientAudio": false,
    "silent": true,
    "category": "ocean",
    "animals": [
      "大海鰱",
      "鵜鶘"
    ],
    "discovery": {
      "query": "Tarpon Feeding Dock Islamorada live",
      "match": [
        "Islamorada"
      ]
    }
  },
  {
    "id": "coral-city",
    "city": "邁阿密 · 珊瑚城市",
    "country": "美國",
    "countryCode": "US",
    "lat": 25.775,
    "lng": -80.171,
    "timeZone": "America/New_York",
    "scene": "underwater",
    "setting": "wild",
    "ambientAudio": false,
    "category": "ocean",
    "animals": [
      "珊瑚礁魚",
      "魟魚",
      "海龜"
    ],
    "discovery": {
      "query": "Coral City Camera Miami underwater live",
      "match": [
        "Coral City"
      ]
    }
  },
  {
    "id": "canopy-lodge",
    "city": "巴拿馬 · 安東谷熱帶鳥類",
    "country": "巴拿馬",
    "countryCode": "PA",
    "lat": 8.605,
    "lng": -80.13,
    "timeZone": "America/Panama",
    "scene": "nature",
    "setting": "wild",
    "ambientAudio": true,
    "category": "bird",
    "animals": [
      "唐納雀",
      "蜂鳥",
      "簇舌巨嘴鳥"
    ],
    "discovery": {
      "query": "Panama Fruit Feeder Cam Canopy Lodge live",
      "match": [
        "Canopy Lodge"
      ]
    }
  },
  {
    "id": "silver-springs",
    "city": "銀泉 · 海牛",
    "country": "美國",
    "countryCode": "US",
    "lat": 29.216,
    "lng": -82.053,
    "timeZone": "America/New_York",
    "scene": "underwater",
    "setting": "wild",
    "ambientAudio": false,
    "category": "ocean",
    "animals": [
      "海牛",
      "淡水魚",
      "海龜"
    ],
    "peakMonths": [
      11,
      12,
      1,
      2,
      3
    ],
    "afterDark": "replay",
    "discovery": {
      "query": "Silver Springs underwater manatee cam",
      "match": [
        "Silver Springs",
        "Silver Spring"
      ]
    }
  },
  {
    "id": "georgia-aquarium",
    "city": "亞特蘭大 · 喬治亞水族館",
    "country": "美國",
    "countryCode": "US",
    "lat": 33.7634,
    "lng": -84.3951,
    "timeZone": "America/New_York",
    "scene": "underwater",
    "setting": "aquarium",
    "ambientAudio": false,
    "category": "ocean",
    "animals": [
      "鯨鯊",
      "鬼蝠魟",
      "魟魚"
    ],
    "discovery": {
      "query": "Georgia Aquarium Ocean Voyager cam live",
      "match": [
        "Georgia Aquarium"
      ]
    }
  },
  {
    "id": "utila",
    "city": "烏蒂拉島 · 珊瑚礁",
    "country": "宏都拉斯",
    "countryCode": "HN",
    "lat": 16.066,
    "lng": -86.978,
    "timeZone": "America/Tegucigalpa",
    "scene": "underwater",
    "setting": "wild",
    "ambientAudio": false,
    "category": "ocean",
    "animals": [
      "珊瑚礁魚",
      "海龜",
      "鯨鯊"
    ],
    "afterDark": "replay",
    "discovery": {
      "query": "Utopia Village underwater reef cam",
      "match": [
        "Utopia Village"
      ]
    }
  },
  {
    "id": "saint-louis-zoo",
    "city": "聖路易動物園 · 企鵝館",
    "country": "美國",
    "countryCode": "US",
    "lat": 38.635,
    "lng": -90.294,
    "timeZone": "America/Chicago",
    "scene": "coast",
    "setting": "zoo",
    "indoor": true,
    "ambientAudio": false,
    "silent": true,
    "category": "penguin",
    "animals": [
      "國王企鵝",
      "巴布亞企鵝",
      "海鸚"
    ],
    "hours": {
      "open": "09:00",
      "close": "17:00",
      "offHours": "recorded"
    },
    "discovery": {
      "query": "Penguin Webcam Saint Louis Zoo",
      "match": [
        "Saint Louis Zoo"
      ]
    }
  },
  {
    "id": "wolf-center",
    "city": "伊利 · 國際狼中心",
    "country": "美國",
    "countryCode": "US",
    "lat": 47.903,
    "lng": -91.849,
    "timeZone": "America/Chicago",
    "scene": "nature",
    "setting": "zoo",
    "ambientAudio": false,
    "silent": true,
    "category": "zoo",
    "animals": [
      "狼"
    ],
    "discovery": {
      "query": "International Wolf Center camera live",
      "match": [
        "International Wolf Center"
      ]
    }
  },
  {
    "id": "wapusk",
    "city": "邱吉爾 · 北極熊",
    "country": "加拿大",
    "countryCode": "CA",
    "lat": 58.7684,
    "lng": -93.1519,
    "timeZone": "America/Rankin_Inlet",
    "scene": "nature",
    "setting": "wild",
    "ambientAudio": false,
    "category": "bear",
    "animals": [
      "北極熊",
      "北極狐"
    ],
    "peakMonths": [
      10,
      11
    ],
    "discovery": {
      "query": "Churchill Cam Wapusk National Park polar bear live",
      "match": [
        "Wapusk",
        "Churchill"
      ]
    }
  },
  {
    "id": "kansas-city-zoo",
    "city": "堪薩斯城動物園 · 北極熊",
    "country": "美國",
    "countryCode": "US",
    "lat": 39.007,
    "lng": -94.529,
    "timeZone": "America/Chicago",
    "scene": "nature",
    "setting": "zoo",
    "ambientAudio": false,
    "silent": true,
    "category": "bear",
    "animals": [
      "北極熊"
    ],
    "hours": {
      "open": "09:30",
      "close": "17:00",
      "offHours": "animals-inside"
    },
    "discovery": {
      "query": "Kansas City Zoo polar bear cam",
      "match": [
        "KC Zoo",
        "Kansas City Zoo"
      ]
    }
  },
  {
    "id": "moody-gardens",
    "city": "加爾維斯敦 · 慕迪花園企鵝",
    "country": "美國",
    "countryCode": "US",
    "lat": 29.27,
    "lng": -94.854,
    "timeZone": "America/Chicago",
    "scene": "coast",
    "setting": "aquarium",
    "ambientAudio": false,
    "silent": true,
    "category": "penguin",
    "animals": [
      "國王企鵝",
      "跳岩企鵝",
      "巴布亞企鵝"
    ],
    "discovery": {
      "query": "Moody Gardens Penguin Cam live",
      "match": [
        "Moody Gardens"
      ]
    }
  },
  {
    "id": "hellgate",
    "city": "米蘇拉 · 魚鷹巢",
    "country": "美國",
    "countryCode": "US",
    "lat": 46.87,
    "lng": -113.98,
    "timeZone": "America/Denver",
    "scene": "nature",
    "setting": "wild",
    "ambientAudio": true,
    "category": "bird",
    "animals": [
      "魚鷹"
    ],
    "peakMonths": [
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "discovery": {
      "query": "Hellgate Ospreys Nest Cam live",
      "match": [
        "Hellgate"
      ]
    }
  },
  {
    "id": "big-bear",
    "city": "大熊湖 · 白頭海鵰巢",
    "country": "美國",
    "countryCode": "US",
    "lat": 34.244,
    "lng": -116.911,
    "timeZone": "America/Los_Angeles",
    "scene": "mountain",
    "setting": "wild",
    "ambientAudio": true,
    "category": "bird",
    "animals": [
      "白頭海鵰"
    ],
    "peakMonths": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "discovery": {
      "query": "Big Bear Bald Eagle Live Nest cam",
      "match": [
        "Big Bear"
      ]
    }
  },
  {
    "id": "aquarium-pacific",
    "city": "長灘 · 太平洋水族館",
    "country": "美國",
    "countryCode": "US",
    "lat": 33.762,
    "lng": -118.197,
    "timeZone": "America/Los_Angeles",
    "scene": "underwater",
    "setting": "aquarium",
    "ambientAudio": false,
    "category": "ocean",
    "animals": [
      "珊瑚礁魚",
      "小丑魚"
    ],
    "afterDark": "replay",
    "discovery": {
      "query": "Aquarium of the Pacific live cam coral",
      "match": [
        "Aquarium of the Pacific"
      ]
    }
  },
  {
    "id": "burrowing-owl",
    "city": "奧勒岡 · 穴鴞巢",
    "country": "美國",
    "countryCode": "US",
    "lat": 45.84,
    "lng": -119.289,
    "timeZone": "America/Los_Angeles",
    "scene": "nature",
    "setting": "wild",
    "ambientAudio": true,
    "category": "bird",
    "animals": [
      "穴鴞"
    ],
    "peakMonths": [
      4,
      5,
      6,
      7,
      8
    ],
    "discovery": {
      "query": "Burrowing Owl Nest Cam Oregon live",
      "match": [
        "Burrowing Owl"
      ]
    }
  },
  {
    "id": "monterey-aquarium",
    "city": "蒙特雷灣水族館 · 海藻林",
    "country": "美國",
    "countryCode": "US",
    "lat": 36.6182,
    "lng": -121.9019,
    "timeZone": "America/Los_Angeles",
    "scene": "underwater",
    "setting": "aquarium",
    "ambientAudio": false,
    "category": "ocean",
    "animals": [
      "海藻林魚群",
      "沙丁魚"
    ],
    "discovery": {
      "query": "Monterey Bay Aquarium live kelp forest cam",
      "match": [
        "Monterey Bay Aquarium"
      ]
    }
  },
  {
    "id": "seattle-aquarium",
    "city": "西雅圖水族館 · 海獺",
    "country": "美國",
    "countryCode": "US",
    "lat": 47.6075,
    "lng": -122.343,
    "timeZone": "America/Los_Angeles",
    "scene": "coast",
    "setting": "aquarium",
    "ambientAudio": false,
    "silent": true,
    "category": "ocean",
    "animals": [
      "海獺",
      "海狗"
    ],
    "discovery": {
      "query": "Seattle Aquarium sea otter cam live",
      "match": [
        "Seattle Aquarium"
      ]
    }
  },
  {
    "id": "cal-academy",
    "city": "舊金山 · 加州科學院珊瑚礁",
    "country": "美國",
    "countryCode": "US",
    "lat": 37.7699,
    "lng": -122.4661,
    "timeZone": "America/Los_Angeles",
    "scene": "underwater",
    "setting": "aquarium",
    "ambientAudio": false,
    "silent": true,
    "category": "ocean",
    "animals": [
      "珊瑚礁魚",
      "鯊魚"
    ],
    "discovery": {
      "query": "California Academy of Sciences live coral reef cam",
      "match": [
        "California Academy of Sciences"
      ]
    }
  },
  {
    "id": "vancouver-aquarium",
    "city": "溫哥華水族館 · 海獺",
    "country": "加拿大",
    "countryCode": "CA",
    "lat": 49.3007,
    "lng": -123.1309,
    "timeZone": "America/Vancouver",
    "scene": "coast",
    "setting": "aquarium",
    "ambientAudio": false,
    "silent": true,
    "category": "ocean",
    "animals": [
      "海獺"
    ],
    "discovery": {
      "query": "Vancouver Aquarium Sea Otter Cam",
      "match": [
        "Vancouver Aquarium"
      ]
    }
  },
  {
    "id": "orcalab",
    "city": "漢森島 · 虎鯨觀測站",
    "country": "加拿大",
    "countryCode": "CA",
    "lat": 50.577,
    "lng": -126.697,
    "timeZone": "America/Vancouver",
    "scene": "coast",
    "setting": "wild",
    "ambientAudio": false,
    "silent": true,
    "category": "ocean",
    "animals": [
      "虎鯨",
      "座頭鯨"
    ],
    "peakMonths": [
      6,
      7,
      8,
      9,
      10
    ],
    "afterDark": "replay",
    "discovery": {
      "query": "OrcaLab live cam orca",
      "match": [
        "OrcaLab"
      ]
    }
  },
  {
    "id": "anan",
    "city": "阿南溪 · 黑熊與棕熊",
    "country": "美國",
    "countryCode": "US",
    "lat": 56.179,
    "lng": -131.884,
    "timeZone": "America/Sitka",
    "scene": "nature",
    "setting": "wild",
    "ambientAudio": true,
    "category": "bear",
    "animals": [
      "黑熊",
      "棕熊",
      "鮭魚"
    ],
    "peakMonths": [
      7,
      8
    ],
    "afterDark": "replay",
    "discovery": {
      "query": "Anan Bear Cam live Alaska",
      "match": [
        "Anan"
      ]
    }
  },
  {
    "id": "glacier-gardens",
    "city": "朱諾 · 白頭海鵰巢",
    "country": "美國",
    "countryCode": "US",
    "lat": 58.36,
    "lng": -134.549,
    "timeZone": "America/Juneau",
    "scene": "nature",
    "setting": "wild",
    "ambientAudio": true,
    "category": "bird",
    "animals": [
      "白頭海鵰"
    ],
    "peakMonths": [
      4,
      5,
      6,
      7,
      8
    ],
    "discovery": {
      "query": "Live Bald Eagle Cam Glacier Gardens Juneau",
      "match": [
        "Glacier Gardens"
      ]
    }
  },
  {
    "id": "katmai",
    "city": "卡特邁 · 布魯克斯瀑布",
    "country": "美國",
    "countryCode": "US",
    "lat": 58.5546,
    "lng": -155.7774,
    "timeZone": "America/Anchorage",
    "scene": "nature",
    "setting": "wild",
    "ambientAudio": true,
    "category": "bear",
    "animals": [
      "棕熊",
      "鮭魚"
    ],
    "peakMonths": [
      7,
      9
    ],
    "afterDark": "replay",
    "discovery": {
      "query": "Katmai brown bear live cam Brooks Falls",
      "match": [
        "Katmai",
        "Brooks Falls",
        "Brooks River"
      ],
      "exclude": [
        "Brown Bears Low"
      ]
    }
  },
  {
    "id": "katmai-low",
    "city": "卡特邁 · 布魯克斯瀑布河岸",
    "country": "美國",
    "countryCode": "US",
    "lat": 58.5538,
    "lng": -155.7792,
    "timeZone": "America/Anchorage",
    "scene": "nature",
    "setting": "wild",
    "ambientAudio": true,
    "category": "bear",
    "animals": [
      "棕熊",
      "鮭魚"
    ],
    "peakMonths": [
      7,
      9
    ],
    "afterDark": "replay",
    "discovery": {
      "query": "Brooks Falls Brown Bears Low explore.org",
      "match": [
        "Brooks Falls"
      ]
    }
  },
  {
    "id": "midway",
    "city": "中途島 · 信天翁",
    "country": "美國",
    "countryCode": "UM",
    "lat": 28.21,
    "lng": -177.38,
    "timeZone": "Pacific/Midway",
    "scene": "coast",
    "setting": "wild",
    "ambientAudio": true,
    "category": "bird",
    "animals": [
      "黑背信天翁"
    ],
    "peakMonths": [
      11,
      12,
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "discovery": {
      "query": "Midway Atoll NWR wildlife live camera",
      "match": [
        "Midway Atoll"
      ]
    }
  }
];
