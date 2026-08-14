const spots = [
  {
    id: "keelung-miaokou", day: 0, order: "D0 · 01", name: "基隆廟口晚餐", area: "基隆", category: "出發前晚餐", time: "18:15",
    image: "https://www.settour.com.tw/ss_img/poi/20210302/ef4a472b-0f90-46c3-9c88-71fb6d3df9d5.jpeg",
    credit: "東南旅遊（基隆廟口夜市）", source: "https://travel.klcg.gov.tw/TourContent.aspx?n=8059&s=558&sms=12550",
    summary: "先用鼎邊趖與天婦羅暖胃，再走向夜航碼頭。",
    intro: "基隆廟口夜市聚集鼎邊趖、天婦羅、滷肉飯與營養三明治等港都小吃。把晚餐安排在登船前，既能避開船上餐食選擇有限，也讓旅程從港口滋味開始。",
    tip: "19:30 前吃完並往西岸旅客碼頭移動；容易暈船者避免油炸吃太多，行李較大可改在車站周邊簡單用餐。",
    duration: "60–75 分鐘", best: "18:15–19:30", map: "基隆廟口夜市"
  },
  {
    id: "new-taima", day: 0, order: "D0 · 02", name: "新臺馬輪", area: "基隆 → 南竿", category: "夜航體驗", time: "21:00 登船",
    image: "https://www.matsu-news.gov.tw/uploads/news/20230415224709_82.jpg",
    credit: "馬祖日報", source: "https://www.matsu-news.gov.tw/news/article/209339",
    summary: "在船上睡一晚，醒來就是馬祖的海。",
    intro: "新臺馬輪以基隆港為起點，夜裡橫越臺灣海峽前往馬祖。8 月 19 日是單號日，依「單馬雙東」原則先抵南竿，這段夜航不只是交通，也是旅程正式開始的儀式。",
    tip: "20:30 前抵達西岸旅客碼頭；先吃晚餐、準備暈船藥與一件薄外套。",
    duration: "約 8.5 小時", best: "甲板離港時", map: "基隆西岸旅客碼頭"
  },
  {
    id: "jieshou-market", day: 1, order: "D1 · 01", name: "介壽獅子市場", area: "南竿", category: "早餐", time: "07:30",
    image: "https://img.fun-life.com.tw/mazu/lion-market/lion-market.jpg",
    credit: "捲毛阿偉", source: "https://awei45.tw/lion-market/",
    summary: "用鼎邊糊、虫弟餅與老酒麵線喚醒早晨。",
    intro: "介壽獅子市場是南竿最有生活感的清晨據點。一樓有蔬果與漁獲，二樓聚集馬祖早餐小吃；從觀光客到在地居民，都在這裡開啟一天。",
    tip: "越早越齊全，建議 8 點前抵達；多帶一點現金，方便分食不同攤位。",
    duration: "45–60 分鐘", best: "06:30–09:00", map: "介壽獅子市場"
  },
  {
    id: "tunnel-88", day: 1, order: "D1 · 02", name: "八八坑道與馬祖酒廠", area: "南竿", category: "酒香戰地", time: "08:40",
    image: "https://www.matsu-nsa.gov.tw/api/uploads/attractions/d20633a2cecb4d6d81f07e16a49417e2.jpg",
    credit: "馬祖國家風景區", source: "https://www.matsu-nsa.gov.tw/zh-TW/attractions/1457",
    summary: "昔日軍事坑道，現在收藏著整座島的酒香。",
    intro: "八八坑道原是戰備坑道，恆溫恆濕的環境後來成為陳年高粱與老酒的天然酒窖。坑道口排列的陶甕、岩壁上的水氣與濃郁酒香，共同構成馬祖獨特的戰地轉身。",
    tip: "目前參觀可能採預約制；可與隔壁馬祖酒廠一起安排，出發前再次電話確認。",
    duration: "60–75 分鐘", best: "上午", map: "八八坑道 馬祖"
  },
  {
    id: "yima", day: 1, order: "D1 · 03", name: "依嬤的店", area: "南竿復興村", category: "馬祖風味午餐", time: "11:00",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1400&q=82",
    credit: "Unsplash（閩式料理示意）", source: "https://supertaste.tvbs.com.tw/infocard/28246",
    summary: "一次嘗到紅糟、老酒與海味的馬祖家常菜。",
    intro: "依嬤的店位於牛角聚落一帶，提供適合自由行旅客的風味套餐，也能多人共享紅糟炒飯、酒糟肉、淡菜與老酒蒸黃魚。從八八坑道過來順路，是認識馬祖餐桌最完整的一餐。",
    tip: "電話 0912-261-414；建議預訂 11:00。午後仍要騎車與參加水上活動，勿飲酒，酒味料理也請酌量。",
    duration: "70 分鐘", best: "11:00 午餐", map: "依嬤的店 馬祖"
  },
  {
    id: "beihai", day: 1, order: "D1 · 04", name: "南竿北海坑道（日間）", area: "南竿", category: "必去景點", time: "12:30",
    image: "https://celiamrg.com/wp-content/uploads/20210309225514_74.jpg",
    credit: "瑄瑄＆G先生", source: "https://celiamrg.com/north-sea-tunnel/",
    summary: "走進花崗岩腹地，感受水道與回音的尺度。",
    intro: "北海坑道以人力開鑿於花崗岩中，井字形水道曾計畫停放軍用艇。如今可以沿步道環行，也能預約搖櫓或獨木舟；幽暗水面映著岩壁，是三份參考行程共同推薦的核心景點。",
    tip: "8/20 官方暫列 08:30–17:00 開放，仍受現場潮位影響；白天先看坑道結構，晚上再回來搭搖櫓船。",
    duration: "45–75 分鐘", best: "依潮汐", map: "南竿北海坑道"
  },
  {
    id: "dahan", day: 1, order: "D1 · 05", name: "大漢據點", area: "南竿", category: "戰地遺跡", time: "13:35",
    image: "https://www.matsu-news.gov.tw/uploads/news/20230808232205_29.jpg",
    credit: "南竿鄉公所／馬祖日報", source: "https://www.nankan.gov.tw/chhtml/Detail/2221?mcid=86569",
    summary: "沿海壁鑿出的三層坑道，曾扼守莒光水道。",
    intro: "大漢據點緊貼鐵板海岸，由軍方在 1970 年代開鑿。坑道內保留機槍堡、砲陣地與生活空間，出口則直接面向海峽，讓人理解馬祖在冷戰時期的前線位置。",
    tip: "與北海坑道位於同一區，步行串聯最省時間；坑道濕滑，穿止滑鞋。",
    duration: "30–40 分鐘", best: "與北海坑道連走", map: "大漢據點"
  },
  {
    id: "tiebao", day: 1, order: "D1 · 06", name: "鐵堡", area: "南竿", category: "海上堡壘", time: "14:30",
    image: "https://www.matsu-nsa.gov.tw/api/uploads/attractions/cccf38b68b384ec7a8b9b03c14a527d0.jpg",
    credit: "馬祖國家風景區", source: "https://www.matsu-nsa.gov.tw/zh-TW/islands/3",
    summary: "一塊伸入海中的礁岩，被鑿成孤立的軍事堡壘。",
    intro: "鐵堡位於仁愛村外海礁岩，外觀低伏、內部坑道狹長，曾是南竿重要的海上防禦據點。沿著步道走向海中央，軍事設施與海岸地形彼此交疊。",
    tip: "海風強時注意帽子與隨身物品；狹窄階梯不宜急行。",
    duration: "30–45 分鐘", best: "午後海景", map: "鐵堡 南竿"
  },
  {
    id: "jinsha", day: 1, order: "D1 · 07", name: "津沙聚落", area: "南竿", category: "百年聚落", time: "15:30",
    image: "https://api.taiwantravelmap.com/Google/image/PlaceImage/724/202602091702953.jpg",
    credit: "台灣旅圖", source: "https://www.taiwantravelmap.com/taiwantravelmap/travel-724",
    summary: "沿著石階走向海，尋找時間留下的紋理。",
    intro: "津沙舊名金沙，閩東石厝依著山勢面海而建。聚落曾因漁業沒落而沉寂，修復後老宅成為民宿、咖啡與小館，仍保留安靜巷弄、酒甕與海灣沙灘。",
    tip: "適合慢走，不必把每條巷弄走完；留一點時間坐在海邊看光線變化。",
    duration: "60–90 分鐘", best: "午後至黃昏", map: "津沙聚落"
  },
  {
    id: "mazu-statue", day: 1, order: "D1 · 08", name: "媽祖巨神像", area: "南竿", category: "島嶼地標", time: "16:30",
    image: "https://www.lnanews.com/imgnews/2017-08-07/e6s27xq2b86vbx1u5cv7koofe.jpg",
    credit: "人間通訊社", source: "https://www.lnanews.com/news/105645",
    summary: "28.8 公尺高的海上守護者，靜靜望向湄洲。",
    intro: "巨神像由 365 塊花崗岩組成，高度 28.8 公尺，象徵馬祖四鄉五島總面積。沿階梯登上宗教文化園區，能同時看見信仰、海港與南竿西岸景色。",
    tip: "下午光線較柔和；階梯較多，預留體力並注意強風。",
    duration: "45–60 分鐘", best: "夕陽前", map: "媽祖巨神像 南竿"
  },
  {
    id: "dazhong", day: 1, order: "D1 · 09", name: "大眾飲食店", area: "南竿馬港", category: "追淚前晚餐", time: "17:10",
    image: "https://pic.pimg.tw/olina155/1695015072-3815509577-g.jpg",
    credit: "鏡沃小吃部（老酒麵線料理示意）", source: "https://www.matsu-nsa.gov.tw/zh-TW/foods/2337",
    summary: "在馬港老店簡單吃飽，留足時間前往北海坑道。",
    intro: "大眾飲食店是馬港老字號家常小館，從媽祖巨神像下來即可順路用餐。這一餐以魚麵、炒飯、魚丸湯或家常菜為主，控制份量，晚上搭船會更舒服。",
    tip: "電話 0836-22185；訂位時確認 17:10 能否供餐。夜間搖櫓前禁止飲酒，避免酒味濃的料理。",
    duration: "50 分鐘", best: "17:10 早晚餐", map: "大眾飲食店 馬祖村"
  },
  {
    id: "beihai-night", day: 1, order: "D1 · 10", name: "北海坑道夜間搖櫓船", area: "南竿", category: "藍眼淚體驗", time: "18:30 報到 · 19:30 場",
    image: "https://www.matsu-news.gov.tw/uploads/news/205385.jpg",
    credit: "馬祖日報", source: "https://www.matsu-nsa.gov.tw/zh-TW/festivals/5",
    summary: "關燈後划入坑道，在船槳與水波間尋找藍色星光。",
    intro: "夜間搖櫓船在完全黑暗的北海坑道水域進行，由船夫操槳前進。水中的夜光藻受擾動時可能發出藍光，與白天觀察坑道工程是截然不同的體驗。",
    tip: "建議預約 19:30，20:00 為備選；電話 0836-22177、LINE @gen6594n。提前報到、勿飲酒、勿開閃光燈；藍眼淚是自然現象，亮度無法保證。",
    duration: "15–20 分鐘", best: "19:30 場次", map: "南竿北海坑道"
  },
  {
    id: "daqiu", day: 2, order: "D2 · 01", name: "大坵島", area: "北竿外島", category: "梅花鹿島", time: "08:30 船班",
    image: "images/daqiu.jpg",
    credit: "馬祖日報／景點家", source: "https://www.matsu-news.gov.tw/news/article/200439",
    summary: "搭十分鐘的船，去一座梅花鹿比人多的島。",
    intro: "大坵曾有居民與駐軍，如今成為梅花鹿自由生活的無人島。沿環島步道行走，可以近距離觀察鹿群、廢棄聚落與海蝕地形，是八月最有季節感的體驗。",
    tip: "船班受海象影響，務必預訂；不追逐、不觸摸鹿角，也不要餵食自帶食物。",
    duration: "約 2 小時", best: "08:30 早班", map: "大坵島"
  },
  {
    id: "qiaozi", day: 2, order: "D2 · 02", name: "橋仔聚落", area: "北竿", category: "漁村信仰", time: "10:50",
    image: "https://g.udn.com.tw/upfiles/B_CE/cetustar/PSN_PHOTO/680/f_28799680_1.jpg",
    credit: "鍾小殷的幸福玩樂趣", source: "https://blog.udn.com/cetustar/182293024",
    summary: "依山臨海的小漁村，廟宇數量比居民還醒目。",
    intro: "橋仔村位於北竿北側，過去因漁業興盛而人口密集，也形成豐富的廟宇信仰。石屋、陡坡與漁港構成緊湊聚落，適合在大坵返航後順遊。",
    tip: "可品嘗橋仔阿婆黃金餃；村內坡度大，停車後用步行慢慢逛。",
    duration: "45–60 分鐘", best: "大坵回程後", map: "橋仔聚落 北竿"
  },
  {
    id: "qinwo", day: 2, order: "D2 · 03", name: "芹沃咖啡烘焙館", area: "北竿芹壁", category: "海景午餐", time: "12:00",
    image: "https://cdn.walkerland.com.tw/images/upload/poi/p144947/m96563/efa6fc0849d98125e830f7c0be61a5ebfecfc0bd.jpg",
    credit: "WalkerLand（芹沃咖啡烘焙館）", source: "https://supertaste.tvbs.com.tw/infocard/15052",
    summary: "在芹壁海景前分享披薩、淡菜與現烤麵包。",
    intro: "芹沃把老酒、淡菜等馬祖風味放進披薩與創意料理，面海座位也讓午餐自然成為芹壁散步的開場。推薦披薩、蒜辣橄欖蝦、手作麵包與無酒精飲品。",
    tip: "電話 0836-56099；午餐目前為 11:00–13:30，建議預訂 12:00 海景座位並準時抵達。",
    duration: "80 分鐘", best: "12:00 午餐", map: "芹沃咖啡烘焙館"
  },
  {
    id: "qinbi", day: 2, order: "D2 · 04", name: "芹壁聚落", area: "北竿", category: "必去景點", time: "13:20",
    image: "https://www.matsu-nsa.gov.tw/api/uploads/attractions/%E8%8A%B9%E5%A3%81%E8%81%9A%E8%90%BD_%E5%8C%97%E7%AB%BF_2025_6.jpg",
    credit: "馬祖國家風景區", source: "https://www.matsu-nsa.gov.tw/zh-TW/album/1008",
    summary: "石屋沿山層疊，是最適合把速度放慢的地方。",
    intro: "芹壁是馬祖保存最完整的閩東建築聚落之一。花崗岩石屋、紅瓦屋頂與海岸階梯依山展開，轉角不時露出龜島與藍色海面，被稱為馬祖的地中海。",
    tip: "至少留兩小時散步與喝咖啡；午後到夕陽的光線最有層次。",
    duration: "2–3 小時", best: "午後至夕陽", map: "芹壁聚落"
  },
  {
    id: "longfu", day: 2, order: "D2 · 05", name: "龍福山莊", area: "北竿塘岐", category: "海鮮晚餐", time: "17:30",
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1400&q=82",
    credit: "Unsplash（海鮮料理示意）", source: "https://unsplash.com/",
    summary: "用一鍋澎湃海鮮，替北竿的一天收尾。",
    intro: "龍福山莊是三份參考行程都出現的北竿停靠點，招牌海鮮痛風鍋集合淡菜、鮮蝦、小卷與當季漁獲。多人同行最適合預訂，共享的形式也很有旅行感。",
    tip: "電話 0836-55077；4 人以上可詢問痛風鍋，2–3 人建議點一般合菜。食材依當日漁獲調整，務必預訂。",
    duration: "90 分鐘", best: "晚餐", map: "龍福山莊 北竿"
  },
  {
    id: "banli", day: 3, order: "D3 · 01", name: "坂里大宅", area: "北竿", category: "閩東建築", time: "08:30",
    image: "https://storage.googleapis.com/matsu/images/article_20267_1939df612b911e1c3b7551b66beea2ef.jpg",
    credit: "馬祖記憶庫", source: "https://matsumemory.tw/articles/20267",
    summary: "走進百年古厝，看石與木如何守住一個家。",
    intro: "坂里大宅建於清代，是北竿少見保存完整的傳統大宅。厚實石牆、木構天井與家族生活空間，呈現閩東建築因應海風與島嶼氣候的智慧。",
    tip: "清晨人較少、光影柔和；參觀時降低音量並尊重館舍規範。",
    duration: "40–50 分鐘", best: "上午", map: "坂里大宅"
  },
  {
    id: "broadcast", day: 3, order: "D3 · 02", name: "馬祖播音站", area: "北竿", category: "戰地記憶", time: "09:30",
    image: "https://www.matsu-news.gov.tw/uploads/news/205820.JPG",
    credit: "馬祖日報", source: "https://www.matsu-news.gov.tw/news/article/136554",
    summary: "巨型喇叭留下前線時代跨海傳聲的記憶。",
    intro: "冷戰時期，馬祖播音站曾向對岸進行心戰廣播。今日打卡點以巨型綠色喇叭重現那段歷史，強烈造型既荒謬又真實，是理解戰地日常的有趣入口。",
    tip: "目前可拍照的是芹壁候車亭旁的造景，並非山頂舊站本體。",
    duration: "20–30 分鐘", best: "順路停靠", map: "馬祖播音站 北竿"
  },
  {
    id: "short-slope", day: 3, order: "D3 · 03", name: "短坡山觀景台", area: "北竿", category: "島嶼展望", time: "10:10",
    image: "https://cdn.4travel.jp/img/thumbnails/imk/tips_pict/19/52/36/650x450_19523641.jpg?updated_at=1699245951",
    credit: "4travel", source: "https://4travel.jp/os_shisetsu/10436986",
    summary: "最後從高處回望，讀懂北竿的山海輪廓。",
    intro: "短坡山一帶視野開闊，可以從高處觀察北竿聚落、機場與海岸相互依存的地形。它不像芹壁華麗，更像一個讓旅程慢慢沉澱的觀景停靠。",
    tip: "風大時避免靠近邊坡；若時間不足，可直接前往塘後道沙灘。",
    duration: "25–35 分鐘", best: "能見度佳時", map: "短坡山觀景台 北竿"
  },
  {
    id: "apo-fish-noodle", day: 3, order: "D3 · 04", name: "阿婆魚麵店", area: "北竿塘岐", category: "回程午餐", time: "11:00",
    image: "https://cdn.walkerland.com.tw/images/upload/poi/p116351/m26624/beb886bf35b10523538fb706b7ed78483f415647.jpg",
    credit: "WalkerLand（阿婆魚麵店）", source: "https://www.matsu-nsa.gov.tw/zh-TW/foods/2295",
    summary: "用一碗手工魚麵，替北竿旅程留下鮮甜收尾。",
    intro: "魚麵把魚肉揉入麵糰，經過桿平、切麵與乾燥等工序，可煮湯、乾炒或炸成零嘴。阿婆魚麵店位在塘岐，午餐後前往機場或塘後道都很方便。",
    tip: "電話 0836-56539；官方目前列 11:00–13:00，建議開店即抵達。可點魚麵、魚丸、魚餃與炸魚麵。",
    duration: "50 分鐘", best: "11:00 午餐", map: "阿婆魚麵店 北竿"
  },
  {
    id: "tanghou", day: 3, order: "D3 · 05", name: "塘後道沙灘", area: "北竿", category: "海岸散步", time: "12:00",
    image: "https://cdn.walkerland.com.tw/images/upload/article/2021/12/m121434/2467bf0f09fed1712e10103709a7d7c8d247c0ed.jpg",
    credit: "WalkerLand", source: "https://www.walkerland.com.tw/article/view/314542",
    summary: "在機場旁看海，替跳島旅程留一段空白。",
    intro: "塘後道沙灘位於塘岐與后沃之間，緊鄰北竿機場跑道。沙洲、海浪與飛機起降形成少見景觀，也是回程前最不費力、最適合散步的海邊。",
    tip: "不建議下水；12:50 後可到塘岐買伴手禮，13:40 回住宿處取行李與還車，14:30 前抵達白沙港。",
    duration: "30–45 分鐘", best: "午餐後", map: "塘後道沙灘"
  },
  {
    id: "baisha-nangan-flight", day: 3, order: "D3 · 06", name: "白沙港 → 南竿機場", area: "北竿至南竿", category: "回程交通", time: "15:20 船班 · 18:20 起飛",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Baisha_Harbor_%E5%8C%97%E7%AB%BF%E7%99%BD%E6%B2%99%E6%B8%AF_20250913.jpg/1020px-Baisha_Harbor_%E5%8C%97%E7%AB%BF%E7%99%BD%E6%B2%99%E6%B8%AF_20250913.jpg",
    credit: "Terry850324／Wikimedia Commons（CC BY-SA 4.0）", source: "https://commons.wikimedia.org/wiki/File:Baisha_Harbor_%E5%8C%97%E7%AB%BF%E7%99%BD%E6%B2%99%E6%B8%AF_20250913.jpg",
    summary: "搭 15:20 船回南竿，為 18:20 班機留足轉乘緩衝。",
    intro: "白沙港是北竿的海上門戶。這段回程先搭島際船抵達南竿福澳港，再轉乘計程車前往南竿機場；不把最後一班船壓得太緊，才能從容完成報到與行李托運。",
    tip: "14:30 前抵達白沙港；15:20 開船，約 15:40 抵達福澳港，再前往南竿機場，目標 16:10 前抵達。16:00 只作備案，不建議搭 16:30 以後船班。8/21 晚上及 8/22 早上再次確認海象與船班。",
    duration: "約 3 小時", best: "15:20 船班", map: "北竿白沙港"
  }
];

