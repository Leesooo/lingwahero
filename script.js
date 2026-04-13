/* ============================================================
   PINOYDIKSYUNARYO — MAIN SCRIPT
   ============================================================ */

// ---- DICTIONARY DATA (expanded) ----
const dictionary = {
  "araw": {
    tagalog:"araw", cebuano:"adlaw", ilocano:"aldao", hiligaynon:"adlaw", english:"day / sun",
    phonetic:"a·raw",
    meaning:{
      tagalog:"Ang panahon ng liwanag sa pagitan ng isang gabi at ang susunod na gabi, o ang bituin na nasa gitna ng ating solar system na nagbibigay ng liwanag at init.",
      cebuano:"Ang panahon nga adunay kahayag taliwala sa gabii ug sunod nga gabii, o ang bituon sa tunga-tunga sa atong solar system.",
      ilocano:"Ti oras ti lawag iti tunggal rabii ken sumarsaruno nga rabii, wenno ti bituen a nasa tengnga ti sistema ti adlaw.",
      hiligaynon:"Ang panahon nga may kahayag tunga sang gab-i kag sunod nga gab-i, ukon ang bituon nga yara sa tunga sang aton solar system.",
      english:"The period of light between one night and the next, or the star at the center of the solar system."
    }
  },
  "gabi": {
    tagalog:"gabi", cebuano:"gabii", ilocano:"rabi-i", hiligaynon:"gab-i", english:"night",
    phonetic:"ga·bi",
    meaning:{
      tagalog:"Ang oras ng araw mula sa paglubog ng araw hanggang sa pagsikat ng araw.",
      cebuano:"Ang panahon gikan sa paglubog sa adlaw hangtod sa pagsubang adlaw.",
      ilocano:"Ti oras manipud iti panagpadigo ti init aginggana iti panagbaba ti init.",
      hiligaynon:"Ang oras halin sa paglubog sang adlaw tubtob sa pagsalum sang adlaw.",
      english:"The time of day between sunset and sunrise."
    }
  },
  "pag-ibig": {
    tagalog:"pag-ibig", cebuano:"gugma", ilocano:"ay-ayaten", hiligaynon:"gugma", english:"love",
    phonetic:"pag·i·big",
    meaning:{
      tagalog:"Isang malalim na pakiramdam ng pagkagusto at pagpapahalaga sa isang tao, bagay, o ideya.",
      cebuano:"Usa ka lawom nga pagbati sa pagkapareho ug pag-apresyar sa usa ka tawo.",
      ilocano:"Maysa a naimbag nga panagkidduwa ti pagkasarsarita ken panagdayaw iti maysa a tao.",
      hiligaynon:"Isa ka malalom nga pagbati sa pagkahamtang kag pag-apresyar sa isa ka tawo.",
      english:"A deep feeling of affection and appreciation for a person, thing, or idea."
    }
  },
  "mahal": {
    tagalog:"mahal", cebuano:"mahal", ilocano:"mahal", hiligaynon:"palangga", english:"expensive / dear / loved one",
    phonetic:"ma·hal",
    meaning:{
      tagalog:"Isang bagay na may mataas na halaga o presyo, o isang tao na may mahalagang halaga sa ating puso.",
      cebuano:"Usa ka butang nga adunay taas nga bili o presyo, o usa ka tawo nga adunay bili sa atong kasingkasing.",
      ilocano:"Maysa a banag nga adda nangato a balor wenno presyo.",
      hiligaynon:"Isa ka bagay nga may mataas nga bili o presyo, o isa ka tawo nga may daku nga bili.",
      english:"A thing that has a high value or price, or a person who is dear to one's heart."
    }
  },
  "kaibigan": {
    tagalog:"kaibigan", cebuano:"amigo/amiga", ilocano:"gagayem", hiligaynon:"abyan", english:"friend",
    phonetic:"ka·i·bi·gan",
    meaning:{
      tagalog:"Isang tao na may matibay na ugnayan o relasyon sa isa pang tao, batay sa pagkakaibigan, tiwala, at suportahan.",
      cebuano:"Usa ka tawo nga adunay lig-on nga relasyon ug kasabutan sa usa pa ka tawo.",
      ilocano:"Maysa a tao a naikkan iti napigsa nga relasyon wenno kasangayan iti sabali a tao.",
      hiligaynon:"Isa ka tawo nga may lig-on nga relasyon ukon koneksyon sa iban nga tawo.",
      english:"A person with whom one has a strong bond or relationship based on friendship and trust."
    }
  },
  "tahanan": {
    tagalog:"tahanan", cebuano:"balay", ilocano:"balay", hiligaynon:"balay", english:"home",
    phonetic:"ta·ha·nan",
    meaning:{
      tagalog:"Isang lugar kung saan nakatira ang isang pamilya o tao, ang tahanan ay karaniwang may mga kagamitan upang makapagbigay ng kaligtasan at kaginhawaan.",
      cebuano:"Usa ka lugar diin ang usa ka pamilya o tawo nagpuyo.",
      ilocano:"Maysa a lugar a pagnaedanda iti maysa a pamilya wenno tao.",
      hiligaynon:"Isa ka lugar nga ginapuy-an sang pamilya ukon tawo.",
      english:"A place where a family or person lives, typically providing safety and comfort."
    }
  },
  "puno": {
    tagalog:"puno", cebuano:"kahoy", ilocano:"kayu", hiligaynon:"kahoy", english:"tree",
    phonetic:"pu·no",
    meaning:{
      tagalog:"Isang halaman na may matigas na katawan at mga sanga na nagdadala ng mga dahon, bulaklak, o prutas.",
      cebuano:"Usa ka tanom nga adunay lig-on nga lawas ug mga sanga nga nagdala sa mga dahon.",
      ilocano:"Maysa a tanem nga adda napigsa a lawas ken dagiti sanga.",
      hiligaynon:"Isa ka tanom nga may lig-on nga lawas kag mga sanga nga nagadala sang mga dahon.",
      english:"A plant with a strong stem or trunk, branches, and leaves."
    }
  },
  "makisig": {
    tagalog:"makisig", cebuano:"gwapo", ilocano:"nalaing", hiligaynon:"gwapo", english:"handsome / dashing",
    phonetic:"ma·ki·sig",
    meaning:{
      tagalog:"Isang termino na ginagamit upang ilarawan ang isang lalaki na maganda o kaakit-akit.",
      cebuano:"Usa ka termino nga gigamit aron ilarawan ang usa ka lalaki nga gwapo.",
      ilocano:"Usar ti termino a mangiladawan iti lalaki nga napintas.",
      hiligaynon:"Isa ka termino nga ginagamit para ilarawan ang lalaki nga gwapo.",
      english:"A term used to describe someone who is attractive or good-looking."
    }
  },
  "buhay": {
    tagalog:"buhay", cebuano:"kinabuhi", ilocano:"biag", hiligaynon:"kinabuhi", english:"life",
    phonetic:"bu·hay",
    meaning:{
      tagalog:"Ang estado ng isang organismo na nagtataglay ng kakayahang lumago, kumilos, at tumugon sa kapaligiran.",
      cebuano:"Ang kahimtang sa usa ka organismo nga adunay abilidad sa pagtubo ug paglihok.",
      ilocano:"Ti kasasaad ti maysa nga organismo nga mabalin a lumako ken sumunga.",
      hiligaynon:"Ang kahimtangan sang isa ka organismo nga may kakayahan nga magtubo kag magkilos.",
      english:"The condition that distinguishes living organisms from dead matter, involving growth and response to stimuli."
    }
  },
  "langit": {
    tagalog:"langit", cebuano:"langit", ilocano:"langit", hiligaynon:"langit", english:"sky / heaven",
    phonetic:"la·ngit",
    meaning:{
      tagalog:"Ang kalawakan na makikita sa itaas ng mundo, o ang dako ng mga anghel at Diyos.",
      cebuano:"Ang kawanangan nga makita sa ibabaw sa kalibutan, o ang dapit sa mga anghel.",
      ilocano:"Ti langit a mabalin a matukod iti ngato ti lubong, wenno ti lugar dagiti anghel.",
      hiligaynon:"Ang kawanangan nga makita sa ibabaw sang kalibutan, o ang lugar sang mga anghel.",
      english:"The expanse of space seen from the earth, or the abode of God and angels."
    }
  },
  "dagat": {
    tagalog:"dagat", cebuano:"dagat", ilocano:"baybay", hiligaynon:"dagat", english:"sea / ocean",
    phonetic:"da·gat",
    meaning:{
      tagalog:"Isang malawak na katawan ng asin na tubig na sumasaklaw sa malaking bahagi ng ibabaw ng lupa.",
      cebuano:"Usa ka halapad nga lawas sa asin nga tubig nga nagtabon sa dakong bahin sa yuta.",
      ilocano:"Maysa a nalawa a bagi ti asinna a danum a mangsaklaw iti dakkel a bahin ti rabaw ti daga.",
      hiligaynon:"Isa ka malapad nga katawan sang asin nga tubig nga nagatakop sa daku nga bahin sang kalupaan.",
      english:"A vast body of salt water that covers most of the earth's surface."
    }
  },
  "bundok": {
    tagalog:"bundok", cebuano:"bukid", ilocano:"bantay", hiligaynon:"bukid", english:"mountain",
    phonetic:"bun·dok",
    meaning:{
      tagalog:"Isang mataas na pormasyong lupa na tumaas nang higit sa kapaligiran nito.",
      cebuano:"Usa ka taas nga pormasyon sa yuta nga nagtaas labaw sa palibot niini.",
      ilocano:"Maysa a nangato a pormasyon ti daga nga nagtaas ngem ti palibot na.",
      hiligaynon:"Isa ka mataas nga pormasyon sang duta nga nagtaas labaw sa palibot.",
      english:"A large natural elevation of earth rising to a summit."
    }
  },
  "tubig": {
    tagalog:"tubig", cebuano:"tubig", ilocano:"danum", hiligaynon:"tubig", english:"water",
    phonetic:"tu·big",
    meaning:{
      tagalog:"Isang malinaw, walang kulay at walang amoy na likido na mahalaga sa buhay.",
      cebuano:"Usa ka tin-aw, walay kolor ug walay lami nga likido nga hinungdanon sa kinabuhi.",
      ilocano:"Maysa a nalinis, awanan kolor ken amoy a likido a napatpateg iti biag.",
      hiligaynon:"Isa ka matino, wala sing kolor kag wala sing lasa nga likido nga importante sa kinabuhi.",
      english:"A clear, colorless, odorless liquid essential to life."
    }
  },
  "apoy": {
    tagalog:"apoy", cebuano:"kalayo", ilocano:"apuy", hiligaynon:"kalayo", english:"fire",
    phonetic:"a·poy",
    meaning:{
      tagalog:"Ang liwanag at init na dulot ng pagsusunog ng bagay.",
      cebuano:"Ang kahayag ug kainit nga gihimo sa pagsunog sa usa ka butang.",
      ilocano:"Ti lawag ken init a mangaramat iti panagsunog ti bagay.",
      hiligaynon:"Ang kahayag kag init nga ginagawa sang pagsunog sang bagay.",
      english:"The rapid chemical process of combustion producing heat and light."
    }
  },
  "hangin": {
    tagalog:"hangin", cebuano:"hangin", ilocano:"angin", hiligaynon:"hangin", english:"wind / air",
    phonetic:"ha·ngin",
    meaning:{
      tagalog:"Ang paggalaw ng hangin sa atmospera ng lupa, o ang pinaghalong gas na pinalibutan tayo.",
      cebuano:"Ang paglihok sa hangin sa atmospera, o ang halo sa mga gas nga napalibutan kanato.",
      ilocano:"Ti panagpardas ti angin iti agraraman ti daga, wenno ti nalawlawa a halo dagiti gas.",
      hiligaynon:"Ang paglihok sang hangin sa atmospera, o ang halo sang mga gas sa palibot naton.",
      english:"The perceptible natural movement of the air, especially in the form of a current."
    }
  },
  "pagkain": {
    tagalog:"pagkain", cebuano:"pagkaon", ilocano:"makanon", hiligaynon:"pagkaon", english:"food",
    phonetic:"pag·ka·in",
    meaning:{
      tagalog:"Anumang bagay na kinakain ng mga tao o hayop upang mapanatili ang buhay at makakuha ng enerhiya.",
      cebuano:"Bisan unsang butang nga gikaon sa mga tawo o hayop aron mapadayon ang kinabuhi.",
      ilocano:"Aniaman a banag a makannon dagiti tao wenno animal ket tapno mapanatili ti biag.",
      hiligaynon:"Bisan ano nga bagay nga ginakaon sang mga tawo o hayop para mapadayon ang kinabuhi.",
      english:"Any nutritious substance that plants, animals, or people eat or drink."
    }
  },
  "paaralan": {
    tagalog:"paaralan", cebuano:"eskwelahan", ilocano:"eskuelaan", hiligaynon:"eskwelahan", english:"school",
    phonetic:"pa·a·ra·lan",
    meaning:{
      tagalog:"Isang institusyon para sa edukasyon ng mga bata at kabataan.",
      cebuano:"Usa ka institusyon alang sa edukasyon sa mga bata ug kabatan-on.",
      ilocano:"Maysa nga institusyon para iti edukasyon dagiti ubbing ken kabataaan.",
      hiligaynon:"Isa ka institusyon para sa edukasyon sang mga bata kag kabatan-on.",
      english:"An institution for educating children and young people."
    }
  },
  "ina": {
    tagalog:"ina", cebuano:"inahan", ilocano:"nanang", hiligaynon:"iloy", english:"mother",
    phonetic:"i·na",
    meaning:{
      tagalog:"Isang babae na may anak, o ang isa na nagsilang at nagpalaki ng anak.",
      cebuano:"Usa ka babae nga adunay anak, o ang usa nga nanganak ug nagpadako sa anak.",
      ilocano:"Maysa a babai nga adda anakna, wenno ti nanganak ken nangpadakkel iti anak.",
      hiligaynon:"Isa ka babayi nga may anak, o ang isa nga nanganak kag nagpatubo sang bata.",
      english:"A woman in relation to her child or children; female parent."
    }
  },
  "ama": {
    tagalog:"ama", cebuano:"amahan", ilocano:"tatang", hiligaynon:"tatay", english:"father",
    phonetic:"a·ma",
    meaning:{
      tagalog:"Isang lalaki na may anak, o ang isa na nagsilbing magulang na lalaki.",
      cebuano:"Usa ka lalaki nga adunay anak, o ang nagsilbi nga ginikanan nga lalaki.",
      ilocano:"Maysa a lalaki nga adda anakna, wenno ti nagserbisyo nga ginikanan nga lalaki.",
      hiligaynon:"Isa ka lalaki nga may anak, o ang nagsilbi nga ginikanan nga lalaki.",
      english:"A man in relation to his child or children; male parent."
    }
  },
  "puso": {
    tagalog:"puso", cebuano:"kasingkasing", ilocano:"puso", hiligaynon:"tagipusuon", english:"heart",
    phonetic:"pu·so",
    meaning:{
      tagalog:"Ang sangkap ng katawan na pumupump ng dugo sa buong katawan, o ang simbolo ng pag-ibig at emosyon.",
      cebuano:"Ang organ sa lawas nga nag-pump sa dugo sa tibuok lawas, o simbolo sa gugma.",
      ilocano:"Ti sangkap ti bagi a mangbomba ti dara iti intero a bagi, wenno simbolo ti ayat.",
      hiligaynon:"Ang organ sang lawas nga nagpompa sang dugo sa bug-os nga lawas, o simbolo sang gugma.",
      english:"The organ that pumps blood through the circulatory system, or a symbol of love and emotion."
    }
  },
  "lupa": {
    tagalog:"lupa", cebuano:"yuta", ilocano:"daga", hiligaynon:"duta", english:"earth / soil / land",
    phonetic:"lu·pa",
    meaning:{
      tagalog:"Ang ibabaw ng mundo, o ang materyal na kinatatayuan ng mga halaman.",
      cebuano:"Ang ibabaw sa kalibotan, o ang materyales nga gipuy-an sa mga tanom.",
      ilocano:"Ti rabaw ti daga, wenno ti materyales a naginggapuan dagiti tanem.",
      hiligaynon:"Ang ibabaw sang kalibutan, o ang materyales nga ginapuy-an sang mga tanom.",
      english:"The surface of the world or the material in which plants grow."
    }
  }
};

