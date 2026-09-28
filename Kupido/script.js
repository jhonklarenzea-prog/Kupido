// =====================================================
//  ✏️ EDIT EVERYTHING HERE (you don't need to touch
//  anything below the "ENGINE" line)
// =====================================================
const websiteData = {
  recipientName: "Angelic",
  senderName: "Renzi",

  giftMessage: "You received a gift from Renzi.",
  menuTitle: "Choose your gift",
  menuSubtitle: "ttle things I made for you",

  letterTitle: "My cutie Angelic…",
  poemTitle: "Manunulat",
  signature: "- Renzi 🤍",

  // ---------- EDIT YOUR LOVE LETTER HERE ----------
  letter: `
    My babi Angelic,

    I wanna start this letter by saying thank you so much for always making my day complete and full of happiness. You are the most beautiful person I have ever met, and I feel so lucky to have you in my life.

    I wanna thank you for being there for me and all those small and big things that you did. I super appreciate it babi! and I wanna say that I am always be here for you too, no matter what. I will always support you in any way possible and be your shoulder to lean on.

    Who would have thought that we actually come to this stage? from meet and greet sa intrams to this one HAHAHA. I'm so grateful to have you in my life babi, and I would love to spend more time with you and create more memories together. Love You!

    
  `,

  // ---------- EDIT YOUR POEM HERE ----------
  poem: `

   Isang simpleng manunulat na nais
Gamitin ang kanyang tinta.
Hindi man ako kasinghusay ng tulang iyong likha,
Kasingganda at kasingtunog ng mga salita.
Hayaan mong gawan kita ng tula
At maramdaman mong karapat-dapat ka ring
Makatanggap ng sulat na gamit ay tinta.


Ikaw ay manunulat na aking hinahangaan
Dahil sa likha mong kay gandang masdan,
May isang animo'y mundong sumisibol
Sa bawat titik at taludtod na iyong binuo.


Ngunit aking napansin na sa bawat titik at tinta
Na iyong inaalay,
Naisip ko kung sino ang makapagbibigay
Ng sulat na para sa iyo ay babagay.


Hindi man kasingperpekto ng titik sa iyong pahina
O kasingganda ng mga salita sa bawat pahina,
Ngunit sa bawat salita sa aking tinta
Ay mababakasan ng lubos na paghanga.


Sa bawat taludtod at titik na sinusulat,
Hayaan mong sabihin ko na,
Ang manunulat ay dapat ding maisulat,
Ang tumutula ay nararapat makatanggap ng tula,
Ang taong mahal ang salita
Ay dapat minamahal sa salitang nauunawaan nito.


Kaya tanggapin mo ang kaunting tulang
Galing sa manunulat na ito,
Hindi man ako kasinghusay mo.


Ngunit sa pagkakataong ito,
Hindi na ikaw ang sumusulat
Sa bawat letra at titik na iyong nais.


Sa pagkakataong ito,
Hayaan mong ikaw ang maging paksa sa pahinang ito.
Hayaan mong ang tinta ko ang boses
Ng paghanga kong hindi nasasabi ng bibig,
At nawa'y ang aking sulat, titik,
At taludtod na aking binabanggit
Ay maging munting kapalit
Sa tulang sa iyong sarili ipinagkait.


At kung hindi man sapat
Ang mga titik at salitang aking binuo,
Nawa'y malaman mo na sa mundong
Ikaw ay sanay sumulat gamit ang papel at tinta,
May taong nais kang isulat
At gawing paksa.


Ikaw ay isang manunulat
Na nabubuhay sa pahina at tinta,
Kaya hayaan mong ialay ko sa iyo
Ang tulang aking ginawa.
  `,

  // ---------- TYPING SPEED (milliseconds per letter) ----------
  // Bigger number = slower typing
  letterSpeed: 45,
  poemSpeed: 55,

  // ---------- BACKGROUND MUSIC ----------
  // Paste a DIRECT link to an audio file (ends in .mp3 / .ogg / .wav)
  // or a local file such as "assets/music/song.mp3".
  // Leave "" for no music (the music control will hide itself).
  // NOTE: YouTube/Spotify page links will NOT work here.
  musicURL: "SUGARCANE-Leonora-SnapYT.App.mp3",
  musicVolume: 0.5,   // 0 (silent) to 1 (full)

  heartCount: 14      // number of floating hearts
};

// =====================================================
//  ENGINE (no need to edit below this line)
// =====================================================
const $ = (id) => document.getElementById(id);
const d = websiteData;

