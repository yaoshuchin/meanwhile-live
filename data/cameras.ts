// 129 Cameras Database for Meanwhile
export interface Camera {
  id: string;
  city: string;
  country: string;
  countryCode: string;
  lat: number;
  lng: number;
  timeZone: string;
  scene: 'city' | 'street' | 'nature' | 'coast' | 'mountain' | 'harbor';
  ambientAudio: boolean;
  silent?: boolean;
  discovery: { query: string; match?: string[]; exclude?: string[] };
  description: string;
  descriptionEn?: string;
  descriptionJa?: string;
  defaultVideoId: string;
}

export const CAMERAS: Camera[] = [
  {
    "id": "auckland",
    "city": "奧克蘭",
    "country": "紐西蘭",
    "countryCode": "NZ",
    "lat": -36.8485,
    "lng": 174.7633,
    "timeZone": "Pacific/Auckland",
    "scene": "harbor",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Auckland live cam New Zealand",
      "match": [
        "Auckland"
      ]
    },
    "description": "天空塔與港灣同框。紐西蘭三分之一的人口住在這一座城市裡。",
    "descriptionEn": "The Sky Tower and the harbour in one frame. A third of New Zealand lives in this single city.",
    "descriptionJa": "スカイタワーと港が同じ画面に入ります。ニュージーランドの人口の3分の1が、この一つの街に住んでいます。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "wellington",
    "city": "威靈頓",
    "country": "紐西蘭",
    "countryCode": "NZ",
    "lat": -41.2866,
    "lng": 174.7756,
    "timeZone": "Pacific/Auckland",
    "scene": "harbor",
    "ambientAudio": false,
    "silent": true,
    "discovery": {
      "query": "Wellington live cam New Zealand harbour",
      "match": [
        "Wellington"
      ]
    },
    "description": "紐西蘭首都，以風大聞名。這台對著萊爾灣的海灘，浪幾乎沒有停過的時候。",
    "descriptionEn": "New Zealand's capital, famous for its wind. This camera watches Lyall Bay, where the surf almost never stops.",
    "descriptionJa": "ニュージーランドの首都で、風の強さで知られます。このカメラはライアル湾の浜に向いていて、波の立たない時間はほとんどありません。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "hobart",
    "city": "荷伯特",
    "country": "澳洲",
    "countryCode": "AU",
    "lat": -42.8826,
    "lng": 147.3257,
    "timeZone": "Australia/Hobart",
    "scene": "harbor",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Hobart Tasmania live cam",
      "match": [
        "Hobart",
        "Tasmania"
      ]
    },
    "description": "塔斯馬尼亞的首府。從這裡往南，下一塊陸地就是南極洲。",
    "descriptionEn": "Tasmania's capital. Head south from here and the next land is Antarctica.",
    "descriptionJa": "タスマニアの州都。ここから南へ行くと、次の陸地は南極大陸です。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "sydney",
    "city": "雪梨",
    "country": "澳洲",
    "countryCode": "AU",
    "lat": -33.8568,
    "lng": 151.2153,
    "timeZone": "Australia/Sydney",
    "scene": "harbor",
    "ambientAudio": false,
    "silent": true,
    "discovery": {
      "query": "Sydney Harbour live cam Opera House",
      "match": [
        "Sydney",
        "Opera House"
      ]
    },
    "description": "港灣大橋與歌劇院同時在畫面裡。跨年煙火就是從那座橋上放的。",
    "descriptionEn": "The Harbour Bridge and the Opera House in a single shot. The New Year fireworks go up from that bridge.",
    "descriptionJa": "ハーバーブリッジとオペラハウスが同時に映ります。年越しの花火はあの橋から上がります。",
    "defaultVideoId": "sNf6N1C6d2c"
  },
  {
    "id": "melbourne",
    "city": "墨爾本",
    "country": "澳洲",
    "countryCode": "AU",
    "lat": -37.8136,
    "lng": 144.9631,
    "timeZone": "Australia/Melbourne",
    "scene": "city",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Melbourne live cam Australia",
      "match": [
        "Melbourne"
      ]
    },
    "description": "常年被評為全世界最宜居的城市之一。畫面通常是市區的一個十字路口。",
    "descriptionEn": "Regularly ranked among the most liveable cities in the world. The camera usually watches a downtown intersection.",
    "descriptionJa": "世界でもっとも住みやすい都市のひとつに、何年も選ばれてきました。映っているのはたいてい市街の交差点です。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "gold-coast",
    "city": "黃金海岸",
    "country": "澳洲",
    "countryCode": "AU",
    "lat": -28.0023,
    "lng": 153.4145,
    "timeZone": "Australia/Brisbane",
    "scene": "coast",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Gold Coast live cam Surfers Paradise",
      "match": [
        "Gold Coast",
        "Surfers Paradise"
      ]
    },
    "description": "衝浪者天堂。一整排高樓貼著沙灘蓋，下午大樓的影子會落到海裡。",
    "descriptionEn": "Surfers Paradise — a wall of towers built right against the sand, throwing their shadows onto the water each afternoon.",
    "descriptionJa": "サーファーズパラダイス。高層ビルが砂浜にぴたりと並んで建ち、午後にはビルの影が海に落ちます。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "brisbane",
    "city": "布里斯本",
    "country": "澳洲",
    "countryCode": "AU",
    "lat": -27.4698,
    "lng": 153.0251,
    "timeZone": "Australia/Brisbane",
    "scene": "city",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Brisbane live cam Australia",
      "match": [
        "Brisbane"
      ]
    },
    "description": "昆士蘭的首府，一年大約三百天是晴天。",
    "descriptionEn": "Queensland's capital, with around 300 sunny days a year.",
    "descriptionJa": "クイーンズランド州の州都で、一年のうち300日ほどが晴れです。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "cairns",
    "city": "凱恩斯",
    "country": "澳洲",
    "countryCode": "AU",
    "lat": -16.9203,
    "lng": 145.771,
    "timeZone": "Australia/Brisbane",
    "scene": "coast",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Cairns live cam Queensland",
      "match": [
        "Cairns"
      ]
    },
    "description": "前往大堡礁的門戶，潛水的船都從這裡出海。",
    "descriptionEn": "The gateway to the Great Barrier Reef — the dive boats all leave from here.",
    "descriptionJa": "グレートバリアリーフへの玄関口で、ダイビングの船はここから出ます。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "sapporo",
    "city": "札幌",
    "country": "日本",
    "countryCode": "JP",
    "lat": 43.0687,
    "lng": 141.3508,
    "timeZone": "Asia/Tokyo",
    "scene": "city",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Sapporo live camera 札幌 ライブカメラ",
      "match": [
        "Sapporo",
        "札幌"
      ]
    },
    "description": "北海道的首府。每年二月的雪祭會在市中心堆出好幾層樓高的雪雕。",
    "descriptionEn": "Hokkaido's capital. Every February its snow festival builds giant snow sculptures several storeys high downtown.",
    "descriptionJa": "北海道の中心、札幌。毎年2月のさっぽろ雪まつりでは、街なかにビル何階分もの雪像が並びます。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "hakodate",
    "city": "函館 · 函館山",
    "country": "日本",
    "countryCode": "JP",
    "lat": 41.7594,
    "lng": 140.704,
    "timeZone": "Asia/Tokyo",
    "scene": "city",
    "ambientAudio": false,
    "silent": true,
    "discovery": {
      "query": "函館山ライブカメラ 夜景 Mt. Hakodate",
      "match": [
        "函館山",
        "Mt. Hakodate"
      ]
    },
    "description": "日本三大夜景之一。攝影機在海拔 334 公尺的山頂，底下那片燈火被兩座海灣擠成一個葫蘆的形狀。",
    "descriptionEn": "One of Japan's three great night views. The camera sits at the 334 m summit; below it the lights of Hakodate are squeezed into an hourglass between two bays.",
    "descriptionJa": "日本三大夜景のひとつです。カメラは標高334mの山頂にあります。眼下の明かりが、二つの湾にはさまれてひょうたんの形にくびれています。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "tokyo-shibuya",
    "city": "東京 · 澀谷",
    "country": "日本",
    "countryCode": "JP",
    "lat": 35.6595,
    "lng": 139.7005,
    "timeZone": "Asia/Tokyo",
    "scene": "street",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Shibuya crossing live cam 渋谷 スクランブル交差点",
      "match": [
        "Shibuya",
        "渋谷"
      ]
    },
    "description": "澀谷全向十字路口。號誌一變，四面八方的人同時走進馬路中央，一次幾百人。",
    "descriptionEn": "The Shibuya scramble. When the lights change, hundreds of people step into the intersection from every direction at once.",
    "descriptionJa": "渋谷スクランブル交差点。信号が変わると、四方から一斉に数百人が道の真ん中へ歩き出します。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "tokyo-shinjuku",
    "city": "東京 · 新宿",
    "country": "日本",
    "countryCode": "JP",
    "lat": 35.6938,
    "lng": 139.7036,
    "timeZone": "Asia/Tokyo",
    "scene": "street",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Shinjuku live camera 新宿 ライブカメラ",
      "match": [
        "Shinjuku",
        "新宿"
      ]
    },
    "description": "歌舞伎町，日本最大的不夜城。招牌從傍晚一路亮到天亮。",
    "descriptionEn": "Kabukicho, Japan's largest nightlife district. The signs stay lit from dusk until morning.",
    "descriptionJa": "歌舞伎町、日本最大の歓楽街です。夕方に灯りはじめた看板が、朝まで消えません。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "tokyo-tower",
    "city": "東京 · 東京鐵塔",
    "country": "日本",
    "countryCode": "JP",
    "lat": 35.6586,
    "lng": 139.7454,
    "timeZone": "Asia/Tokyo",
    "scene": "city",
    "ambientAudio": false,
    "silent": true,
    "discovery": {
      "query": "現在の東京タワーライブカメラ",
      "match": [
        "東京タワー",
        "Tokyo Tower"
      ]
    },
    "description": "1958 年落成的東京鐵塔，高 333 公尺。這台由鐵塔官方架設，廣角仰拍整座塔，入夜後點燈。",
    "descriptionEn": "Tokyo Tower, 333 m tall and standing since 1958. This camera is the tower's own, looking up at the whole structure; it is lit after dark.",
    "descriptionJa": "1958年に完成した東京タワー、高さ333m。タワー公式のカメラで、真下から全体を見上げるアングルです。日が暮れるとライトアップされます。",
    "defaultVideoId": "6GflB-Y8s2o"
  },
  {
    "id": "tokyo-skytree",
    "city": "東京 · 晴空塔",
    "country": "日本",
    "countryCode": "JP",
    "lat": 35.7101,
    "lng": 139.8107,
    "timeZone": "Asia/Tokyo",
    "scene": "city",
    "ambientAudio": false,
    "silent": true,
    "discovery": {
      "query": "東京スカイツリーライブカメラ TOKYO SKY TREE Live Camera",
      "match": [
        "スカイツリー",
        "SKY TREE",
        "Skytree"
      ]
    },
    "description": "634 公尺的東京晴空塔，世界最高的塔。鏡頭從下町的屋頂遠眺，前景是一整片低矮的老街區。",
    "descriptionEn": "The 634 m Tokyo Skytree, the tallest tower in the world, seen across the low rooftops of the old downtown.",
    "descriptionJa": "高さ634m、世界一高いタワーの東京スカイツリー。下町の低い屋根の向こうに立つ姿を、遠くから眺めるカメラです。",
    "defaultVideoId": "0gE3yqD5z_Q"
  },
  {
    "id": "mount-fuji",
    "city": "富士山",
    "country": "日本",
    "countryCode": "JP",
    "lat": 35.5104,
    "lng": 138.7669,
    "timeZone": "Asia/Tokyo",
    "scene": "mountain",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Mount Fuji live camera 富士山 ライブ",
      "match": [
        "Fuji",
        "富士山",
        "富士"
      ]
    },
    "description": "攝影機在山腳，不是山頂。所以這裡的天氣是山腳的天氣，兩者可以差十幾度。",
    "descriptionEn": "The camera sits at the foot of the mountain, not the summit — so the weather shown is the weather down here, which can differ by more than 10°C.",
    "descriptionJa": "カメラがあるのは山頂ではなく麓です。ここに出ている天気も麓のもので、山頂とは10度以上違うこともあります。",
    "defaultVideoId": "8U1yS7-Fpvo"
  },
  {
    "id": "kyoto",
    "city": "京都",
    "country": "日本",
    "countryCode": "JP",
    "lat": 35.0116,
    "lng": 135.7681,
    "timeZone": "Asia/Tokyo",
    "scene": "street",
    "ambientAudio": false,
    "silent": true,
    "discovery": {
      "query": "Kyoto live camera 京都 ライブカメラ",
      "match": [
        "Kyoto",
        "京都"
      ]
    },
    "description": "清水坂，通往清水寺的那條坡道。整條都是老店，觀光客從早走到晚。",
    "descriptionEn": "Kiyomizu-zaka, the sloping lane up to Kiyomizu-dera. Old shops the whole way, and foot traffic from morning to night.",
    "descriptionJa": "清水寺へ続く坂道、清水坂です。道の両側はずっと老舗が並び、朝から晩まで人が絶えません。",
    "defaultVideoId": "y4yE3i2h38o"
  },
  {
    "id": "osaka-dotonbori",
    "city": "大阪 · 道頓堀",
    "country": "日本",
    "countryCode": "JP",
    "lat": 34.6687,
    "lng": 135.5013,
    "timeZone": "Asia/Tokyo",
    "scene": "street",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Dotonbori live cam 道頓堀 ライブ",
      "match": [
        "Dotonbori",
        "道頓堀",
        "グリコ"
      ]
    },
    "description": "道頓堀，那個舉著手的固力果跑者招牌就在這條河上。晚上整條街都是霓虹。",
    "descriptionEn": "Dotonbori — the canal with the giant running Glico man sign. After dark the whole street is neon.",
    "descriptionJa": "道頓堀。あの両手を上げたグリコの看板は、この川沿いにあります。夜になると通り一面がネオンです。",
    "defaultVideoId": "L3GvEsm9pZ8"
  },
  {
    "id": "fukuoka",
    "city": "福岡",
    "country": "日本",
    "countryCode": "JP",
    "lat": 33.5904,
    "lng": 130.4017,
    "timeZone": "Asia/Tokyo",
    "scene": "city",
    "ambientAudio": false,
    "silent": true,
    "discovery": {
      "query": "Fukuoka live camera 福岡 ライブカメラ",
      "match": [
        "Fukuoka",
        "福岡",
        "Hakata",
        "博多"
      ]
    },
    "description": "博多站前。這座城市的路邊攤文化是全日本最盛的，入夜後中洲的河邊會排開一整列。",
    "descriptionEn": "Outside Hakata station. Fukuoka has the strongest street-stall culture in Japan; after dark a whole row of them opens along the river in Nakasu.",
    "descriptionJa": "博多駅前。福岡は日本でいちばん屋台文化が盛んな街で、日が暮れると中洲の川沿いに屋台がずらりと並びます。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "nagasaki",
    "city": "長崎 · 鍋冠山",
    "country": "日本",
    "countryCode": "JP",
    "lat": 32.7345,
    "lng": 129.8686,
    "timeZone": "Asia/Tokyo",
    "scene": "harbor",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "鍋冠山カメラ 長崎 LIVE ライブカメラ",
      "match": [
        "鍋冠山",
        "Nabekanmuri"
      ]
    },
    "description": "海拔 169 公尺的鍋冠山，俯瞰長崎港。不夠高，所以看得夠近 —— 對岸山頭那盞紅光是稲佐山的電視塔。這台收得到聲音。",
    "descriptionEn": "Mt. Nabekanmuri, 169 m above Nagasaki harbour. Low enough that the city stays close instead of flattening into a map. The red glow on the far hill is the tower on Mt. Inasa. This one has sound.",
    "descriptionJa": "標高169mの鍋冠山から長崎港を見下ろします。高すぎないぶん、街が近いです。向かいの山の赤い灯りは稲佐山の電波塔。このカメラは音も入ります。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "okinawa",
    "city": "沖繩",
    "country": "日本",
    "countryCode": "JP",
    "lat": 26.2124,
    "lng": 127.6809,
    "timeZone": "Asia/Tokyo",
    "scene": "coast",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "沖縄 那覇 国際通り ライブカメラ",
      "match": [
        "Okinawa",
        "沖縄",
        "Naha",
        "那覇"
      ]
    },
    "description": "那霸的國際通，一條一點六公里長的商店街。沖繩的氣候和日本本島完全不同。",
    "descriptionEn": "Kokusai-dori in Naha, a 1.6 km shopping street. Okinawa's climate has nothing in common with mainland Japan.",
    "descriptionJa": "那覇の国際通り、1.6kmほど続く商店街です。沖縄の気候は本土とはまったく別もの。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "seoul",
    "city": "首爾",
    "country": "南韓",
    "countryCode": "KR",
    "lat": 37.5665,
    "lng": 126.978,
    "timeZone": "Asia/Seoul",
    "scene": "city",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Seoul live cam 서울 라이브",
      "match": [
        "Seoul",
        "서울",
        "Hangang",
        "한강"
      ]
    },
    "description": "漢江。這台架在江邊，看得到首爾的天際線和幾座跨江的大橋。",
    "descriptionEn": "The Han River. The camera sits on the bank, taking in the Seoul skyline and several of the bridges.",
    "descriptionJa": "漢江（ハンガン）です。カメラは川べりにあり、ソウルのスカイラインといくつもの橋が見えます。",
    "defaultVideoId": "J_rV0oQYQj4"
  },
  {
    "id": "busan",
    "city": "釜山",
    "country": "南韓",
    "countryCode": "KR",
    "lat": 35.1796,
    "lng": 129.0756,
    "timeZone": "Asia/Seoul",
    "scene": "coast",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Busan live cam 부산 라이브",
      "match": [
        "Busan",
        "부산",
        "Haeundae",
        "해운대"
      ]
    },
    "description": "海雲台海水浴場，韓國最有名的沙灘。夏天最熱的那幾天，一天能擠進十萬人。",
    "descriptionEn": "Haeundae Beach, Korea's most famous stretch of sand. On the hottest summer days it takes a hundred thousand people.",
    "descriptionJa": "海雲台（ヘウンデ）海水浴場、韓国でいちばん有名なビーチです。夏の暑い日には一日に10万人が集まることもあります。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "jeju",
    "city": "濟州 · 城山日出峰",
    "country": "南韓",
    "countryCode": "KR",
    "lat": 33.458,
    "lng": 126.9425,
    "timeZone": "Asia/Seoul",
    "scene": "coast",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "제주도 성산 실시간 라이브 캠",
      "match": [
        "성산",
        "Seongsan",
        "Sungsanilchulbong"
      ]
    },
    "description": "城山日出峰，五千年前從海裡炸出來的火山口，聯合國世界遺產。濟州是韓國外海的火山島，島中央那座是南韓最高峰。",
    "descriptionEn": "Seongsan Ilchulbong, a crater blown out of the sea about 5,000 years ago and a UNESCO World Heritage site. Jeju is a volcanic island off the Korean coast; the peak at its centre is the highest in South Korea.",
    "descriptionJa": "城山日出峰、5千年前に海から噴き出した火口で、世界遺産です。済州は韓国の沖にある火山島で、島の中央の山は韓国の最高峰です。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "taipei",
    "city": "台北",
    "country": "台灣",
    "countryCode": "TW",
    "lat": 25.033,
    "lng": 121.5654,
    "timeZone": "Asia/Taipei",
    "scene": "city",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Taipei live cam 台北 即時",
      "match": [
        "Taipei",
        "台北"
      ]
    },
    "description": "象山上的鏡頭，正對著 101。傍晚會看到整個台北盆地的燈亮起來。",
    "descriptionEn": "Shot from Elephant Mountain, looking straight at Taipei 101. At dusk you watch the whole basin light up.",
    "descriptionJa": "象山からのカメラで、台北101の正面です。夕方になると、台北盆地じゅうの灯りがつくのが見えます。",
    "defaultVideoId": "z_fY1pj_SS8"
  },
  {
    "id": "hongkong",
    "city": "香港",
    "country": "香港",
    "countryCode": "HK",
    "lat": 22.2833,
    "lng": 114.1588,
    "timeZone": "Asia/Hong_Kong",
    "scene": "harbor",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Hong Kong live cam Victoria Harbour 香港 直播",
      "match": [
        "Hong Kong",
        "香港",
        "Victoria Harbour"
      ]
    },
    "description": "維多利亞港。兩岸的高樓每晚八點會一起打燈，那是全世界最大的燈光秀之一。",
    "descriptionEn": "Victoria Harbour. At 8pm the towers on both shores light up together — one of the largest light shows anywhere.",
    "descriptionJa": "ビクトリア・ハーバー。両岸のビルが毎晩8時にいっせいにライトを灯します。世界最大級の光のショーです。",
    "defaultVideoId": "1v2_47nJt1E"
  },
  {
    "id": "mayon",
    "city": "馬榮火山",
    "country": "菲律賓",
    "countryCode": "PH",
    "lat": 13.1391,
    "lng": 123.7438,
    "timeZone": "Asia/Manila",
    "scene": "mountain",
    "ambientAudio": false,
    "silent": false,
    "discovery": {
      "query": "Mayon Volcano live",
      "match": [
        "Mayon"
      ]
    },
    "description": "菲律賓最有名的火山，以近乎完美的圓錐形出名。這台從南邊 14 公里的黎牙實比市區拍過去。它是全國最活躍的一座，警戒級別長年降不到零 —— 真進入噴發期時，夜裡看得到岩漿流下山坡。",
    "descriptionEn": "The Philippines' best-known volcano, famous for its near-perfect cone, seen from Legazpi 14 km south. Its alert level has not sat at zero in years, and in an eruptive phase lava runs down it after dark.",
    "descriptionJa": "フィリピンでもっとも有名な火山で、ほぼ完璧な円錐形で知られます。このカメラは南14kmのレガスピ市街から撮っています。国内でいちばん活発な山で、警戒レベルが長年ゼロに下がりません —— 噴火期に入ると、夜には溶岩が斜面を流れるのが見えます。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "singapore",
    "city": "新加坡",
    "country": "新加坡",
    "countryCode": "SG",
    "lat": 1.283,
    "lng": 103.86,
    "timeZone": "Asia/Singapore",
    "scene": "city",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Downtown Singapore live camera",
      "match": [
        "Singapore"
      ]
    },
    "description": "市中心的直落亞逸。左邊那排橘瓦屋頂是十九世紀的店屋，右邊就是玻璃帷幕的辦公大樓。赤道以北一度，沒有四季，一年到頭三十度上下加午後雷陣雨。",
    "descriptionEn": "Telok Ayer, downtown. The orange-tiled roofs on the left are 19th-century shophouses; the glass towers stand directly behind them. One degree north of the equator: no seasons, just 30°C and an afternoon storm.",
    "descriptionJa": "中心部のテロック・エアー。左に並ぶオレンジ瓦の屋根は19世紀のショップハウス、右はガラス張りのオフィスビルです。赤道から北へ1度、四季がなく、一年じゅう30度前後と午後のスコールです。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "kuala-lumpur",
    "city": "吉隆坡",
    "country": "馬來西亞",
    "countryCode": "MY",
    "lat": 3.1578,
    "lng": 101.7117,
    "timeZone": "Asia/Kuala_Lumpur",
    "scene": "city",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Kuala Lumpur live cam KLCC",
      "match": [
        "Kuala Lumpur",
        "KLCC"
      ]
    },
    "description": "雙子星塔曾經是世界最高的建築，兩塔之間那座空橋架在四十一樓。",
    "descriptionEn": "The Petronas Towers were once the tallest buildings on earth; the skybridge between them sits on the 41st floor.",
    "descriptionJa": "ペトロナスツインタワーは、かつて世界一高い建物でした。2棟をつなぐスカイブリッジは41階にあります。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "bali",
    "city": "峇里島",
    "country": "印尼",
    "countryCode": "ID",
    "lat": -8.718,
    "lng": 115.1686,
    "timeZone": "Asia/Makassar",
    "scene": "coast",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Bali live cam beach Indonesia",
      "match": [
        "Bali",
        "Canggu",
        "Seminyak",
        "Kuta"
      ]
    },
    "description": "印尼唯一以印度教為主的島。攝影機通常對著海邊，傍晚的日落是這裡的招牌。",
    "descriptionEn": "Indonesia's only majority-Hindu island. The cameras usually face the water, and the sunset is what people come for.",
    "descriptionJa": "インドネシアで唯一ヒンドゥー教が主流の島。カメラはたいてい海に向いていて、夕方の日没がこの島の看板です。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "jakarta",
    "city": "雅加達",
    "country": "印尼",
    "countryCode": "ID",
    "lat": -6.2088,
    "lng": 106.8456,
    "timeZone": "Asia/Jakarta",
    "scene": "city",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Jakarta live cam Indonesia",
      "match": [
        "Jakarta"
      ]
    },
    "description": "印尼首都，全世界塞車最嚴重的城市之一。這座城市正在以每年幾公分的速度下沉。",
    "descriptionEn": "Indonesia's capital, and one of the most congested cities on earth. It is also sinking several centimetres a year.",
    "descriptionJa": "インドネシアの首都で、世界でもっとも渋滞のひどい都市のひとつです。この街は年に数cmずつ沈んでいます。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "ho-chi-minh",
    "city": "胡志明市",
    "country": "越南",
    "countryCode": "VN",
    "lat": 10.7769,
    "lng": 106.7009,
    "timeZone": "Asia/Ho_Chi_Minh",
    "scene": "street",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Ho Chi Minh City live cam Saigon",
      "match": [
        "Ho Chi Minh",
        "Saigon"
      ]
    },
    "description": "舊名西貢。滿街的機車是這裡的招牌畫面 —— 全市登記了將近八百萬輛。",
    "descriptionEn": "Formerly Saigon. The wall of motorbikes is the signature view — nearly eight million are registered in the city.",
    "descriptionJa": "旧名サイゴン。通りを埋めるバイクが、この街を象徴する光景です —— 市内の登録台数は800万台近くにのぼります。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "bangkok",
    "city": "曼谷",
    "country": "泰國",
    "countryCode": "TH",
    "lat": 13.7563,
    "lng": 100.5018,
    "timeZone": "Asia/Bangkok",
    "scene": "city",
    "ambientAudio": false,
    "silent": true,
    "discovery": {
      "query": "Bangkok live cam Thailand",
      "match": [
        "Bangkok"
      ]
    },
    "description": "素坤逸路一帶的街景。這條路貫穿整個市區，是曼谷最長的一條路。",
    "descriptionEn": "A street view along Sukhumvit Road, which runs the whole way through the city and is the longest road in Bangkok.",
    "descriptionJa": "スクンビット通りあたりの街並み。市内を貫く、バンコクでいちばん長い通りです。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "hanoi",
    "city": "河內",
    "country": "越南",
    "countryCode": "VN",
    "lat": 21.0285,
    "lng": 105.8542,
    "timeZone": "Asia/Bangkok",
    "scene": "street",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Hanoi live cam Vietnam",
      "match": [
        "Hanoi",
        "Ha Noi"
      ]
    },
    "description": "越南首都。這台對著永賦橋，看得到紅河上的車流。",
    "descriptionEn": "Vietnam's capital. The camera faces the Vinh Tuy bridge and the traffic crossing the Red River.",
    "descriptionJa": "ベトナムの首都。このカメラは紅河にかかる橋に向いていて、橋の上の車の流れが見えます。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "koh-samui",
    "city": "蘇梅島",
    "country": "泰國",
    "countryCode": "TH",
    "lat": 9.512,
    "lng": 100.0136,
    "timeZone": "Asia/Bangkok",
    "scene": "coast",
    "ambientAudio": false,
    "silent": true,
    "discovery": {
      "query": "Koh Samui live webcam Bophut Chaweng",
      "match": [
        "Koh Samui",
        "Samui",
        "Bophut",
        "Chaweng"
      ]
    },
    "description": "波普漁人村。泰國第二大島，比普吉安靜得多。",
    "descriptionEn": "Fisherman's Village in Bophut. Thailand's second-largest island, and far quieter than Phuket.",
    "descriptionJa": "ボプット漁村。タイで2番目に大きな島で、プーケットよりずっと静かです。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "phuket",
    "city": "普吉島",
    "country": "泰國",
    "countryCode": "TH",
    "lat": 7.8804,
    "lng": 98.3923,
    "timeZone": "Asia/Bangkok",
    "scene": "coast",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Phuket live cam Thailand beach",
      "match": [
        "Phuket",
        "Patong",
        "Kata"
      ]
    },
    "description": "芭東的街上。泰國最大的島，也是最熱鬧的一個。",
    "descriptionEn": "A street in Patong. Phuket is Thailand's largest island and its busiest.",
    "descriptionJa": "パトンの通りです。タイ最大の島で、もっともにぎやかな場所でもあります。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "everest",
    "city": "聖母峰 · 昆布",
    "country": "尼泊爾",
    "countryCode": "NP",
    "lat": 27.8069,
    "lng": 86.714,
    "timeZone": "Asia/Kathmandu",
    "scene": "mountain",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Everest live cam Nepal Khumbu",
      "match": [
        "Everest",
        "Khumbu",
        "Namche"
      ],
      "exclude": [
        "ALLSKY"
      ]
    },
    "description": "昆布地區，聖母峰南側，海拔 3,880 公尺的旅館屋頂。這是一台朝正上方拍的全天空鏡頭，所以畫面是圓的 —— 白天看高山上的雲怎麼跑，入夜後看喜馬拉雅的星空。",
    "descriptionEn": "The Khumbu, on the Nepali side of Everest, from a hotel roof at 3,880 m. This is an all-sky camera pointed straight up, which is why the image is a circle: high-altitude cloud by day, Himalayan stars after dark.",
    "descriptionJa": "クンブ地方、エベレストの南側、標高3,880mの宿の屋上です。真上を向いた全天カメラなので映像は円い形をしています —— 昼は高山の雲の流れを、夜はヒマラヤの星空を映します。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "kathmandu",
    "city": "加德滿都",
    "country": "尼泊爾",
    "countryCode": "NP",
    "lat": 27.7172,
    "lng": 85.324,
    "timeZone": "Asia/Kathmandu",
    "scene": "city",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Kathmandu live cam Nepal",
      "match": [
        "Kathmandu"
      ]
    },
    "description": "尼泊爾首都，坐落在海拔一千四百公尺的盆地裡。天氣好的時候北邊看得到喜馬拉雅。",
    "descriptionEn": "Nepal's capital, in a valley at 1,400 m. On a clear day the Himalaya are visible to the north.",
    "descriptionJa": "ネパールの首都で、標高1,400mの盆地にあります。天気がよければ、北にヒマラヤが見えます。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "colombo",
    "city": "可倫坡",
    "country": "斯里蘭卡",
    "countryCode": "LK",
    "lat": 6.9271,
    "lng": 79.8612,
    "timeZone": "Asia/Colombo",
    "scene": "coast",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Colombo live cam Sri Lanka",
      "match": [
        "Colombo"
      ]
    },
    "description": "斯里蘭卡的最大城市與商業中心，就在印度洋的航線上。",
    "descriptionEn": "Sri Lanka's largest city and commercial hub, sitting right on the Indian Ocean shipping lanes.",
    "descriptionJa": "スリランカ最大の都市であり商業の中心で、インド洋の航路のすぐそばにあります。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "mumbai",
    "city": "孟買",
    "country": "印度",
    "countryCode": "IN",
    "lat": 19.076,
    "lng": 72.8777,
    "timeZone": "Asia/Kolkata",
    "scene": "city",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Mumbai live cam India",
      "match": [
        "Mumbai"
      ]
    },
    "description": "印度人口最多的城市，兩千萬人擠在一個半島上。寶萊塢在這裡。",
    "descriptionEn": "India's most populous city — twenty million people on one peninsula. Bollywood is here.",
    "descriptionJa": "インドで人口が最も多い都市で、2,000万人が一つの半島にひしめいています。ボリウッドはここにあります。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "dubai",
    "city": "杜拜",
    "country": "阿聯",
    "countryCode": "AE",
    "lat": 25.2048,
    "lng": 55.2708,
    "timeZone": "Asia/Dubai",
    "scene": "city",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Dubai live cam Burj Khalifa",
      "match": [
        "Dubai",
        "Burj Khalifa",
        "Dubai Marina"
      ]
    },
    "description": "哈里發塔 828 公尺，到今天仍然是世界第一高樓，而且領先第二名很多。",
    "descriptionEn": "The Burj Khalifa stands 828 m and is still the tallest building in the world, by a wide margin.",
    "descriptionJa": "ブルジュ・ハリファは828m。今も世界一高い建物で、2位を大きく引き離しています。",
    "defaultVideoId": "wX6qI-i0wzI"
  },
  {
    "id": "jerusalem",
    "city": "耶路撒冷",
    "country": "以色列",
    "countryCode": "IL",
    "lat": 31.7767,
    "lng": 35.2345,
    "timeZone": "Asia/Jerusalem",
    "scene": "city",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Jerusalem live cam Western Wall",
      "match": [
        "Jerusalem",
        "Western Wall",
        "Kotel"
      ]
    },
    "description": "猶太教、基督教與伊斯蘭教都視為聖地的城市。攝影機通常對著老城。",
    "descriptionEn": "A city held sacred by Judaism, Christianity and Islam alike. The camera usually watches the Old City.",
    "descriptionJa": "ユダヤ教、キリスト教、イスラム教のいずれもが聖地とする街。カメラはたいてい旧市街に向いています。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "istanbul",
    "city": "伊斯坦堡",
    "country": "土耳其",
    "countryCode": "TR",
    "lat": 41.0082,
    "lng": 28.9784,
    "timeZone": "Europe/Istanbul",
    "scene": "harbor",
    "ambientAudio": false,
    "silent": true,
    "discovery": {
      "query": "Istanbul live webcam Bosphorus",
      "match": [
        "Istanbul",
        "Bosphorus",
        "Bosporus",
        "Bogaz"
      ]
    },
    "description": "橫跨歐亞兩洲的城市，博斯普魯斯海峽把它切成兩半。海峽上永遠有船。",
    "descriptionEn": "A city on two continents, split by the Bosphorus. There is always a ship on the strait.",
    "descriptionJa": "ヨーロッパとアジアにまたがる街で、ボスポラス海峡が街を二つに分けています。海峡にはいつも船がいます。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "corfu",
    "city": "科孚島",
    "country": "希臘",
    "countryCode": "GR",
    "lat": 39.6243,
    "lng": 19.9217,
    "timeZone": "Europe/Athens",
    "scene": "coast",
    "ambientAudio": false,
    "silent": true,
    "discovery": {
      "query": "Corfu live webcam Arillas",
      "match": [
        "Corfu",
        "Kerkyra",
        "Arillas"
      ]
    },
    "description": "希臘西岸的島，這台在阿里拉斯的海灘上。愛奧尼亞海比愛琴海綠得多。",
    "descriptionEn": "An island off western Greece, with the camera on Arillas beach. The Ionian Sea runs far greener than the Aegean.",
    "descriptionJa": "ギリシャ西岸の島で、このカメラはアリラスの浜にあります。イオニア海はエーゲ海よりずっと緑がかっています。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "nairobi",
    "city": "奈洛比",
    "country": "肯亞",
    "countryCode": "KE",
    "lat": -1.2921,
    "lng": 36.8219,
    "timeZone": "Africa/Nairobi",
    "scene": "city",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Nairobi live cam Kenya",
      "match": [
        "Nairobi"
      ]
    },
    "description": "肯亞首都，也是全世界唯一在市區旁邊就有國家公園的首都 —— 獅子和天際線同框。",
    "descriptionEn": "The only capital city in the world with a national park on its doorstep — lions and skyline in the same view.",
    "descriptionJa": "ケニアの首都で、市街のすぐ横に国立公園がある世界で唯一の首都です —— ライオンとスカイラインが同じ画面に入ります。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "cape-town",
    "city": "開普敦",
    "country": "南非",
    "countryCode": "ZA",
    "lat": -33.9249,
    "lng": 18.4241,
    "timeZone": "Africa/Johannesburg",
    "scene": "coast",
    "ambientAudio": false,
    "silent": true,
    "discovery": {
      "query": "Cape Town live cam Table Mountain",
      "match": [
        "Cape Town",
        "Kaapstad",
        "Table Mountain",
        "Muizenberg"
      ]
    },
    "description": "桌山下的城市。那座山頂是平的，雲蓋上去的時候當地人叫它「桌布」。",
    "descriptionEn": "The city beneath Table Mountain. Its summit really is flat, and when cloud pours over it locals call it the tablecloth.",
    "descriptionJa": "テーブルマウンテンのふもとの街。あの山は頂上が平らで、雲がかかると地元の人は「テーブルクロス」と呼びます。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "bariloche",
    "city": "巴里洛切",
    "country": "阿根廷",
    "countryCode": "AR",
    "lat": -41.1335,
    "lng": -71.3103,
    "timeZone": "America/Argentina/Salta",
    "scene": "mountain",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Bariloche Patagonia camara en vivo",
      "match": [
        "Bariloche"
      ]
    },
    "description": "阿根廷的湖區，房子蓋成瑞士山屋的樣子。南半球的滑雪季在七、八月。",
    "descriptionEn": "Argentina's lake district, built to look like a Swiss alpine town. Being southern hemisphere, its ski season is July and August.",
    "descriptionJa": "アルゼンチンの湖水地方で、家はスイスの山小屋のように建てられています。南半球なのでスキーシーズンは7月と8月です。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "helsinki",
    "city": "赫爾辛基",
    "country": "芬蘭",
    "countryCode": "FI",
    "lat": 60.1699,
    "lng": 24.9384,
    "timeZone": "Europe/Helsinki",
    "scene": "harbor",
    "ambientAudio": false,
    "silent": true,
    "discovery": {
      "query": "Helsinki live cam Finland",
      "match": [
        "Helsinki"
      ]
    },
    "description": "南港碼頭。往愛沙尼亞的渡輪整天進出，兩小時就到對岸的塔林。",
    "descriptionEn": "The South Harbour. Ferries to Estonia come and go all day — Tallinn is two hours across the water.",
    "descriptionJa": "南港の埠頭です。エストニア行きのフェリーが一日じゅう出入りし、2時間で対岸のタリンに着きます。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "tallinn",
    "city": "塔林",
    "country": "愛沙尼亞",
    "countryCode": "EE",
    "lat": 59.437,
    "lng": 24.7536,
    "timeZone": "Europe/Tallinn",
    "scene": "city",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Tallinn live cam old town Estonia",
      "match": [
        "Tallinn"
      ]
    },
    "description": "完整保存的中世紀老城，城牆與塔樓幾乎原封不動。走進去像回到十四世紀。",
    "descriptionEn": "A medieval old town that survived almost intact, walls and towers included. Walking in feels like the 14th century.",
    "descriptionJa": "中世の旧市街がそのまま残り、城壁も塔もほとんど手つかずです。中に入ると14世紀に戻ったようです。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "athens",
    "city": "雅典",
    "country": "希臘",
    "countryCode": "GR",
    "lat": 37.9838,
    "lng": 23.7275,
    "timeZone": "Europe/Athens",
    "scene": "city",
    "ambientAudio": false,
    "silent": true,
    "discovery": {
      "query": "Athens live cam Acropolis",
      "match": [
        "Athens",
        "Acropolis",
        "Athina"
      ]
    },
    "description": "往衛城的方向看。山丘上的帕德嫩神廟蓋於西元前五世紀，比羅馬競技場早了五百年。",
    "descriptionEn": "Looking towards the Acropolis. The Parthenon on that hill went up in the 5th century BC — five centuries before the Colosseum.",
    "descriptionJa": "アクロポリスの方を向いています。丘の上のパルテノン神殿は紀元前5世紀の建築で、ローマのコロッセオより500年古い建物です。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "santorini",
    "city": "聖托里尼",
    "country": "希臘",
    "countryCode": "GR",
    "lat": 36.3932,
    "lng": 25.4615,
    "timeZone": "Europe/Athens",
    "scene": "coast",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Santorini live cam Oia",
      "match": [
        "Santorini",
        "Oia",
        "Fira",
        "Thira"
      ]
    },
    "description": "火山口邊緣的白色小鎮。整座島是一次巨大噴發留下的殘骸，那個弧形就是火山口的邊。",
    "descriptionEn": "White villages on the rim of a volcano. The whole crescent-shaped island is what a colossal eruption left behind.",
    "descriptionJa": "カルデラの縁に建つ白い町。島全体が一度の巨大噴火の跡で、あの弧を描く形がカルデラの縁です。",
    "defaultVideoId": "p8U8r7V8f6I"
  },
  {
    "id": "warsaw",
    "city": "華沙",
    "country": "波蘭",
    "countryCode": "PL",
    "lat": 52.2297,
    "lng": 21.0122,
    "timeZone": "Europe/Warsaw",
    "scene": "city",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Warsaw live cam Poland",
      "match": [
        "Warsaw",
        "Warszawa"
      ]
    },
    "description": "二戰時被夷平了九成。現在的老城是戰後照著十八世紀的畫作一棟一棟重建的。",
    "descriptionEn": "Ninety percent of it was flattened in the war. The old town was rebuilt afterwards, building by building, from 18th-century paintings.",
    "descriptionJa": "第二次大戦で9割が瓦礫になりました。今の旧市街は、戦後に18世紀の絵をもとに一棟ずつ建て直されたものです。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "budapest",
    "city": "布達佩斯",
    "country": "匈牙利",
    "countryCode": "HU",
    "lat": 47.4979,
    "lng": 19.0402,
    "timeZone": "Europe/Budapest",
    "scene": "city",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Budapest live cam Danube",
      "match": [
        "Budapest",
        "Duna"
      ]
    },
    "description": "多瑙河把城市切成兩半：布達在山丘上，佩斯在平地。原本是兩座城，1873 年才合併。",
    "descriptionEn": "The Danube splits the city in two — Buda on the hills, Pest on the flat. They were separate cities until 1873.",
    "descriptionJa": "ドナウ川が街を二つに分けています。ブダは丘の上、ペストは平地。もとは別々の街で、1873年に一つになりました。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "stockholm",
    "city": "斯德哥爾摩",
    "country": "瑞典",
    "countryCode": "SE",
    "lat": 59.3293,
    "lng": 18.0686,
    "timeZone": "Europe/Stockholm",
    "scene": "city",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Stockholm live cam Sweden",
      "match": [
        "Stockholm"
      ]
    },
    "description": "建在十四座島上的城市，走到哪裡都看得到水。",
    "descriptionEn": "A city built across fourteen islands — there is water at the end of almost every street.",
    "descriptionJa": "14の島の上に築かれた街で、どこへ行っても水が見えます。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "dubrovnik",
    "city": "杜布羅夫尼克",
    "country": "克羅埃西亞",
    "countryCode": "HR",
    "lat": 42.6507,
    "lng": 18.0944,
    "timeZone": "Europe/Zagreb",
    "scene": "coast",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Dubrovnik live cam Croatia old town",
      "match": [
        "Dubrovnik"
      ]
    },
    "description": "完整保留的中世紀城牆環繞著整座老城，《權力的遊戲》的君臨城在這裡拍的。",
    "descriptionEn": "A complete medieval wall rings the old town. This is where King’s Landing was filmed for Game of Thrones.",
    "descriptionJa": "中世の城壁がそのまま旧市街をぐるりと囲んでいます。『ゲーム・オブ・スローンズ』のキングズランディングはここで撮影されました。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "vienna",
    "city": "維也納",
    "country": "奧地利",
    "countryCode": "AT",
    "lat": 48.2082,
    "lng": 16.3738,
    "timeZone": "Europe/Vienna",
    "scene": "city",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Vienna live cam Stephansplatz",
      "match": [
        "Vienna",
        "Wien",
        "Stephansplatz"
      ]
    },
    "description": "史蒂芬廣場，市中心那座哥德式大教堂就在旁邊。這座城市連續多年被評為全球最宜居。",
    "descriptionEn": "Stephansplatz, beside the Gothic cathedral at the heart of the city. Vienna tops the liveability rankings year after year.",
    "descriptionJa": "シュテファン広場、すぐわきに市の中心となるゴシックの大聖堂が立っています。この街は何年も続けて「世界で最も住みやすい都市」に選ばれています。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "prague",
    "city": "布拉格",
    "country": "捷克",
    "countryCode": "CZ",
    "lat": 50.0755,
    "lng": 14.4378,
    "timeZone": "Europe/Prague",
    "scene": "street",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Prague live cam",
      "match": [
        "Prague",
        "Praha"
      ]
    },
    "description": "整座老城是世界遺產。二戰幾乎沒有被轟炸過，所以中世紀的樣子留得很完整。",
    "descriptionEn": "The whole old town is a World Heritage site. It was barely bombed in the war, so its medieval shape survives intact.",
    "descriptionJa": "旧市街がまるごと世界遺産です。第二次大戦でほとんど爆撃を受けなかったため、中世の姿がよく残っています。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "berlin",
    "city": "柏林",
    "country": "德國",
    "countryCode": "DE",
    "lat": 52.52,
    "lng": 13.405,
    "timeZone": "Europe/Berlin",
    "scene": "city",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Berlin live cam Brandenburg Gate",
      "match": [
        "Berlin",
        "Brandenburg"
      ]
    },
    "description": "目前這台在屋頂上，越過蒂爾加滕公園的樹看市區天際線。畫面右邊那片是施工的鷹架。",
    "descriptionEn": "The camera currently sits on a rooftop, looking across the trees of the Tiergarten to the city skyline. That sheeting on the right is scaffolding.",
    "descriptionJa": "今のカメラは屋上にあり、ティーアガルテンの木々越しに市街のスカイラインを見ています。画面右の一帯は工事の足場です。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "venice",
    "city": "威尼斯",
    "country": "義大利",
    "countryCode": "IT",
    "lat": 45.4408,
    "lng": 12.3155,
    "timeZone": "Europe/Rome",
    "scene": "harbor",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Venice live cam canal grande",
      "match": [
        "Venice",
        "Venezia",
        "Canal Grande",
        "Guglie"
      ],
      "exclude": [
        "Venice Beach",
        "Los Angeles"
      ]
    },
    "description": "沒有汽車的城市，所有東西都靠船運 —— 包括垃圾車和救護車。",
    "descriptionEn": "A city with no cars. Everything moves by boat, including the rubbish collection and the ambulances.",
    "descriptionJa": "車のない街で、何もかもが船で運ばれます —— ごみ収集車も救急車も船です。",
    "defaultVideoId": "HpZAez2oYSY"
  },
  {
    "id": "munich",
    "city": "慕尼黑",
    "country": "德國",
    "countryCode": "DE",
    "lat": 48.1351,
    "lng": 11.582,
    "timeZone": "Europe/Berlin",
    "scene": "city",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Munich live cam Marienplatz",
      "match": [
        "Munich",
        "Munchen",
        "Marienplatz"
      ]
    },
    "description": "十月啤酒節的城市。這台在市郊，看到的是慕尼黑人的日常，不是節慶。",
    "descriptionEn": "The home of Oktoberfest. This camera sits out in the suburbs, so what you see is ordinary Munich, not the festival.",
    "descriptionJa": "オクトーバーフェストの街です。このカメラは郊外にあり、映るのは祭りではなく、ミュンヘンの人たちの日常です。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "rome",
    "city": "羅馬",
    "country": "義大利",
    "countryCode": "IT",
    "lat": 41.9028,
    "lng": 12.4964,
    "timeZone": "Europe/Rome",
    "scene": "street",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Rome live cam Trevi Fountain",
      "match": [
        "Rome",
        "Roma",
        "Trevi"
      ]
    },
    "description": "目前這台對著梵蒂岡與聖彼得大教堂。那顆圓頂是米開朗基羅設計的。",
    "descriptionEn": "The camera currently faces the Vatican and St Peter’s Basilica. Michelangelo designed that dome.",
    "descriptionJa": "今のカメラはバチカンとサン・ピエトロ大聖堂に向いています。あのドームはミケランジェロの設計です。",
    "defaultVideoId": "o6vXfK3V_Gk"
  },
  {
    "id": "cinque-terre",
    "city": "五漁村 · 馬納羅拉",
    "country": "義大利",
    "countryCode": "IT",
    "lat": 44.1069,
    "lng": 9.7281,
    "timeZone": "Europe/Rome",
    "scene": "coast",
    "ambientAudio": false,
    "silent": true,
    "discovery": {
      "query": "Webcam Live Manarola Cinque Terre",
      "match": [
        "Manarola"
      ]
    },
    "description": "五漁村裡最上鏡的一座。房子一層層疊在懸崖上，底下是一個只容得下小船的港灣。這台架在對面山壁的餐廳露台，就是明信片的那個角度。",
    "descriptionEn": "The most photographed of the five villages. Houses stacked up the cliff above a harbour barely wide enough for the boats. The camera sits on a restaurant terrace across the ravine — the postcard angle.",
    "descriptionJa": "チンクエテッレでいちばん絵になる村。家が崖に何層にも重なり、下には小舟がやっと入る港があります。このカメラは向かいの崖のレストランのテラスにあり、ちょうど絵はがきの角度です。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "florence",
    "city": "佛羅倫斯",
    "country": "義大利",
    "countryCode": "IT",
    "lat": 43.7696,
    "lng": 11.2558,
    "timeZone": "Europe/Rome",
    "scene": "city",
    "ambientAudio": false,
    "silent": true,
    "discovery": {
      "query": "Florence live cam Duomo Italy",
      "match": [
        "Florence",
        "Firenze",
        "Duomo"
      ]
    },
    "description": "文藝復興的發源地。那顆磚紅色的大圓頂是百花大教堂，動工時沒有人知道怎麼撐住它。",
    "descriptionEn": "Where the Renaissance began. That brick-red dome is the Duomo — nobody knew how to hold one up when building started.",
    "descriptionJa": "ルネサンスが生まれた街。あのれんが色の大きなドームはサンタ・マリア・デル・フィオーレで、着工の時点では誰も支え方を知りませんでした。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "zurich",
    "city": "蘇黎世",
    "country": "瑞士",
    "countryCode": "CH",
    "lat": 47.3769,
    "lng": 8.5417,
    "timeZone": "Europe/Zurich",
    "scene": "city",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Zurich live cam Switzerland",
      "match": [
        "Zurich"
      ]
    },
    "description": "瑞士最大的城市，也是全世界物價最高的幾個城市之一。",
    "descriptionEn": "Switzerland's largest city, and one of the most expensive places to live anywhere.",
    "descriptionJa": "スイス最大の都市で、世界でもっとも物価の高い都市のひとつです。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "braunwald",
    "city": "布勞恩瓦德",
    "country": "瑞士",
    "countryCode": "CH",
    "lat": 46.9403,
    "lng": 8.9997,
    "timeZone": "Europe/Zurich",
    "scene": "mountain",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Braunwald Glarus Alps live cam Schweiz",
      "match": [
        "Braunwald",
        "Glarus",
        "Glarner"
      ]
    },
    "description": "瑞士格拉魯斯阿爾卑斯的小村，沒有對外道路，只能搭纜車上去。",
    "descriptionEn": "A village in the Glarus Alps with no road in — the only way up is by funicular.",
    "descriptionJa": "スイス・グラールスアルプスの小さな村。外に通じる道路がなく、ケーブルカーでしか上がれません。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "nice",
    "city": "尼斯",
    "country": "法國",
    "countryCode": "FR",
    "lat": 43.7102,
    "lng": 7.262,
    "timeZone": "Europe/Paris",
    "scene": "coast",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Nice live cam Promenade des Anglais",
      "match": [
        "Nice",
        "Promenade des Anglais"
      ]
    },
    "description": "英國人散步道，一條沿著地中海的海濱大道。名字來自十九世紀在這裡過冬的英國人。",
    "descriptionEn": "The Promenade des Anglais, running along the Mediterranean. It is named for the English who wintered here in the 1800s.",
    "descriptionJa": "プロムナード・デ・ザングレ、地中海沿いの遊歩道です。名前は19世紀にここで冬を越したイギリス人に由来します。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "amsterdam",
    "city": "阿姆斯特丹",
    "country": "荷蘭",
    "countryCode": "NL",
    "lat": 52.3676,
    "lng": 4.9041,
    "timeZone": "Europe/Amsterdam",
    "scene": "city",
    "ambientAudio": false,
    "silent": true,
    "discovery": {
      "query": "Amsterdam live cam canal",
      "match": [
        "Amsterdam"
      ]
    },
    "description": "水壩廣場。這座城市有一百六十多條運河，橋的數量比威尼斯還多。",
    "descriptionEn": "Dam Square. The city has more than 160 canals and more bridges than Venice.",
    "descriptionJa": "ダム広場。この街には160を超える運河があり、橋の数はベネチアより多いです。",
    "defaultVideoId": "x8k8_Jb-n0U"
  },
  {
    "id": "brussels",
    "city": "布魯塞爾",
    "country": "比利時",
    "countryCode": "BE",
    "lat": 50.8503,
    "lng": 4.3517,
    "timeZone": "Europe/Brussels",
    "scene": "city",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Brussels live cam Grand Place",
      "match": [
        "Brussels",
        "Bruxelles",
        "Grand Place"
      ]
    },
    "description": "大廣場。雨果說那是全歐洲最美的廣場，四周的行會建築全是金箔裝飾。",
    "descriptionEn": "The Grand-Place. Victor Hugo called it the most beautiful square in Europe; the guild houses are trimmed in gold leaf.",
    "descriptionJa": "グラン・プラス。ユーゴーはここをヨーロッパで最も美しい広場と呼びました。周りのギルドハウスはどれも金箔で飾られています。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "paris",
    "city": "巴黎 · 蒙馬特",
    "country": "法國",
    "countryCode": "FR",
    "lat": 48.8867,
    "lng": 2.3431,
    "timeZone": "Europe/Paris",
    "scene": "city",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Sacré-Coeur Montmartre Live Webcam Paris",
      "match": [
        "Sacré-Cœur",
        "Sacre-Coeur",
        "Montmartre"
      ]
    },
    "description": "蒙馬特山丘上的聖心堂，巴黎的制高點之一。屋頂那一片就是蒙馬特的老街區，夜裡打上燈。",
    "descriptionEn": "The Sacré-Cœur on the hill of Montmartre, one of the high points of Paris, above the old rooftops of the quarter. Floodlit at night.",
    "descriptionJa": "モンマルトルの丘に立つサクレ・クール寺院、パリを見下ろす場所のひとつです。屋根が連なっているあたりがモンマルトルの古い街並みで、夜はライトアップされます。",
    "defaultVideoId": "7a4Lp-i8u0c"
  },
  {
    "id": "barcelona",
    "city": "巴塞隆納",
    "country": "西班牙",
    "countryCode": "ES",
    "lat": 41.3874,
    "lng": 2.1686,
    "timeZone": "Europe/Madrid",
    "scene": "city",
    "ambientAudio": false,
    "silent": true,
    "discovery": {
      "query": "Barcelona live cam Spain",
      "match": [
        "Barcelona"
      ]
    },
    "description": "這台架在拜什-吉納多的屋頂上，往市區看。遠方天際線上那叢尖塔就是高第的聖家堂 —— 從 1882 年蓋到現在還沒完工。",
    "descriptionEn": "From a rooftop in Baix Guinardó, looking across the city. That cluster of spires on the far skyline is Gaudí's Sagrada Família, under construction since 1882 and still unfinished.",
    "descriptionJa": "このカメラはバイシ・ギナルドの屋上にあり、市街を見ています。遠くのスカイラインに突き出た尖塔の群れがガウディのサグラダ・ファミリア —— 1882年から今も工事中です。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "tamariu",
    "city": "塔馬留",
    "country": "西班牙",
    "countryCode": "ES",
    "lat": 41.9203,
    "lng": 3.2033,
    "timeZone": "Europe/Madrid",
    "scene": "coast",
    "ambientAudio": false,
    "silent": true,
    "discovery": {
      "query": "Tamariu Costa Brava live cam",
      "match": [
        "Tamariu"
      ]
    },
    "description": "西班牙布拉瓦海岸的小海灣，攝影機架在當地的帆船俱樂部上。",
    "descriptionEn": "A small cove on the Costa Brava, with the camera mounted on the local sailing club.",
    "descriptionJa": "スペイン・コスタブラバの小さな入り江。カメラは地元のヨットクラブの上に据えられています。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "oslo",
    "city": "奧斯陸",
    "country": "挪威",
    "countryCode": "NO",
    "lat": 59.9139,
    "lng": 10.7522,
    "timeZone": "Europe/Oslo",
    "scene": "harbor",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Oslo live cam Norway",
      "match": [
        "Oslo"
      ]
    },
    "description": "挪威首都。冬天下午三點多就天黑，夏天則幾乎不會全暗。",
    "descriptionEn": "Norway's capital. In midwinter it is dark by three in the afternoon; in summer it barely gets dark at all.",
    "descriptionJa": "ノルウェーの首都。冬は午後3時すぎに暗くなり、夏はほとんど真っ暗になりません。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "copenhagen",
    "city": "哥本哈根",
    "country": "丹麥",
    "countryCode": "DK",
    "lat": 55.6761,
    "lng": 12.5683,
    "timeZone": "Europe/Copenhagen",
    "scene": "harbor",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Copenhagen live cam Nyhavn",
      "match": [
        "Copenhagen",
        "Kobenhavn",
        "Nyhavn"
      ]
    },
    "description": "新港，那一排彩色的房子是明信片上的畫面。安徒生在其中一棟住過十八年。",
    "descriptionEn": "Nyhavn — the row of coloured houses from every postcard. Hans Christian Andersen lived in one of them for eighteen years.",
    "descriptionJa": "ニューハウン、あの色とりどりの家並みが絵はがきの風景です。アンデルセンはそのうちの一軒に18年間住んでいました。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "lofoten",
    "city": "羅弗敦群島",
    "country": "挪威",
    "countryCode": "NO",
    "lat": 68.21,
    "lng": 13.6,
    "timeZone": "Europe/Oslo",
    "scene": "coast",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Lofoten live cam Norway",
      "match": [
        "Lofoten",
        "Reine",
        "Svolvaer"
      ]
    },
    "description": "北極圈內的漁村群島，山直接從海裡長出來。這麼高的緯度卻不太結冰，因為墨西哥灣流。",
    "descriptionEn": "Fishing villages among mountains that rise straight out of the sea, inside the Arctic Circle — kept ice-free by the Gulf Stream.",
    "descriptionJa": "北極圏の漁村が連なる群島で、山が海からそのまま立ち上がっています。これほど高緯度なのにあまり凍らないのは、メキシコ湾流のおかげです。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "tromso",
    "city": "特羅姆瑟",
    "country": "挪威",
    "countryCode": "NO",
    "lat": 69.6492,
    "lng": 18.9553,
    "timeZone": "Europe/Oslo",
    "scene": "nature",
    "ambientAudio": false,
    "silent": true,
    "discovery": {
      "query": "Tromso live cam northern lights",
      "match": [
        "Tromso",
        "Vervet"
      ]
    },
    "description": "北極圈內的挪威城市，極光帶正下方。十一月到一月是極夜。",
    "descriptionEn": "A Norwegian city inside the Arctic Circle, directly under the auroral oval. From November to January the sun does not rise.",
    "descriptionJa": "北極圏のなかにあるノルウェーの街で、オーロラベルトの真下です。11月から1月は極夜になります。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "madrid",
    "city": "馬德里",
    "country": "西班牙",
    "countryCode": "ES",
    "lat": 40.4168,
    "lng": -3.7038,
    "timeZone": "Europe/Madrid",
    "scene": "city",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Madrid Puerta del Sol camara en vivo",
      "match": [
        "Madrid",
        "Puerta del Sol"
      ]
    },
    "description": "太陽門廣場。西班牙全國公路的里程，都是從這個廣場地上那塊標記開始算的。",
    "descriptionEn": "Puerta del Sol. Every road distance in Spain is measured from a marker set into this square.",
    "descriptionJa": "プエルタ・デル・ソル。スペイン全土の道路の距離は、この広場の地面にある標識から測りはじめます。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "bergen",
    "city": "卑爾根",
    "country": "挪威",
    "countryCode": "NO",
    "lat": 60.3913,
    "lng": 5.3221,
    "timeZone": "Europe/Oslo",
    "scene": "harbor",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Bergen live cam Bryggen Norway",
      "match": [
        "Bergen",
        "Bryggen"
      ]
    },
    "description": "布呂根碼頭那排歪斜的木造老屋。這裡一年下兩百多天的雨，是歐洲最濕的城市之一。",
    "descriptionEn": "The leaning wooden wharf houses of Bryggen. It rains on more than 200 days a year — among the wettest cities in Europe.",
    "descriptionJa": "ブリッゲン埠頭に傾いて並ぶ木造の古い建物。ここは年に200日以上雨が降り、ヨーロッパでもっとも雨の多い街のひとつです。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "london",
    "city": "倫敦",
    "country": "英國",
    "countryCode": "GB",
    "lat": 51.5074,
    "lng": -0.1278,
    "timeZone": "Europe/London",
    "scene": "street",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "London live cam street walk",
      "match": [
        "London"
      ],
      "exclude": [
        "Abbey Road"
      ]
    },
    "description": "目前這台在倫敦東北的沃爾瑟姆斯托，一條行人徒步街 —— 是真的日常，不是觀光區。",
    "descriptionEn": "The camera currently sits on a pedestrian street in Walthamstow, north-east London — everyday city, not the tourist route.",
    "descriptionJa": "今のカメラはロンドン北東部のウォルサムストウにある歩行者天国にあります —— 観光地ではなく、本当の日常です。",
    "defaultVideoId": "DDU-rZs-Ic4"
  },
  {
    "id": "abbey-road",
    "city": "倫敦 · 艾比路",
    "country": "英國",
    "countryCode": "GB",
    "lat": 51.5319,
    "lng": -0.1774,
    "timeZone": "Europe/London",
    "scene": "street",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Abbey Road crossing live cam London",
      "match": [
        "Abbey Road"
      ]
    },
    "description": "披頭四那張唱片封面的斑馬線。整天都有觀光客在那裡擺同一個姿勢拍照，然後被真的要過馬路的車按喇叭。",
    "descriptionEn": "The zebra crossing from the Beatles album cover. Tourists pose on it all day, and get honked at by drivers who actually need to get through.",
    "descriptionJa": "ビートルズのジャケットで有名な横断歩道。一日中、観光客が同じポーズで写真を撮っては、そこを通りたい車にクラクションを鳴らされています。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "edinburgh",
    "city": "愛丁堡",
    "country": "英國",
    "countryCode": "GB",
    "lat": 55.9533,
    "lng": -3.1883,
    "timeZone": "Europe/London",
    "scene": "city",
    "ambientAudio": false,
    "silent": true,
    "discovery": {
      "query": "Edinburgh live cam Scotland",
      "match": [
        "Edinburgh"
      ]
    },
    "description": "亞瑟王座，一座就在市中心的死火山。爬上去大約四十分鐘，可以俯瞰全城。",
    "descriptionEn": "Arthur's Seat, an extinct volcano in the middle of the city. Forty minutes up, and the whole town is below you.",
    "descriptionJa": "アーサーズ・シート、市の中心にある死火山です。登るのに40分ほどで、街全体を見渡せます。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "dublin",
    "city": "都柏林",
    "country": "愛爾蘭",
    "countryCode": "IE",
    "lat": 53.3498,
    "lng": -6.2603,
    "timeZone": "Europe/Dublin",
    "scene": "street",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Dublin live cam Temple Bar",
      "match": [
        "Dublin",
        "Temple Bar"
      ]
    },
    "description": "坦普爾酒吧區，愛爾蘭現場音樂的中心。晚上幾乎每一間酒吧都有人在演奏。",
    "descriptionEn": "Temple Bar, the centre of live music in Ireland. In the evening almost every pub has someone playing.",
    "descriptionJa": "テンプルバー地区、アイルランドのライブ音楽の中心です。夜になれば、ほとんどのパブで誰かが演奏しています。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "porto",
    "city": "波爾圖",
    "country": "葡萄牙",
    "countryCode": "PT",
    "lat": 41.1579,
    "lng": -8.6291,
    "timeZone": "Europe/Lisbon",
    "scene": "harbor",
    "ambientAudio": false,
    "silent": true,
    "discovery": {
      "query": "Porto live cam Douro Portugal",
      "match": [
        "Porto",
        "Douro",
        "Ribeira"
      ]
    },
    "description": "斗羅河口。波特酒就是沿著這條河從內陸的葡萄園運出來的。",
    "descriptionEn": "The mouth of the Douro. Port wine came down this river from the vineyards inland.",
    "descriptionJa": "ドウロ川の河口。ポートワインはこの川を下って、内陸のぶどう畑から運ばれてきました。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "reykjavik",
    "city": "雷克雅維克",
    "country": "冰島",
    "countryCode": "IS",
    "lat": 64.1466,
    "lng": -21.9426,
    "timeZone": "Atlantic/Reykjavik",
    "scene": "city",
    "ambientAudio": false,
    "silent": true,
    "discovery": {
      "query": "Reykjavik live cam Iceland",
      "match": [
        "Reykjavik"
      ]
    },
    "description": "這台越過海灣往北看埃斯亞山 —— 雷克雅維克的背景山，市區在鏡頭的這一側。世界最北的首都，整座城市的暖氣與熱水都來自地熱。",
    "descriptionEn": "Looking north across the bay at Mount Esja, the mountain that stands behind Reykjavík; the city itself is on this side of the camera. The world's northernmost capital, heated entirely by geothermal water.",
    "descriptionJa": "湾の向こうのエスヤ山を北に向いて見ています —— レイキャビクの背景の山で、市街はカメラのこちら側です。世界最北の首都で、街じゅうの暖房とお湯はすべて地熱でまかなわれています。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "djupivogur",
    "city": "久皮沃古爾",
    "country": "冰島",
    "countryCode": "IS",
    "lat": 64.6558,
    "lng": -14.2822,
    "timeZone": "Atlantic/Reykjavik",
    "scene": "harbor",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Djupivogur harbour live cam Iceland",
      "match": [
        "Djupivogur",
        "Djúpivogur"
      ]
    },
    "description": "冰島東部峽灣的小漁港，全鎮不到五百人。",
    "descriptionEn": "A small fishing harbour in the East Fjords of Iceland, home to fewer than five hundred people.",
    "descriptionJa": "アイスランド東部のフィヨルドにある小さな漁港で、町の人口は500人に届きません。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "faroe",
    "city": "法羅群島",
    "country": "法羅群島",
    "countryCode": "FO",
    "lat": 62.0079,
    "lng": -6.79,
    "timeZone": "Atlantic/Faroe",
    "scene": "coast",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Faroe Islands live cam",
      "match": [
        "Faroe",
        "Foroyar",
        "Torshavn"
      ]
    },
    "description": "北大西洋中間的十八座島，天氣一天可以變好幾次。羊比人多。",
    "descriptionEn": "Eighteen islands in the middle of the North Atlantic where the weather changes several times a day. There are more sheep than people.",
    "descriptionJa": "北大西洋のまんなかにある18の島。天気は一日に何度も変わります。人より羊のほうが多い場所です。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "azores",
    "city": "亞速爾群島",
    "country": "葡萄牙",
    "countryCode": "PT",
    "lat": 37.7412,
    "lng": -25.6756,
    "timeZone": "Atlantic/Azores",
    "scene": "coast",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Azores live cam Sao Miguel",
      "match": [
        "Azores",
        "Acores",
        "Sao Miguel",
        "Ponta Delgada"
      ]
    },
    "description": "大西洋正中央的火山群島，離歐洲和美洲都約一千五百公里。",
    "descriptionEn": "A volcanic archipelago in the middle of the Atlantic, about 1,500 km from both Europe and America.",
    "descriptionJa": "大西洋のまんなかにある火山群島で、ヨーロッパからもアメリカからもおよそ1,500kmです。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "st-johns",
    "city": "聖約翰斯",
    "country": "加拿大",
    "countryCode": "CA",
    "lat": 47.5615,
    "lng": -52.7126,
    "timeZone": "America/St_Johns",
    "scene": "harbor",
    "ambientAudio": false,
    "silent": true,
    "discovery": {
      "query": "St John's Newfoundland harbour live cam",
      "match": [
        "St. John's",
        "St John's",
        "Newfoundland",
        "Signal Hill"
      ]
    },
    "description": "北美最東端的城市，比南美洲還東 —— 這裡的時區比隔壁整整差半小時。這台由加拿大廣播公司架設，對著港灣。",
    "descriptionEn": "The easternmost city in North America — further east than South America, and its time zone is offset by a half hour from its neighbours. The camera is the CBC's, pointed at the harbour.",
    "descriptionJa": "北米でいちばん東にある街で、南米よりも東にあります —— 隣との時差が30分ずれます。カナダ放送協会が設置したカメラで、港に向いています。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "halifax",
    "city": "哈利法克斯",
    "country": "加拿大",
    "countryCode": "CA",
    "lat": 44.6488,
    "lng": -63.5752,
    "timeZone": "America/Halifax",
    "scene": "harbor",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Halifax live cam Nova Scotia",
      "match": [
        "Halifax"
      ]
    },
    "description": "加拿大東岸的港口。鐵達尼號沉沒後，一百多位罹難者被送到這裡安葬。",
    "descriptionEn": "A port on Canada's east coast. After the Titanic sank, more than a hundred of the dead were brought here and buried.",
    "descriptionJa": "カナダ東岸の港。タイタニック沈没のあと、100人を超える犠牲者がここへ運ばれて埋葬されました。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "boston",
    "city": "波士頓",
    "country": "美國",
    "countryCode": "US",
    "lat": 42.3601,
    "lng": -71.0589,
    "timeZone": "America/New_York",
    "scene": "city",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Boston live cam Massachusetts",
      "match": [
        "Boston"
      ]
    },
    "description": "從科學博物館的屋頂往外看，查爾斯河與札金大橋都在畫面裡。橋邊那條高架軌道跑的是綠線 —— 美國最古老的地鐵路線，1897 年就開始營運。",
    "descriptionEn": "From the roof of the Museum of Science, with the Charles River and the Zakim Bridge in frame. The elevated track beside it carries the Green Line — the oldest subway line in the United States, running since 1897.",
    "descriptionJa": "科学博物館の屋上から見ていて、チャールズ川とザキム橋が画面に入ります。橋のわきの高架を走るのはグリーンライン —— アメリカで最も古い地下鉄路線で、1897年から走っています。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "nyc-times-square",
    "city": "紐約 · 時代廣場",
    "country": "美國",
    "countryCode": "US",
    "lat": 40.758,
    "lng": -73.9855,
    "timeZone": "America/New_York",
    "scene": "street",
    "ambientAudio": false,
    "silent": true,
    "discovery": {
      "query": "Times Square live cam New York",
      "match": [
        "Times Square"
      ]
    },
    "description": "時代廣場。整面牆都是廣告螢幕，所以這裡永遠不會真正天黑。",
    "descriptionEn": "Times Square, where the walls are screens — so it never really gets dark here.",
    "descriptionJa": "タイムズスクエア。壁一面が広告のスクリーンなので、ここが本当に暗くなることはありません。",
    "defaultVideoId": "1-iS7LArMPA"
  },
  {
    "id": "nyc-brooklyn",
    "city": "紐約 · 布魯克林",
    "country": "美國",
    "countryCode": "US",
    "lat": 40.7061,
    "lng": -73.9969,
    "timeZone": "America/New_York",
    "scene": "city",
    "ambientAudio": false,
    "silent": true,
    "discovery": {
      "query": "Brooklyn Bridge live cam New York",
      "match": [
        "Brooklyn",
        "New York"
      ]
    },
    "description": "布魯克林大橋。1883 年通車，當時是世界上最長的懸索橋。",
    "descriptionEn": "The Brooklyn Bridge, opened in 1883 — the longest suspension bridge in the world at the time.",
    "descriptionJa": "ブルックリン橋。1883年の開通当時、世界でいちばん長い吊り橋でした。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "nyc-liberty",
    "city": "紐約 · 自由女神",
    "country": "美國",
    "countryCode": "US",
    "lat": 40.6892,
    "lng": -74.0445,
    "timeZone": "America/New_York",
    "scene": "harbor",
    "ambientAudio": false,
    "silent": false,
    "discovery": {
      "query": "EarthCam Statue of Liberty live",
      "match": [
        "Statue of Liberty",
        "Liberty"
      ]
    },
    "description": "隔著紐約港看自由女神，鏡頭在布魯克林這一側。女神像高 93 公尺（含基座），晚上會打燈。",
    "descriptionEn": "Lady Liberty across New York Harbor, seen from the Brooklyn side. She stands 93 m including the pedestal, and is floodlit at night.",
    "descriptionJa": "ニューヨーク港をはさんで自由の女神を望む、ブルックリン側のカメラです。台座を含めて高さ93m、夜はライトアップされます。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "niagara",
    "city": "尼加拉瀑布",
    "country": "加拿大",
    "countryCode": "CA",
    "lat": 43.0896,
    "lng": -79.0849,
    "timeZone": "America/Toronto",
    "scene": "nature",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Niagara Falls live cam",
      "match": [
        "Niagara"
      ]
    },
    "description": "尼加拉瀑布的加拿大側。水量大到畫面上永遠掛著一片白霧。",
    "descriptionEn": "The Canadian side of Niagara. The volume of water keeps a permanent cloud of spray in the frame.",
    "descriptionJa": "ナイアガラの滝のカナダ側。あまりの水量に、画面にはいつも白い水煙がかかっています。",
    "defaultVideoId": "Qe0E87F6_0w"
  },
  {
    "id": "toronto",
    "city": "多倫多",
    "country": "加拿大",
    "countryCode": "CA",
    "lat": 43.6532,
    "lng": -79.3832,
    "timeZone": "America/Toronto",
    "scene": "city",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Toronto live cam Canada",
      "match": [
        "Toronto"
      ]
    },
    "description": "西恩塔與安大略湖。那座塔曾經是世界最高的自立式建築，紀錄保持了三十二年。",
    "descriptionEn": "The CN Tower and Lake Ontario. It held the record for the tallest free-standing structure on earth for thirty-two years.",
    "descriptionJa": "CNタワーとオンタリオ湖。あの塔はかつて世界一高い自立式の建造物で、記録を32年間保ちました。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "washington",
    "city": "華盛頓",
    "country": "美國",
    "countryCode": "US",
    "lat": 38.9072,
    "lng": -77.0369,
    "timeZone": "America/New_York",
    "scene": "city",
    "ambientAudio": false,
    "silent": true,
    "discovery": {
      "query": "Washington DC live cam Capitol",
      "match": [
        "Washington DC",
        "Washington, D.C.",
        "Capitol"
      ]
    },
    "description": "這是從華盛頓紀念碑的頂端往外拍，所以那根 169 公尺的方尖碑本身不在畫面裡。華府有法規限制建築高度，這裡就是全市最高的視角。",
    "descriptionEn": "Shot from the top of the Washington Monument, so the 169 m obelisk itself is not in frame. Height limits across the district make this the highest viewpoint in the city.",
    "descriptionJa": "ワシントン記念塔の最上部から外を撮っているので、その169mのオベリスク自体は映りません。ワシントンには建物の高さを制限する法律があり、ここが市内でいちばん高い視点です。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "miami",
    "city": "邁阿密",
    "country": "美國",
    "countryCode": "US",
    "lat": 25.7617,
    "lng": -80.1918,
    "timeZone": "America/New_York",
    "scene": "coast",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Miami Beach live cam Florida",
      "match": [
        "Miami",
        "South Beach"
      ]
    },
    "description": "陽光島海灘。這一帶的沙是後來補上去的 —— 原本的沙灘早就被沖走了。",
    "descriptionEn": "Sunny Isles Beach. The sand here was imported; the original beach washed away decades ago.",
    "descriptionJa": "サニーアイルズビーチ。このあたりの砂はあとから入れたもので、もとの砂浜はとうに流されてしまいました。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "key-west",
    "city": "基韋斯特",
    "country": "美國",
    "countryCode": "US",
    "lat": 24.5551,
    "lng": -81.78,
    "timeZone": "America/New_York",
    "scene": "street",
    "ambientAudio": false,
    "silent": true,
    "discovery": {
      "query": "Key West live cam Duval Street",
      "match": [
        "Key West",
        "Duval",
        "Sloppy Joe"
      ]
    },
    "description": "美國本土最南端的小島。杜瓦街整條都是酒吧，日落時大家會聚到碼頭鼓掌。",
    "descriptionEn": "The southernmost island of the continental US. Duval Street is bars end to end, and at sunset people gather on the pier to applaud.",
    "descriptionJa": "アメリカ本土の最南端の島です。デュバル通りは一本まるごとバーが並び、日没には人が桟橋に集まって拍手をします。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "lima",
    "city": "利馬",
    "country": "祕魯",
    "countryCode": "PE",
    "lat": -12.0464,
    "lng": -77.0428,
    "timeZone": "America/Lima",
    "scene": "coast",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Lima Miraflores camara en vivo Peru",
      "match": [
        "Lima",
        "Miraflores"
      ]
    },
    "description": "祕魯首都。這座城市幾乎不下雨，卻整年被海霧籠罩 —— 它蓋在沙漠上。",
    "descriptionEn": "Peru's capital. It almost never rains here, yet sea fog covers the city most of the year. It is built on desert.",
    "descriptionJa": "ペルーの首都。ほとんど雨が降らないのに、一年じゅう海霧に覆われています —— 砂漠の上に建った街です。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "cusco",
    "city": "庫斯科",
    "country": "祕魯",
    "countryCode": "PE",
    "lat": -13.5319,
    "lng": -71.9675,
    "timeZone": "America/Lima",
    "scene": "mountain",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Cusco Plaza de Armas camara en vivo",
      "match": [
        "Cusco",
        "Cuzco"
      ]
    },
    "description": "印加帝國的首都，海拔 3400 公尺。去馬丘比丘的人都從這裡出發。",
    "descriptionEn": "The Inca capital, at 3,400 m. Everyone heading to Machu Picchu starts here.",
    "descriptionJa": "インカ帝国の都、標高3,400mです。マチュピチュへ向かう人はみなここから出発します。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "chicago",
    "city": "芝加哥",
    "country": "美國",
    "countryCode": "US",
    "lat": 41.8781,
    "lng": -87.6298,
    "timeZone": "America/Chicago",
    "scene": "city",
    "ambientAudio": false,
    "silent": true,
    "discovery": {
      "query": "Chicago live cam Illinois",
      "match": [
        "Chicago"
      ]
    },
    "description": "從威利斯大廈的觀景台往外看。摩天大樓這種建築形式就是在芝加哥誕生的。",
    "descriptionEn": "Looking out from the Willis Tower skydeck. The skyscraper as a building type was invented in this city.",
    "descriptionJa": "ウィリス・タワーの展望台から外を見ています。摩天楼という建築のかたちは、このシカゴで生まれました。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "new-orleans",
    "city": "紐奧良",
    "country": "美國",
    "countryCode": "US",
    "lat": 29.9511,
    "lng": -90.0715,
    "timeZone": "America/Chicago",
    "scene": "street",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "New Orleans live cam Bourbon Street",
      "match": [
        "New Orleans",
        "Bourbon Street"
      ]
    },
    "description": "法國區的波本街。爵士樂的發源地，深夜比白天熱鬧。",
    "descriptionEn": "Bourbon Street in the French Quarter. Jazz was born here, and it is busier at midnight than at noon.",
    "descriptionJa": "フレンチクォーターのバーボンストリート。ジャズが生まれた場所で、夜のほうが昼よりにぎやかです。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "cancun",
    "city": "坎昆",
    "country": "墨西哥",
    "countryCode": "MX",
    "lat": 21.1619,
    "lng": -86.8515,
    "timeZone": "America/Cancun",
    "scene": "coast",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Cancun playa camara en vivo",
      "match": [
        "Cancun"
      ]
    },
    "description": "加勒比海的度假區。海水是很不真實的藍綠色，因為海底是白色的石灰岩。",
    "descriptionEn": "A Caribbean resort strip. The water is an implausible turquoise because the seabed is white limestone.",
    "descriptionJa": "カリブ海のリゾート。海がうそのような青緑色なのは、海底が白い石灰岩だからです。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "austin",
    "city": "奧斯汀",
    "country": "美國",
    "countryCode": "US",
    "lat": 30.2672,
    "lng": -97.7431,
    "timeZone": "America/Chicago",
    "scene": "street",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Austin live cam Texas 6th Street",
      "match": [
        "Austin"
      ]
    },
    "description": "第六街，德州的現場音樂中心。這座城市自稱「世界live音樂之都」。",
    "descriptionEn": "Sixth Street, the live music heart of Texas. The city calls itself the Live Music Capital of the World.",
    "descriptionJa": "6thストリート、テキサスのライブ音楽の中心です。この街は自ら「世界のライブ音楽の首都」と名乗っています。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "mexico-city",
    "city": "墨西哥城",
    "country": "墨西哥",
    "countryCode": "MX",
    "lat": 19.4326,
    "lng": -99.1332,
    "timeZone": "America/Mexico_City",
    "scene": "city",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Ciudad de Mexico Zocalo camara en vivo",
      "match": [
        "Zocalo"
      ]
    },
    "description": "憲法廣場，全世界最大的城市廣場之一。腳下就是阿茲提克帝國首都的遺址。",
    "descriptionEn": "The Zócalo, one of the largest city squares in the world — built directly over the ruins of the Aztec capital.",
    "descriptionJa": "ソカロ、世界最大級の都市広場です。足の下にはアステカ帝国の都の遺跡が眠っています。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "denver",
    "city": "丹佛",
    "country": "美國",
    "countryCode": "US",
    "lat": 39.7392,
    "lng": -104.9903,
    "timeZone": "America/Denver",
    "scene": "city",
    "ambientAudio": false,
    "silent": true,
    "discovery": {
      "query": "Denver live cam Colorado",
      "match": [
        "Denver"
      ]
    },
    "description": "海拔剛好一英里，所以叫「一英里高的城市」。往西看就是洛磯山脈。",
    "descriptionEn": "Exactly one mile above sea level — hence the Mile High City. Look west and the Rockies begin.",
    "descriptionJa": "標高がちょうど1マイルなので「マイル・ハイ・シティ」と呼ばれます。西を向けばロッキー山脈です。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "jackson-hole",
    "city": "傑克森洞",
    "country": "美國",
    "countryCode": "US",
    "lat": 43.4799,
    "lng": -110.7624,
    "timeZone": "America/Denver",
    "scene": "mountain",
    "ambientAudio": false,
    "silent": true,
    "discovery": {
      "query": "Jackson Hole town square live cam",
      "match": [
        "Jackson Hole",
        "Jackson"
      ]
    },
    "description": "懷俄明州的小鎮廣場，這台攝影機在網路上有點名氣 —— 有一群人固定在看它，就只是看。",
    "descriptionEn": "A small-town square in Wyoming. This camera has a minor internet following of people who simply watch it.",
    "descriptionJa": "ワイオミング州の小さな町の広場。このカメラはネットで少し有名で、ただ見るためだけに通ってくる人たちがいます。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "san-diego",
    "city": "聖地牙哥",
    "country": "美國",
    "countryCode": "US",
    "lat": 32.7157,
    "lng": -117.1611,
    "timeZone": "America/Los_Angeles",
    "scene": "coast",
    "ambientAudio": false,
    "silent": true,
    "discovery": {
      "query": "San Diego live cam California",
      "match": [
        "San Diego",
        "La Jolla"
      ]
    },
    "description": "海港島。這裡一年到頭都是十幾二十度，常被說是全美天氣最好的城市。",
    "descriptionEn": "Harbor Island. Temperatures stay in the mild teens and twenties all year round — often called the best weather in America.",
    "descriptionJa": "ハーバーアイランド。一年じゅう10度台から20度台で、アメリカでいちばん天気のいい街だとよく言われます。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "los-angeles",
    "city": "洛杉磯",
    "country": "美國",
    "countryCode": "US",
    "lat": 34.0522,
    "lng": -118.2437,
    "timeZone": "America/Los_Angeles",
    "scene": "city",
    "ambientAudio": false,
    "silent": true,
    "discovery": {
      "query": "Los Angeles live cam Hollywood",
      "match": [
        "Los Angeles",
        "Hollywood",
        "Venice Beach"
      ]
    },
    "description": "好萊塢大道與高地大道口。畫面正中那道拱門是杜比劇院 —— 奧斯卡每年在裡面頒獎；腳下那條人行道就是星光大道。",
    "descriptionEn": "The corner of Hollywood and Highland. The arch in the middle of the frame is the Dolby Theatre, where the Oscars are handed out every year, and the pavement below it is the Walk of Fame.",
    "descriptionJa": "ハリウッド大通りとハイランド大通りの角。正面のアーチがドルビー・シアターで、毎年アカデミー賞の授賞式が行われます。足もとの歩道はウォーク・オブ・フェームです。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "san-francisco",
    "city": "舊金山",
    "country": "美國",
    "countryCode": "US",
    "lat": 37.7749,
    "lng": -122.4194,
    "timeZone": "America/Los_Angeles",
    "scene": "city",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "San Francisco live cam Golden Gate",
      "match": [
        "San Francisco",
        "Golden Gate"
      ]
    },
    "description": "從海灣看金門大橋。夏天常常整天被霧蓋住，當地人給那團霧取了名字叫 Karl。",
    "descriptionEn": "The Golden Gate seen across the bay. Summer here is often fog all day — locals have named it Karl.",
    "descriptionJa": "湾越しに見るゴールデンゲートブリッジ。夏は一日じゅう霧に包まれることが多く、地元の人はその霧にカールという名前をつけています。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "portland",
    "city": "波特蘭",
    "country": "美國",
    "countryCode": "US",
    "lat": 45.5152,
    "lng": -122.6784,
    "timeZone": "America/Los_Angeles",
    "scene": "city",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Portland live cam Oregon",
      "match": [
        "Portland"
      ],
      "exclude": [
        "LIVE TRAFFIC"
      ]
    },
    "description": "以獨立書店、精釀啤酒和玫瑰園出名。市區有一座只有六平方公尺的公園。",
    "descriptionEn": "Known for independent bookshops, craft beer and rose gardens. It also has a public park measuring six square metres.",
    "descriptionJa": "独立系書店、クラフトビール、バラ園で知られる街です。市内には6平方メートルしかない公園があります。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "seattle",
    "city": "西雅圖",
    "country": "美國",
    "countryCode": "US",
    "lat": 47.6062,
    "lng": -122.3321,
    "timeZone": "America/Los_Angeles",
    "scene": "city",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Seattle live cam Space Needle",
      "match": [
        "Seattle",
        "Space Needle",
        "UW Video"
      ]
    },
    "description": "華盛頓大學塔頂的攝影機，看整個西雅圖市區。天氣好的時候看得到太空針塔。",
    "descriptionEn": "A camera on a University of Washington rooftop looking across the city. On a clear day the Space Needle is visible.",
    "descriptionJa": "ワシントン大学の塔の上のカメラから、シアトルの市街を一望します。天気がよければスペースニードルも見えます。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "vancouver",
    "city": "溫哥華",
    "country": "加拿大",
    "countryCode": "CA",
    "lat": 49.2827,
    "lng": -123.1207,
    "timeZone": "America/Vancouver",
    "scene": "harbor",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Vancouver live cam Canada",
      "match": [
        "Vancouver"
      ]
    },
    "description": "加拿大廣場的郵輪碼頭。往阿拉斯加的船大多從這裡出發。",
    "descriptionEn": "The cruise terminal at Canada Place. Most ships bound for Alaska leave from here.",
    "descriptionJa": "カナダプレイスのクルーズ埠頭。アラスカ行きの船の多くがここから出ます。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "yukon",
    "city": "育空 · 白馬市",
    "country": "加拿大",
    "countryCode": "CA",
    "lat": 60.7212,
    "lng": -135.0568,
    "timeZone": "America/Whitehorse",
    "scene": "nature",
    "ambientAudio": false,
    "silent": true,
    "discovery": {
      "query": "Yukon aurora live camera Kaleido Lodge",
      "match": [
        "Yukon",
        "Kaleido",
        "Whitehorse"
      ]
    },
    "description": "育空的極光攝影機。要天黑和太陽活動夠強兩個條件同時成立，白天來一定是空的。當地午夜前後最強。",
    "descriptionEn": "An aurora camera in the Yukon. It needs darkness and an active sun at the same time, so by day there is nothing to see. Strongest around local midnight.",
    "descriptionJa": "ユーコンのオーロラカメラ。暗いことと太陽活動が強いこと、この二つがそろって見えます。昼間は何も映りません。現地の真夜中前後がいちばん強いです。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "rio",
    "city": "里約熱內盧",
    "country": "巴西",
    "countryCode": "BR",
    "lat": -22.9068,
    "lng": -43.1729,
    "timeZone": "America/Sao_Paulo",
    "scene": "coast",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Rio de Janeiro Copacabana camera ao vivo",
      "match": [
        "Rio de Janeiro",
        "Copacabana",
        "Ipanema"
      ]
    },
    "description": "科帕卡瓦納海灘。那條黑白波浪紋的人行道有四公里長，是里約的標誌。",
    "descriptionEn": "Copacabana. The black-and-white wave-patterned promenade runs four kilometres and is the symbol of Rio.",
    "descriptionJa": "コパカバーナ海岸。あの白黒の波模様の歩道は4kmにわたって続く、リオの象徴です。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "sao-paulo",
    "city": "聖保羅",
    "country": "巴西",
    "countryCode": "BR",
    "lat": -23.5505,
    "lng": -46.6333,
    "timeZone": "America/Sao_Paulo",
    "scene": "city",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Sao Paulo camera ao vivo Brasil",
      "match": [
        "Sao Paulo"
      ],
      "exclude": [
        "Santos"
      ]
    },
    "description": "目前這台在巴拉豐達車站看火車進出。這是南半球人口最多的城市，兩千兩百萬人。",
    "descriptionEn": "The camera currently watches trains at Barra Funda station. With 22 million people, it is the most populous city in the southern hemisphere.",
    "descriptionJa": "今のカメラはバラ・フンダ駅で、列車の出入りを見ています。南半球でいちばん人口の多い都市で、2,200万人が暮らしています。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "buenos-aires",
    "city": "布宜諾斯艾利斯",
    "country": "阿根廷",
    "countryCode": "AR",
    "lat": -34.6037,
    "lng": -58.3816,
    "timeZone": "America/Argentina/Buenos_Aires",
    "scene": "city",
    "ambientAudio": false,
    "silent": true,
    "discovery": {
      "query": "Buenos Aires webcam en vivo Argentina",
      "match": [
        "Buenos Aires"
      ]
    },
    "description": "鏡頭正對七月九日大道，那是全世界最寬的馬路，單向最多十六個車道。這裡是探戈的發源地，市中心確實是照巴黎的樣子蓋的。",
    "descriptionEn": "The camera faces Avenida 9 de Julio, the widest avenue in the world — up to sixteen lanes in one direction. This is the birthplace of tango, and the centre really was built in imitation of Paris.",
    "descriptionJa": "カメラは7月9日通りの正面にあります。世界でいちばん幅の広い道路で、片側が最大16車線。タンゴが生まれた街で、中心部はたしかにパリを手本に造られました。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "iguazu",
    "city": "伊瓜蘇瀑布",
    "country": "阿根廷",
    "countryCode": "AR",
    "lat": -25.6953,
    "lng": -54.4367,
    "timeZone": "America/Sao_Paulo",
    "scene": "nature",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Iguazu Falls live cam",
      "match": [
        "Iguazu",
        "Iguacu",
        "Iguassu"
      ]
    },
    "description": "巴西與阿根廷邊界上的瀑布群，兩百多道瀑布連成一片，比尼加拉寬得多。",
    "descriptionEn": "A wall of more than two hundred waterfalls on the Brazil–Argentina border — far wider than Niagara.",
    "descriptionJa": "ブラジルとアルゼンチンの国境にある滝群。200を超える滝が連なっていて、ナイアガラよりずっと横に広いです。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "patagonia",
    "city": "卡拉法特 · 巴塔哥尼亞",
    "country": "阿根廷",
    "countryCode": "AR",
    "lat": -50.3,
    "lng": -72.9,
    "timeZone": "America/Argentina/Rio_Gallegos",
    "scene": "mountain",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "El Calafate Patagonia camara en vivo",
      "match": [
        "Calafate",
        "Perito Moreno"
      ]
    },
    "description": "一組輪播的攝影機，在阿根廷湖、卡拉法特鎮與查爾騰之間切換 —— 切到查爾騰時，背後那排尖牙般的山就是菲茨羅伊峰。卡拉法特則是佩里托莫雷諾冰川的門戶。",
    "descriptionEn": "A rotating set of cameras, cycling between Lago Argentino, El Calafate and El Chaltén — on the El Chaltén view, the row of jagged peaks behind is Mount Fitz Roy. El Calafate is the gateway to Perito Moreno.",
    "descriptionJa": "切り替わりながら映すカメラで、アルヘンティーノ湖、エル・カラファテの町、エル・チャルテンのあいだを行き来します。エル・チャルテンに切り替わったとき、背後に牙のように並ぶ山がフィッツロイ。カラファテはペリト・モレノ氷河への入口です。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "anchorage",
    "city": "安克拉治",
    "country": "美國",
    "countryCode": "US",
    "lat": 61.2181,
    "lng": -149.9003,
    "timeZone": "America/Anchorage",
    "scene": "city",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Anchorage live cam Alaska",
      "match": [
        "Anchorage"
      ]
    },
    "description": "胡德湖水上飛機基地，全世界最忙的一座 —— 阿拉斯加很多地方沒有路，飛機就是公車。夏至前後一天有十九個小時的日照，冬至只剩五個半小時。",
    "descriptionEn": "Lake Hood, the busiest seaplane base in the world — much of Alaska has no roads, so the plane is the bus. Around the summer solstice there are 19 hours of daylight; at midwinter, five and a half.",
    "descriptionJa": "フッド湖の水上機基地、世界でいちばん発着の多い水上飛行場です —— アラスカには道路のない場所が多く、飛行機がバスの代わりです。夏至のころは日照が19時間、冬至には5時間半しかありません。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "kilauea",
    "city": "基拉韋亞火山",
    "country": "美國",
    "countryCode": "US",
    "lat": 19.4069,
    "lng": -155.2834,
    "timeZone": "Pacific/Honolulu",
    "scene": "mountain",
    "ambientAudio": false,
    "silent": false,
    "discovery": {
      "query": "Kilauea volcano live cam Hawaii",
      "match": [
        "Kilauea",
        "Halemaumau"
      ]
    },
    "description": "基拉韋亞的火山口。大部分時間只是一片黑色的岩漠，噴發期才會紅起來 —— 而它是全世界最活躍的火山之一。",
    "descriptionEn": "The Kīlauea crater. Most of the time it is a black rock desert; during an eruption it glows. It is one of the most active volcanoes on earth.",
    "descriptionJa": "キラウエアの火口です。ほとんどの時間はただの黒い岩の原で、赤くなるのは噴火のときだけ —— それでも世界で最も活発な火山のひとつです。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "maui",
    "city": "茂宜島",
    "country": "美國",
    "countryCode": "US",
    "lat": 20.7984,
    "lng": -156.3319,
    "timeZone": "Pacific/Honolulu",
    "scene": "coast",
    "ambientAudio": false,
    "silent": true,
    "discovery": {
      "query": "Maui live cam Hawaii",
      "match": [
        "Maui",
        "Lahaina",
        "Kaanapali"
      ]
    },
    "description": "威雷海灘。十二月到四月常常看得到座頭鯨 —— 牠們從阿拉斯加游來這裡生產。",
    "descriptionEn": "Wailea Beach. From December to April humpback whales are often visible — they swim down from Alaska to calve.",
    "descriptionJa": "ワイレアビーチ。12月から4月にはザトウクジラがよく見られます —— アラスカからここへ来て子を産みます。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "honolulu",
    "city": "檀香山",
    "country": "美國",
    "countryCode": "US",
    "lat": 21.3099,
    "lng": -157.8581,
    "timeZone": "Pacific/Honolulu",
    "scene": "coast",
    "ambientAudio": false,
    "silent": true,
    "discovery": {
      "query": "Honolulu live cam Waikiki",
      "match": [
        "Honolulu",
        "Waikiki",
        "Oahu"
      ]
    },
    "description": "威基基海灘。背後那座平頂的山是鑽石頭山，一座三十萬年前的火山口。",
    "descriptionEn": "Waikiki Beach. The flat-topped hill behind it is Diamond Head, a crater some 300,000 years old.",
    "descriptionJa": "ワイキキビーチ。背後の平らな頂の山がダイヤモンドヘッド、30万年前の火口です。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "nordkapp",
    "city": "北角 · 斯卡斯沃格",
    "country": "挪威",
    "countryCode": "NO",
    "lat": 71.1085,
    "lng": 25.783,
    "timeZone": "Europe/Oslo",
    "scene": "coast",
    "ambientAudio": false,
    "silent": true,
    "discovery": {
      "query": "Nordkapp Skarsvag live camera",
      "match": [
        "Nordkapp",
        "North Cape",
        "Skarsvag"
      ]
    },
    "description": "歐洲大陸最北端。夏天有午夜太陽，冬天有極夜，一年裡有兩個多月太陽不會升起。",
    "descriptionEn": "The northernmost point of mainland Europe. Midnight sun in summer; in winter the sun stays down for over two months.",
    "descriptionJa": "ヨーロッパ大陸の最北端。夏は白夜、冬は極夜で、一年のうち2か月あまり太陽が昇りません。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "rovaniemi",
    "city": "羅瓦涅米",
    "country": "芬蘭",
    "countryCode": "FI",
    "lat": 66.5039,
    "lng": 25.7294,
    "timeZone": "Europe/Helsinki",
    "scene": "city",
    "ambientAudio": false,
    "silent": true,
    "discovery": {
      "query": "Rovaniemi live camera Lapland",
      "match": [
        "Rovaniemi",
        "Lapland"
      ]
    },
    "description": "芬蘭拉普蘭的城市，剛好在北極圈上。官方認證的聖誕老人村在這裡。",
    "descriptionEn": "A city in Finnish Lapland sitting right on the Arctic Circle — and the official home of Santa Claus.",
    "descriptionJa": "フィンランド・ラップランドの街で、ちょうど北極線の上にあります。公認のサンタクロース村がここにあります。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "kilpisjarvi",
    "city": "基爾皮斯耶爾維",
    "country": "芬蘭",
    "countryCode": "FI",
    "lat": 69.0475,
    "lng": 20.7936,
    "timeZone": "Europe/Helsinki",
    "scene": "nature",
    "ambientAudio": false,
    "silent": true,
    "discovery": {
      "query": "Kilpisjarvi northern light live camera",
      "match": [
        "Kilpisjarvi",
        "Kilpisjärvi"
      ]
    },
    "description": "芬蘭最西北角，三國交界。冬天有極夜，那代表一整天都可能出現極光。",
    "descriptionEn": "Finland's far northwest corner, where three countries meet. In winter the sun never rises — which means the aurora can appear at any hour.",
    "descriptionJa": "フィンランド最北西の端、三か国の国境が接する場所です。冬は極夜になるため、一日じゅうオーロラの可能性があります。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "ilulissat",
    "city": "伊盧利薩特",
    "country": "格陵蘭",
    "countryCode": "GL",
    "lat": 69.2198,
    "lng": -51.0986,
    "timeZone": "America/Nuuk",
    "scene": "coast",
    "ambientAudio": true,
    "silent": false,
    "discovery": {
      "query": "Ilulissat icefjord live camera",
      "match": [
        "Ilulissat"
      ]
    },
    "description": "格陵蘭的冰河出海口，聯合國世界遺產。畫面裡漂著的白色東西是冰山，會慢慢移動。",
    "descriptionEn": "The mouth of a Greenland glacier, a UNESCO site. Those white shapes drifting across the water are icebergs.",
    "descriptionJa": "グリーンランドの氷河が海に出るところで、世界遺産です。画面に浮かんでいる白いものは氷山で、ゆっくり動いていきます。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "fairbanks",
    "city": "費爾班克斯",
    "country": "美國",
    "countryCode": "US",
    "lat": 64.8378,
    "lng": -147.7164,
    "timeZone": "America/Anchorage",
    "scene": "nature",
    "ambientAudio": false,
    "silent": true,
    "discovery": {
      "query": "Fairbanks Alaska aurora live camera",
      "match": [
        "Fairbanks"
      ]
    },
    "description": "阿拉斯加內陸，全世界看極光機率最高的城市之一。秋分與春分前後最活躍，一夜之中則是當地午夜前後。",
    "descriptionEn": "Interior Alaska, one of the likeliest places on earth to see the aurora. Activity peaks around the equinoxes, and within a night, around local midnight.",
    "descriptionJa": "アラスカ内陸、世界でもっともオーロラの出現率が高い街のひとつ。秋分と春分の前後、一晩のなかでは現地の真夜中前後が活発です。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "mount-washington",
    "city": "華盛頓山",
    "country": "美國",
    "countryCode": "US",
    "lat": 44.2705,
    "lng": -71.3033,
    "timeZone": "America/New_York",
    "scene": "mountain",
    "ambientAudio": false,
    "silent": true,
    "discovery": {
      "query": "Mount Washington Observatory live camera",
      "match": [
        "Mount Washington"
      ]
    },
    "description": "以「全世界天氣最惡劣的地方之一」出名。山頂測到過每小時 372 公里的風。",
    "descriptionEn": "Famous for some of the worst weather on earth — a gust of 372 km/h was recorded at the summit.",
    "descriptionJa": "「世界でもっとも天気の悪い場所のひとつ」として知られます。山頂では時速372kmの風が観測されたことがあります。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "northumberland",
    "city": "諾森伯蘭 · 克雷斯韋爾",
    "country": "英國",
    "countryCode": "GB",
    "lat": 55.2308,
    "lng": -1.5344,
    "timeZone": "Europe/London",
    "scene": "coast",
    "ambientAudio": false,
    "silent": true,
    "discovery": {
      "query": "Northumberland aurora cam live stream UK",
      "match": [
        "Northumberland",
        "Cresswell",
        "Embleton"
      ]
    },
    "description": "英格蘭北部的海岸，北緯 55 度。極光在多數人的印象裡是冰島的事，但太陽活動強的午夜前後這裡真的拍得到。",
    "descriptionEn": "The northern English coast at 55°N. Most people file the aurora under \"Iceland\" — but around midnight on a strong night it genuinely shows up here.",
    "descriptionJa": "イングランド北部の海岸、北緯55度。オーロラといえばアイスランドですが、太陽活動の強い夜の真夜中前後には、ここでも本当に映ります。",
    "defaultVideoId": "8H3nRCFVR6Y"
  },
  {
    "id": "ushuaia",
    "city": "烏斯懷亞",
    "country": "阿根廷",
    "countryCode": "AR",
    "lat": -54.8019,
    "lng": -68.303,
    "timeZone": "America/Argentina/Ushuaia",
    "scene": "harbor",
    "ambientAudio": false,
    "silent": true,
    "discovery": {
      "query": "Ushuaia Argentina webcam en vivo",
      "match": [
        "Ushuaia",
        "Beagle Channel"
      ]
    },
    "description": "世界最南端的城市，去南極的船大多從這裡出發。這裡的季節和北半球完全相反。",
    "descriptionEn": "The southernmost city in the world, and where most Antarctic voyages begin. Its seasons run opposite to the northern hemisphere.",
    "descriptionJa": "世界最南端の街。南極へ向かう船の多くがここから出ます。季節は北半球とちょうど逆です。",
    "defaultVideoId": "8H3nRCFVR6Y"
  }
];
