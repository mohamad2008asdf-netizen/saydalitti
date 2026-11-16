// ======================================
// صيدليتي | جسر الشغور
// جدول شهر تشرين الثاني 2026
// توقيت سوريا: Asia/Damascus
// ======================================
const TIME_ZONE = "Asia/Damascus";

const schedule = {
  "2026-11-01": [{ name: "الرحمة", address: "مقابل هيئة الزكاة سابقاً" }, { name: "المنير", address: "الصومعة" }],
  "2026-11-02": [{ name: "القوجة", address: "مقابل محلات رسيم" }, { name: "خديجة", address: "غرب دوار اللاذقية بـ50 متر" }],
  "2026-11-03": [{ name: "سيجري", address: "طريق مشفى الكلاوي / نزلة الكراج" }, { name: "وضاح", address: "نهاية سوق الحبوب" }],
  "2026-11-04": [{ name: "معاذ", address: "جانب مشفى التوليد" }, { name: "الحاجي", address: "مقابل مسجد النصر" }],
  "2026-11-05": [{ name: "الرازي", address: "مقابل البريد" }, { name: "المجد", address: "بعد ثانوية وليد شعبان" }],
  "2026-11-07": [{ name: "جوري", address: "جانب فرن العاصي" }, { name: "رؤى", address: "جانب شعبة التجنيد القديمة" }],
  "2026-11-08": [{ name: "علاء", address: "جانب أفران البحر" }, { name: "صباح", address: "مقابل مشفى الكلاوي" }],
  "2026-11-09": [{ name: "حلا", address: "طريق الحمام / مقابل بن المهباج" }, { name: "سنا", address: "طريق البساتين / قرب النفق" }],
  "2026-11-10": [{ name: "فاطمة", address: "جانب مسجد السرايا" }, { name: "نور", address: "مقابل مكتبة دلتا" }],
  "2026-11-11": [{ name: "حسين", address: "دوار الكرة / جانب طيف للصرافة" }, { name: "عائشة", address: "شارع النفوس / دخلة سوق الخضرة" }],
  "2026-11-12": [{ name: "المرمور", address: "الصومعة / غرب الساعة بـ50 متر" }, { name: "محمد حمود", address: "مقابل السرايا" }],
  "2026-11-14": [{ name: "الشفاء", address: "مقابل مشفى الكلاوي" }, { name: "غزال", address: "مقابل شعبة التجنيد القديمة" }],
  "2026-11-15": [{ name: "قمر", address: "جانب مشفى الكلاوي" }, { name: "التعاون", address: "شارع سوق السمك" }],
  "2026-11-16": [{ name: "لمى", address: "سوق الحبوب" }, { name: "الجسر", address: "الطريق العام / مقابل د. بيان مجني" }],
  "2026-11-17": [{ name: "السقا", address: "الصومعة" }, { name: "كلتوم", address: "جانب مجمع الفرقان الطبي" }],
  "2026-11-18": [{ name: "معتز", address: "شارع العقارات والمجمع التربوي" }, { name: "العابد", address: "شارع سوق السمك" }],
  "2026-11-19": [{ name: "الحكمة", address: "طريق مشفى الكلاوي" }, { name: "اليقين", address: "طريق الحمام / صيدلية شادي سابقاً" }],
  "2026-11-21": [{ name: "حللي", address: "دوار الكرة / طلعة السوق" }, { name: "عمر", address: "مقابل مسجد حمزة" }],
  "2026-11-22": [{ name: "بهاء", address: "جانب مشفى الكلاوي" }, { name: "مازن", address: "ساحة الدانية" }],
  "2026-11-23": [{ name: "نوار", address: "شارع سوق السمك" }, { name: "محمد زعيط", address: "ساحة الشهداء / طلعة السوق" }],
  "2026-11-24": [{ name: "رنيم", address: "مقابل مشفى التوليد" }, { name: "آلاء", address: "جانب مسجد حمزة" }],
  "2026-11-25": [{ name: "حللي", address: "دوار الكرة / طلعة السوق" }, { name: "بيت الدواء", address: "مقابل ثانوية وليد شعبان" }],
  "2026-11-26": [{ name: "سيجري", address: "طريق مشفى الكلاوي / نزلة الكراج" }, { name: "راشد", address: "جانب المسجد الكبير" }],
  "2026-11-28": [{ name: "السبيل", address: "طلعة التركمان" }, { name: "نور", address: "مقابل مكتبة دلتا" }],
  "2026-11-29": [{ name: "الرحمة", address: "جانب هيئة الزكاة" }, { name: "المنير", address: "الصومعة" }],
  "2026-11-30": [{ name: "القوجة", address: "مقابل محلات رسيم" }, { name: "خديجة", address: "غرب دوار اللاذقية بـ50 متر" }]
};