const foods = [
  { name: "老酒麵線", category: "main", label: "主食", priority: "必吃", icon: "麵", description: "以馬祖老酒、雞蛋與麻油煮成的暖胃麵線，酒香會依店家比例不同。", where: "依嬤的店、大眾飲食店、鏡沃小吃" },
  { name: "馬祖魚麵", category: "main", label: "主食", priority: "必吃", icon: "魚", description: "把魚肉揉進麵糰，可做湯麵、炒麵或炸魚麵，口感彈而鮮甜。", where: "8/22 阿婆魚麵店" },
  { name: "紅糟炒飯", category: "main", label: "主食", priority: "必吃", icon: "飯", description: "紅糟把米飯染成溫暖紅色，帶著淡淡發酵香，是馬祖餐桌代表。", where: "依嬤的店、蝦寮食堂、龍福山莊" },
  { name: "狗麵", category: "main", label: "主食", priority: "推薦", icon: "麵", description: "馬祖家常湯麵的名稱，通常搭配肉絲、海鮮或蔬菜，並不是狗肉。", where: "萬家香二店" },
  { name: "鼎邊糊", category: "main", label: "主食", priority: "推薦", icon: "湯", description: "米漿沿鍋邊燙成薄片，再加入海鮮、肉絲與高湯，清晨吃最對味。", where: "8/20 介壽獅子市場" },
  { name: "淡菜", category: "seafood", label: "海鮮料理", priority: "必吃", icon: "海", description: "馬祖代表性貝類，可清蒸、蒜炒、入披薩或與老酒同蒸。", where: "依嬤的店、芹沃、龍福山莊" },
  { name: "佛手", category: "seafood", label: "海鮮料理", priority: "季節限定", icon: "鮮", description: "外型像手指的藤壺類海鮮，剝殼吃肉；供應完全看季節與當天漁獲。", where: "用餐時詢問海鮮餐廳" },
  { name: "老酒蒸黃魚", category: "seafood", label: "海鮮料理", priority: "必吃", icon: "魚", description: "細嫩黃魚以老酒清蒸，鮮味與酒香平衡，適合多人分享。", where: "依嬤的店、津沙小館、蝦寮食堂" },
  { name: "紅糟肉", category: "seafood", label: "特色料理", priority: "必吃", icon: "糟", description: "豬肉以紅糟醃製後炸至外酥內嫩，鹹甜發酵香非常下飯。", where: "依嬤的店、蝦寮食堂" },
  { name: "紅糟鰻魚", category: "seafood", label: "特色料理", priority: "推薦", icon: "鰻", description: "鰻魚裹紅糟醬炸或燒製，是馬祖常見的傳統宴席料理。", where: "依嬤的店、風味合菜餐廳" },
  { name: "海鮮痛風鍋", category: "seafood", label: "海鮮料理", priority: "多人推薦", icon: "鍋", description: "淡菜、鮮蝦、小卷與當季漁獲集中一鍋，份量澎湃且需預訂。", where: "8/21 龍福山莊" },
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
  all: ["ALL DAYS", "一趟剛剛好的島嶼旅行", "共 23 個精選停靠點，包含每日餐廳、夜間搖櫓船與回程交通。"],
  0: ["8/19 · WED", "基隆晚餐後夜航，睡醒抵達南竿", "18:15 廟口晚餐；20:30 前抵達碼頭，22:00 開航。"],
  1: ["8/20 · THU", "南竿：戰地、聚落、風味餐與藍眼淚", "白天順走南竿核心景點，17:10 早晚餐後回北海坑道搭夜間搖櫓船。"],
  2: ["8/21 · FRI", "北竿：尋鹿、海景午餐與石厝夕陽", "早班島際船轉北竿，先大坵、後橋仔與芹壁，17:30 塘岐海鮮晚餐。"],
  3: ["8/22 · SAT", "北竿半日收尾，回南竿搭機", "11:00 吃魚麵，14:30 前到白沙港；搭 15:20 船回南竿，銜接 18:20 班機。"]
};

