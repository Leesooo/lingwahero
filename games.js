/* ============================================================
   LINGWAHERO — ENHANCED GAMES SCRIPT (FIXED)
   ============================================================ */

// ---- GAME DATA with Cebuano/Ilocano HINTS instead of revealing answer ----
const languageQuestions = [
  { 
    question: "Ano ang salitang Tagalog para sa 'bahay'?", 
    hint: "Sa Cebuano: 'balay' / Sa Ilocano: 'balay'",
    answers: ["Bahay", "Ulam", "Gabi", "Araw"], 
    correct: "Bahay" 
  },
  { 
    question: "Ano ang salitang Cebuano para sa 'tubig'?", 
    hint: "Sa Tagalog: 'tubig' / Sa Ilocano: 'danum'",
    answers: ["Tubig", "Kalayo", "Hangin", "Adlaw"], 
    correct: "Tubig" 
  },
  { 
    question: "Ano ang salitang Ilocano para sa 'araw'?", 
    hint: "Sa Tagalog: 'araw' / Sa Cebuano: 'adlaw'",
    answers: ["Init", "Araw", "Init ti init", "Aldaw"], 
    correct: "Aldaw" 
  },
  { 
    question: "Ano ang salitang Tagalog para sa 'pagkain'?", 
    hint: "Sa Cebuano: 'pagkaon' / Sa Ilocano: 'makanon'",
    answers: ["Ulam", "Kain", "Sarap", "Pagkain"], 
    correct: "Pagkain" 
  },
  { 
    question: "Ano ang salitang Cebuano para sa 'apoy'?", 
    hint: "Sa Tagalog: 'apoy' / Sa Ilocano: 'apuy'",
    answers: ["Kalayo", "Hangin", "Suga", "Tubig"], 
    correct: "Kalayo" 
  },
  { 
    question: "Ano ang salitang Ilocano para sa 'araw' (day)?", 
    hint: "Sa Tagalog: 'araw' / Sa Cebuano: 'adlaw'",
    answers: ["Rabii", "Aldaw", "Bigat", "Init"], 
    correct: "Aldaw" 
  },
  { 
    question: "Ano ang kahulugan ng 'Gabi' sa Tagalog?", 
    hint: "Sa Cebuano: 'gabii' / Sa Ilocano: 'rabi-i'",
    answers: ["Umaga", "Hapon", "Gabi", "Araw"], 
    correct: "Gabi" 
  },
  { 
    question: "Isaling Cebuano ang salitang 'hangin':", 
    hint: "Sa Tagalog: 'hangin' / Sa Ilocano: 'angin'",
    answers: ["Kalayo", "Hangin", "Ulan", "Kahoy"], 
    correct: "Hangin" 
  }
];

const baybayinQuestions = [
  { word: "Araw", hint: "Ito ay sumisikat sa umaga. Sa Cebuano: 'adlaw'", correct: "ᜀᜇᜏ᜔", choices: ["ᜀᜇᜏ᜔", "ᜊᜌ᜔", "ᜐᜓᜎᜒᜆ᜔"] },
  { word: "Buwan", hint: "Ito ay nakikita sa gabi. Sa Cebuano: 'buwan'", correct: "ᜊᜓᜏᜈ᜔", choices: ["ᜃᜓᜎ᜔", "ᜊᜓᜏᜈ᜔", "ᜀᜎᜒᜈ᜔"] },
  { word: "Gabi", hint: "Oras kung kailan madilim. Sa Cebuano: 'gabii'", correct: "ᜄᜊᜒ", choices: ["ᜄᜊᜒ", "ᜀᜊᜓ", "ᜌᜈᜒ"] },
  { word: "Mahal", hint: "Salita para sa taong importante. Sa Cebuano: 'mahal'", correct: "ᜋᜑᜎ᜔", choices: ["ᜐᜓᜎ᜔", "ᜋᜑᜎ᜔", "ᜊᜃᜓ"] },
  { word: "Tubig", hint: "Inumin araw-araw. Sa Cebuano: 'tubig'", correct: "ᜆᜓᜊᜒᜄ᜔", choices: ["ᜆᜓᜊᜒᜄ᜔", "ᜀᜎᜒᜈ᜔", "ᜋᜃᜒᜎ᜔"] },
  { word: "Hangin", hint: "Nararamdaman kapag mainit. Sa Cebuano: 'hangin'", correct: "ᜑᜅᜒᜈ᜔", choices: ["ᜑᜅᜒᜈ᜔", "ᜄᜊᜒ", "ᜊᜌ᜔"] },
  { word: "Puso", hint: "Organ na pumipintig. Sa Cebuano: 'kasingkasing'", correct: "ᜉᜓᜐᜓ", choices: ["ᜉᜓᜐᜓ", "ᜊᜌ᜔", "ᜀᜇᜏ᜔"] },
  { word: "Lupa", hint: "Tinatapakan araw-araw. Sa Cebuano: 'yuta'", correct: "ᜎᜓᜉ", choices: ["ᜎᜓᜉ", "ᜋᜓᜎ᜔", "ᜉᜒᜎ᜔"] },
  { word: "Dagat", hint: "Malawak na anyong tubig. Sa Cebuano: 'dagat'", correct: "ᜇᜄᜆ᜔", choices: ["ᜇᜄᜆ᜔", "ᜀᜊᜓ", "ᜐᜓᜎᜒᜆ᜔"] }
];