const fridaySchedule = {
  "2026-11-06": { morning: [{ name: "علاء", address: "الطريق العام / جانب أفران البحر" }, { name: "الحكمة", address: "طريق مشفى الكلاوي" }], evening: [{ name: "المرمور", address: "الصومعة" }, { name: "بيت الدواء", address: "مقابل ثانوية وليد شعبان" }] },
  "2026-11-13": { morning: [{ name: "المنير", address: "الصومعة" }, { name: "الرحمة", address: "جانب هيئة الزكاة" }], evening: [{ name: "العابد", address: "سوق السمك" }, { name: "اليقين", address: "طريق الحمام / صيدلية شادي سابقاً" }] },
  "2026-11-20": { morning: [{ name: "السقا", address: "الصومعة" }, { name: "الجسر", address: "مقابل د. بيان مجني" }], evening: [{ name: "السبيل", address: "طلعة التركمان" }, { name: "وضاح", address: "نهاية سوق الحبوب" }] },
  "2026-11-27": { morning: [{ name: "حللي", address: "دوار الكرة" }, { name: "المجد", address: "بعد ثانوية وليد شعبان" }], evening: [{ name: "حسين", address: "دوار الكرة / جانب طيف للصرافة" }, { name: "نور", address: "مقابل مكتبة دلتا" }] }
};

function getSyriaParts() {
  return new Intl.DateTimeFormat("en-GB", { timeZone: TIME_ZONE, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(new Date());
}
function getSyriaDate() { const p = getSyriaParts(), g = t => p.find(x => x.type === t).value; return `${g("year")}-${g("month")}-${g("day")}`; }
function getSyriaMinutes() { const p = getSyriaParts(), g = t => Number(p.find(x => x.type === t).value); return g("hour") * 60 + g("minute"); }
function formatArabicDate(key) { return new Intl.DateTimeFormat("ar-SY", { timeZone: TIME_ZONE, weekday: "long", day: "numeric", month: "long", year: "numeric" }).format(new Date(`${key}T12:00:00+03:00`)); }
function isFriday(key) { return new Date(`${key}T12:00:00+03:00`).getUTCDay() === 5; }

let pharmacyMapInstance = null;
let pharmacyMapReady = false;

// أرقام التواصل: اترك القيمة فارغة إلى حين الحصول على الرقم الصحيح.
// مثال بعد التأكد من الرقم: "صيدلية الرحمة": "+963..."
const contactNumbers = {
  // "الرحمة": "+963XXXXXXXXX",
};

function createContactButton(pharmacy, directory = false) {
  const phone = (contactNumbers[pharmacy.name] || "").trim();
  const button = document.createElement("button");
  button.type = "button";
  button.className = directory ? "directory-contact-button" : "pharmacy-contact-button";
  button.textContent = phone ? "☎ اتصال بالصيدلية" : "☎ رقم التواصل قريباً";
  button.disabled = !phone;
  if (phone) {
    button.addEventListener("click", () => { window.location.href = `tel:${phone}`; });
  }
  return button;
}

function showPage(pageId) {
  // التنقل بين الأقسام داخلياً، دون الانتقال إلى رابط /map غير موجود على الاستضافات الثابتة.
  const target = document.getElementById(pageId);
  if (!target) return;
  document.querySelectorAll(".page").forEach(p => p.classList.toggle("active", p.id === pageId));
  document.querySelectorAll(".nav-item").forEach(b => b.classList.toggle("active", b.dataset.page === pageId));
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (pageId === "mapPage") {
    window.setTimeout(initPharmacyMap, 120);
  }
}

function initPharmacyMap() {
  const mapElement = document.getElementById("pharmacyMap");
  const status = document.getElementById("mapStatus");
  if (!mapElement || !status) return;

  if (typeof L === "undefined") {
    status.textContent = "تعذر تحميل مكتبة الخريطة. استخدم زر خرائط Google أدناه، وتأكد من الاتصال بالإنترنت.";
    status.classList.add("map-status-error");
    return;
  }

  if (!pharmacyMapInstance) {
    // مركز جسر الشغور تقريبي وليس موقع صيدلية بعينها.
    pharmacyMapInstance = L.map(mapElement, { scrollWheelZoom: false }).setView([35.8147, 36.3192], 14);
    const tileLayer = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a>'
    }).addTo(pharmacyMapInstance);
    tileLayer.on("tileerror", () => {
      status.textContent = "تعذر تحميل بعض مربعات الخريطة. تحقق من اتصال الإنترنت أو استخدم زر خرائط Google.";
      status.classList.add("map-status-error");
    });
    L.marker([35.8147, 36.3192]).addTo(pharmacyMapInstance)
      .bindPopup("مركز جسر الشغور — موقع تقريبي، وليس موقع صيدلية محددة");
    pharmacyMapReady = true;
    status.textContent = "الخريطة متمركزة على جسر الشغور. العلامة لمركز المدينة بشكل تقريبي.";
    status.classList.remove("map-status-error");
  }

  window.setTimeout(() => {
    if (pharmacyMapInstance) {
      pharmacyMapInstance.invalidateSize(true);
      pharmacyMapInstance.setView([35.8147, 36.3192], 14);
    }
  }, 250);
}

