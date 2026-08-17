const media = {
  keelung: { image: "https://www.settour.com.tw/ss_img/poi/20210302/ef4a472b-0f90-46c3-9c88-71fb6d3df9d5.jpeg", credit: "東南旅遊（基隆廟口夜市）", source: "https://travel.klcg.gov.tw/TourContent.aspx?n=8059&s=558&sms=12550" },
  ferry: { image: "https://www.matsu-news.gov.tw/uploads/news/20230415224709_82.jpg", credit: "馬祖日報", source: "https://www.matsu-news.gov.tw/news/article/209339" },
  fuao: { image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Fuao%20Harbour%20%E7%A6%8F%E6%BE%B3%E6%B8%AF%20-%20panoramio.jpg?width=1200", credit: "lienyuan lee／Wikimedia Commons（CC BY 3.0）", source: "https://commons.wikimedia.org/wiki/File:Fuao_Harbour_%E7%A6%8F%E6%BE%B3%E6%B8%AF_-_panoramio.jpg" },
  market: { image: "https://img.fun-life.com.tw/mazu/lion-market/lion-market.jpg", credit: "捲毛阿偉", source: "https://awei45.tw/lion-market/" },
  beihai: { image: "https://celiamrg.com/wp-content/uploads/20210309225514_74.jpg", credit: "瑄瑄＆G先生", source: "https://www.matsu-nsa.gov.tw/zh-TW/attractions/1463" },
  dahan: { image: "https://www.matsu-news.gov.tw/uploads/news/20230808232205_29.jpg", credit: "南竿鄉公所／馬祖日報", source: "https://www.nankan.gov.tw/chhtml/Detail/2221?mcid=86569" },
  snack: { image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1400&q=82", credit: "Unsplash（傳統點心示意）", source: "https://www.tripadvisor.com.tw/Restaurant_Review-g1731586-d3200297-Reviews-A_Zhu_Di_Bing-Matsu.html" },
  tiebao: { image: "https://www.matsu-nsa.gov.tw/api/uploads/attractions/cccf38b68b384ec7a8b9b03c14a527d0.jpg", credit: "馬祖國家風景區", source: "https://www.matsu-nsa.gov.tw/zh-TW/islands/3" },
  jinsha: { image: "https://api.taiwantravelmap.com/Google/image/PlaceImage/724/202602091702953.jpg", credit: "台灣旅圖", source: "https://www.taiwantravelmap.com/taiwantravelmap/travel-724" },
  stay: { image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1400&q=82", credit: "Unsplash（旅宿示意）", source: "https://unsplash.com/" },
  statue: { image: "https://www.lnanews.com/imgnews/2017-08-07/e6s27xq2b86vbx1u5cv7koofe.jpg", credit: "人間通訊社", source: "https://www.matsu-nsa.gov.tw/zh-TW/attractions/1466" },
  cafe: { image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=82", credit: "Unsplash（海景咖啡示意）", source: "https://unsplash.com/" },
  dinner: { image: "https://pic.pimg.tw/olina155/1695015072-3815509577-g.jpg", credit: "在地料理示意", source: "https://www.matsu-nsa.gov.tw/zh-TW/foods" },
  bakery: { image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1400&q=82", credit: "Unsplash（烘焙點心示意）", source: "https://unsplash.com/" },
  daqiu: { image: "images/daqiu.jpg", credit: "馬祖日報／景點家", source: "https://www.matsu-nsa.gov.tw/zh-TW/transport/island" },
  baisha: { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Baisha_Harbor_%E5%8C%97%E7%AB%BF%E7%99%BD%E6%B2%99%E6%B8%AF_20250913.jpg/1020px-Baisha_Harbor_%E5%8C%97%E7%AB%BF%E7%99%BD%E6%B2%99%E6%B8%AF_20250913.jpg", credit: "Terry850324／Wikimedia Commons（CC BY-SA 4.0）", source: "https://commons.wikimedia.org/wiki/File:Baisha_Harbor_%E5%8C%97%E7%AB%BF%E7%99%BD%E6%B2%99%E6%B8%AF_20250913.jpg" },
  apo: { image: "https://cdn.walkerland.com.tw/images/upload/poi/p116351/m26624/beb886bf35b10523538fb706b7ed78483f415647.jpg", credit: "WalkerLand（阿婆魚麵店）", source: "https://www.matsu-nsa.gov.tw/zh-TW/foods/2295" },
  shortSlope: { image: "https://cdn.4travel.jp/img/thumbnails/imk/tips_pict/19/52/36/650x450_19523641.jpg?updated_at=1699245951", credit: "4travel", source: "https://4travel.jp/os_shisetsu/10436986" },
  warPeace: { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/2013_0815_%E9%A6%AC%E7%A5%96_%E5%8C%97%E7%AB%BF56_%289677541143%29.jpg/1280px-2013_0815_%E9%A6%AC%E7%A5%96_%E5%8C%97%E7%AB%BF56_%289677541143%29.jpg", credit: "玄史生／Wikimedia Commons（CC BY-SA 2.0）", source: "https://www.matsu-nsa.gov.tw/zh-TW/attractions/1452" },
  tanghou: { image: "https://cdn.walkerland.com.tw/images/upload/article/2021/12/m121434/2467bf0f09fed1712e10103709a7d7c8d247c0ed.jpg", credit: "WalkerLand", source: "https://www.matsu-nsa.gov.tw/zh-TW/attractions/1444" },
  bishan: { image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Bishan_Lookout%2C_Beigan%2C_Matsu%2C_Taiwan.JPG", credit: "Shoestring／Wikimedia Commons（CC BY-SA 4.0）", source: "https://www.matsu-nsa.gov.tw/zh-TW/attractions/1446" },
  qiaozi: { image: "https://g.udn.com.tw/upfiles/B_CE/cetustar/PSN_PHOTO/680/f_28799680_1.jpg", credit: "鍾小殷的幸福玩樂趣", source: "https://blog.udn.com/cetustar/182293024" },
  qinwo: { image: "https://cdn.walkerland.com.tw/images/upload/poi/p144947/m96563/efa6fc0849d98125e830f7c0be61a5ebfecfc0bd.jpg", credit: "WalkerLand（芹沃咖啡烘焙館）", source: "https://supertaste.tvbs.com.tw/infocard/15052" },
  qinbi: { image: "https://www.matsu-nsa.gov.tw/api/uploads/attractions/%E8%8A%B9%E5%A3%81%E8%81%9A%E8%90%BD_%E5%8C%97%E7%AB%BF_2025_6.jpg", credit: "馬祖國家風景區", source: "https://www.matsu-nsa.gov.tw/zh-TW/album/1008" },
  broadcast: { image: "https://www.matsu-news.gov.tw/uploads/news/205820.JPG", credit: "馬祖日報", source: "https://www.matsu-news.gov.tw/news/article/136554" },
  banli: { image: "https://storage.googleapis.com/matsu/images/article_20267_1939df612b911e1c3b7551b66beea2ef.jpg", credit: "馬祖記憶庫", source: "https://matsumemory.tw/articles/20267" },
  banliBeach: { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Banli_Beach_%E5%9D%82%E9%87%8C%E6%B2%99%E7%81%98_-_panoramio.jpg/1280px-Banli_Beach_%E5%9D%82%E9%87%8C%E6%B2%99%E7%81%98_-_panoramio.jpg", credit: "lienyuan lee／Wikimedia Commons（CC BY 3.0）", source: "https://www.matsu-nsa.gov.tw/zh-TW/attractions/1443" },
  yima: { image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1400&q=82", credit: "Unsplash（閩式料理示意）", source: "https://supertaste.tvbs.com.tw/infocard/28246" },
  tunnel88: { image: "https://www.matsu-nsa.gov.tw/api/uploads/attractions/d20633a2cecb4d6d81f07e16a49417e2.jpg", credit: "馬祖國家風景區", source: "https://www.matsu-nsa.gov.tw/zh-TW/attractions/1457" },
  airport: { image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Matsu%20Nangan%20Airport%20%E9%A6%AC%E7%A5%96%E5%8D%97%E7%AB%BF%E6%A9%9F%E5%A0%B4.jpg?width=1200", credit: "riNux／Wikimedia Commons", source: "https://commons.wikimedia.org/wiki/File:Matsu_Nangan_Airport_%E9%A6%AC%E7%A5%96%E5%8D%97%E7%AB%BF%E6%A9%9F%E5%A0%B4.jpg" },
  plane: { image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=82", credit: "Unsplash（飛行示意）", source: "https://unsplash.com/" }
};

const spotCoordinates = {
  "d1-keelung": [25.1285516, 121.7428504],
  "d1-new-taima": [25.1355, 121.7394],
  "d2-fuao-arrival": [26.1617973, 119.9388028],
  "d2-jieshou": [26.1554183, 119.9513014],
  "d2-beihai-day": [26.1427263, 119.9291527],
  "d2-dahan": [26.140831, 119.9288696],
  "d2-azhu": [26.1424, 119.9297],
  "d2-tiebao": [26.1418655, 119.9209167],
  "d2-jinsha": [26.14535, 119.91305],
  "d2-muguang-checkin": [26.1455786, 119.9133025],
  "d2-mazu-statue": [26.1607743, 119.9169353],
  "d2-mazu-temple": [26.1583916, 119.9181111],
  "d2-seesea": [26.1589, 119.91855],
  "d2-dazhong": [26.15915, 119.91885],
  "d2-beihai-night": [26.1429, 119.92935],
  "d2-muguang-return": [26.14575, 119.91345],
  "d3-muguang-depart": [26.1455786, 119.9133025],
  "d3-meiweixuan": [26.15615, 119.9488],
  "d3-fuao-depart": [26.1617973, 119.9388028],
  "d3-daqiu": [26.2466914, 120.0000409],
  "d3-baisha-arrival": [26.2051624, 119.9685129],
  "d3-apo": [26.2242, 120.0011],
  "d3-short-slope": [26.2203863, 119.9956139],
  "d3-war-peace": [26.2256, 120.0083],
  "d3-tanghou": [26.2218, 120.0052],
  "d3-bishan": [26.2251857, 119.9926083],
  "d3-qiaozi": [26.2361, 119.9935],
  "d3-qinwo": [26.2251, 119.9816],
  "d3-qinbi": [26.2248, 119.98115],
  "d3-dazhai-checkin": [26.2143, 119.9746],
  "d4-dazhai-depart": [26.2143, 119.9746],
  "d4-broadcast": [26.2250227, 119.9790842],
  "d4-banli-breakfast": [26.21465, 119.9751],
  "d4-dazhai-luggage": [26.21445, 119.9748],
  "d4-banli-house": [26.2141, 119.97425],
  "d4-sweet-potato": [26.21425, 119.97405],
  "d4-banli-beach": [26.213857, 119.9741534],
  "d4-baisha-depart": [26.2051624, 119.9685129],
  "d4-fuao-arrival": [26.1617973, 119.9388028],
  "d4-yima": [26.1635408, 119.9529263],
  "d4-tunnel-88": [26.1603261, 119.9534301],
  "d4-nangan-airport": [26.1602813, 119.9585983],
  "d4-flight": [26.16045, 119.95885],
  "d4-songshan-arrival": [25.066477, 121.5548877]
};

function makeStop(day, index, config) {
  const asset = media[config.media] || media.stay;
  return {
    ...config,
    day,
    order: `D${day + 1} · ${String(index + 1).padStart(2, "0")}`,
    image: asset.image,
    credit: asset.credit,
    source: asset.source,
    coords: spotCoordinates[config.id],
    intro: config.intro || config.summary,
    tip: config.tip || "依現場狀況彈性調整，移動時請預留停車與找路時間。",
    best: config.best || config.time,
    map: config.map || config.name
  };
}

const itinerary = [
  [
    { id: "d1-keelung", time: "20:00", name: "基隆廟口夜市", area: "基隆", category: "晚餐", duration: "60 分鐘", media: "keelung", summary: "先吃港都小吃，再前往碼頭展開夜航。", intro: "基隆廟口夜市聚集鼎邊趖、天婦羅、滷肉飯與營養三明治。把晚餐安排在登船前，既能避免船上餐食選擇有限，也讓旅行從港口滋味開始。", tip: "21:00 左右離開夜市前往西岸旅客碼頭；容易暈船者避免吃得太油。", map: "基隆廟口夜市" },
    { id: "d1-new-taima", time: "21:30", name: "新臺馬輪", area: "基隆 → 南竿", category: "夜航交通", duration: "約 9.5 小時", media: "ferry", summary: "21:30 辦理登船，22:00 開航，睡醒抵達南竿。", intro: "新臺馬輪由基隆夜航馬祖。8 月 19 日為單號日，依單馬雙東原則先抵南竿；這一晚既是交通，也算旅程的第一晚住宿。", tip: "21:30 依票面與現場指示辦理登船；準備暈船藥、薄外套及隔天一早會用到的隨身物品。", best: "21:30 登船", map: "基隆西岸旅客碼頭" }
  ],
  [
    { id: "d2-fuao-arrival", time: "07:00", name: "南竿福澳碼頭", area: "南竿", category: "抵達", duration: "25 分鐘", media: "fuao", summary: "下船領行李，正式開始南竿環島。", tip: "先確認機車或接送交車位置，再前往介壽市場。", map: "南竿福澳港" },
    { id: "d2-jieshou", time: "07:35", name: "介壽獅子市場", area: "南竿介壽", category: "早餐", duration: "70 分鐘", media: "market", summary: "用鼎邊糊、虫弟餅與老酒麵線喚醒早晨。", intro: "介壽獅子市場是南竿最有生活感的清晨據點。一樓有蔬果與漁獲，二樓聚集馬祖早餐小吃。", tip: "市場越早品項越齊；多帶一些現金，方便分食不同攤位。" },
    { id: "d2-beihai-day", time: "09:15", name: "北海坑道（日間）", area: "南竿仁愛", category: "戰地坑道", duration: "70 分鐘", media: "beihai", summary: "先看坑道尺度與潮汐水道，晚上再回來搭搖櫓船。", intro: "北海坑道以人力開鑿於花崗岩中，井字形水道曾規劃停放軍用艇。白天沿步道觀察工程，晚上則會以完全不同的光線體驗水域。", tip: "官方原則 08:30–17:00 開放，但步道會受潮汐影響；出發前向南竿遊客中心確認。" },
    { id: "d2-dahan", time: "10:40", name: "大漢據點", area: "南竿仁愛", category: "戰地遺跡", duration: "25 分鐘", media: "dahan", summary: "沿海壁鑿出的多層坑道，曾扼守莒光水道。", intro: "大漢據點緊貼鐵板海岸，坑道保留砲陣地與生活空間，出口直接面向海峽。", tip: "官方 7/13 曾公告大漢及鐵堡暫停開放；請在 8/19 再確認，未恢復時改在外圍看海並把時間留給阿珠虫弟餅。" },
    { id: "d2-azhu", time: "11:20", name: "鐵板 阿珠虫弟餅", area: "南竿仁愛", category: "在地點心", duration: "15 分鐘", media: "snack", summary: "趁熱吃一顆酥脆虫弟餅，也可加點紅糟雞串。", intro: "虫弟餅以米漿與黃豆粉包住蔬菜、冬粉與肉餡後油炸，是馬祖代表性傳統點心。", tip: "現炸需要等候，若排隊過長可先電話詢問或外帶；別在正餐前一次點太多。", map: "鐵板 阿珠虫弟餅" },
    { id: "d2-tiebao", time: "11:40", name: "鐵堡（南竿 51 據點）", area: "南竿仁愛", category: "海上堡壘", duration: "40 分鐘", media: "tiebao", summary: "沿步道走向伸入海中的低伏軍事堡壘。", intro: "鐵堡位於仁愛村外海礁岩，內部坑道狹長，軍事設施與海岸地形緊密交疊。", tip: "官方 7/13 曾公告大漢及鐵堡暫停開放；若仍未開放，改至鐵堡外圍遠眺後提早前往津沙。" },
    { id: "d2-jinsha", time: "12:35", name: "津沙聚落", area: "南竿津沙", category: "百年聚落", duration: "80 分鐘", media: "jinsha", summary: "在石厝巷弄與海灣之間慢走，留一段午后空白。", intro: "津沙舊名金沙，閩東石厝依山面海。老宅、酒甕與沙灘保留聚落因漁業興衰留下的時間感。", tip: "正午炎熱，走主要巷弄與海灣即可；記得補水、防曬。" },
    { id: "d2-muguang-checkin", time: "14:10", name: "沐光民宿", area: "南竿", category: "入住休息", duration: "約 2 小時", media: "stay", summary: "辦理入住、放行李，避開午後最曬時段。", tip: "確認晚間回程門禁、停車位置與隔天 07:00 出發安排。", map: "沐光民宿 馬祖" },
    { id: "d2-mazu-statue", time: "16:20", name: "媽祖巨神像", area: "南竿馬港", category: "島嶼地標", duration: "30 分鐘", media: "statue", summary: "走上宗教文化園區，看 28.8 公尺高的海上守護者。", intro: "巨神像由 365 塊花崗岩構成，高度 28.8 公尺，象徵馬祖四鄉五島總面積與天天平安。", tip: "階梯較多，控制停留時間並留意強風；16:50 左右往下走接天后宮。" },
    { id: "d2-mazu-temple", time: "16:55", name: "馬祖境天后宮", area: "南竿馬港", category: "宗教文化", duration: "30 分鐘", media: "statue", summary: "走進馬祖信仰核心，感受島名與媽祖傳說的連結。", intro: "馬祖境天后宮是馬祖重要信仰中心，相傳媽祖靈穴位於此地，也是理解馬祖地名與海洋信仰的關鍵停靠。", tip: "參拜時保持安靜；若巨神像逗留較久，這裡仍至少保留 20 分鐘。" },
    { id: "d2-seesea", time: "17:40", name: "小柒咖啡｜無事 SEESEA", area: "南竿馬港", category: "咖啡休息", duration: "45 分鐘", media: "cafe", summary: "在晚餐前喝杯咖啡、看海，把步調放慢。", tip: "以飲品與簡單甜點為主，18:25 前離開前往大眾飲食店；出發前再確認當日營業。", map: "小柒咖啡 無事 SEESEA 馬祖" },
    { id: "d2-dazhong", time: "18:45", name: "馬港大眾飲食店", area: "南竿馬港", category: "晚餐", duration: "45 分鐘", media: "dinner", summary: "用魚麵、炒飯或家常菜快速吃完追淚前晚餐。", intro: "大眾飲食店是馬港家常小館，適合在前往北海坑道前吃一頓份量好控制的晚餐。", tip: "已預約 20:00 搖櫓船，建議 19:30 前結帳離開；勿飲酒，並預先叫好車或確認騎乘路線。", map: "大眾飲食店 馬祖村" },
    { id: "d2-beihai-night", time: "19:40 報到", name: "北海坑道夜間搖櫓船", area: "南竿仁愛", category: "藍眼淚體驗 · 已預約", duration: "約 60 分鐘", media: "beihai", summary: "20:00 梯次預約成功，19:40 前到坑道內報到。", intro: "夜間搖櫓船在黑暗的北海坑道水域進行，水中夜光藻受擾動時可能發出藍光。", tip: "夥伴表列 19:55，但官方帳號已要求提前 20 分鐘；網站保留 19:40 報到、購票與行前說明。藍眼淚為自然現象，亮度無法保證。", best: "20:00 已預約", map: "南竿北海坑道" },
    { id: "d2-muguang-return", time: "20:55", name: "沐光民宿", area: "南竿", category: "住宿", duration: "過夜", media: "stay", summary: "結束追淚行程，回民宿整理並提早休息。", tip: "整理隔天跳島行李，船票、證件、防曬與飲水放進隨身包。", map: "沐光民宿 馬祖" }
  ],
  [
    { id: "d3-muguang-depart", time: "07:00", name: "沐光民宿", area: "南竿", category: "出發", duration: "80 分鐘", media: "stay", summary: "退房出發，前往餅店與福澳碼頭。", tip: "確認行李都帶上，並再次查看大坵船班與海象。", map: "沐光民宿 馬祖" },
    { id: "d3-meiweixuan", time: "08:30", name: "美味軒餅店", area: "南竿", category: "早餐／補給", duration: "20 分鐘", media: "bakery", summary: "買餅、飲水與船上補給，準備大坵行程。", tip: "停留以外帶為主，08:50 離開才能準時到碼頭報到。", map: "美味軒餅店 馬祖" },
    { id: "d3-fuao-depart", time: "09:00 報到", name: "南竿福澳碼頭", area: "南竿", category: "大坵船班", duration: "30 分鐘", media: "fuao", summary: "09:00 報到，銜接官方 09:30 南竿往大坵旺季船班。", tip: "船班受海象與成行人數影響，務必持訂位資料提前報到；官方預約電話 0836-23255。", best: "09:30 開船", map: "南竿福澳港" },
    { id: "d3-daqiu", time: "10:00", name: "大坵島", area: "北竿外島", category: "梅花鹿島", duration: "100 分鐘", media: "daqiu", summary: "沿環島步道尋鹿，看無人島聚落與海蝕地形。", intro: "大坵曾有居民與駐軍，如今成為梅花鹿自由生活的無人島。環島步道能近距離觀察鹿群與海岸。", tip: "不追逐、不觸摸鹿角，也不要餵自帶食物；11:30 開始往碼頭走，官方船班 11:40 返航。" },
    { id: "d3-baisha-arrival", time: "12:10", name: "北竿白沙港", area: "北竿", category: "抵達／取車", duration: "10 分鐘", media: "baisha", summary: "大坵 11:40 返航，約 12:10 抵達白沙港開始北竿環島。", tip: "夥伴表列 12:00；依官方旺季船班調整為約 12:10 抵達，取車後直接前往塘岐。", map: "北竿白沙港" },
    { id: "d3-apo", time: "12:20", name: "阿婆魚麵店", area: "北竿塘岐", category: "午餐", duration: "50 分鐘", media: "apo", summary: "用一碗手工魚麵補充跳島後的體力。", intro: "魚麵把魚肉揉入麵糰，可煮湯、乾炒或炸成零嘴；阿婆魚麵店是塘岐代表性小吃。", tip: "抵達時間很緊，建議先電話確認座位與供餐；可點魚麵、魚丸、魚餃與炸魚麵。" },
    { id: "d3-short-slope", time: "13:20", name: "短坡山觀景台", area: "北竿", category: "島嶼展望", duration: "30 分鐘", media: "shortSlope", summary: "從高處看北竿機場、塘岐與海岸輪廓。", tip: "風大時避免靠近邊坡，拍完主要視角就出發。" },
    { id: "d3-war-peace", time: "14:00", name: "戰爭和平紀念公園主題館", area: "北竿", category: "戰地記憶", duration: "30 分鐘", media: "warPeace", summary: "用史料與軍事展示理解馬祖由前線走向日常。", tip: "週五正常開館；夏季下午 13:30–17:30，30 分鐘以主題館重點展區為主。" },
    { id: "d3-tanghou", time: "14:40", name: "塘後道沙灘", area: "北竿", category: "海岸散步", duration: "30 分鐘", media: "tanghou", summary: "在機場旁的沙洲短暫散步，看海與飛機交錯。", tip: "不下水，以拍照和吹海風為主；15:10 離開前往壁山。" },
    { id: "d3-bishan", time: "15:20", name: "壁山觀景臺", area: "北竿", category: "制高點", duration: "20 分鐘", media: "bishan", summary: "站上北竿最高點，把機場、聚落與離島收入眼底。", tip: "從停車處短停即可；能見度不佳時縮短停留，把時間留給橋仔。" },
    { id: "d3-qiaozi", time: "15:50", name: "橋仔聚落", area: "北竿", category: "漁村信仰", duration: "60 分鐘", media: "qiaozi", summary: "在陡坡石屋與廟宇之間，讀一座漁村的信仰密度。", tip: "村內坡度大，停車後以步行慢慢逛；17:00 前離開前往芹壁。" },
    { id: "d3-qinwo", time: "17:00", name: "芹沃咖啡烘焙館 Qinwo Bakery", area: "北竿芹壁", category: "晚餐／咖啡", duration: "50 分鐘", media: "qinwo", summary: "在海景前吃披薩、淡菜與現烤麵包。", intro: "芹沃把老酒、淡菜等馬祖風味放進披薩與創意料理，面海座位適合在芹壁散步前先用餐。", tip: "務必事先確認 17:00 是否可供餐並預訂座位；18:00 準時進芹壁看夕色。" },
    { id: "d3-qinbi", time: "18:00", name: "芹壁聚落", area: "北竿", category: "夕照聚落", duration: "85 分鐘", media: "qinbi", summary: "在石屋階梯間看傍晚光線與龜島海景。", intro: "芹壁是馬祖保存完整的閩東聚落之一。花崗岩石屋、紅瓦屋頂與海岸階梯依山展開。", tip: "天黑後石階較暗，19:20 左右往住宿移動；帶一盞小燈或使用手機照明。" },
    { id: "d3-dazhai-checkin", time: "19:35", name: "大宅三院青年旅舍／背包客棧", area: "北竿坂里", category: "住宿", duration: "過夜", media: "stay", summary: "入住北竿石厝旅宿，整理隔天返程行李。", tip: "確認隔天早餐、行李寄放或接送與白沙港還車安排。", map: "大宅三院青年旅舍 北竿" }
  ],
  [
    { id: "d4-dazhai-depart", time: "07:00", name: "大宅三院青年旅舍／背包客棧", area: "北竿坂里", category: "晨間出發", duration: "30 分鐘", media: "stay", summary: "輕裝晨遊，行李先留在住宿處。", tip: "帶雨具與證件，07:30 左右前往播音站。", map: "大宅三院青年旅舍 北竿" },
    { id: "d4-broadcast", time: "07:40", name: "馬祖播音站", area: "北竿芹壁", category: "戰地記憶", duration: "25 分鐘", media: "broadcast", summary: "巨型喇叭留下前線時代跨海傳聲的記憶。", intro: "冷戰時期馬祖播音站曾向對岸進行心戰廣播，今日可見的巨型綠色喇叭造景成為戰地記憶入口。", tip: "可拍照的是芹壁候車亭旁造景，並非山頂舊站本體；早晨停留 20–25 分鐘即可。" },
    { id: "d4-banli-breakfast", time: "08:20", name: "坂里早餐店", area: "北竿坂里", category: "早餐", duration: "30 分鐘", media: "bakery", summary: "回坂里吃早餐，補足最後半天體力。", tip: "出發前請住宿協助確認店家名稱、位置與週六營業狀況。", map: "坂里早餐店 北竿" },
    { id: "d4-dazhai-luggage", time: "09:00", name: "大宅三院青年旅舍／背包客棧", area: "北竿坂里", category: "整理行李", duration: "35 分鐘", media: "stay", summary: "回住宿整理、退房，確認港口接送或還車。", tip: "只帶隨身小包走坂里景點，大件行李請先與旅宿確認寄放與送港方式。", map: "大宅三院青年旅舍 北竿" },
    { id: "d4-banli-house", time: "09:50", name: "坂里大宅", area: "北竿坂里", category: "閩東建築", duration: "35 分鐘", media: "banli", summary: "走進百年古厝，看石與木如何守住一個家。", intro: "坂里大宅建於清代，厚實石牆、木構天井與生活空間呈現閩東建築因應海風的智慧。", tip: "參觀時降低音量；10:25 左右離開往附近黃金地瓜餃。" },
    { id: "d4-sweet-potato", time: "10:40", name: "坂里古厝黃金地瓜餃", area: "北竿坂里", category: "傳統點心", duration: "15 分鐘", media: "snack", summary: "吃一份花生芝麻餡的地瓜餃，替北竿留下甜味。", intro: "黃金地瓜餃以地瓜製成外皮，包入花生、芝麻與糖，可油炸，也能煮甜湯。", tip: "以外帶為主，先確認當日是否營業與是否需預訂。", map: "坂里古厝黃金地瓜餃" },
    { id: "d4-banli-beach", time: "11:00", name: "坂里沙灘", area: "北竿坂里", category: "海岸散步", duration: "30 分鐘", media: "banliBeach", summary: "從古厝走到平緩沙岸，吹最後一段北竿海風。", tip: "不下水並留意浪況；11:30 準時離開取行李、還車與前往港口。" },
    { id: "d4-baisha-depart", time: "11:45 報到", name: "北竿白沙港", area: "北竿", category: "島際船", duration: "20 分鐘", media: "baisha", summary: "11:45 抵港候船，預計 12:00 左右前往南竿。", tip: "船班以當日公告為準；先完成還車、領票與行李安置，不要把 11:45 當作開船時間。", best: "12:00 前後船班", map: "北竿白沙港" },
    { id: "d4-fuao-arrival", time: "12:25", name: "南竿福澳碼頭", area: "南竿", category: "抵達轉乘", duration: "10 分鐘", media: "fuao", summary: "抵達南竿後直接前往復興村午餐。", tip: "若船班延誤，先聯絡依嬤的店並壓縮午餐，不要壓縮機場報到緩衝。", map: "南竿福澳港" },
    { id: "d4-yima", time: "12:40", name: "依嬤的店", area: "南竿復興村", category: "午餐", duration: "80 分鐘", media: "yima", summary: "用紅糟、老酒與海味完成最後一頓馬祖風味餐。", intro: "依嬤的店提供紅糟炒飯、酒糟肉、淡菜與老酒料理，是集中品嘗馬祖家常味的好選擇。", tip: "務必預訂 12:40 並告知有 14:10 八八坑道行程；午後仍需搭機，勿飲酒。" },
    { id: "d4-tunnel-88", time: "14:10", name: "八八坑道", area: "南竿牛角", category: "酒香戰地", duration: "45 分鐘", media: "tunnel88", summary: "在恆溫坑道與酒香中，完成最後一個南竿景點。", intro: "八八坑道原為戰備坑道，恆溫恆濕環境後來成為陳年高粱與老酒的天然酒窖。", tip: "官方下午開放時段為 13:40–17:00；參觀前再次電話確認，14:55 必須離開前往機場。" },
    { id: "d4-nangan-airport", time: "15:15", name: "馬祖南竿機場", area: "南竿", category: "航班報到", duration: "約 3 小時", media: "airport", summary: "提早抵達機場，為天候、行李與報到保留足夠緩衝。", tip: "先辦理報到與托運，再於航廈休息；持續留意天候與航班動態。", map: "馬祖南竿機場" },
    { id: "d4-flight", time: "18:20", name: "南竿 → 台北航班", area: "南竿 → 松山", category: "回程飛行", duration: "50 分鐘", media: "plane", summary: "搭乘已確認的 18:20 班機返回台北。", tip: "登機時間依航空公司通知；若天候異常，依現場航務安排處理。", best: "18:20 起飛", map: "馬祖南竿機場" },
    { id: "d4-songshan-arrival", time: "19:10", name: "松山機場", area: "台北", category: "旅程抵達", duration: "行程結束", media: "plane", summary: "落地松山，四天三夜馬祖旅行完成。", tip: "領取行李後再安排返家交通；若航班延誤，以實際抵達時間為準。", map: "台北松山機場" }
  ]
];

const spots = itinerary.flatMap((dayStops, day) => dayStops.map((config, index) => makeStop(day, index, config)));

const foods = [
  { name: "老酒麵線", category: "main", label: "主食", priority: "必吃", icon: "麵", description: "以馬祖老酒、雞蛋與麻油煮成的暖胃麵線，酒香會依店家比例不同。", where: "依嬤的店、大眾飲食店、鏡沃小吃" },
  { name: "馬祖魚麵", category: "main", label: "主食", priority: "必吃", icon: "魚", description: "把魚肉揉進麵糰，可做湯麵、炒麵或炸魚麵，口感彈而鮮甜。", where: "8/21 阿婆魚麵店" },
  { name: "紅糟炒飯", category: "main", label: "主食", priority: "必吃", icon: "飯", description: "紅糟把米飯染成溫暖紅色，帶著淡淡發酵香，是馬祖餐桌代表。", where: "依嬤的店、蝦寮食堂、龍福山莊" },
  { name: "狗麵", category: "main", label: "主食", priority: "推薦", icon: "麵", description: "馬祖家常湯麵的名稱，通常搭配肉絲、海鮮或蔬菜，並不是狗肉。", where: "萬家香二店" },
  { name: "鼎邊糊", category: "main", label: "主食", priority: "推薦", icon: "湯", description: "米漿沿鍋邊燙成薄片，再加入海鮮、肉絲與高湯，清晨吃最對味。", where: "8/20 介壽獅子市場" },
  { name: "淡菜", category: "seafood", label: "海鮮料理", priority: "必吃", icon: "海", description: "馬祖代表性貝類，可清蒸、蒜炒、入披薩或與老酒同蒸。", where: "依嬤的店、芹沃、龍福山莊" },
  { name: "佛手", category: "seafood", label: "海鮮料理", priority: "季節限定", icon: "鮮", description: "外型像手指的藤壺類海鮮，剝殼吃肉；供應完全看季節與當天漁獲。", where: "用餐時詢問海鮮餐廳" },
  { name: "老酒蒸黃魚", category: "seafood", label: "海鮮料理", priority: "必吃", icon: "魚", description: "細嫩黃魚以老酒清蒸，鮮味與酒香平衡，適合多人分享。", where: "依嬤的店、津沙小館、蝦寮食堂" },
  { name: "紅糟肉", category: "seafood", label: "特色料理", priority: "必吃", icon: "糟", description: "豬肉以紅糟醃製後炸至外酥內嫩，鹹甜發酵香非常下飯。", where: "依嬤的店、蝦寮食堂" },
  { name: "紅糟鰻魚", category: "seafood", label: "特色料理", priority: "推薦", icon: "鰻", description: "鰻魚裹紅糟醬炸或燒製，是馬祖常見的傳統宴席料理。", where: "依嬤的店、風味合菜餐廳" },
  { name: "海鮮痛風鍋", category: "seafood", label: "海鮮料理", priority: "多人推薦", icon: "鍋", description: "淡菜、鮮蝦、小卷與當季漁獲集中一鍋，份量澎湃且需預訂。", where: "北竿海鮮餐廳（本次未排入）" },
  { name: "繼光餅", category: "snack", label: "傳統點心", priority: "必吃", icon: "餅", description: "中間帶孔的厚實燒餅，可單吃，也能夾蛋、紅糟肉或蚵蛋。", where: "寶利軒、北竿超群繼光餅" },
  { name: "虫弟餅／蠣餅", category: "snack", label: "傳統點心", priority: "必吃", icon: "酥", description: "粉漿包入高麗菜、海蚵後油炸，外脆內多汁，務必趁熱吃。", where: "8/20 介壽獅子市場" },
  { name: "黃金地瓜餃", category: "snack", label: "傳統點心", priority: "必吃", icon: "薯", description: "地瓜皮包花生、芝麻、糖與蔥，可油炸，也能煮成甜湯。", where: "8/22 坂里大宅附近" },
  { name: "糯米時", category: "snack", label: "傳統點心", priority: "推薦", icon: "糯", description: "口感近似麻糬的糯米點心，常裹花生或芝麻粉，早上市場較容易遇到。", where: "8/20 介壽獅子市場" },
  { name: "馬祖酥", category: "snack", label: "伴手禮", priority: "推薦", icon: "酥", description: "酥脆的傳統甜食，方便攜帶，是最常見的馬祖伴手禮之一。", where: "南北竿糕餅與特產店" },
  { name: "芙蓉酥", category: "snack", label: "伴手禮", priority: "遇到就買", icon: "酥", description: "口感有些像沙琪瑪，以糯米製作、產量較少，通常比馬祖酥難遇到。", where: "南北竿糕餅與特產店" },
  { name: "馬祖甜甜圈", category: "snack", label: "傳統點心", priority: "順路吃", icon: "甜", description: "較接近傳統炸麵糰，口感紮實有麵香，適合當下午小點。", where: "馬港與傳統小吃店" },
  { name: "馬祖老酒", category: "drink", label: "飲品酒類", priority: "代表風味", icon: "酒", description: "以糯米釀成，是老酒麵線與蒸魚的重要風味來源，也可作伴手禮。", where: "馬祖酒廠、八八坑道、特產店" },
  { name: "馬祖高粱酒", category: "drink", label: "飲品酒類", priority: "伴手禮", icon: "酌", description: "八八坑道最具代表性的酒款之一，紀念酒與年份選擇豐富。", where: "馬祖酒廠與特產店" }
];

const dayInfo = {
  all: ["ALL DAYS", "四天三夜的完整時間表", "共 44 個行程節點，包含景點、餐飲、住宿與轉乘。"],
  0: ["8/19 · WED", "基隆晚餐後登船，夜航南竿", "20:00 廟口晚餐；21:30 新臺馬輪登船，22:00 開航。"],
  1: ["8/20 · THU", "南竿西線、聚落與藍眼淚", "07:00 抵達福澳；19:40 北海坑道報到，20:00 已預約搖櫓船。"],
  2: ["8/21 · FRI", "大坵登島，北竿由東走到芹壁", "09:00 福澳報到、09:30 開船；11:40 大坵返航，12:10 抵白沙。"],
  3: ["8/22 · SAT", "北竿晨遊，回南竿搭機", "11:45 白沙港報到，12:25 抵福澳；15:15 到機場，18:20 起飛。"]
};

const routeDayMeta = [
  { date: "8/19 WED", title: "基隆夜航" },
  { date: "8/20 THU", title: "南竿西線與藍眼淚" },
  { date: "8/21 FRI", title: "大坵與北竿環島" },
  { date: "8/22 SAT", title: "北竿晨遊與南竿返航" }
];

const routeColors = ["#d56549", "#246f8a", "#4f806d", "#b5852d"];

const grid = document.querySelector("#spotGrid");
const foodGrid = document.querySelector("#foodGrid");
const dialog = document.querySelector("#spotDialog");
const dialogContent = document.querySelector("#dialogContent");
const toast = document.querySelector("#toast");
const routeDiagram = document.querySelector("#routeDiagram");
const routeMapStatus = document.querySelector("#routeMapStatus");
const validSpotIds = new Set(spots.map(spot => spot.id));
let saved = new Set(JSON.parse(localStorage.getItem("matsu-saved") || "[]").filter(id => validSpotIds.has(id)));

let routeMap;
let routeMapLayer;

function renderRouteDiagram(day = "all") {
  if (!window.L) {
    routeDiagram.innerHTML = '<p class="map-fallback">地圖元件暫時無法載入，請使用下方行程卡查看各站介紹。</p>';
    return;
  }

  const dayIndexes = day === "all" ? itinerary.map((_, index) => index) : [Number(day)];
  if (!routeMap) {
    routeMap = L.map(routeDiagram, { scrollWheelZoom: false, zoomControl: true });
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(routeMap);
  }

  if (routeMapLayer) routeMapLayer.remove();
  routeMapLayer = L.featureGroup().addTo(routeMap);

  dayIndexes.forEach(dayIndex => {
    const daySpots = spots.filter(spot => spot.day === dayIndex && spot.coords);
    const color = routeColors[dayIndex];
    const points = daySpots.map(spot => spot.coords);

    if (points.length > 1) {
      L.polyline(points, { color, weight: 4, opacity: .76, dashArray: "8 8", lineCap: "round" }).addTo(routeMapLayer);
    }

    daySpots.forEach((spot, index) => {
      const markerIcon = L.divIcon({
        className: "map-marker-shell",
        html: `<span style="--marker-color:${color}"><b>${index + 1}</b></span>`,
        iconSize: [34, 34],
        iconAnchor: [17, 17],
        popupAnchor: [0, -15]
      });
      L.marker(spot.coords, { icon: markerIcon })
        .bindTooltip(`${spot.time} · ${spot.name}`, { direction: "top", offset: [0, -14] })
        .bindPopup(`
          <div class="map-popup">
            <span>DAY ${spot.day + 1} · ${spot.time}</span>
            <strong>${spot.name}</strong>
            <small>${spot.area} · ${spot.category}</small>
            <button type="button" data-map-detail="${spot.id}">查看介紹 →</button>
          </div>
        `)
        .addTo(routeMapLayer);
    });
  });

  const bounds = routeMapLayer.getBounds();
  if (bounds.isValid()) routeMap.fitBounds(bounds, { padding: [34, 34], maxZoom: day === "all" ? 8 : 14 });
  routeMapStatus.textContent = day === "all"
    ? "目前顯示四天全程；切換上方日期可放大單日路線。"
    : `目前顯示 DAY ${Number(day) + 1}｜${routeDayMeta[Number(day)].title}。`;
  requestAnimationFrame(() => routeMap.invalidateSize());
}

function renderCards() {
  grid.innerHTML = spots.map((spot, index) => `
    <article class="spot-card" data-day="${spot.day}" data-id="${spot.id}" data-detail="${spot.id}" tabindex="0" aria-label="展開${spot.name}介紹">
      <div class="spot-image-wrap">
        <img class="spot-image" src="${spot.image}" alt="${spot.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='og.png'">
        <span class="spot-number">${spot.order}</span>
        <button class="save-button ${saved.has(spot.id) ? "saved" : ""}" type="button" data-save="${spot.id}" aria-label="${saved.has(spot.id) ? "移除" : "收藏"}${spot.name}" aria-pressed="${saved.has(spot.id)}">${saved.has(spot.id) ? "♥" : "♡"}</button>
      </div>
      <div class="spot-body">
        <div class="spot-meta"><span>${spot.area}</span><span>·</span><span>${spot.category}</span></div>
        <h3>${spot.name}</h3>
        <p>${spot.summary}</p>
        <div class="spot-actions">
          <span class="detail-button" aria-hidden="true">點卡片看介紹 →</span>
          <span class="spot-schedule">
            <span class="spot-time"><span aria-hidden="true">◷</span> ${spot.time}</span>
            <span class="spot-duration"><span aria-hidden="true">⌛</span> 建議停留 ${spot.duration}</span>
          </span>
        </div>
      </div>
    </article>
  `).join("");
}

function renderFoods(filter = "all") {
  const visibleFoods = filter === "all" ? foods : foods.filter(food => food.category === filter);
  foodGrid.innerHTML = visibleFoods.map(food => `
    <details class="food-card">
      <summary>
        <span class="food-icon" aria-hidden="true">${food.icon}</span>
        <span class="food-title"><small>${food.label}</small><strong>${food.name}</strong></span>
        <span class="food-priority">${food.priority}</span>
        <span class="food-toggle" aria-hidden="true">＋</span>
      </summary>
      <div class="food-detail">
        <p>${food.description}</p>
        <span>順路品嘗：${food.where}</span>
      </div>
    </details>
  `).join("");
}

function saveState(showMessage = true) {
  localStorage.setItem("matsu-saved", JSON.stringify([...saved]));
  document.querySelectorAll("[data-save]").forEach(button => {
    const active = saved.has(button.dataset.save);
    button.classList.toggle("saved", active);
    button.textContent = active ? "♥" : "♡";
    button.setAttribute("aria-pressed", active);
  });
  document.querySelector("#savedCount").textContent = saved.size;
  document.querySelector("#plannerCount").textContent = saved.size;
  document.querySelector("#progressBar").style.width = `${saved.size / spots.length * 100}%`;
  renderSavedList();
  if (showMessage) showToast(saved.size ? `已更新必去清單 · ${saved.size} 個停靠點` : "必去清單目前是空的");
}

function renderSavedList() {
  const list = document.querySelector("#savedList");
  const selected = spots.filter(spot => saved.has(spot.id));
  if (!selected.length) {
    list.innerHTML = '<div class="empty-state">還沒有收藏景點<br>點卡片上的 ♡ 開始規劃</div>';
    return;
  }
  list.innerHTML = selected.map(spot => `
    <div class="saved-item">
      <div><span>${spot.order}</span><strong>${spot.name}</strong></div>
      <button type="button" data-remove="${spot.id}" aria-label="從清單移除${spot.name}">×</button>
    </div>
  `).join("");
}

function toggleSave(id) {
  saved.has(id) ? saved.delete(id) : saved.add(id);
  saveState();
}

function openSpot(id) {
  const spot = spots.find(item => item.id === id);
  if (!spot) return;
  dialogContent.innerHTML = `
    <div class="dialog-hero">
      <img src="${spot.image}" alt="${spot.name}" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='og.png'">
      <div class="dialog-title"><span>${spot.order} · ${spot.area}</span><h2>${spot.name}</h2></div>
    </div>
    <div class="dialog-body">
      <div>
        <p>${spot.intro}</p>
        <h3>旅行小提醒</h3>
        <p>${spot.tip}</p>
        <p class="image-credit">圖片來源：<a href="${spot.source}" target="_blank" rel="noreferrer">${spot.credit} ↗</a></p>
      </div>
      <aside class="dialog-aside">
        <div class="dialog-fact"><span>建議停留</span><strong>${spot.duration}</strong></div>
        <div class="dialog-fact"><span>最佳時段</span><strong>${spot.best}</strong></div>
        <div class="dialog-fact"><span>行程時間</span><strong>${spot.time}</strong></div>
        <a class="button map-link" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.map)}" target="_blank" rel="noreferrer">在 Google 地圖開啟</a>
      </aside>
    </div>`;
  dialog.showModal();
  document.body.style.overflow = "hidden";
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1900);
}

document.addEventListener("click", event => {
  const saveButton = event.target.closest("[data-save]");
  const detailButton = event.target.closest("[data-detail]");
  const routeDetail = event.target.closest("[data-route-detail]");
  const mapDetail = event.target.closest("[data-map-detail]");
  const removeButton = event.target.closest("[data-remove]");
  if (saveButton) {
    toggleSave(saveButton.dataset.save);
    return;
  }
  if (removeButton) {
    toggleSave(removeButton.dataset.remove);
    return;
  }
  if (routeDetail) {
    openSpot(routeDetail.dataset.routeDetail);
    return;
  }
  if (mapDetail) {
    openSpot(mapDetail.dataset.mapDetail);
    return;
  }
  if (detailButton) openSpot(detailButton.dataset.detail);
});

grid.addEventListener("keydown", event => {
  const card = event.target.closest(".spot-card");
  if (!card || event.target.closest("button, a")) return;
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openSpot(card.dataset.detail);
  }
});

document.querySelectorAll(".day-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    const day = tab.dataset.day;
    document.querySelectorAll(".day-tab").forEach(item => {
      const active = item === tab;
      item.classList.toggle("active", active);
      item.setAttribute("aria-selected", active);
    });
    document.querySelectorAll(".spot-card").forEach(card => card.classList.toggle("hidden", day !== "all" && card.dataset.day !== day));
    const [date, title, copy] = dayInfo[day];
    document.querySelector("#bannerDate").textContent = date;
    document.querySelector("#bannerTitle").textContent = title;
    document.querySelector("#bannerCopy").textContent = copy;
    renderRouteDiagram(day);
  });
});

document.querySelectorAll(".food-filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".food-filter").forEach(item => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", active);
    });
    renderFoods(button.dataset.foodFilter);
  });
});

document.querySelector("#dialogClose").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
dialog.addEventListener("close", () => document.body.style.overflow = "");

document.querySelector("#clearSaved").addEventListener("click", () => {
  saved.clear();
  saveState();
});
document.querySelectorAll("#openAllSaved, #savedSummary").forEach(button => button.addEventListener("click", () => document.querySelector("#planner").scrollIntoView()));

const departure = new Date("2026-08-19T21:30:00+08:00");
const now = new Date();
const days = Math.max(0, Math.ceil((departure - now) / 86400000));
document.querySelector("#countdown").textContent = now >= departure ? "旅程開始了" : `${days} 天`;
window.addEventListener("scroll", () => document.querySelector(".site-header").classList.toggle("scrolled", window.scrollY > 40), { passive: true });

renderCards();
renderRouteDiagram();
renderFoods();
saveState(false);
