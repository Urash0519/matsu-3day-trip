const spots = [
  {
    id: "new-taima", day: 0, order: "D0 · 01", name: "新臺馬輪", area: "基隆 → 南竿", category: "夜航體驗", time: "21:00 登船",
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
    id: "tunnel-88", day: 1, order: "D1 · 02", name: "八八坑道與馬祖酒廠", area: "南竿", category: "酒香戰地", time: "08:30",
    image: "https://www.matsu-nsa.gov.tw/api/uploads/attractions/d20633a2cecb4d6d81f07e16a49417e2.jpg",
    credit: "馬祖國家風景區", source: "https://www.matsu-nsa.gov.tw/zh-TW/attractions/1457",
    summary: "昔日軍事坑道，現在收藏著整座島的酒香。",
    intro: "八八坑道原是戰備坑道，恆溫恆濕的環境後來成為陳年高粱與老酒的天然酒窖。坑道口排列的陶甕、岩壁上的水氣與濃郁酒香，共同構成馬祖獨特的戰地轉身。",
    tip: "目前參觀可能採預約制；可與隔壁馬祖酒廠一起安排，出發前再次電話確認。",
    duration: "60–75 分鐘", best: "上午", map: "八八坑道 馬祖"
  },
  {
    id: "beihai", day: 1, order: "D1 · 03", name: "南竿北海坑道", area: "南竿", category: "必去景點", time: "10:30",
    image: "https://celiamrg.com/wp-content/uploads/20210309225514_74.jpg",
    credit: "瑄瑄＆G先生", source: "https://celiamrg.com/north-sea-tunnel/",
    summary: "走進花崗岩腹地，感受水道與回音的尺度。",
    intro: "北海坑道以人力開鑿於花崗岩中，井字形水道曾計畫停放軍用艇。如今可以沿步道環行，也能預約搖櫓或獨木舟；幽暗水面映著岩壁，是三份參考行程共同推薦的核心景點。",
    tip: "8/20 暫定 08:30–17:00 開放，仍受現場潮位影響；若要搖櫓請事先預約。",
    duration: "45–75 分鐘", best: "依潮汐", map: "南竿北海坑道"
  },
  {
    id: "dahan", day: 1, order: "D1 · 04", name: "大漢據點", area: "南竿", category: "戰地遺跡", time: "11:40",
    image: "https://www.matsu-news.gov.tw/uploads/news/20230808232205_29.jpg",
    credit: "南竿鄉公所／馬祖日報", source: "https://www.nankan.gov.tw/chhtml/Detail/2221?mcid=86569",
    summary: "沿海壁鑿出的三層坑道，曾扼守莒光水道。",
    intro: "大漢據點緊貼鐵板海岸，由軍方在 1970 年代開鑿。坑道內保留機槍堡、砲陣地與生活空間，出口則直接面向海峽，讓人理解馬祖在冷戰時期的前線位置。",
    tip: "與北海坑道位於同一區，步行串聯最省時間；坑道濕滑，穿止滑鞋。",
    duration: "30–40 分鐘", best: "與北海坑道連走", map: "大漢據點"
  },
  {
    id: "tiebao", day: 1, order: "D1 · 05", name: "鐵堡", area: "南竿", category: "海上堡壘", time: "13:30",
    image: "https://www.matsu-nsa.gov.tw/api/uploads/attractions/cccf38b68b384ec7a8b9b03c14a527d0.jpg",
    credit: "馬祖國家風景區", source: "https://www.matsu-nsa.gov.tw/zh-TW/islands/3",
    summary: "一塊伸入海中的礁岩，被鑿成孤立的軍事堡壘。",
    intro: "鐵堡位於仁愛村外海礁岩，外觀低伏、內部坑道狹長，曾是南竿重要的海上防禦據點。沿著步道走向海中央，軍事設施與海岸地形彼此交疊。",
    tip: "海風強時注意帽子與隨身物品；狹窄階梯不宜急行。",
    duration: "30–45 分鐘", best: "午後海景", map: "鐵堡 南竿"
  },
  {
    id: "jinsha", day: 1, order: "D1 · 06", name: "津沙聚落", area: "南竿", category: "百年聚落", time: "14:30",
    image: "https://api.taiwantravelmap.com/Google/image/PlaceImage/724/202602091702953.jpg",
    credit: "台灣旅圖", source: "https://www.taiwantravelmap.com/taiwantravelmap/travel-724",
    summary: "沿著石階走向海，尋找時間留下的紋理。",
    intro: "津沙舊名金沙，閩東石厝依著山勢面海而建。聚落曾因漁業沒落而沉寂，修復後老宅成為民宿、咖啡與小館，仍保留安靜巷弄、酒甕與海灣沙灘。",
    tip: "適合慢走，不必把每條巷弄走完；留一點時間坐在海邊看光線變化。",
    duration: "60–90 分鐘", best: "午後至黃昏", map: "津沙聚落"
  },
  {
    id: "mazu-statue", day: 1, order: "D1 · 07", name: "媽祖巨神像", area: "南竿", category: "島嶼地標", time: "16:30",
    image: "https://www.lnanews.com/imgnews/2017-08-07/e6s27xq2b86vbx1u5cv7koofe.jpg",
    credit: "人間通訊社", source: "https://www.lnanews.com/news/105645",
    summary: "28.8 公尺高的海上守護者，靜靜望向湄洲。",
    intro: "巨神像由 365 塊花崗岩組成，高度 28.8 公尺，象徵馬祖四鄉五島總面積。沿階梯登上宗教文化園區，能同時看見信仰、海港與南竿西岸景色。",
    tip: "下午光線較柔和；階梯較多，預留體力並注意強風。",
    duration: "45–60 分鐘", best: "夕陽前", map: "媽祖巨神像 南竿"
  },
  {
    id: "daqiu", day: 2, order: "D2 · 01", name: "大坵島", area: "北竿外島", category: "梅花鹿島", time: "08:30 船班",
    image: "https://www.matsu-nsa.gov.tw/FileArtPic.ashx?h=800&id=3020&w=1200",
    credit: "馬祖國家風景區", source: "https://www.matsu-nsa.gov.tw/Attraction-Content.aspx?a=2720&l=1",
    summary: "搭十分鐘的船，去一座梅花鹿比人多的島。",
    intro: "大坵曾有居民與駐軍，如今成為梅花鹿自由生活的無人島。沿環島步道行走，可以近距離觀察鹿群、廢棄聚落與海蝕地形，是八月最有季節感的體驗。",
    tip: "船班受海象影響，務必預訂；不追逐、不觸摸鹿角，也不要餵食自帶食物。",
    duration: "約 2 小時", best: "08:30 早班", map: "大坵島"
  },
  {
    id: "qiaozi", day: 2, order: "D2 · 02", name: "橋仔聚落", area: "北竿", category: "漁村信仰", time: "11:00",
    image: "https://g.udn.com.tw/upfiles/B_CE/cetustar/PSN_PHOTO/680/f_28799680_1.jpg",
    credit: "鍾小殷的幸福玩樂趣", source: "https://blog.udn.com/cetustar/182293024",
    summary: "依山臨海的小漁村，廟宇數量比居民還醒目。",
    intro: "橋仔村位於北竿北側，過去因漁業興盛而人口密集，也形成豐富的廟宇信仰。石屋、陡坡與漁港構成緊湊聚落，適合在大坵返航後順遊。",
    tip: "可品嘗橋仔阿婆黃金餃；村內坡度大，停車後用步行慢慢逛。",
    duration: "45–60 分鐘", best: "大坵回程後", map: "橋仔聚落 北竿"
  },
  {
    id: "qinbi", day: 2, order: "D2 · 03", name: "芹壁聚落", area: "北竿", category: "必去景點", time: "13:30",
    image: "https://www.matsu-nsa.gov.tw/api/uploads/attractions/%E8%8A%B9%E5%A3%81%E8%81%9A%E8%90%BD_%E5%8C%97%E7%AB%BF_2025_6.jpg",
    credit: "馬祖國家風景區", source: "https://www.matsu-nsa.gov.tw/zh-TW/album/1008",
    summary: "石屋沿山層疊，是最適合把速度放慢的地方。",
    intro: "芹壁是馬祖保存最完整的閩東建築聚落之一。花崗岩石屋、紅瓦屋頂與海岸階梯依山展開，轉角不時露出龜島與藍色海面，被稱為馬祖的地中海。",
    tip: "至少留兩小時散步與喝咖啡；午後到夕陽的光線最有層次。",
    duration: "2–3 小時", best: "午後至夕陽", map: "芹壁聚落"
  },
  {
    id: "longfu", day: 2, order: "D2 · 04", name: "龍福山莊", area: "北竿塘岐", category: "海鮮晚餐", time: "18:00",
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1400&q=82",
    credit: "Unsplash（海鮮料理示意）", source: "https://unsplash.com/",
    summary: "用一鍋澎湃海鮮，替北竿的一天收尾。",
    intro: "龍福山莊是三份參考行程都出現的北竿停靠點，招牌海鮮痛風鍋集合淡菜、鮮蝦、小卷與當季漁獲。多人同行最適合預訂，共享的形式也很有旅行感。",
    tip: "痛風鍋需視人數與食材安排，請提前電話預約並確認份量。",
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
    id: "broadcast", day: 3, order: "D3 · 02", name: "馬祖播音站", area: "北竿", category: "戰地記憶", time: "09:40",
    image: "https://www.matsu-news.gov.tw/uploads/news/205820.JPG",
    credit: "馬祖日報", source: "https://www.matsu-news.gov.tw/news/article/136554",
    summary: "巨型喇叭留下前線時代跨海傳聲的記憶。",
    intro: "冷戰時期，馬祖播音站曾向對岸進行心戰廣播。今日打卡點以巨型綠色喇叭重現那段歷史，強烈造型既荒謬又真實，是理解戰地日常的有趣入口。",
    tip: "目前可拍照的是芹壁候車亭旁的造景，並非山頂舊站本體。",
    duration: "20–30 分鐘", best: "順路停靠", map: "馬祖播音站 北竿"
  },
  {
    id: "short-slope", day: 3, order: "D3 · 03", name: "短坡山觀景台", area: "北竿", category: "島嶼展望", time: "10:30",
    image: "https://cdn.4travel.jp/img/thumbnails/imk/tips_pict/19/52/36/650x450_19523641.jpg?updated_at=1699245951",
    credit: "4travel", source: "https://4travel.jp/os_shisetsu/10436986",
    summary: "最後從高處回望，讀懂北竿的山海輪廓。",
    intro: "短坡山一帶視野開闊，可以從高處觀察北竿聚落、機場與海岸相互依存的地形。它不像芹壁華麗，更像一個讓旅程慢慢沉澱的觀景停靠。",
    tip: "風大時避免靠近邊坡；若時間不足，可直接前往塘後道沙灘。",
    duration: "25–35 分鐘", best: "能見度佳時", map: "短坡山觀景台 北竿"
  },
  {
    id: "tanghou", day: 3, order: "D3 · 04", name: "塘後道沙灘", area: "北竿", category: "海岸散步", time: "11:30",
    image: "https://cdn.walkerland.com.tw/images/upload/article/2021/12/m121434/2467bf0f09fed1712e10103709a7d7c8d247c0ed.jpg",
    credit: "WalkerLand", source: "https://www.walkerland.com.tw/article/view/314542",
    summary: "在機場旁看海，替跳島旅程留一段空白。",
    intro: "塘後道沙灘位於塘岐與后沃之間，緊鄰北竿機場跑道。沙洲、海浪與飛機起降形成少見景觀，也是回程前最不費力、最適合散步的海邊。",
    tip: "不建議下水；預留時間回塘岐用餐，再提前至少一小時抵達機場。",
    duration: "30–45 分鐘", best: "午餐前", map: "塘後道沙灘"
  }
];