function openPharmacyOnGoogleMaps(pharmacy) {
  const query = `صيدلية ${pharmacy.name}، ${pharmacy.address}، جسر الشغور`;
  const url = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(query);
  window.open(url, "_blank", "noopener,noreferrer");
}

function createPharmacyCard(pharmacy, index = 0) {
  const card = document.createElement("article"); card.className = "pharmacy-card"; card.style.animationDelay = `${index * .1}s`;
  const sign = document.createElement("div"); sign.className = "card-sign";
  const cross = document.createElement("span"); cross.textContent = "✚";
  const label = document.createElement("small"); label.textContent = "صيدلية مناوبة";
  const name = document.createElement("strong"); name.textContent = `صيدلية ${pharmacy.name}`;
  sign.append(cross, label, name);
  const address = document.createElement("div"); address.className = "card-address";
  const pin = document.createElement("span"); pin.textContent = "⌖";
  const details = document.createElement("div");
  const addressText = document.createElement("strong"); addressText.textContent = pharmacy.address;
  const city = document.createElement("small"); city.textContent = "جسر الشغور";
  details.append(addressText, city); address.append(pin, details); card.append(sign, address);
  const mapButton = document.createElement("button");
  mapButton.type = "button"; mapButton.className = "pharmacy-map-button";
  mapButton.textContent = "ابحث عن الصيدلية على الخريطة ↗";
  mapButton.addEventListener("click", () => openPharmacyOnGoogleMaps(pharmacy));
  const actions = document.createElement("div"); actions.className = "pharmacy-actions";
  actions.appendChild(createContactButton(pharmacy));
  actions.appendChild(mapButton);
  card.appendChild(actions);
  return card;
}
function createShiftHeading(title, time) {
  const el = document.createElement("div"); el.className = "shift-heading";
  const strong = document.createElement("strong"); strong.textContent = title;
  const span = document.createElement("span"); span.textContent = time; el.append(strong, span); return el;
}
function displayPharmacies(container, list) { list.forEach((p, i) => container.appendChild(createPharmacyCard(p, i))); }
function updateDutyTimeText(title, time) {
  const box = document.querySelector(".duty-time-card");
  if (box) { box.querySelector("strong").textContent = title; box.querySelector("div span").textContent = time; box.querySelector(".time-badge").textContent = time; }
}
function setDutyMessage(message, closed = false) {
  const box = document.getElementById("dutyStatus"); box.innerHTML = "";
  const msg = document.createElement("div"); msg.className = `status-message${closed ? " closed" : ""}`; msg.textContent = message; box.appendChild(msg);
}
function showEmpty(list, title, description) {
  list.innerHTML = ""; const box = document.createElement("div"); box.className = "empty-state";
  const icon = document.createElement("span"); icon.textContent = "▦";
  const h = document.createElement("strong"); h.textContent = title;
  const p = document.createElement("p"); p.textContent = description; box.append(icon, h, p); list.appendChild(box);
}
function renderDuty() {
  const key = getSyriaDate(), minutes = getSyriaMinutes();
  const date = document.getElementById("dutyDate"), status = document.getElementById("dutyStatus"), list = document.getElementById("dutyList");
  if (!date || !status || !list) return;
  date.textContent = formatArabicDate(key); status.innerHTML = ""; list.innerHTML = "";

  // فترة 00:00–08:00 مستقلة. بياناتها تبقى فارغة حتى استلام جدولها الفعلي.
  if (minutes < 480) {
    updateDutyTimeText("المناوبة بعد منتصف الليل", "12:00 ليلاً — 8:00 صباحاً");
    setDutyMessage("هذه فترة المناوبة الليلية بعد منتصف الليل. أسماء الصيدليات لم تُضف بعد.", true);
    const card = document.createElement("div"); card.className = "overnight-placeholder";
    const icon = document.createElement("span"); icon.className = "overnight-icon"; icon.textContent = "☾";
    const title = document.createElement("strong"); title.textContent = "مناوبة 12 ليلاً حتى 8 صباحاً";
    const description = document.createElement("p"); description.textContent = "بيانات الصيدليات المناوبة لهذه الفترة قيد الإضافة. لم نضع أسماء أو عناوين غير مؤكدة.";
    const tag = document.createElement("small"); tag.textContent = "00:00 — 08:00";
    card.append(icon, title, description, tag); list.appendChild(card);
    return;
  }

  // الجمعة لها جدول خاص بفترتين: 08:00–16:30 و16:30–00:00.
  if (isFriday(key) && fridaySchedule[key]) {
    const friday = fridaySchedule[key]; let selected = null, title = "", time = "";
    if (minutes >= 480 && minutes < 990) { selected = friday.morning; title = "مناوبة الجمعة الصباحية"; time = "8:00 صباحاً — 4:30 عصراً"; }
    else if (minutes >= 990 && minutes < 1440) { selected = friday.evening; title = "مناوبة الجمعة المسائية"; time = "4:30 عصراً — 12 ليلاً"; }
    if (selected) {
      updateDutyTimeText(title, time); setDutyMessage("هذه هي الصيدليات المناوبة حالياً");
      list.appendChild(createShiftHeading(title, time)); displayPharmacies(list, selected);
    } else {
      updateDutyTimeText("مواعيد مناوبة الجمعة", "8:00 صباحاً — 12 ليلاً");
      setDutyMessage("لم تبدأ فترة المناوبة بعد. إليك جدول مناوبتي الجمعة.", true);
      list.appendChild(createShiftHeading("الفترة الصباحية", "8:00 صباحاً — 4:30 عصراً")); displayPharmacies(list, friday.morning);
      list.appendChild(createShiftHeading("الفترة المسائية", "4:30 عصراً — 12 ليلاً")); displayPharmacies(list, friday.evening);
    }
    return;
  }

  // من السبت إلى الخميس: جميع الصيدليات مفتوحة نهاراً، والمناوبة المحددة تبدأ 20:00.
  if (minutes < 1200) {
    updateDutyTimeText("الدوام النهاري", "جميع الصيدليات مفتوحة خلال النهار");
    setDutyMessage("الدوام النهاري: جميع الصيدليات مفتوحة من السبت إلى الخميس.");
    const card = document.createElement("div"); card.className = "daytime-card";
    const icon = document.createElement("span"); icon.className = "daytime-icon"; icon.textContent = "☀";
    const title = document.createElement("strong"); title.textContent = "جميع الصيدليات مفتوحة الآن";
    const desc = document.createElement("p"); desc.textContent = "خلال ساعات النهار يمكنك التوجه إلى أي صيدلية في جسر الشغور. تبدأ المناوبة الليلية المحددة عند الساعة 8:00 مساءً.";
    const tag = document.createElement("small"); tag.textContent = "السبت – الخميس · دوام نهاري عام";
    card.append(icon, title, desc, tag); list.appendChild(card);
    return;
  }

  updateDutyTimeText("المناوبة الليلية", "8:00 مساءً — 12:00 ليلاً");
  const pharmacies = schedule[key] || [];
  if (!pharmacies.length) { setDutyMessage("لا يوجد جدول مناوبات مسجل لهذا التاريخ حالياً.", true); showEmpty(list, "لا توجد بيانات لهذا اليوم", "الجدول المتوفر حالياً يغطي شهر تشرين الثاني 2026 فقط."); return; }
  setDutyMessage("هذه هي الصيدليات المناوبة حالياً");
  displayPharmacies(list, pharmacies);
}
function renderSchedule() {
  const list = document.getElementById("scheduleList"); if (!list) return; list.innerHTML = "";
  const today = getSyriaDate(), dates = [...Object.keys(schedule), ...Object.keys(fridaySchedule)].sort();
  dates.forEach(key => {
    const card = document.createElement("article"); card.className = "schedule-day" + (key === today ? " today" : "");
    const head = document.createElement("div"); head.className = "schedule-day-head";
    const title = document.createElement("strong"); title.textContent = formatArabicDate(key);
    const label = document.createElement("span"); label.textContent = key === today ? "مناوبة اليوم" : "المناوبة";
    head.append(title, label); card.appendChild(head);
    const addGroup = (heading, time, items) => {
      card.appendChild(createShiftHeading(heading, time)); const row = document.createElement("div"); row.className = "schedule-pharmacies";
      items.forEach(p => { const chip = document.createElement("span"); chip.textContent = `✚ ${p.name}`; row.appendChild(chip); }); card.appendChild(row);
    };
    if (fridaySchedule[key]) { addGroup("الفترة الأولى", "8:00 صباحاً — 4:30 عصراً", fridaySchedule[key].morning); addGroup("الفترة الثانية", "4:30 عصراً — 12 ليلاً", fridaySchedule[key].evening); }
    else { const row = document.createElement("div"); row.className = "schedule-pharmacies"; (schedule[key] || []).forEach(p => { const chip = document.createElement("span"); chip.textContent = `✚ ${p.name}`; row.appendChild(chip); }); card.appendChild(row); }
    list.appendChild(card);
  });
}
function getAllPharmacies() {
  const map = new Map(), add = list => list.forEach(p => { if (!map.has(p.name)) map.set(p.name, p); });
  Object.values(schedule).forEach(add); Object.values(fridaySchedule).forEach(f => { add(f.morning); add(f.evening); });
  return [...map.values()].sort((a, b) => a.name.localeCompare(b.name, "ar"));
}
function renderDirectory(searchText = "") {
  const list = document.getElementById("directoryList"); if (!list) return;
  const query = searchText.trim().toLowerCase();
  const filtered = getAllPharmacies().filter(p => p.name.toLowerCase().includes(query) || p.address.toLowerCase().includes(query));
  list.innerHTML = "";
  if (!filtered.length) { showEmpty(list, "لم نعثر على الصيدلية", "تأكد من كتابة الاسم أو العنوان بشكل صحيح."); return; }
  filtered.forEach(p => {
    const card = document.createElement("article"); card.className = "directory-card";
    const icon = document.createElement("span"); icon.className = "directory-icon"; icon.textContent = "✚";
    const info = document.createElement("div"); info.className = "directory-info";
    const name = document.createElement("strong"); name.textContent = `صيدلية ${p.name}`;
    const address = document.createElement("small"); address.textContent = `⌖ ${p.address}`;
    info.append(name, address); card.append(icon, info);
    const actions = document.createElement("div"); actions.className = "directory-actions";
    const contactButton = createContactButton(p, true);
    const mapButton = document.createElement("button"); mapButton.type = "button"; mapButton.className = "directory-map-button";
    mapButton.textContent = "الخريطة ↗"; mapButton.addEventListener("click", () => openPharmacyOnGoogleMaps(p));
    actions.append(contactButton, mapButton);
    card.appendChild(actions); list.appendChild(card);
  });
}
document.addEventListener("DOMContentLoaded", () => {
  renderDuty(); renderSchedule(); renderDirectory();
  setInterval(() => { if (document.getElementById("dutyPage")?.classList.contains("active")) renderDuty(); }, 60000);
});