const grid = document.querySelector("#spotGrid");
const foodGrid = document.querySelector("#foodGrid");
const dialog = document.querySelector("#spotDialog");
const dialogContent = document.querySelector("#dialogContent");
const toast = document.querySelector("#toast");
let saved = new Set(JSON.parse(localStorage.getItem("matsu-saved") || "[]"));

function renderCards() {
  grid.innerHTML = spots.map((spot, index) => `
    <article class="spot-card" data-day="${spot.day}" data-id="${spot.id}">
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
          <button class="detail-button" type="button" data-detail="${spot.id}">展開介紹 →</button>
          <span class="spot-time">${spot.time}</span>
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
  const removeButton = event.target.closest("[data-remove]");
  if (saveButton) toggleSave(saveButton.dataset.save);
  if (detailButton) openSpot(detailButton.dataset.detail);
  if (removeButton) toggleSave(removeButton.dataset.remove);
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

const departure = new Date("2026-08-19T22:00:00+08:00");
const now = new Date();
const days = Math.max(0, Math.ceil((departure - now) / 86400000));
document.querySelector("#countdown").textContent = now >= departure ? "旅程開始了" : `${days} 天`;
window.addEventListener("scroll", () => document.querySelector(".site-header").classList.toggle("scrolled", window.scrollY > 40), { passive: true });

renderCards();
renderFoods();
saveState(false);