// FIXED: Word Guess Data - Hints now in Cebuano/Ilocano, NOT revealing the answer
const wordGuessData = [
  { word: "araw", hint: "Sa Cebuano: 'adlaw' / Sa Ilocano: 'aldao' — Ito ang nagbibigay liwanag sa umaga.", langs: "" },
  { word: "puso", hint: "Sa Cebuano: 'kasingkasing' / Sa Hiligaynon: 'tagipusuon' — Ang organ na pumupump ng dugo.", langs: "" },
  { word: "dagat", hint: "Sa Cebuano: 'dagat' / Sa Ilocano: 'baybay' — Malawak na katawan ng maalat na tubig.", langs: "" },
  { word: "bundok", hint: "Sa Cebuano: 'bukid' / Sa Ilocano: 'bantay' — Mataas na pormasyon ng lupa.", langs: "" },
  { word: "langit", hint: "Sa Cebuano: 'langit' / Sa Hiligaynon: 'langit' — Ang kalawakan sa itaas natin.", langs: "" },
  { word: "pagkain", hint: "Sa Cebuano: 'pagkaon' / Sa Ilocano: 'makanon' — Ito ang kinakain natin araw-araw.", langs: "" },
  { word: "kaibigan", hint: "Sa Cebuano: 'amigo' / Sa Ilocano: 'gagayem' — Taong mapagkakatiwalaan at mahal mo.", langs: "" },
  { word: "buhay", hint: "Sa Cebuano: 'kinabuhi' / Sa Ilocano: 'biag' — Ang kalagayan ng lahat ng nabubuhay.", langs: "" },
  { word: "tahanan", hint: "Sa Cebuano: 'balay' / Sa Ilocano: 'balay' — Ang lugar kung saan ka umuuwi.", langs: "" },
  { word: "tubig", hint: "Sa Cebuano: 'tubig' / Sa Ilocano: 'danum' — Malinaw na likido na kailangan araw-araw.", langs: "" }
];

// ---- ACHIEVEMENTS SYSTEM ----
const achievements = {
  firstBlood: { name: "Unang Tagumpay", desc: "Nakakuha ng unang puntos!", unlocked: false, icon: "🏆" },
  perfectScore: { name: "Perfect!", desc: "Nakakuha ng perpektong puntos!", unlocked: false, icon: "⭐" },
  streak5: { name: "Sunod-sunod na Tagumpay", desc: "Nakakuha ng 5 puntos nang sunod-sunod!", unlocked: false, icon: "🔥" },
  quizMaster: { name: "Quiz Master", desc: "Nakumpleto ang lahat ng quiz!", unlocked: false, icon: "👑" }
};