// ---- WORD OF THE DAY ----
const wotdWords = Object.keys(dictionary);

function getWotd() {
  const dayIndex = Math.floor(Date.now() / 86400000);
  return wotdWords[dayIndex % wotdWords.length];
}

function loadWotd() {
  const word = getWotd();
  const data = dictionary[word];
  if (!data) return;
  document.getElementById('wotdWord').textContent = word;
  document.getElementById('wotdPhonetic').textContent = data.phonetic || word;
  document.getElementById('wotdTranslation').textContent = data.english;
  document.getElementById('wotdMeaning').textContent = data.meaning.tagalog;

  const favBtn = document.getElementById('wotdFavBtn');
  if (favBtn) {
    updateWotdFavBtn(word);
    favBtn.onclick = () => toggleFavorite(word);
  }

  const speakBtn = document.getElementById('wotdSpeakBtn');
  if (speakBtn) speakBtn.onclick = () => speak(word);
}

function updateWotdFavBtn(word) {
  const btn = document.getElementById('wotdFavBtn');
  if (!btn) return;
  const favs = getFavorites();
  if (favs.includes(word)) {
    btn.innerHTML = '<i class="fas fa-heart"></i> Saved!';
    btn.classList.add('saved');
  } else {
    btn.innerHTML = '<i class="far fa-heart"></i> I-save';
    btn.classList.remove('saved');
  }
}