// ---------- Fill in the text ----------
document.title = "To My Love, " + d.recipientName;
$("menuTitle").textContent = d.menuTitle;
$("menuSub").textContent = d.menuSubtitle;

// ---------- Screen switching ----------
function show(id) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
  $(id).classList.add("active");
  window.scrollTo(0, 0);
}

// ---------- Floating hearts ----------
const symbols = ["♥", "♡", "✦", "★"];
for (let i = 0; i < d.heartCount; i++) {
  const el = document.createElement("span");
  el.className = "float";
  el.textContent = symbols[i % symbols.length];
  el.style.left = Math.random() * 100 + "%";
  el.style.fontSize = 12 + Math.random() * 16 + "px";
  el.style.color = i % 3 === 0 ? "#c9a96e" : "#8b1a26";
  el.style.animationDuration = 12 + Math.random() * 14 + "s";
  el.style.animationDelay = -Math.random() * 20 + "s";
  $("particles").appendChild(el);
}

// ---------- Gift screen: small typewriter on the message ----------
(function typeGift() {
  let i = 0;
  const t = setInterval(() => {
    $("giftText").textContent = d.giftMessage.slice(0, ++i);
    if (i >= d.giftMessage.length) clearInterval(t);
  }, 45);
})();

// ---------- Music ----------
const audio = new Audio();
audio.loop = true;
audio.volume = d.musicVolume;
const musicBox = $("music");
$("volume").value = d.musicVolume;

if (d.musicURL && d.musicURL.trim() !== "" && !d.musicURL.includes("PASTE")) {
  audio.src = d.musicURL;
  musicBox.classList.remove("hidden");
}
function toast(msg) {
  $("toast").textContent = msg;
  $("toast").classList.add("show");
  setTimeout(() => $("toast").classList.remove("show"), 3500);
}
audio.addEventListener("play", () => musicBox.classList.add("playing"));
audio.addEventListener("pause", () => musicBox.classList.remove("playing"));
audio.addEventListener("error", () => {
  musicBox.classList.add("hidden");
  toast("The music couldn't load, but the gift still works 🤍");
});
$("musicBtn").addEventListener("click", () => {
  audio.paused ? audio.play().catch(() => toast("Tap again to start the music")) : audio.pause();
});
$("volume").addEventListener("input", (e) => (audio.volume = e.target.value));

// ---------- Open button (music starts here: browsers allow it after a click) ----------
$("openBtn").addEventListener("click", () => {
  if (audio.src) audio.play().catch(() => {});
  show("screen-menu");
});

// ---------- Typewriter reader ----------
let timer = null, fullText = "", idx = 0, speed = 50, currentType = "letter";
const typedEl = $("typed"), bodyEl = $("paperBody");

// Removes the extra indentation from the template literals
const clean = (t) => t.split("\n").map((l) => l.trim()).join("\n").trim();

function startReading(type) {
  currentType = type;
  clearTimeout(timer);
  fullText = clean(d[type]);
  speed = type === "letter" ? d.letterSpeed : d.poemSpeed;
  $("readTitle").textContent = type === "letter" ? d.letterTitle : d.poemTitle;
  $("sign").textContent = d.signature;
  $("sign").classList.remove("show");
  typedEl.textContent = "";
  typedEl.classList.add("typing");
  $("skipBtn").classList.remove("hidden");
  $("replayBtn").classList.add("hidden");
  $("backBtn").classList.add("hidden");
  idx = 0;
  show("screen-read");
  timer = setTimeout(tick, 900);
}

function tick() {
  if (idx >= fullText.length) return finish();
  const ch = fullText[idx++];
  typedEl.textContent = fullText.slice(0, idx);
  bodyEl.scrollTop = bodyEl.scrollHeight;      // keep newest text in view
  let delay = speed;
  if (".!?…".includes(ch)) delay *= 6;         // pause at sentence ends
  else if (",;:".includes(ch)) delay *= 3;
  else if (ch === "\n") delay *= 4;
  timer = setTimeout(tick, delay);
}

function finish() {
  clearTimeout(timer);
  typedEl.textContent = fullText;              // complete text stays visible
  typedEl.classList.remove("typing");
  $("sign").classList.add("show");
  $("skipBtn").classList.add("hidden");
  $("replayBtn").classList.remove("hidden");
  $("backBtn").classList.remove("hidden");
}

document.querySelectorAll(".choice").forEach((b) =>
  b.addEventListener("click", () => startReading(b.dataset.type))
);
$("skipBtn").addEventListener("click", finish);
$("replayBtn").addEventListener("click", () => startReading(currentType));
$("backBtn").addEventListener("click", () => { clearTimeout(timer); show("screen-menu"); });