const dayInfo = {
  all: ["ALL DAYS", "一趟剛剛好的島嶼旅行", "共 16 個精選停靠點，可自由收藏成自己的必去清單。"],
  0: ["8/19 · WED", "基隆夜航，睡醒抵達南竿", "20:30 前抵達碼頭；21:00–21:50 登船，22:00 開航。"],
  1: ["8/20 · THU", "南竿：戰地、酒香與百年聚落", "福澳抵達後由東向西，串連市場、坑道、聚落與海上信仰。"],
  2: ["8/21 · FRI", "北竿：尋鹿與石厝夕陽", "早班島際船轉北竿，先大坵、後橋仔與芹壁，夜宿北竿。"],
  3: ["8/22 · SAT", "北竿半日，從海邊飛回家", "上午以機場周邊順路收尾，預留至少 60 分鐘辦理登機。"]
};

const grid = document.querySelector("#spotGrid");
const dialog = document.querySelector("#spotDialog");
const dialogContent = document.querySelector("#dialogContent");
const toast = document.querySelector("#toast");
let saved = new Set(JSON.parse(localStorage.getItem("matsu-saved") || "[]"));

function renderCards() {
  grid.innerHTML = spots.map((spot, index) => `
    <article class="spot-card" data-day="${spot.day}" data-id="${spot.id}">
      <div class="spot-image-wrap">
        <img class="spot-image" src="${spot.image}" alt="${spot.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.src='https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=75'">
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
  if (showMessage) showToast(saved.size ? `已更新必去清單 · ${saved.size} 個景點` : "必去清單目前是空的");
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
      <img src="${spot.image}" alt="${spot.name}" referrerpolicy="no-referrer">
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
saveState(false);