// ---- FAVORITES ----
function getFavorites() {
  return JSON.parse(localStorage.getItem('pd_favorites') || '[]');
}
function saveFavorites(favs) {
  localStorage.setItem('pd_favorites', JSON.stringify(favs));
  updateFavCount();
}
function toggleFavorite(word) {
  let favs = getFavorites();
  if (favs.includes(word)) {
    favs = favs.filter(w => w !== word);
  } else {
    favs.unshift(word);
  }
  saveFavorites(favs);
  updateFavCount();
  updateWotdFavBtn(word);
  // Re-render result if that word is showing
  if (currentWord === word) displayResult(word);
}
function updateFavCount() {
  const c = getFavorites().length;
  const el = document.getElementById('favCount');
  if (el) el.textContent = c;
  const u = document.getElementById('uFavCount');
  if (u) u.textContent = c;
}
function toggleFavorites() {
  const panel = document.getElementById('favoritesPanel');
  const allPanel = document.getElementById('allWordsSection');
  if (!panel) return;
  if (panel.style.display === 'none' || !panel.style.display) {
    if (allPanel) allPanel.style.display = 'none';
    panel.style.display = 'block';
    renderFavorites();
    panel.scrollIntoView({ behavior: 'smooth' });
  } else {
    panel.style.display = 'none';
  }
}
function closeFavorites() {
  const panel = document.getElementById('favoritesPanel');
  if (panel) panel.style.display = 'none';
}
function renderFavorites() {
  const container = document.getElementById('favoritesList');
  if (!container) return;
  const favs = getFavorites();
  if (favs.length === 0) {
    container.innerHTML = '<div class="empty-state"><div class="empty-icon">💔</div><p>Walang mga paboritong salita pa. Mag-search at i-save ang mga gusto mo!</p></div>';
    return;
  }
  container.innerHTML = favs.map(word => wordCardHTML(word, true)).join('');
}