function checkAchievements(score, total, game, streak) {
  if (score >= 1 && !achievements.firstBlood.unlocked) {
    achievements.firstBlood.unlocked = true;
    showAchievement("Unang Tagumpay", "Nakakuha ng unang puntos! 🏆");
  }
  
  if (score === total && !achievements.perfectScore.unlocked) {
    achievements.perfectScore.unlocked = true;
    showAchievement("Perfect!", "Nakakuha ng perpektong puntos! ⭐");
    triggerConfetti();
  }
  
  if (streak >= 5 && !achievements.streak5.unlocked) {
    achievements.streak5.unlocked = true;
    showAchievement("Sunod-sunod na Tagumpay", "5 puntos nang sunod-sunod! 🔥");
  }
  
  localStorage.setItem('lingwahero_achievements', JSON.stringify(achievements));
}

function showAchievement(title, desc) {
  const toast = document.createElement('div');
  toast.className = 'achievement-toast';
  toast.innerHTML = `
    <i class="fas fa-trophy" style="font-size: 24px;"></i>
    <div>
      <strong>${title}</strong><br>
      <small>${desc}</small>
    </div>
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 4000);
}

function triggerConfetti() {
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.animationDuration = Math.random() * 2 + 2 + 's';
    confetti.style.width = Math.random() * 8 + 4 + 'px';
    confetti.style.height = confetti.style.width;
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 3000);
  }
}

// ---- STATE ----
let activeGame = null;
let gameState = {};
let currentStreak = 0;

// ---- UTILS ----
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function saveHighScore(game, score, total, streak) {
  const key = `pd_score_${game}`;
  const prev = JSON.parse(localStorage.getItem(key) || '{"score":0,"total":0}');
  const pct = score / total;
  const prevPct = prev.score / (prev.total || 1);
  if (pct >= prevPct) {
    localStorage.setItem(key, JSON.stringify({ score, total }));
  }
  
  let userStats = JSON.parse(localStorage.getItem('lingwahero_stats') || '{"totalScore":0,"gamesPlayed":0,"totalQuestions":0}');
  userStats.totalScore += score;
  userStats.gamesPlayed += 1;
  userStats.totalQuestions += total;
  localStorage.setItem('lingwahero_stats', JSON.stringify(userStats));
  
  loadScores();
}

function loadScores() {
  ['language', 'baybayin', 'wordguess'].forEach(game => {
    const data = JSON.parse(localStorage.getItem(`pd_score_${game}`) || 'null');
    const valEl = document.getElementById(`score-${game}`);
    const barEl = document.getElementById(`bar-${game}`);
    if (!valEl || !barEl) return;
    if (data) {
      valEl.textContent = `${data.score}/${data.total}`;
      barEl.style.width = `${(data.score / data.total) * 100}%`;
    } else {
      valEl.textContent = '—';
      barEl.style.width = '0';
    }
  });
}

// ---- GAME LOADER ----
function loadGame(game) {
  activeGame = game;
  const area = document.getElementById('gameArea');
  if (!area) return;

  document.querySelectorAll('.game-sel-card').forEach(c => c.style.opacity = '0.5');
  const sel = document.getElementById(`card-${game}`);
  if (sel) sel.style.opacity = '1';

  area.style.display = 'block';
  area.scrollIntoView({ behavior: 'smooth' });

  const titles = { language: 'Language Quiz', baybayin: 'Alamin ang Baybayin', wordguess: 'Hulaan ang Salita' };
  document.getElementById('gameTitle').textContent = titles[game] || 'Laro';

  if (game === 'language') initLanguageQuiz();
  else if (game === 'baybayin') initBaybayinQuiz();
  else if (game === 'wordguess') initWordGuess();
}

function closeGame() {
  const area = document.getElementById('gameArea');
  if (area) area.style.display = 'none';
  activeGame = null;
  currentStreak = 0;
  document.querySelectorAll('.game-sel-card').forEach(c => c.style.opacity = '1');
}

// ---- LANGUAGE QUIZ ----
function initLanguageQuiz() {
  const questions = shuffle(languageQuestions);
  gameState = { questions, current: 0, score: 0, streak: 0 };
  renderLanguageQ();
}

function renderLanguageQ() {
  const { questions, current, score, streak } = gameState;
  if (current >= questions.length) return endQuiz('language', score, questions.length, streak);
  
  updateProgress(current, questions.length, score);
  const q = questions[current];
  const opts = shuffle(q.answers);

  document.getElementById('gameContent').innerHTML = `
    <div class="quiz-question">${q.question}</div>
    <div class="quiz-hint">
      <i class="fas fa-lightbulb"></i> <strong>Pahiwatig:</strong> ${q.hint}
    </div>
    <div class="quiz-options" id="quizOpts">
      ${opts.map(a => `<button class="quiz-opt" data-value="${a}" onclick="answerLanguage(this, '${a.replace(/'/g, "\\'")}')">${a}</button>`).join('')}
    </div>
    <div class="quiz-feedback" id="quizFeedback"></div>
    <div class="quiz-streak" id="quizStreak">
      ${streak > 0 ? `<span class="streak-badge">🔥 ${streak} streak!</span>` : ''}
    </div>
  `;
}

function answerLanguage(btn, selected) {
  const q = gameState.questions[gameState.current];
  const correct = q.correct;
  
  document.querySelectorAll('.quiz-opt').forEach(b => b.disabled = true);
  const fb = document.getElementById('quizFeedback');
  
  if (selected === correct) {
    btn.classList.add('correct');
    fb.textContent = '✅ Tama! Magaling!';
    fb.className = 'quiz-feedback correct';
    gameState.score++;
    gameState.streak++;
    currentStreak = gameState.streak;
    
    if (gameState.streak >= 3) {
      fb.textContent += ` 🔥 ${gameState.streak} streak!`;
    }
  } else {
    btn.classList.add('wrong');
    fb.textContent = `❌ Mali. Subukan mo ulit sa susunod!`;
    fb.className = 'quiz-feedback wrong';
    gameState.streak = 0;
    currentStreak = 0;
    
    document.querySelectorAll('.quiz-opt').forEach(b => {
      if (b.getAttribute('data-value') === correct) {
        b.classList.add('correct');
      }
    });
  }
  
  setTimeout(() => { gameState.current++; renderLanguageQ(); }, 1400);
}

// ---- BAYBAYIN QUIZ ----
function initBaybayinQuiz() {
  const questions = shuffle(baybayinQuestions);
  gameState = { questions, current: 0, score: 0, streak: 0 };
  renderBaybayinQ();
}

function renderBaybayinQ() {
  const { questions, current, score, streak } = gameState;
  if (current >= questions.length) return endQuiz('baybayin', score, questions.length, streak);

  updateProgress(current, questions.length, score);
  const q = questions[current];
  const choices = shuffle(q.choices);

  document.getElementById('gameContent').innerHTML = `
    <div class="quiz-question">
      Ano ang Baybayin ng salitang:<br>
      <span class="quiz-baybayin-q">${q.word}</span>
    </div>
    <div class="quiz-hint">
      <i class="fas fa-lightbulb"></i> <strong>Pahiwatig:</strong> ${q.hint}
    </div>
    <div class="quiz-options" id="quizOpts">
      ${choices.map(c => `<button class="quiz-opt" style="font-size:24px;" onclick="answerBaybayin(this, '${c.replace(/'/g, "\\'")}')">${c}</button>`).join('')}
    </div>
    <div class="quiz-feedback" id="quizFeedback"></div>
    <div class="quiz-streak" id="quizStreak">
      ${streak > 0 ? `<span class="streak-badge">🔥 ${streak} streak!</span>` : ''}
    </div>
  `;
}

function answerBaybayin(btn, selected) {
  const q = gameState.questions[gameState.current];
  const correct = q.correct;
  
  document.querySelectorAll('.quiz-opt').forEach(b => b.disabled = true);
  const fb = document.getElementById('quizFeedback');
  
  if (selected === correct) {
    btn.classList.add('correct');
    fb.textContent = '✅ Tama! Magaling!';
    fb.className = 'quiz-feedback correct';
    gameState.score++;
    gameState.streak++;
    currentStreak = gameState.streak;
  } else {
    btn.classList.add('wrong');
    fb.textContent = `❌ Mali. Subukan mo ulit!`;
    fb.className = 'quiz-feedback wrong';
    gameState.streak = 0;
    currentStreak = 0;
    
    document.querySelectorAll('.quiz-opt').forEach(b => {
      if (b.textContent === correct) b.classList.add('correct');
    });
  }
  
  setTimeout(() => { gameState.current++; renderBaybayinQ(); }, 1600);
}

// ---- WORD GUESS GAME (FIXED - No answer in hint, changed lives icon) ----
function initWordGuess() {
  const questions = shuffle(wordGuessData);
  gameState = {
    questions,
    current: 0,
    score: 0,
    lives: 5,
    guessed: [],
    wrong: [],
    streak: 0
  };
  renderWordGuessQ();
}

function renderWordGuessQ() {
  const { questions, current, score, lives, guessed, wrong, streak } = gameState;
  if (current >= questions.length) return endQuiz('wordguess', score, questions.length, streak);
  if (lives <= 0) return endWordGuessLoss();

  updateProgress(current, questions.length, score);
  const q = questions[current];
  const word = q.word;

  const blanks = word.split('').map((ch, i) =>
    `<div class="blank-letter ${guessed.includes(ch) ? 'filled' : ''}">${guessed.includes(ch) ? ch.toUpperCase() : ''}</div>`
  ).join('');

  // Changed from heart emoji (❤️) to Philippine Sun (☀️) and Baybayin character (ᜀ)
  const livesHtml = Array.from({length: 5}, (_, i) =>
    `<span class="life-icon ${i >= lives ? 'lost' : ''}">${i >= lives ? '★' : '☀️'}</span>`
  ).join('');

  const keyboard = buildKeyboard(guessed, wrong);

  document.getElementById('gameContent').innerHTML = `
    <div class="wordguess-hint"><strong>Pahiwatig:</strong> ${q.hint}</div>
    <div class="wordguess-blanks" id="blanksRow">${blanks}</div>
    <div class="wordguess-lives">${livesHtml}</div>
    <div id="wgFeedback" class="quiz-feedback" style="min-height:28px;"></div>
    <div class="quiz-streak" id="quizStreak">
      ${streak > 0 ? `<span class="streak-badge">🔥 ${streak} streak!</span>` : ''}
    </div>
    ${keyboard}`;
}

function buildKeyboard(guessed, wrong) {
  const rows = [
    ['A','B','C','D','E','F','G'],
    ['H','I','J','K','L','M','N'],
    ['O','P','Q','R','S','T'],
    ['U','V','W','X','Y','Z']
  ];
  return rows.map(row => `
    <div class="keyboard-row">
      ${row.map(ch => {
        const lower = ch.toLowerCase();
        let cls = '';
        if (guessed.includes(lower)) cls = 'used-correct';
        else if (wrong.includes(lower)) cls = 'used-wrong';
        return `<button class="key-btn ${cls}" onclick="guessLetter('${lower}')" ${cls ? 'disabled' : ''}>${ch}</button>`;
      }).join('')}
    </div>`
  ).join('');
}

function guessLetter(letter) {
  const q = gameState.questions[gameState.current];
  const word = q.word;
  const fb = document.getElementById('wgFeedback');

  if (word.includes(letter)) {
    gameState.guessed.push(letter);
    fb.textContent = '✅ Tama! Narito ang letra.';
    fb.className = 'quiz-feedback correct';

    const allRevealed = word.split('').every(ch => gameState.guessed.includes(ch));
    if (allRevealed) {
      gameState.score++;
      gameState.streak++;
      currentStreak = gameState.streak;
      fb.textContent = `🎉 Tama! Ang salita ay "${word.toUpperCase()}"! ${gameState.streak >= 3 ? `🔥 ${gameState.streak} streak!` : ''}`;
      setTimeout(() => { 
        gameState.current++; 
        gameState.guessed = []; 
        gameState.wrong = []; 
        gameState.lives = 5; 
        renderWordGuessQ(); 
      }, 2000);
      return;
    }
  } else {
    gameState.wrong.push(letter);
    gameState.lives--;
    gameState.streak = 0;
    currentStreak = 0;
    fb.textContent = `❌ Wala ang letra na "${letter.toUpperCase()}". (${gameState.lives} buhay na lang)`;
    fb.className = 'quiz-feedback wrong';

    if (gameState.lives <= 0) {
      setTimeout(() => endWordGuessLoss(), 1200);
      return;
    }
  }
  setTimeout(renderWordGuessQ, 600);
}

function endWordGuessLoss() {
  const q = gameState.questions[gameState.current];
  document.getElementById('gameContent').innerHTML = `
    <div class="quiz-result">
      <span class="quiz-result-emoji">😢</span>
      <h3>Nawalan ng Buhay!</h3>
      <p>Ang salita ay <strong>${q.word.toUpperCase()}</strong></p>
      <span class="final-score">${gameState.score}/${gameState.current + 1}</span>
      <div class="quiz-result-btns">
        <button class="btn-play-again" onclick="initWordGuess()">Subukan Ulit</button>
        <button class="btn-play-again" style="background:var(--red)" onclick="closeGame()">Lumabas</button>
      </div>
    </div>`;
  saveHighScore('wordguess', gameState.score, gameState.questions.length, gameState.streak);
}

// ---- END QUIZ ----
function endQuiz(game, score, total, streak) {
  const pct = score / total;
  const emoji = pct >= .8 ? '🏆' : pct >= .5 ? '🎉' : '😊';
  const msg = pct >= .8 ? 'Kahanga-hanga! Napakagaling mo!' : pct >= .5 ? 'Magaling! Patuloy na mag-aral.' : 'Subukan mo ulit. Kaya mo ito!';

  checkAchievements(score, total, game, streak);
  
  if (pct >= .8) {
    triggerConfetti();
  }

  document.getElementById('gameContent').innerHTML = `
    <div class="quiz-result">
      <span class="quiz-result-emoji">${emoji}</span>
      <h3>Tapos na ang Laro!</h3>
      <p>${msg}</p>
      <span class="final-score">${score} / ${total}</span>
      <p>Nakuha mo ang ${Math.round(pct * 100)}%</p>
      ${streak >= 3 ? `<p class="streak-bonus">🔥 ${streak} consecutive correct answers! 🔥</p>` : ''}
      <div class="quiz-result-btns">
        <button class="btn-play-again" onclick="loadGame('${game}')">
          <i class="fas fa-redo"></i> Maglaro Ulit
        </button>
        <button class="btn-play-again" style="background:var(--text3)" onclick="closeGame()">
          Pumili ng Laro
        </button>
      </div>
    </div>`;

  saveHighScore(game, score, total, streak);
  document.getElementById('gameProgressFill').style.width = '100%';
  document.getElementById('gameScore').textContent = score;
}

function updateProgress(current, total, score) {
  const pct = (current / total) * 100;
  const fill = document.getElementById('gameProgressFill');
  if (fill) fill.style.width = pct + '%';
  const scoreEl = document.getElementById('gameScore');
  if (scoreEl) scoreEl.textContent = score;
}

// Add CSS for streak and hint
const style = document.createElement('style');
style.textContent = `
  .quiz-hint {
    background: rgba(252, 209, 22, 0.15);
    border-left: 4px solid var(--yellow);
    padding: 12px 16px;
    border-radius: var(--r-md);
    margin-bottom: 20px;
    font-size: 14px;
    color: var(--text2);
  }
  
  .quiz-streak {
    text-align: center;
    margin-top: 16px;
  }
  
  .streak-badge {
    background: linear-gradient(135deg, #ff6b35, #f7931e);
    color: white;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: bold;
    animation: pulse 1s infinite;
  }
  
  .streak-bonus {
    background: linear-gradient(135deg, #ff6b35, #f7931e);
    color: white;
    padding: 8px 16px;
    border-radius: 30px;
    display: inline-block;
    margin-top: 12px;
    font-weight: bold;
  }
  
  .life-icon {
    font-size: 24px;
    transition: all 0.3s;
  }
  
  .life-icon.lost {
    opacity: 0.3;
    filter: grayscale(1);
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.05); opacity: 0.9; }
  }
`;
document.head.appendChild(style);

// ---- DARK MODE (games page) ----
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

function loadAchievements() {
  const saved = localStorage.getItem('lingwahero_achievements');
  if (saved) {
    Object.assign(achievements, JSON.parse(saved));
  }
}

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  loadScores();
  loadAchievements();

  const ham = document.getElementById('hamburger');
  const mob = document.getElementById('mobileMenu');
  if (ham && mob) ham.addEventListener('click', () => mob.classList.toggle('open'));

  const params = new URLSearchParams(window.location.search);
  const game = params.get('game');
  if (game) setTimeout(() => loadGame(game), 300);
});