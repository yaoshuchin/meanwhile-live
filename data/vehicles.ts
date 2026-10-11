// Global Transportation Cameras Dataset (59 Cameras)
export interface VehiclePoint {
  id: string;
  city: string;
  country: string;
  countryCode: string;
  lat: number;
  lng: number;
  timeZone: string;
  scene?: string;
  ambientAudio?: boolean;
  silent?: boolean;
  category: 'aviation' | 'rail' | 'maritime';
  subjects: string[];
  rail?: any;
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

export const VEHICLE_CATEGORIES = [
  { id: 'all', label: '全部交通', icon: '🚦', color: '#8aa6b8' },
  { id: 'aviation', label: '飛機', icon: '✈️', color: '#ec4899' },
  { id: 'rail', label: '鐵道', icon: '🚆', color: '#f5a524' },
  { id: 'maritime', label: '船與運河', icon: '🚢', color: '#22a355' },
];

export const VEHICLE_WHEN_TABS = [
  { id: 'all', label: '全部現場', color: '#8aa6b8' },
  { id: 'day', label: '此刻白天', color: '#ffc83d' },
  { id: 'golden', label: '晨昏時分', color: '#ff7b54' },
  { id: 'night', label: '夜景', color: '#8ab4ff' },
];

export const VEHICLE_CAMERAS: VehiclePoint[] = [
  {
    "id": "wellington-airport",
    "city": "威靈頓 · 國際機場",
    "country": "紐西蘭",
    "countryCode": "NZ",
    "lat": -41.3272,
    "lng": 174.8053,
    "timeZone": "Pacific/Auckland",
    "scene": "coast",
    "ambientAudio": false,
    "category": "aviation",
    "subjects": [
      "客機",
      "跑道"
    ],
    "discovery": {
      "query": "Camview Wellington Airport Webcam Live Stream",
      "match": [
        "Wellington Airport"
      ]
    }
  },
  {
    "id": "newcastle-port",
    "city": "紐卡索 · 港口航道",
    "country": "澳洲",
    "countryCode": "AU",
    "lat": -32.924,
    "lng": 151.787,
    "timeZone": "Australia/Sydney",
    "scene": "harbor",
    "ambientAudio": false,
    "silent": true,
    "category": "maritime",
    "subjects": [
      "散裝貨輪",
      "港口"
    ],
    "discovery": {
      "query": "Port of Newcastle Harbour Cam",
      "match": [
        "Port of Newcastle"
      ]
    }
  },
  {
    "id": "south-yarra-station",
    "city": "墨爾本 · 南亞拉車站",
    "country": "澳洲",
    "countryCode": "AU",
    "lat": -37.8384,
    "lng": 144.9925,
    "timeZone": "Australia/Melbourne",
    "scene": "city",
    "ambientAudio": true,
    "category": "rail",
    "subjects": [
      "通勤電車",
      "車站"
    ],
    "discovery": {
      "query": "South Yarra Station Webcam",
      "match": [
        "South Yarra"
      ]
    }
  },
  {
    "id": "new-chitose-airport",
    "city": "新千歲機場 · 跑道",
    "country": "日本",
    "countryCode": "JP",
    "lat": 42.7752,
    "lng": 141.6923,
    "timeZone": "Asia/Tokyo",
    "scene": "city",
    "ambientAudio": false,
    "category": "aviation",
    "subjects": [
      "客機",
      "跑道"
    ],
    "discovery": {
      "query": "いまの新千歳空港 北海道 天気カメラ",
      "match": [
        "新千歳空港",
        "New Chitose"
      ]
    }
  },
  {
    "id": "koriyama-tohoku-shinkansen",
    "city": "郡山 · 東北新幹線",
    "country": "日本",
    "countryCode": "JP",
    "lat": 37.3985,
    "lng": 140.3886,
    "timeZone": "Asia/Tokyo",
    "scene": "city",
    "ambientAudio": true,
    "category": "rail",
    "subjects": [
      "新幹線"
    ],
    "discovery": {
      "query": "東北新幹線 郡山 ライブカメラ",
      "match": [
        "東北新幹線",
        "郡山"
      ]
    }
  },
  {
    "id": "yokohama-osanbashi",
    "city": "橫濱 · 大棧橋",
    "country": "日本",
    "countryCode": "JP",
    "lat": 35.4509,
    "lng": 139.6491,
    "timeZone": "Asia/Tokyo",
    "scene": "harbor",
    "ambientAudio": false,
    "category": "maritime",
    "subjects": [
      "郵輪",
      "港口"
    ],
    "discovery": {
      "query": "横浜港 大さん橋 山下公園 ライブカメラ",
      "match": [
        "横浜港",
        "大さん橋"
      ],
      "exclude": [
        "ノースドック",
        "ノース・ドッグ",
        "ノースドッグ"
      ]
    }
  },
  {
    "id": "haneda-t2",
    "city": "東京 · 羽田機場第2航廈",
    "country": "日本",
    "countryCode": "JP",
    "lat": 35.5494,
    "lng": 139.7798,
    "timeZone": "Asia/Tokyo",
    "scene": "city",
    "ambientAudio": true,
    "category": "aviation",
    "subjects": [
      "客機",
      "停機坪"
    ],
    "discovery": {
      "query": "羽田空港 T2 ライブカメラ 日テレNEWS",
      "match": [
        "羽田空港",
        "HANEDA"
      ]
    }
  },
  {
    "id": "yurakucho-curve",
    "city": "東京 · 有樂町彎道",
    "country": "日本",
    "countryCode": "JP",
    "lat": 35.6752,
    "lng": 139.7631,
    "timeZone": "Asia/Tokyo",
    "scene": "city",
    "ambientAudio": false,
    "silent": true,
    "category": "rail",
    "subjects": [
      "新幹線",
      "通勤電車"
    ],
    "discovery": {
      "query": "東京駅トレインビュー 新幹線ライブカメラ 有楽町カーブ",
      "match": [
        "東京駅トレインビュー",
        "有楽町"
      ]
    }
  },
  {
    "id": "akabane",
    "city": "東京 · 赤羽站周邊",
    "country": "日本",
    "countryCode": "JP",
    "lat": 35.7778,
    "lng": 139.7208,
    "timeZone": "Asia/Tokyo",
    "scene": "city",
    "ambientAudio": true,
    "category": "rail",
    "subjects": [
      "新幹線",
      "通勤電車"
    ],
    "discovery": {
      "query": "鉄道ライブカメラ 東京 赤羽駅周辺",
      "match": [
        "赤羽",
        "Akabane"
      ]
    }
  },
  {
    "id": "odawara-shinkansen",
    "city": "小田原 · 東海道新幹線",
    "country": "日本",
    "countryCode": "JP",
    "lat": 35.2564,
    "lng": 139.155,
    "timeZone": "Asia/Tokyo",
    "scene": "city",
    "ambientAudio": true,
    "category": "rail",
    "subjects": [
      "新幹線",
      "在來線列車",
      "車站"
    ],
    "discovery": {
      "query": "東海道新幹線小田原駅ライブカメラ",
      "match": [
        "小田原駅",
        "Odawara Station"
      ]
    }
  },
  {
    "id": "shizuoka-shinkansen",
    "city": "靜岡 · 東海道新幹線",
    "country": "日本",
    "countryCode": "JP",
    "lat": 34.9719,
    "lng": 138.3889,
    "timeZone": "Asia/Tokyo",
    "scene": "city",
    "ambientAudio": true,
    "category": "rail",
    "subjects": [
      "新幹線",
      "在來線列車",
      "車站"
    ],
    "discovery": {
      "query": "静岡駅ライブカメラ 東海道新幹線 東海道本線",
      "match": [
        "静岡駅"
      ]
    }
  },
  {
    "id": "osaka-jr-kyoto-line",
    "city": "大阪 · JR京都線",
    "country": "日本",
    "countryCode": "JP",
    "lat": 34.712,
    "lng": 135.505,
    "timeZone": "Asia/Tokyo",
    "scene": "city",
    "ambientAudio": true,
    "category": "rail",
    "subjects": [
      "在來線列車",
      "貨運列車"
    ],
    "discovery": {
      "query": "大阪ライブカメラ 東海道本線 JR京都線 おおさか東線",
      "match": [
        "LIVECAM OSAKA",
        "大阪ライブカメラ"
      ],
      "exclude": [
        "南向き"
      ]
    }
  },
  {
    "id": "kurushima-strait",
    "city": "今治 · 來島海峽",
    "country": "日本",
    "countryCode": "JP",
    "lat": 34.066,
    "lng": 133.006,
    "timeZone": "Asia/Tokyo",
    "scene": "coast",
    "ambientAudio": false,
    "silent": true,
    "category": "maritime",
    "subjects": [
      "貨輪",
      "海峽"
    ],
    "discovery": {
      "query": "来島海峡 今治港 ライブカメラ AIS",
      "match": [
        "来島海峡",
        "Kurushima"
      ]
    }
  },
  {
    "id": "hiroshima-station",
    "city": "廣島 · 廣島車站",
    "country": "日本",
    "countryCode": "JP",
    "lat": 34.3978,
    "lng": 132.4753,
    "timeZone": "Asia/Tokyo",
    "scene": "city",
    "ambientAudio": true,
    "category": "rail",
    "subjects": [
      "新幹線",
      "在來線列車",
      "車站"
    ],
    "discovery": {
      "query": "広島駅ライブカメラ 新幹線・在来線ホーム",
      "match": [
        "広島駅",
        "Hiroshima Station"
      ],
      "exclude": [
        "南口",
        "大屋根"
      ]
    }
  },
  {
    "id": "kanmon-strait",
    "city": "門司港 · 關門海峽",
    "country": "日本",
    "countryCode": "JP",
    "lat": 33.95,
    "lng": 130.963,
    "timeZone": "Asia/Tokyo",
    "scene": "harbor",
    "ambientAudio": true,
    "category": "maritime",
    "subjects": [
      "貨輪",
      "海峽"
    ],
    "discovery": {
      "query": "関門海峡 LIVE CAMERA 門司港",
      "match": [
        "関門海峡"
      ]
    }
  },
  {
    "id": "naha-airport",
    "city": "那霸機場 · 航廈與塔台",
    "country": "日本",
    "countryCode": "JP",
    "lat": 26.2064,
    "lng": 127.6467,
    "timeZone": "Asia/Tokyo",
    "scene": "city",
    "ambientAudio": false,
    "category": "aviation",
    "subjects": [
      "客機",
      "停機坪"
    ],
    "discovery": {
      "query": "那覇空港 ライブカメラ RBC 琉球放送",
      "match": [
        "那覇空港",
        "Naha Airport"
      ],
      "exclude": [
        "瀬長島",
        "国際通り"
      ]
    }
  },
  {
    "id": "taoyuan-north-runway",
    "city": "桃園 · 國際機場北跑道",
    "country": "台灣",
    "countryCode": "TW",
    "lat": 25.0797,
    "lng": 121.2342,
    "timeZone": "Asia/Taipei",
    "scene": "city",
    "ambientAudio": true,
    "category": "aviation",
    "subjects": [
      "客機",
      "跑道"
    ],
    "discovery": {
      "query": "桃園國際機場 北跑道 觀景台 即時影像",
      "match": [
        "桃園國際機場",
        "Taoyuan International Airport"
      ],
      "exclude": [
        "南跑道",
        "South Runway"
      ]
    }
  },
  {
    "id": "duoliang-station",
    "city": "台東 · 多良車站",
    "country": "台灣",
    "countryCode": "TW",
    "lat": 22.5061,
    "lng": 120.9624,
    "timeZone": "Asia/Taipei",
    "scene": "coast",
    "ambientAudio": true,
    "category": "rail",
    "subjects": [
      "火車"
    ],
    "discovery": {
      "query": "台東多良車站即時影像",
      "match": [
        "多良車站",
        "Duoliang"
      ]
    },
    "rail": {
      "provider": "tdx",
      "lineId": "SL",
      "km": 101.3
    }
  },
  {
    "id": "kaohsiung-khh",
    "city": "高雄 · 小港國際機場",
    "country": "台灣",
    "countryCode": "TW",
    "lat": 22.5771,
    "lng": 120.35,
    "timeZone": "Asia/Taipei",
    "scene": "city",
    "ambientAudio": false,
    "category": "aviation",
    "subjects": [
      "客機",
      "跑道"
    ],
    "discovery": {
      "query": "Kaohsiung International Airport RCKH live cam",
      "match": [
        "RCKH",
        "Kaohsiung Int",
        "高雄國際機場"
      ]
    }
  },
  {
    "id": "helsinki-west-harbour",
    "city": "赫爾辛基 · 西港",
    "country": "芬蘭",
    "countryCode": "FI",
    "lat": 60.151,
    "lng": 24.915,
    "timeZone": "Europe/Helsinki",
    "scene": "harbor",
    "ambientAudio": false,
    "silent": true,
    "category": "maritime",
    "subjects": [
      "渡輪",
      "港口"
    ],
    "discovery": {
      "query": "Port of Helsinki West harbour south cam",
      "match": [
        "Port of Helsinki"
      ],
      "exclude": [
        "north cam",
        "South Harbour"
      ]
    }
  },
  {
    "id": "tampere-railcam",
    "city": "坦佩雷 · 芬蘭幹線",
    "country": "芬蘭",
    "countryCode": "FI",
    "lat": 61.508,
    "lng": 23.773,
    "timeZone": "Europe/Helsinki",
    "scene": "city",
    "ambientAudio": false,
    "silent": true,
    "category": "rail",
    "subjects": [
      "客運列車",
      "貨運列車"
    ],
    "discovery": {
      "query": "Railcam Tampere Finland",
      "match": [
        "Railcam Tampere"
      ]
    },
    "rail": {
      "provider": "digitraffic",
      "a": "TPE",
      "b": "LLH",
      "aToB": 0.22,
      "bToA": 0.84
    }
  },
  {
    "id": "prague-main-station",
    "city": "布拉格 · 中央車站",
    "country": "捷克",
    "countryCode": "CZ",
    "lat": 50.0833,
    "lng": 14.4353,
    "timeZone": "Europe/Prague",
    "scene": "city",
    "ambientAudio": true,
    "category": "rail",
    "subjects": [
      "客運列車",
      "車站"
    ],
    "discovery": {
      "query": "Trainspotting Prague Main Station 24/7 LIVE",
      "match": [
        "Prague Main Station"
      ]
    }
  },
  {
    "id": "prague-airport",
    "city": "布拉格 · 哈維爾機場",
    "country": "捷克",
    "countryCode": "CZ",
    "lat": 50.1008,
    "lng": 14.26,
    "timeZone": "Europe/Prague",
    "scene": "city",
    "ambientAudio": false,
    "category": "aviation",
    "subjects": [
      "客機",
      "跑道"
    ],
    "discovery": {
      "query": "Planespotting Prague Vaclav Havel Airport LIVE",
      "match": [
        "Vaclav Havel",
        "Václav Havel"
      ],
      "exclude": [
        "Main Station"
      ]
    }
  },
  {
    "id": "kiel-holtenau-lock",
    "city": "基爾 · 霍爾特瑙船閘",
    "country": "德國",
    "countryCode": "DE",
    "lat": 54.3667,
    "lng": 10.145,
    "timeZone": "Europe/Berlin",
    "scene": "harbor",
    "ambientAudio": true,
    "category": "maritime",
    "subjects": [
      "船閘",
      "貨輪"
    ],
    "discovery": {
      "query": "Kiel-Holtenau Schleuse Webcam Nord-Ostsee-Kanal",
      "match": [
        "Kiel-Holtenau",
        "Holtenau"
      ],
      "exclude": [
        "Brunsbüttel"
      ]
    }
  },
  {
    "id": "hannover-railcam",
    "city": "漢諾威 · 北郊幹線",
    "country": "德國",
    "countryCode": "DE",
    "lat": 52.415,
    "lng": 9.74,
    "timeZone": "Europe/Berlin",
    "scene": "city",
    "ambientAudio": true,
    "category": "rail",
    "subjects": [
      "高速列車",
      "貨運列車"
    ],
    "discovery": {
      "query": "Railcam Hannover live train traffic",
      "match": [
        "Railcam Hannover"
      ]
    }
  },
  {
    "id": "brunsbuettel-lock",
    "city": "布倫斯比特爾 · 基爾運河船閘",
    "country": "德國",
    "countryCode": "DE",
    "lat": 53.892,
    "lng": 9.14,
    "timeZone": "Europe/Berlin",
    "scene": "harbor",
    "ambientAudio": true,
    "category": "maritime",
    "subjects": [
      "船閘",
      "貨櫃輪"
    ],
    "discovery": {
      "query": "Brunsbüttel Schleuse Webcam Nord-Ostsee-Kanal",
      "match": [
        "Brunsbüttel",
        "Brunsbuttel"
      ],
      "exclude": [
        "Holtenau"
      ]
    }
  },
  {
    "id": "savona-railcam",
    "city": "薩沃納 · 利古里亞鐵路",
    "country": "義大利",
    "countryCode": "IT",
    "lat": 44.308,
    "lng": 8.47,
    "timeZone": "Europe/Rome",
    "scene": "coast",
    "ambientAudio": true,
    "category": "rail",
    "subjects": [
      "客運列車",
      "貨運列車"
    ],
    "discovery": {
      "query": "Liguria Live Rail Savona RailCam",
      "match": [
        "Savona",
        "LiguriaLiveRail"
      ]
    }
  },
  {
    "id": "middle-rhine",
    "city": "博帕德 · 萊茵河中游河谷",
    "country": "德國",
    "countryCode": "DE",
    "lat": 50.174,
    "lng": 7.695,
    "timeZone": "Europe/Berlin",
    "scene": "nature",
    "ambientAudio": true,
    "category": "rail",
    "subjects": [
      "貨運列車",
      "客運列車",
      "河船"
    ],
    "discovery": {
      "query": "Livecam Mittelrheintal Züge Schiffe Railcam Shipcam",
      "match": [
        "Mittelrheintal"
      ]
    }
  },
  {
    "id": "amsterdam-vijf-bruggen",
    "city": "阿姆斯特丹 · 中央車站東側",
    "country": "荷蘭",
    "countryCode": "NL",
    "lat": 52.38,
    "lng": 4.915,
    "timeZone": "Europe/Amsterdam",
    "scene": "city",
    "ambientAudio": false,
    "silent": true,
    "category": "rail",
    "subjects": [
      "客運列車",
      "車站"
    ],
    "discovery": {
      "query": "ProRail Amsterdam Centraal De Vijf Bruggen livestream",
      "match": [
        "Vijf Bruggen"
      ]
    },
    "rail": {
      "provider": "ns",
      "station": "ASD",
      "uicCode": "8400058",
      "stationLng": 4.9003,
      "side": "east",
      "arriveLeadSec": 60,
      "departLagSec": 60
    }
  },
  {
    "id": "rotterdam-nieuwe-waterweg",
    "city": "鹿特丹 · 新水道",
    "country": "荷蘭",
    "countryCode": "NL",
    "lat": 51.98,
    "lng": 4.12,
    "timeZone": "Europe/Amsterdam",
    "scene": "harbor",
    "ambientAudio": false,
    "silent": true,
    "category": "maritime",
    "subjects": [
      "貨輪",
      "港口"
    ],
    "discovery": {
      "query": "Port of Rotterdam live stream Nieuwe Waterweg",
      "match": [
        "Nieuwe Waterweg"
      ]
    }
  },
  {
    "id": "york-railcam",
    "city": "約克 · 車站北側",
    "country": "英國",
    "countryCode": "GB",
    "lat": 53.958,
    "lng": -1.093,
    "timeZone": "Europe/London",
    "scene": "city",
    "ambientAudio": true,
    "category": "rail",
    "subjects": [
      "客運列車",
      "貨運列車"
    ],
    "discovery": {
      "query": "Railcam York ROC Camera Network Rail",
      "match": [
        "York ROC"
      ]
    }
  },
  {
    "id": "southampton-port",
    "city": "南安普敦 · 港口",
    "country": "英國",
    "countryCode": "GB",
    "lat": 50.895,
    "lng": -1.4,
    "timeZone": "Europe/London",
    "scene": "harbor",
    "ambientAudio": true,
    "category": "maritime",
    "subjects": [
      "郵輪",
      "渡輪",
      "貨櫃輪"
    ],
    "discovery": {
      "query": "Solent Ships Port Cam Port of Southampton",
      "match": [
        "Port Cam"
      ],
      "exclude": [
        "Cruise Cam",
        "Box Cam",
        "Netley",
        "Itchen",
        "Fawley",
        "Junction",
        "Ferry Cam"
      ]
    }
  },
  {
    "id": "dublin-port",
    "city": "都柏林 · 港口",
    "country": "愛爾蘭",
    "countryCode": "IE",
    "lat": 53.346,
    "lng": -6.19,
    "timeZone": "Europe/Dublin",
    "scene": "harbor",
    "ambientAudio": false,
    "silent": true,
    "category": "maritime",
    "subjects": [
      "渡輪",
      "貨櫃輪",
      "港口"
    ],
    "discovery": {
      "query": "Dublin Bay Live Watch Ships Enter and Exit Dublin Port",
      "match": [
        "Dublin Port",
        "Dublin Bay"
      ],
      "exclude": [
        "City View",
        "Liffey"
      ]
    }
  },
  {
    "id": "lanzarote-airport",
    "city": "蘭薩羅特島 · 機場",
    "country": "西班牙",
    "countryCode": "ES",
    "lat": 28.9455,
    "lng": -13.6052,
    "timeZone": "Atlantic/Canary",
    "scene": "coast",
    "ambientAudio": true,
    "category": "aviation",
    "subjects": [
      "客機",
      "跑道"
    ],
    "discovery": {
      "query": "Lanzarote Airport live webcam",
      "match": [
        "Lanzarote Airport"
      ]
    }
  },
  {
    "id": "tenerife-north",
    "city": "特內里費 · 北機場",
    "country": "西班牙",
    "countryCode": "ES",
    "lat": 28.4827,
    "lng": -16.3415,
    "timeZone": "Atlantic/Canary",
    "scene": "mountain",
    "ambientAudio": true,
    "category": "aviation",
    "subjects": [
      "客機",
      "跑道"
    ],
    "discovery": {
      "query": "Tenerife North airport live webcam runway",
      "match": [
        "Tenerife Airport",
        "Tenerife Nort",
        "Tenerife North"
      ]
    }
  },
  {
    "id": "madeira-airport",
    "city": "馬德拉島 · 機場",
    "country": "葡萄牙",
    "countryCode": "PT",
    "lat": 32.6979,
    "lng": -16.7745,
    "timeZone": "Atlantic/Madeira",
    "scene": "coast",
    "ambientAudio": false,
    "silent": true,
    "category": "aviation",
    "subjects": [
      "客機",
      "跑道"
    ],
    "discovery": {
      "query": "Madeira Airport planespotting live Madeira-Web",
      "match": [
        "Madeira Airport"
      ]
    }
  },
  {
    "id": "porto-alegre-airport",
    "city": "阿雷格里港 · 機場",
    "country": "巴西",
    "countryCode": "BR",
    "lat": -29.9944,
    "lng": -51.1714,
    "timeZone": "America/Sao_Paulo",
    "scene": "city",
    "ambientAudio": true,
    "category": "aviation",
    "subjects": [
      "客機",
      "停機坪"
    ],
    "discovery": {
      "query": "Aeroporto Salgado Filho Porto Alegre LIVE CAM 1",
      "match": [
        "Salgado Filho"
      ],
      "exclude": [
        "CAM 2"
      ]
    }
  },
  {
    "id": "santos-port",
    "city": "桑托斯 · 港口航道",
    "country": "巴西",
    "countryCode": "BR",
    "lat": -23.985,
    "lng": -46.3,
    "timeZone": "America/Sao_Paulo",
    "scene": "harbor",
    "ambientAudio": false,
    "silent": true,
    "category": "maritime",
    "subjects": [
      "貨櫃輪",
      "貨輪"
    ],
    "discovery": {
      "query": "Porto ao Vivo Entrada no Canal do Porto de Santos",
      "match": [
        "Porto de Santos"
      ]
    }
  },
  {
    "id": "barbados-airport",
    "city": "巴貝多 · 國際機場",
    "country": "巴貝多",
    "countryCode": "BB",
    "lat": 13.0746,
    "lng": -59.4925,
    "timeZone": "America/Barbados",
    "scene": "coast",
    "ambientAudio": true,
    "category": "aviation",
    "subjects": [
      "客機",
      "跑道"
    ],
    "discovery": {
      "query": "Barbados Live Airport Stream BGI",
      "match": [
        "Barbados"
      ]
    }
  },
  {
    "id": "sint-maarten-maho",
    "city": "聖馬丁島 · 瑪侯海灘",
    "country": "荷屬聖馬丁",
    "countryCode": "SX",
    "lat": 18.041,
    "lng": -63.119,
    "timeZone": "America/Lower_Princes",
    "scene": "coast",
    "ambientAudio": false,
    "category": "aviation",
    "subjects": [
      "客機",
      "跑道"
    ],
    "discovery": {
      "query": "SXM Airport LIVE 24/7 Sint Maarten Maho Beach",
      "match": [
        "SXM",
        "Maho Beach"
      ],
      "exclude": [
        "SHOWME"
      ]
    }
  },
  {
    "id": "montreal-yul",
    "city": "蒙特婁 · 杜魯道國際機場",
    "country": "加拿大",
    "countryCode": "CA",
    "lat": 45.4706,
    "lng": -73.7408,
    "timeZone": "America/Toronto",
    "scene": "city",
    "ambientAudio": false,
    "category": "aviation",
    "subjects": [
      "客機",
      "跑道"
    ],
    "discovery": {
      "query": "Montreal Trudeau Airport CYUL live webcam runway",
      "match": [
        "CYUL",
        "Montreal Trudeau",
        "Trudeau Airport"
      ]
    }
  },
  {
    "id": "laguardia",
    "city": "紐約 · 拉瓜迪亞機場",
    "country": "美國",
    "countryCode": "US",
    "lat": 40.7769,
    "lng": -73.874,
    "timeZone": "America/New_York",
    "scene": "city",
    "ambientAudio": false,
    "category": "aviation",
    "subjects": [
      "客機",
      "跑道"
    ],
    "discovery": {
      "query": "LGA Airport LIVE 24/7 LaGuardia New York",
      "match": [
        "LaGuardia"
      ]
    }
  },
  {
    "id": "baltimore-channel",
    "city": "巴爾的摩 · 港口航道",
    "country": "美國",
    "countryCode": "US",
    "lat": 39.215,
    "lng": -76.53,
    "timeZone": "America/New_York",
    "scene": "harbor",
    "ambientAudio": false,
    "silent": true,
    "category": "maritime",
    "subjects": [
      "貨櫃輪",
      "貨輪"
    ],
    "discovery": {
      "query": "Baltimore Shipping Channel StreamTime LIVE",
      "match": [
        "Baltimore Shipping Channel"
      ]
    }
  },
  {
    "id": "ashland-va",
    "city": "亞士蘭 · 維吉尼亞州",
    "country": "美國",
    "countryCode": "US",
    "lat": 37.759,
    "lng": -77.478,
    "timeZone": "America/New_York",
    "scene": "street",
    "ambientAudio": true,
    "category": "rail",
    "subjects": [
      "貨運列車",
      "客運列車"
    ],
    "discovery": {
      "query": "Ashland Virginia LIVE Train Camera PTZ",
      "match": [
        "Ashland, Virginia",
        "Ashland Virginia"
      ],
      "exclude": [
        "Fixed View"
      ]
    }
  },
  {
    "id": "horseshoe-curve",
    "city": "阿圖納 · 馬蹄彎",
    "country": "美國",
    "countryCode": "US",
    "lat": 40.497,
    "lng": -78.484,
    "timeZone": "America/New_York",
    "scene": "mountain",
    "ambientAudio": true,
    "category": "rail",
    "subjects": [
      "貨運列車"
    ],
    "discovery": {
      "query": "Horseshoe Curve Altoona LIVE Train Camera",
      "match": [
        "Horseshoe Curve"
      ]
    }
  },
  {
    "id": "welland-canal",
    "city": "科爾本港 · 韋蘭運河",
    "country": "加拿大",
    "countryCode": "CA",
    "lat": 42.887,
    "lng": -79.25,
    "timeZone": "America/Toronto",
    "scene": "harbor",
    "ambientAudio": true,
    "category": "maritime",
    "subjects": [
      "船閘",
      "貨輪"
    ],
    "discovery": {
      "query": "Port Colborne Welland Canal StreamTime LIVE",
      "match": [
        "Welland Canal",
        "Port Colborne"
      ]
    }
  },
  {
    "id": "soo-locks",
    "city": "蘇聖瑪麗 · 蘇船閘",
    "country": "美國",
    "countryCode": "US",
    "lat": 46.503,
    "lng": -84.35,
    "timeZone": "America/Detroit",
    "scene": "harbor",
    "ambientAudio": false,
    "silent": true,
    "category": "maritime",
    "subjects": [
      "船閘",
      "貨輪"
    ],
    "discovery": {
      "query": "Soo Locks Sault Ste Marie StreamTime LIVE",
      "match": [
        "Soo Locks"
      ]
    }
  },
  {
    "id": "elkhart",
    "city": "艾爾克哈特 · 印第安納州",
    "country": "美國",
    "countryCode": "US",
    "lat": 41.682,
    "lng": -85.976,
    "timeZone": "America/Indiana/Indianapolis",
    "scene": "city",
    "ambientAudio": true,
    "category": "rail",
    "subjects": [
      "貨運列車"
    ],
    "discovery": {
      "query": "Elkhart Indiana LIVE Train Camera PTZ",
      "match": [
        "Elkhart"
      ],
      "exclude": [
        "Fixed View"
      ]
    }
  },
  {
    "id": "chicago-midway",
    "city": "芝加哥 · 中途機場",
    "country": "美國",
    "countryCode": "US",
    "lat": 41.7868,
    "lng": -87.7522,
    "timeZone": "America/Chicago",
    "scene": "city",
    "ambientAudio": true,
    "category": "aviation",
    "subjects": [
      "客機",
      "跑道"
    ],
    "discovery": {
      "query": "Midway Airport Chicago StreamTime LIVE",
      "match": [
        "Midway Airport"
      ],
      "exclude": [
        "EarthCam"
      ]
    }
  },
  {
    "id": "fort-madison",
    "city": "麥迪遜堡 · 愛荷華州",
    "country": "美國",
    "countryCode": "US",
    "lat": 40.629,
    "lng": -91.315,
    "timeZone": "America/Chicago",
    "scene": "nature",
    "ambientAudio": true,
    "category": "rail",
    "subjects": [
      "貨運列車"
    ],
    "discovery": {
      "query": "Fort Madison Iowa LIVE Train Camera PTZ",
      "match": [
        "Fort Madison"
      ],
      "exclude": [
        "Marina",
        "Fixed View",
        "Steel Highway"
      ]
    }
  },
  {
    "id": "mississippi-lock-19",
    "city": "基奧卡克 · 密西西比河19號船閘",
    "country": "美國",
    "countryCode": "US",
    "lat": 40.394,
    "lng": -91.374,
    "timeZone": "America/Chicago",
    "scene": "harbor",
    "ambientAudio": true,
    "category": "maritime",
    "subjects": [
      "船閘",
      "駁船"
    ],
    "discovery": {
      "query": "Mississippi River Lock 19 Keokuk StreamTime LIVE",
      "match": [
        "Lock 19"
      ]
    }
  },
  {
    "id": "duluth-canal",
    "city": "杜魯斯 · 運河口",
    "country": "美國",
    "countryCode": "US",
    "lat": 46.779,
    "lng": -92.093,
    "timeZone": "America/Chicago",
    "scene": "harbor",
    "ambientAudio": true,
    "category": "maritime",
    "subjects": [
      "貨輪",
      "升降橋"
    ],
    "discovery": {
      "query": "Duluth Harbor Cam Canal Cam",
      "match": [
        "Canal Cam"
      ]
    }
  },
  {
    "id": "flagstaff",
    "city": "旗竿鎮 · 亞利桑那州",
    "country": "美國",
    "countryCode": "US",
    "lat": 35.198,
    "lng": -111.648,
    "timeZone": "America/Phoenix",
    "scene": "mountain",
    "ambientAudio": true,
    "category": "rail",
    "subjects": [
      "貨運列車",
      "客運列車"
    ],
    "discovery": {
      "query": "Flagstaff Arizona LIVE Train Camera PTZ",
      "match": [
        "Flagstaff"
      ],
      "exclude": [
        "Fixed View"
      ]
    }
  },
  {
    "id": "las-vegas-airport",
    "city": "拉斯維加斯 · 哈利瑞德機場",
    "country": "美國",
    "countryCode": "US",
    "lat": 36.084,
    "lng": -115.1537,
    "timeZone": "America/Los_Angeles",
    "scene": "city",
    "ambientAudio": false,
    "category": "aviation",
    "subjects": [
      "客機",
      "跑道"
    ],
    "discovery": {
      "query": "LAS Vegas Airport LIVE 24/7 26R 26L",
      "match": [
        "LAS Vegas Airport"
      ]
    }
  },
  {
    "id": "lax-north",
    "city": "洛杉磯 · 國際機場北跑道",
    "country": "美國",
    "countryCode": "US",
    "lat": 33.9425,
    "lng": -118.4081,
    "timeZone": "America/Los_Angeles",
    "scene": "city",
    "ambientAudio": false,
    "category": "aviation",
    "subjects": [
      "客機",
      "跑道"
    ],
    "discovery": {
      "query": "LAX Airport Action Runways 24L 24R LIVE 24/7",
      "match": [
        "LAX Airport"
      ],
      "exclude": [
        "25L"
      ]
    }
  },
  {
    "id": "tehachapi",
    "city": "特哈查比 · 鐵道博物館",
    "country": "美國",
    "countryCode": "US",
    "lat": 35.131,
    "lng": -118.449,
    "timeZone": "America/Los_Angeles",
    "scene": "mountain",
    "ambientAudio": true,
    "category": "rail",
    "subjects": [
      "貨運列車"
    ],
    "discovery": {
      "query": "Tehachapi Live Train Cams Depot Railroad Museum",
      "match": [
        "Tehachapi"
      ],
      "exclude": [
        "Loop"
      ]
    }
  },
  {
    "id": "skykomish",
    "city": "斯凱科米什 · 華盛頓州",
    "country": "美國",
    "countryCode": "US",
    "lat": 47.709,
    "lng": -121.359,
    "timeZone": "America/Los_Angeles",
    "scene": "mountain",
    "ambientAudio": true,
    "category": "rail",
    "subjects": [
      "貨運列車"
    ],
    "discovery": {
      "query": "Skykomish Washington LIVE Train Camera",
      "match": [
        "Skykomish"
      ]
    }
  },
  {
    "id": "vancouver-canada-place",
    "city": "溫哥華 · 加拿大廣場郵輪碼頭",
    "country": "加拿大",
    "countryCode": "CA",
    "lat": 49.2888,
    "lng": -123.1111,
    "timeZone": "America/Vancouver",
    "scene": "harbor",
    "ambientAudio": true,
    "category": "maritime",
    "subjects": [
      "郵輪",
      "水上飛機"
    ],
    "discovery": {
      "query": "Vancouver LIVE Cam Cruise Ship Canada Place",
      "match": [
        "Canada Place"
      ]
    }
  },
  {
    "id": "lake-hood",
    "city": "安克拉治 · 胡德湖水上飛機場",
    "country": "美國",
    "countryCode": "US",
    "lat": 61.18,
    "lng": -149.972,
    "timeZone": "America/Anchorage",
    "scene": "nature",
    "ambientAudio": true,
    "category": "aviation",
    "subjects": [
      "水上飛機"
    ],
    "discovery": {
      "query": "Lake Hood Seaplane Base Anchorage StreamTime LIVE",
      "match": [
        "Lake Hood"
      ]
    }
  }
];