// ---- RECENT SEARCHES ----
function saveRecent(term) {
  let recent = JSON.parse(localStorage.getItem('pd_recent') || '[]');
  recent = [term, ...recent.filter(w => w !== term)].slice(0, 8);
  localStorage.setItem('pd_recent', JSON.stringify(recent));
  const count = parseInt(localStorage.getItem('pd_searchCount') || '0') + 1;
  localStorage.setItem('pd_searchCount', count);
  const el = document.getElementById('uSearchCount');
  if (el) el.textContent = count;
}
function updateRecentUI() {
  const recent = JSON.parse(localStorage.getItem('pd_recent') || '[]');
  const container = document.getElementById('recentList');
  if (!container) return;
  if (recent.length === 0) { document.getElementById('recentBar').style.display = 'none'; return; }
  document.getElementById('recentBar').style.display = 'flex';
  container.innerHTML = recent.map(w =>
    `<span class="recent-tag" onclick="searchWord('${w}')">${w}</span>`
  ).join('');
}

// ---- TTS ----
function speak(word, slow = false) {
  if (!word) return;
  if (window.speechSynthesis.speaking) window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(word);
  utt.lang = 'fil-PH';
  utt.rate = slow ? 0.6 : 0.95;
  speechSynthesis.speak(utt);
}

// ---- DISPLAY RESULT ----
let currentWord = '';

function displayResult(word) {
  const data = dictionary[word.toLowerCase()];
  currentWord = word.toLowerCase();

  const area = document.getElementById('resultArea');
  if (!area) return;

  const phDisp = document.getElementById('phoneticDisplay');
  if (phDisp) phDisp.textContent = data ? (data.phonetic || word) : '—';

  if (!data) {
    area.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <p>Walang salitang "<strong>${word}</strong>" sa aming diksyunaryo.<br>
        Subukan ang: ${Object.keys(dictionary).slice(0,5).join(', ')}...</p>
      </div>`;
    return;
  }

  const isFav = getFavorites().includes(word.toLowerCase());
  area.innerHTML = `
    <div class="result-word-header">
      <div class="result-word-main">
        <div class="result-word">${word}</div>
        <div class="result-phonetic">/${data.phonetic || word}/</div>
      </div>
      <div class="result-badges">
        <span class="result-badge">${data.tagalog}</span>
        <span class="result-badge yellow">${data.english}</span>
        <button class="fav-toggle-btn ${isFav ? 'saved' : ''}" id="resultFavBtn" onclick="toggleFavorite('${word.toLowerCase()}')">
          <i class="${isFav ? 'fas' : 'far'} fa-heart"></i> ${isFav ? 'Saved!' : 'Paborito'}
        </button>
      </div>
    </div>
    <div class="meanings-grid">
      <div class="meaning-card">
        <div class="meaning-lang"><i class="fas fa-flag"></i> Tagalog</div>
        <div class="meaning-word">${data.tagalog}</div>
        <div class="meaning-text">${data.meaning.tagalog}</div>
      </div>
      <div class="meaning-card">
        <div class="meaning-lang"><i class="fas fa-city"></i> Cebuano</div>
        <div class="meaning-word">${data.cebuano}</div>
        <div class="meaning-text">${data.meaning.cebuano}</div>
      </div>
      <div class="meaning-card">
        <div class="meaning-lang"><i class="fas fa-mountain"></i> Ilocano</div>
        <div class="meaning-word">${data.ilocano}</div>
        <div class="meaning-text">${data.meaning.ilocano}</div>
      </div>
      <div class="meaning-card">
        <div class="meaning-lang"><i class="fas fa-umbrella"></i> Hiligaynon</div>
        <div class="meaning-word">${data.hiligaynon}</div>
        <div class="meaning-text">${data.meaning.hiligaynon}</div>
      </div>
      <div class="meaning-card full">
        <div class="meaning-lang"><i class="fas fa-language"></i> English</div>
        <div class="meaning-word">${data.english}</div>
        <div class="meaning-text">${data.meaning.english}</div>
      </div>
    </div>`;
}

function searchWord(word) {
  const inp = document.getElementById('searchInput');
  if (inp) inp.value = word;
  handleSearch(word);
}

function focusSearch() {
  const inp = document.getElementById('searchInput');
  if (inp) { inp.focus(); inp.scrollIntoView({ behavior: 'smooth' }); }
}

function handleSearch(overrideWord) {
  const inp = document.getElementById('searchInput');
  const term = (overrideWord || (inp ? inp.value.trim() : '')).toLowerCase();
  if (!term) return;
  displayResult(term);
  saveRecent(term);
  updateRecentUI();
}

// ---- ALL WORDS ----
function wordCardHTML(word, withFav = false) {
  const d = dictionary[word];
  if (!d) return '';
  const isFav = getFavorites().includes(word);
  return `
    <div class="word-card" onclick="searchWord('${word}'); showDictionaryView();">
      <span class="fav-star ${isFav ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite('${word}')">
        ${isFav ? '★' : '☆'}
      </span>
      <h3>${word}</h3>
      <div class="wc-en">${d.english}</div>
      <p>${d.meaning.tagalog.substring(0, 80)}…</p>
    </div>`;
}

window.showAllWords = function () {
  const panel = document.getElementById('allWordsSection');
  const favPanel = document.getElementById('favoritesPanel');
  if (!panel) return;
  if (favPanel) favPanel.style.display = 'none';
  panel.style.display = 'block';
  renderAllWords('');
  panel.scrollIntoView({ behavior: 'smooth' });
};

function renderAllWords(filter) {
  const container = document.getElementById('allWordsList');
  if (!container) return;
  const words = Object.keys(dictionary).filter(w => !filter || w.includes(filter.toLowerCase()));
  container.innerHTML = words.length
    ? words.map(w => wordCardHTML(w)).join('')
    : '<div class="empty-state"><div class="empty-icon">🔍</div><p>Walang nahanap na salita.</p></div>';
}

window.showDictionaryView = function () {
  const panel = document.getElementById('allWordsSection');
  const favPanel = document.getElementById('favoritesPanel');
  if (panel) panel.style.display = 'none';
  if (favPanel) favPanel.style.display = 'none';
};

// ---- DARK MODE ----
function initDarkMode() {
  const toggle = document.getElementById('darkModeToggle');
  if (!toggle) return;
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    toggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
    toggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  });
}

// ---- AUTH (localStorage simulation) ----
function getUsers() { return JSON.parse(localStorage.getItem('pd_users') || '[]'); }
function saveUsers(u) { localStorage.setItem('pd_users', JSON.stringify(u)); }
function getCurrentUser() { return JSON.parse(localStorage.getItem('pd_currentUser') || 'null'); }
function setCurrentUser(u) { localStorage.setItem('pd_currentUser', JSON.stringify(u)); }

function openLogin() {
  document.getElementById('loginModal').classList.add('open');
  const user = getCurrentUser();
  if (user) showLoggedInView(user);
  else showLoginForm();
}

function closeModal() {
  document.getElementById('loginModal').classList.remove('open');
}

function switchTab(tab) {
  document.getElementById('loginTab').classList.toggle('active', tab === 'login');
  document.getElementById('signupTab').classList.toggle('active', tab === 'signup');
  document.getElementById('loginForm').style.display = tab === 'login' ? 'block' : 'none';
  document.getElementById('signupForm').style.display = tab === 'signup' ? 'block' : 'none';
  document.getElementById('loggedInView').style.display = 'none';
}

function showLoginForm() {
  document.getElementById('loginForm').style.display = 'block';
  document.getElementById('signupForm').style.display = 'none';
  document.getElementById('loggedInView').style.display = 'none';
}

function showLoggedInView(user) {
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('signupForm').style.display = 'none';
  document.getElementById('loggedInView').style.display = 'block';
  document.getElementById('userDisplayName').textContent = user.name;
  document.getElementById('uFavCount').textContent = getFavorites().length;
  document.getElementById('uSearchCount').textContent = localStorage.getItem('pd_searchCount') || '0';
}

function doLogin() {
  const email = document.getElementById('loginEmail').value.trim();
  const pass = document.getElementById('loginPassword').value;
  const errEl = document.getElementById('loginError');
  if (!email || !pass) { errEl.textContent = 'Punan ang lahat ng fields.'; return; }
  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === pass);
  if (!user) { errEl.textContent = 'Mali ang email o password.'; return; }
  errEl.textContent = '';
  setCurrentUser(user);
  updateNavForUser(user);
  showLoggedInView(user);
}

function doSignup() {
  const name = document.getElementById('signupName').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const pass = document.getElementById('signupPassword').value;
  const errEl = document.getElementById('signupError');
  if (!name || !email || !pass) { errEl.textContent = 'Punan ang lahat ng fields.'; return; }
  if (pass.length < 6) { errEl.textContent = 'Ang password ay dapat 6 characters o higit pa.'; return; }
  const users = getUsers();
  if (users.find(u => u.email === email)) { errEl.textContent = 'May account na ang email na ito.'; return; }
  const user = { name, email, password: pass };
  users.push(user);
  saveUsers(users);
  setCurrentUser(user);
  errEl.textContent = '';
  updateNavForUser(user);
  showLoggedInView(user);
}

function doLogout() {
  localStorage.removeItem('pd_currentUser');
  updateNavForUser(null);
  closeModal();
}

function updateNavForUser(user) {
  const btn = document.getElementById('openLoginBtn');
  if (!btn) return;
  if (user) {
    btn.innerHTML = `<i class="fas fa-user-circle"></i> ${user.name.split(' ')[0]}`;
  } else {
    btn.innerHTML = '<i class="fas fa-user"></i> Mag-login';
  }
}

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  loadWotd();
  updateRecentUI();
  updateFavCount();

  // Check if user is logged in
  const user = getCurrentUser();
  if (user) updateNavForUser(user);

  // Search
  const searchBtn = document.getElementById('searchBtn');
  const searchInput = document.getElementById('searchInput');
  if (searchBtn) searchBtn.addEventListener('click', () => handleSearch());
  if (searchInput) {
    searchInput.addEventListener('keypress', e => e.key === 'Enter' && handleSearch());
    // Initial search
    if (searchInput.value) handleSearch(searchInput.value);
    else handleSearch('araw');
  }

  // TTS
  const ttsBtn = document.getElementById('ttsSpeakBtn');
  const slowCb = document.getElementById('slowRateCheckbox');
  if (ttsBtn) ttsBtn.addEventListener('click', () => {
    const inp = document.getElementById('searchInput');
    speak(currentWord || (inp ? inp.value.trim() : ''), slowCb ? slowCb.checked : false);
  });

  // Login modal
  const loginBtn = document.getElementById('openLoginBtn');
  if (loginBtn) loginBtn.addEventListener('click', openLogin);
  const overlay = document.getElementById('loginModal');
  if (overlay) overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });

  // Favorites button
  const favBtn = document.getElementById('favBtn');
  if (favBtn) favBtn.addEventListener('click', toggleFavorites);

  // Words filter
  const filterInp = document.getElementById('wordsFilter');
  if (filterInp) filterInp.addEventListener('input', e => renderAllWords(e.target.value));

  // Hamburger
  const ham = document.getElementById('hamburger');
  const mob = document.getElementById('mobileMenu');
  if (ham && mob) ham.addEventListener('click', () => mob.classList.toggle('open'));

  // Close modal on escape
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
});

// Random Word Function
function randomWord() {
  const words = Object.keys(dictionary);
  const randomWord = words[Math.floor(Math.random() * words.length)];
  searchWord(randomWord);
  showNotification(`🎲 Random na salita: "${randomWord}"`);
}

// Add difficulty indicator for words
function getWordDifficulty(word) {
  const length = word.length;
  if (length <= 4) return 'easy';
  if (length <= 7) return 'medium';
  return 'hard';
}

// Did You Mean functionality
function didYouMean(inputWord) {
  const words = Object.keys(dictionary);
  const similar = words.filter(word => {
    const input = inputWord.toLowerCase();
    const target = word.toLowerCase();
    // Check if word starts with same letter or has similar length
    return (input[0] === target[0] && Math.abs(input.length - target.length) <= 2) ||
           (target.includes(input) || input.includes(target));
  });
  return similar.slice(0, 3);
}

// Update displayResult to include difficulty and suggestions
// Add this inside displayResult when word is not found:
function showSuggestions(inputWord) {
  const suggestions = didYouMean(inputWord);
  if (suggestions.length > 0) {
    const suggestionHtml = `
      <div class="suggestion-box">
        <i class="fas fa-question-circle"></i> Ibig mo bang sabihin ang:
        ${suggestions.map(s => `<a onclick="searchWord('${s}')">${s}</a>`).join(', ')}?
      </div>
    `;
    const resultArea = document.getElementById('resultArea');
    resultArea.innerHTML += suggestionHtml;
  }
}

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
  // '/' to focus search
  if (e.key === '/' && document.activeElement !== searchInput) {
    e.preventDefault();
    searchInput.focus();
  }
  // 'Escape' to clear search
  if (e.key === 'Escape') {
    searchInput.value = '';
    searchInput.blur();
  }
});

// Add keyboard hint to DOM
const keyboardHint = document.createElement('div');
keyboardHint.className = 'keyboard-hint';
keyboardHint.innerHTML = '<kbd>/</kbd> to search &nbsp;&nbsp; <kbd>ESC</kbd> to clear';
document.body.appendChild(keyboardHint);

// ========== AUTO-TRANSLATION FOR MISSING WORDS ==========
// Add this at the END of your script.js file

// Common words for auto-translation (add more as needed)
const autoTranslateWords = {
  // Basic words
  "tao": { ceb: "tawo", ilo: "tao", hil: "tawo", eng: "person" },
  "lugar": { ceb: "lugar", ilo: "lugar", hil: "lugar", eng: "place" },
  "bagay": { ceb: "butang", ilo: "banag", hil: "butang", eng: "thing" },
  "ina": { ceb: "inahan", ilo: "nanang", hil: "iloy", eng: "mother" },
  "ama": { ceb: "amahan", ilo: "tatang", hil: "tatay", eng: "father" },
  "kapatid": { ceb: "igsoon", ilo: "kabsat", hil: "utod", eng: "sibling" },
  "aso": { ceb: "iro", ilo: "aso", hil: "ido", eng: "dog" },
  "pusa": { ceb: "iring", ilo: "pusa", hil: "kuring", eng: "cat" },
  "ibon": { ceb: "langgam", ilo: "billit", hil: "pispis", eng: "bird" },
  "isda": { ceb: "isda", ilo: "ikan", hil: "isda", eng: "fish" },
  "bulaklak": { ceb: "bulak", ilo: "sabong", hil: "bulaklak", eng: "flower" },
  "lola": { ceb: "lola", ilo: "lola", hil: "lola", eng: "grandmother" },
  "lolo": { ceb: "lolo", ilo: "lolo", hil: "lolo", eng: "grandfather" },
  "guro": { ceb: "maestro", ilo: "manursuro", hil: "manunudlo", eng: "teacher" },
  "doktor": { ceb: "doktor", ilo: "doktor", hil: "doktor", eng: "doctor" },
  
  // Adjectives
  "maganda": { ceb: "gwapa", ilo: "napintas", hil: "gwapa", eng: "beautiful" },
  "gwapo": { ceb: "gwapo", ilo: "napintas a lalaki", hil: "gwapo", eng: "handsome" },
  "malaki": { ceb: "dako", ilo: "dakkel", hil: "daku", eng: "big" },
  "maliit": { ceb: "gamay", ilo: "bassit", hil: "gamay", eng: "small" },
  "mainit": { ceb: "init", ilo: "napudot", hil: "mainit", eng: "hot" },
  "malamig": { ceb: "bugnaw", ilo: "nalam-ek", hil: "malamig", eng: "cold" },
  "mabilis": { ceb: "paspas", ilo: "pardas", hil: "dasig", eng: "fast" },
  "mabagal": { ceb: "hinay", ilo: "innayad", hil: "hinay", eng: "slow" },
  "bago": { ceb: "bag-o", ilo: "baro", hil: "bag-o", eng: "new" },
  "luma": { ceb: "daan", ilo: "daan", hil: "daan", eng: "old" },
  "mataba": { ceb: "tambok", ilo: "nataba", hil: "mataba", eng: "fat" },
  "payat": { ceb: "niwang", ilo: "nakuttong", hil: "maniwang", eng: "thin" },
  "masaya": { ceb: "malipayon", ilo: "naragsak", hil: "malipayon", eng: "happy" },
  "malungkot": { ceb: "masulub-on", ilo: "maladingit", hil: "masubo", eng: "sad" },
  "malakas": { ceb: "kusgan", ilo: "nabileg", hil: "madasig", eng: "strong" },
  "mahina": { ceb: "luya", ilo: "nakapuy", hil: "maluya", eng: "weak" }
};

// Function to auto-translate a word
function autoTranslateWord(word, targetLang) {
  const lowerWord = word.toLowerCase().trim();
  
  if (autoTranslateWords[lowerWord]) {
    switch(targetLang) {
      case 'cebuano': return autoTranslateWords[lowerWord].ceb;
      case 'ilocano': return autoTranslateWords[lowerWord].ilo;
      case 'hiligaynon': return autoTranslateWords[lowerWord].hil;
      case 'english': return autoTranslateWords[lowerWord].eng;
      default: return null;
    }
  }
  return null;
}

// Store the original displayResult function
const originalDisplayResult = displayResult;

// Override displayResult to include auto-translation for missing words
displayResult = function(word) {
  const data = dictionary[word.toLowerCase()];
  currentWord = word.toLowerCase();

  const area = document.getElementById('resultArea');
  if (!area) return;

  const phDisp = document.getElementById('phoneticDisplay');
  
  if (data) {
    // Word exists in dictionary - use original display
    phDisp.textContent = data.phonetic || word;
    const isFav = getFavorites().includes(word.toLowerCase());
    area.innerHTML = `
      <div class="result-word-header">
        <div class="result-word-main">
          <div class="result-word">${word}</div>
          <div class="result-phonetic">/${data.phonetic || word}/</div>
        </div>
        <div class="result-badges">
          <span class="result-badge">${data.tagalog}</span>
          <span class="result-badge yellow">${data.english}</span>
          <button class="fav-toggle-btn ${isFav ? 'saved' : ''}" id="resultFavBtn" onclick="toggleFavorite('${word.toLowerCase()}')">
            <i class="${isFav ? 'fas' : 'far'} fa-heart"></i> ${isFav ? 'Saved!' : 'Paborito'}
          </button>
        </div>
      </div>
      <div class="meanings-grid">
        <div class="meaning-card">
          <div class="meaning-lang"><i class="fas fa-flag"></i> Tagalog</div>
          <div class="meaning-word">${data.tagalog}</div>
          <div class="meaning-text">${data.meaning.tagalog}</div>
        </div>
        <div class="meaning-card">
          <div class="meaning-lang"><i class="fas fa-city"></i> Cebuano</div>
          <div class="meaning-word">${data.cebuano}</div>
          <div class="meaning-text">${data.meaning.cebuano}</div>
        </div>
        <div class="meaning-card">
          <div class="meaning-lang"><i class="fas fa-mountain"></i> Ilocano</div>
          <div class="meaning-word">${data.ilocano}</div>
          <div class="meaning-text">${data.meaning.ilocano}</div>
        </div>
        <div class="meaning-card">
          <div class="meaning-lang"><i class="fas fa-umbrella"></i> Hiligaynon</div>
          <div class="meaning-word">${data.hiligaynon}</div>
          <div class="meaning-text">${data.meaning.hiligaynon}</div>
        </div>
        <div class="meaning-card full">
          <div class="meaning-lang"><i class="fas fa-language"></i> English</div>
          <div class="meaning-word">${data.english}</div>
          <div class="meaning-text">${data.meaning.english}</div>
        </div>
      </div>`;
  } else {
    // Word NOT in dictionary - try auto-translation
    phDisp.textContent = '—';
    
    const cebTrans = autoTranslateWord(word, 'cebuano');
    const iloTrans = autoTranslateWord(word, 'ilocano');
    const hilTrans = autoTranslateWord(word, 'hiligaynon');
    const engTrans = autoTranslateWord(word, 'english');
    
    // Check if we have any auto-translation
    if (cebTrans || iloTrans || hilTrans || engTrans) {
      area.innerHTML = `
        <div class="result-word-header">
          <div class="result-word-main">
            <div class="result-word">${word}</div>
            <div class="result-phonetic">/auto-translated/</div>
          </div>
          <div class="result-badges">
            <span class="result-badge">Automatikong Salin</span>
          </div>
        </div>
        <div class="meanings-grid">
          <div class="meaning-card">
            <div class="meaning-lang"><i class="fas fa-flag"></i> Tagalog (Original)</div>
            <div class="meaning-word">${word}</div>
            <div class="meaning-text">Ang salitang ito ay automatikong isinalin gamit ang Lingwahero database.</div>
          </div>
          ${cebTrans ? `<div class="meaning-card"><div class="meaning-lang"><i class="fas fa-city"></i> Cebuano (Binisaya)</div><div class="meaning-word">${cebTrans}</div><div class="meaning-text">Salin sa Cebuano ng "${word}"</div></div>` : ''}
          ${iloTrans ? `<div class="meaning-card"><div class="meaning-lang"><i class="fas fa-mountain"></i> Ilocano</div><div class="meaning-word">${iloTrans}</div><div class="meaning-text">Salin sa Ilocano ng "${word}"</div></div>` : ''}
          ${hilTrans ? `<div class="meaning-card"><div class="meaning-lang"><i class="fas fa-umbrella"></i> Hiligaynon (Ilonggo)</div><div class="meaning-word">${hilTrans}</div><div class="meaning-text">Salin sa Hiligaynon ng "${word}"</div></div>` : ''}
          ${engTrans ? `<div class="meaning-card full"><div class="meaning-lang"><i class="fas fa-language"></i> English</div><div class="meaning-word">${engTrans}</div><div class="meaning-text">Translation of "${word}" to English</div></div>` : ''}
        </div>
        <div class="suggestion-box" style="margin-top: 16px; padding: 12px; background: rgba(252,209,22,0.1); border-radius: var(--radius);">
          <i class="fas fa-info-circle"></i> Ang salitang ito ay automatikong isinalin. Kung may alam kang ibang kahulugan, <a href="#" onclick="suggestNewWord('${word}')" style="color: var(--blue);">i-click dito</a> para imungkahi.
        </div>`;
    } else {
      // No translation available - use original empty state
      area.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">🔍</div>
          <p>Walang salitang "<strong>${word}</strong>" sa aming diksyunaryo.<br>
          Subukan ang: ${Object.keys(dictionary).slice(0,5).join(', ')}...</p>
        </div>`;
      showSuggestions(word);
    }
  }
};

// Function to suggest new words (keeps your existing didYouMean functionality)
function suggestNewWord(word) {
  const suggestion = prompt(`Imungkahi ang salitang "${word.toUpperCase()}"\n\nPakilagay ang kahulugan sa Tagalog:`);
  if (suggestion && suggestion.trim()) {
    alert(`✅ Salamat sa iyong mungkahi!\n\nAng "${word}" ay naitala na. Idadagdag namin ito sa aming database.`);
    // Save suggestion
    let suggestions = JSON.parse(localStorage.getItem('word_suggestions') || '[]');
    suggestions.push({ word: word, meaning: suggestion, date: new Date().toISOString() });
    localStorage.setItem('word_suggestions', JSON.stringify(suggestions));
  }
}