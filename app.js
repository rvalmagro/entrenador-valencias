/* ==========================================================================
   ENTRENADOR DE VALENCIAS - GAME ENGINE
   ========================================================================== */

// 1. Valencias del libro de texto
const valenciasGenerales = {
  "Hidrógeno": [1, -1],
  "Litio": [1],
  "Sodio": [1],
  "Potasio": [1],
  "Rubidio": [1],
  "Cesio": [1],
  "Francio": [1],
  "Plata": [1],
  "Berilio": [2],
  "Magnesio": [2],
  "Calcio": [2],
  "Estroncio": [2],
  "Bario": [2],
  "Radio": [2],
  "Cinc": [2],
  "Cadmio": [2],
  "Aluminio": [3],
  "Galio": [3],
  "Cobre": [1, 2],
  "Mercurio": [1, 2],
  "Hierro": [2, 3],
  "Cobalto": [2, 3],
  "Níquel": [2, 3],
  "Oro": [1, 3],
  "Indio": [1, 3],
  "Talio": [1, 3],
  "Germanio": [2, 4],
  "Estaño": [2, 4],
  "Plomo": [2, 4],
  "Paladio": [2, 4],
  "Platino": [2, 4],
  "Cromo": [2, 3, 6],
  "Manganeso": [2, 3, 4, 6, 7],
  "Oxígeno": [-2],
  "Flúor": [-1],
  "Bismuto": [3, 5]
};

const valenciasSegunCombinacion = {
  "Cloro": { conOxigeno: [1, 3, 5, 7], conOtrosElementos: [-1] },
  "Bromo": { conOxigeno: [1, 3, 5, 7], conOtrosElementos: [-1] },
  "Yodo": { conOxigeno: [1, 3, 5, 7], conOtrosElementos: [-1] },
  "Astato": { conOxigeno: [[1], [1, 3, 5, 7]], conOtrosElementos: [-1] },
  "Azufre": { conOxigeno: [2, 4, 6], conOtrosElementos: [-2] },
  "Selenio": { conOxigeno: [2, 4, 6], conOtrosElementos: [-2] },
  "Teluro": { conOxigeno: [2, 4, 6], conOtrosElementos: [-2] },
  "Polonio": { conOxigeno: [2, 4], conOtrosElementos: [-2] },
  "Fósforo": { conOxigeno: [[1, 3, 5], [3, 5]], conOtrosElementos: [-3] },
  "Arsénico": { conOxigeno: [3, 5], conOtrosElementos: [-3] },
  "Antimonio": { conOxigeno: [3, 5], conOtrosElementos: [-3] },
  "Carbono": { conOxigeno: [2, 4], conOtrosElementos: [-4] },
  "Silicio": { conOxigeno: [4], conOtrosElementos: [-4] },
  "Boro": { conOxigeno: [3], conOtrosElementos: [-3] },
  "Nitrógeno": { conOxigeno: [1, 2, 3, 4, 5], conOtrosElementos: [-3] }
};

// 2. Extra chemistry details to render high-fidelity periodic blocks
const elementosData = {
  "Hidrógeno": { symbol: "H", number: 1, mass: 1.008 },
  "Litio": { symbol: "Li", number: 3, mass: 6.94 },
  "Sodio": { symbol: "Na", number: 11, mass: 22.99 },
  "Potasio": { symbol: "K", number: 19, mass: 39.10 },
  "Francio": { symbol: "Fr", number: 87, mass: 223 },
  "Berilio": { symbol: "Be", number: 4, mass: 9.012 },
  "Magnesio": { symbol: "Mg", number: 12, mass: 24.31 },
  "Calcio": { symbol: "Ca", number: 20, mass: 40.08 },
  "Estroncio": { symbol: "Sr", number: 38, mass: 87.62 },
  "Bario": { symbol: "Ba", number: 56, mass: 137.33 },
  "Aluminio": { symbol: "Al", number: 13, mass: 26.98 },
  "Cinc": { symbol: "Zn", number: 30, mass: 65.38 },
  "Plata": { symbol: "Ag", number: 47, mass: 107.87 },
  "Cadmio": { symbol: "Cd", number: 48, mass: 112.41 },
  "Hierro": { symbol: "Fe", number: 26, mass: 55.85 },
  "Cobre": { symbol: "Cu", number: 29, mass: 63.55 },
  "Níquel": { symbol: "Ni", number: 28, mass: 58.69 },
  "Cobalto": { symbol: "Co", number: 27, mass: 58.93 },
  "Mercurio": { symbol: "Hg", number: 80, mass: 200.59 },
  "Oro": { symbol: "Au", number: 79, mass: 196.97 },
  "Estaño": { symbol: "Sn", number: 50, mass: 118.71 },
  "Plomo": { symbol: "Pb", number: 82, mass: 207.2 },
  "Platino": { symbol: "Pt", number: 78, mass: 195.08 },
  "Cromo": { symbol: "Cr", number: 24, mass: 52.00 },
  "Manganeso": { symbol: "Mn", number: 25, mass: 54.94 },
  "Boro": { symbol: "B", number: 5, mass: 10.81 },
  "Carbono": { symbol: "C", number: 6, mass: 12.011 },
  "Silicio": { symbol: "Si", number: 14, mass: 28.09 },
  "Nitrógeno": { symbol: "N", number: 7, mass: 14.007 },
  "Oxígeno": { symbol: "O", number: 8, mass: 15.999 },
  "Fósforo": { symbol: "P", number: 15, mass: 30.97 },
  "Arsénico": { symbol: "As", number: 33, mass: 74.92 },
  "Antimonio": { symbol: "Sb", number: 51, mass: 121.76 },
  "Azufre": { symbol: "S", number: 16, mass: 32.06 },
  "Selenio": { symbol: "Se", number: 34, mass: 78.97 },
  "Teluro": { symbol: "Te", number: 52, mass: 127.60 },
  "Flúor": { symbol: "F", number: 9, mass: 19.00 },
  "Cloro": { symbol: "Cl", number: 17, mass: 35.45 },
  "Bromo": { symbol: "Br", number: 35, mass: 79.90 },
  "Yodo": { symbol: "I", number: 53, mass: 126.90 },
  
  "Rubidio": { symbol: "Rb", number: 37, mass: 85.47 },
  "Cesio": { symbol: "Cs", number: 55, mass: 132.91 },
  "Radio": { symbol: "Ra", number: 88, mass: 226 },
  "Paladio": { symbol: "Pd", number: 46, mass: 106.42 },
  "Galio": { symbol: "Ga", number: 31, mass: 69.72 },
  "Indio": { symbol: "In", number: 49, mass: 114.82 },
  "Talio": { symbol: "Tl", number: 81, mass: 204.38 },
  "Germanio": { symbol: "Ge", number: 32, mass: 72.63 },
  "Bismuto": { symbol: "Bi", number: 83, mass: 208.98 },
  "Polonio": { symbol: "Po", number: 84, mass: 209 },
  "Astato": { symbol: "At", number: 85, mass: 210 }
};

// 3. Sound Synthesizer via Web Audio API
let audioCtx = null;

function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

function playSound(type) {
  try {
    initAudio();
    if (!audioCtx) return;

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    const now = audioCtx.currentTime;

    if (type === 'success') {
      osc.type = 'sine';
      // Pleasant double beep (C5 then E5)
      osc.frequency.setValueAtTime(523.25, now); // C5
      gain.gain.setValueAtTime(0.12, now);
      osc.start(now);
      
      osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
      gain.gain.setValueAtTime(0.12, now + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
      osc.stop(now + 0.3);
    } 
    else if (type === 'error') {
      osc.type = 'triangle';
      // Low descending buzz
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.linearRampToValueAtTime(95, now + 0.28);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      osc.start(now);
      osc.stop(now + 0.3);
    } 
    else if (type === 'explosion') {
      // Synth deep rumble
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(90, now);
      osc.frequency.exponentialRampToValueAtTime(15, now + 1.4);
      
      const filter = audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(280, now);
      filter.frequency.exponentialRampToValueAtTime(12, now + 1.4);
      
      osc.disconnect(gain);
      osc.connect(filter);
      filter.connect(gain);
      
      gain.gain.setValueAtTime(0.35, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.4);
      
      osc.start(now);
      osc.stop(now + 1.4);
    }
  } catch (e) {
    console.warn("Audio context not supported or blocked", e);
  }
}

// 4. Game State
const game = {
  score: 0,
  errors: 0,
  streak: 0,
  maxStreak: 0,
  currentElement: null,
  lastElement: null,
  isPlaying: true
};

// 5. DOM References
const elCard = document.getElementById('element-card');
const elBadge = document.getElementById('category-badge');
const elAtomicNumber = document.getElementById('atomic-number');
const elSymbol = document.getElementById('element-symbol');
const elAtomicMass = document.getElementById('atomic-mass');
const elName = document.getElementById('element-name');
const valInput = document.getElementById('valence-input');
const submitBtn = document.getElementById('submit-btn');

let answerBuffer = '';

function clearAnswerText() {
  answerBuffer = '';
  valInput.replaceChildren();
}

function setAnswerText(value) {
  answerBuffer = value;
  valInput.textContent = value;
}

function getAnswerText() {
  return answerBuffer;
}

const scoreVal = document.getElementById('score-val');
const errorsVal = document.getElementById('errors-val');
const streakVal = document.getElementById('streak-val');

const feedbackPanel = document.getElementById('feedback-panel');
const feedbackTitle = document.getElementById('feedback-title');
const feedbackDesc = document.getElementById('feedback-desc');

const lighterContainer = document.getElementById('lighter');
const fusePath = document.getElementById('fuse-path');
const fuseSpark = document.getElementById('fuse-spark');
const explosionOverlay = document.getElementById('explosion-overlay');

const gameoverModal = document.getElementById('gameover-modal');
const modalScore = document.getElementById('modal-score');
const modalStreak = document.getElementById('modal-streak');
const restartBtn = document.getElementById('restart-btn');

const studyModal = document.getElementById('study-modal');
const openStudyBtn = document.getElementById('open-study-btn');
const closeStudyBtn = document.getElementById('close-study-btn');
const studyScopeInputs = document.querySelectorAll('input[name="study-scope"]');

// 6. Game Logic Functions

const questionPool = [
  ...Object.entries(valenciasGenerales).map(([name, valencias]) => ({
    name,
    acceptedAnswers: [valencias],
    combination: null
  })),
  ...Object.entries(valenciasSegunCombinacion).flatMap(([name, valencias]) => [
    { name, acceptedAnswers: getAcceptedAnswers(valencias.conOxigeno), combination: 'conOxigeno' },
    { name, acceptedAnswers: getAcceptedAnswers(valencias.conOtrosElementos), combination: 'conOtrosElementos' }
  ])
];

// Grupos 13–17 indicados para la segunda fase de estudio. El primer
// subconjunto es el resto de elementos disponibles (grupos 1–12).
const secondSubsetSymbols = new Set([
  'B', 'Al', 'Ga', 'In', 'Tl',
  'C', 'Si', 'Ge', 'Sn', 'Pb',
  'N', 'P', 'As', 'Sb', 'Bi',
  'O', 'S', 'Se', 'Te', 'Po',
  'F', 'Cl', 'Br', 'I', 'At'
]);

const STUDY_SCOPE_KEY = 'valence-study-scope';
const validStudyScopes = new Set(['first', 'second', 'all']);
let studyScope = 'all';

function getQuestionPoolForScope() {
  if (studyScope === 'all') return questionPool;

  return questionPool.filter(question => {
    const symbol = elementosData[question.name]?.symbol;
    const belongsToSecondSubset = secondSubsetSymbols.has(symbol);
    return studyScope === 'second' ? belongsToSecondSubset : !belongsToSecondSubset;
  });
}

function setStudyScope(scope, loadQuestion = true) {
  studyScope = validStudyScopes.has(scope) ? scope : 'all';
  studyScopeInputs.forEach(input => {
    input.checked = input.value === studyScope;
  });

  try {
    localStorage.setItem(STUDY_SCOPE_KEY, studyScope);
  } catch (error) {
    // La aplicación sigue funcionando aunque el navegador bloquee el almacenamiento.
  }

  game.lastElement = null;
  if (loadQuestion && game.isPlaying) loadNextElement();
}

// A normal value is one answer (for example, [3, 5]). Exceptional values
// contain several complete alternatives (for example, [[1, 3, 5], [3, 5]]).
function getAcceptedAnswers(value) {
  return Array.isArray(value[0]) ? value : [value];
}

// Pick a random question, avoiding an immediate repeat of the same element/context.
function getRandomElement() {
  const activeQuestionPool = getQuestionPoolForScope();
  let question = activeQuestionPool[Math.floor(Math.random() * activeQuestionPool.length)];
  let questionKey = `${question.name}:${question.combination || 'general'}`;

  if (questionKey === game.lastElement && activeQuestionPool.length > 1) {
    question = activeQuestionPool[Math.floor(Math.random() * activeQuestionPool.length)];
    questionKey = `${question.name}:${question.combination || 'general'}`;
  }

  game.lastElement = questionKey;
  return question;
}

function getCombinationLabel(combination) {
  if (combination === 'conOxigeno') return 'con oxígeno';
  if (combination === 'conOtrosElementos') return 'con otros elementos';
  return '';
}

// Format valence arrays to neat human strings: [2, -2, 4, 6] -> "±2, +4, +6"
function formatValencesText(valences) {
  const sorted = [...valences].sort((a, b) => Math.abs(a) - Math.abs(b) || a - b);
  const formatted = [];
  const processed = new Set();
  
  for (let i = 0; i < sorted.length; i++) {
    const val = sorted[i];
    if (processed.has(val)) continue;
    
    const opp = -val;
    if (val !== 0 && sorted.includes(opp)) {
      formatted.push(`±${Math.abs(val)}`);
      processed.add(val);
      processed.add(opp);
    } else {
      formatted.push(`${val}`);
      processed.add(val);
    }
  }
  return formatted.join(', ');
}

function formatAcceptedAnswers(acceptedAnswers) {
  return acceptedAnswers.map(formatValencesText).join(' o ');
}

// Load a new element question
function loadNextElement() {
  clearAnswerText();

  game.currentElement = getRandomElement();
  const el = game.currentElement;
  const details = elementosData[el.name] || { symbol: "?", number: "?", mass: "?" };
  
  const combinationLabel = getCombinationLabel(el.combination);
  elCard.className = `element-card${el.combination ? ` card-${el.combination}` : ''}`;

  if (el.combination) {
    elBadge.hidden = false;
    elBadge.className = `category-badge badge-${el.combination}`;
    elBadge.textContent = el.combination === 'conOxigeno'
      ? 'O₂ Con oxígeno'
      : '⚛ Con otros elementos';
  } else {
    elBadge.hidden = true;
    elBadge.textContent = '';
  }
  
  elAtomicNumber.textContent = details.number;
  elSymbol.textContent = details.symbol;
  elAtomicMass.textContent = details.mass;
  elName.textContent = el.name;
}

// Parse user input into clean integer values
function parseUserInput(inputString) {
  // Split on commas, spaces, or semicolons
  const tokens = inputString.split(/[\s,;]+/);
  const results = [];
  
  for (let token of tokens) {
    token = token.trim();
    if (!token) continue;

    // Positive valences may omit "+"; negative valences require "-".
    const singleMatch = token.match(/^([+-]?\d+)$/);
    if (singleMatch) {
      results.push(parseInt(singleMatch[1], 10));
    }
  }
  
  // Remove duplicates and return
  return [...new Set(results)];
}

// Compare the user's set with one complete accepted answer.
function matchesValences(userValences, expectedValences) {
  if (userValences.length !== expectedValences.length) return false;
  
  const userSet = new Set(userValences);
  for (let val of expectedValences) {
    if (!userSet.has(val)) return false;
  }
  return true;
}

// Any of the configured complete alternatives may be correct.
function validateAnswer(userValences, acceptedAnswers) {
  return acceptedAnswers.some(expectedValences => matchesValences(userValences, expectedValences));
}

// Calculate and move the lighter flame towards the bomb
function updateLighterPosition() {
  const track = document.querySelector('.animation-track');
  const trackWidth = track.clientWidth;
  const lighterWidth = lighterContainer.clientWidth || 90;
  
  const bomb = document.querySelector('.bomb-container');
  const bombWidth = bomb.clientWidth || 95;
  
  // Spark lies at 72% X inside the bomb container
  // Flame lies at 54% X inside the lighter container
  // touchPoint is where the flame overlaps with the spark
  const touchPoint = trackWidth - bombWidth + (0.70 * bombWidth) - (0.54 * lighterWidth);
  const currentLeft = Math.max(0, touchPoint * (game.errors / 10));
  
  lighterContainer.style.left = `${currentLeft}px`;
}

// Trigger the comic explosion!
function triggerExplosion() {
  game.isPlaying = false;
  playSound('explosion');
  
  // Start fuse burning animation
  fusePath.classList.add('burning');
  fuseSpark.classList.add('burning');
  
  // Move spark along the fuse curve inside SVG
  // Wait 800ms for fuse to burn, then trigger the big boom
  setTimeout(() => {
    // Show explosion pop-art
    explosionOverlay.classList.add('active');
    document.body.classList.add('screen-shake');
    
    // Shake duration 1.2s, then show modal
    setTimeout(() => {
      document.body.classList.remove('screen-shake');
      explosionOverlay.classList.remove('active');
      
      // Load scores to modal
      modalScore.textContent = game.score;
      modalStreak.textContent = game.maxStreak;
      gameoverModal.classList.add('active');
    }, 1200);
    
  }, 800);
}

// Main Submit Action
function checkAnswer() {
  if (!game.isPlaying) return;
  
  const inputStr = getAnswerText().trim();
  if (!inputStr) return; // Ignore empty submissions

  // Limpia inmediatamente la respuesta visible para no arrastrarla al siguiente elemento.
  clearAnswerText();
  
  const userValences = parseUserInput(inputStr);
  const acceptedAnswers = game.currentElement.acceptedAnswers;
  const isCorrect = validateAnswer(userValences, acceptedAnswers);

  const expectedStr = formatAcceptedAnswers(acceptedAnswers);
  
  if (isCorrect) {
    // Correct logic
    game.score++;
    game.streak++;
    if (game.streak > game.maxStreak) {
      game.maxStreak = game.streak;
    }
    
    // Play sound and update scoreboard
    playSound('success');
    scoreVal.textContent = game.score;
    streakVal.textContent = game.streak;
    
    // Feedback
    feedbackTitle.innerHTML = '✅ ¡Buen trabajo, Jacobo!';
    const context = getCombinationLabel(game.currentElement.combination);
    feedbackDesc.innerHTML = `Tu respuesta para <strong>${game.currentElement.name}</strong>${context ? ` ${context}` : ''} es correcta. Respuestas aceptadas: <span class="correct-answer-display">${expectedStr}</span>.`;
    feedbackPanel.className = 'feedback-container success';
    feedbackPanel.style.display = 'block';

    // Avanza directamente al siguiente elemento manteniendo visible el feedback
    loadNextElement();
    
  } else {
    // Incorrect logic
    game.errors++;
    game.streak = 0;
    
    // Play sound and update scoreboard
    playSound('error');
    errorsVal.textContent = `${game.errors}/10`;
    streakVal.textContent = game.streak;
    
    // Visual shake card on error
    elCard.classList.add('shake-animation');
    setTimeout(() => elCard.classList.remove('shake-animation'), 500);
    
    // Move lighter closer to bomb
    updateLighterPosition();
    
    // Feedback
    feedbackTitle.innerHTML = '❌ ¡Incorrecto!';
    const context = getCombinationLabel(game.currentElement.combination);
    feedbackDesc.innerHTML = `Para el <strong>${game.currentElement.name}</strong>${context ? ` ${context}` : ''} se esperaba: <span class="correct-answer-display">${expectedStr}</span>.<br>Escribiste: <em>${inputStr || 'nada'}</em>.`;
    feedbackPanel.className = 'feedback-container error';
    feedbackPanel.style.display = 'block';
    
    if (game.errors >= 10) {
      // Game Over, detonate!
      triggerExplosion();
    } else {
      // Avanza directamente al siguiente elemento manteniendo visible el feedback
      loadNextElement();
    }
  }
}

// Reset game stats and reload
function restartGame() {
  game.score = 0;
  game.errors = 0;
  game.streak = 0;
  game.isPlaying = true;
  
  scoreVal.textContent = '0';
  errorsVal.textContent = '0/10';
  streakVal.textContent = '0';
  
  feedbackPanel.style.display = 'none';
  feedbackPanel.className = 'feedback-container';
  submitBtn.textContent = 'Comprobar';
  
  // Reset SVGs
  fusePath.classList.remove('burning');
  fuseSpark.classList.remove('burning');
  updateLighterPosition();
  
  // Close modal
  gameoverModal.classList.remove('active');
  
  loadNextElement();
}

// Populate the Study Modal lists dynamically
function populateStudyTable() {
  const generalList = document.getElementById('study-generales');
  const combinationList = document.getElementById('study-segun-combinacion');
  
  generalList.innerHTML = '';
  combinationList.innerHTML = '';
  
  const sortedGeneral = Object.keys(valenciasGenerales).sort((a, b) => a.localeCompare(b));
  const sortedCombination = Object.keys(valenciasSegunCombinacion).sort((a, b) => a.localeCompare(b));
  
  sortedGeneral.forEach(name => {
    const valences = valenciasGenerales[name];
    const details = elementosData[name] || { symbol: '?' };
    
    const row = document.createElement('div');
    row.className = 'study-row';
    row.innerHTML = `<span><strong>${details.symbol}</strong> - ${name}</span><span class="valence-list">${formatValencesText(valences)}</span>`;
    generalList.appendChild(row);
  });
  
  sortedCombination.forEach(name => {
    const valences = valenciasSegunCombinacion[name];
    const details = elementosData[name] || { symbol: '?' };
    
    const row = document.createElement('div');
    row.className = 'study-row study-row-combination';
    row.innerHTML = `<span class="study-element"><strong>${details.symbol}</strong> - ${name}</span><span class="combination-valences"><span><small>Con O₂</small><strong>${formatAcceptedAnswers(getAcceptedAnswers(valences.conOxigeno))}</strong></span><span><small>Con otros</small><strong>${formatAcceptedAnswers(getAcceptedAnswers(valences.conOtrosElementos))}</strong></span></span>`;
    combinationList.appendChild(row);
  });
}

// 7. Event Listeners
submitBtn.addEventListener('click', () => {
  initAudio();
  checkAnswer();
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();

    // Evita que Enter active un botón del teclado virtual que haya quedado enfocado.
    if (document.activeElement && document.activeElement.classList.contains('key-btn')) {
      document.activeElement.blur();
    }

    initAudio();
    checkAnswer();
  }
});

// Teclado virtual químico: manejar pulsaciones
const keypadButtons = document.querySelectorAll('.key-btn');
keypadButtons.forEach(btn => {
  btn.addEventListener('pointerdown', (e) => {
    // Evita que el botón gane foco en móvil/escritorio.
    e.preventDefault();
  });

  btn.addEventListener('click', (e) => {
    e.preventDefault(); // Evita que el botón robe el foco del input
    initAudio();
    
    if (!game.isPlaying) return;
    
    const key = btn.getAttribute('data-key');
    const val = getAnswerText();
    
    if (key === 'backspace') {
      clearAnswerText();
    } else {
      // Determinar qué carácter está justo antes del final
      const charBefore = val.charAt(val.length - 1);
      const isDigitBefore = /\d/.test(charBefore);
      
      let appendText = '';
      
      // Si el carácter anterior es un dígito y vamos a insertar un dígito o signo,
      // insertamos automáticamente un espacio antes.
      if (isDigitBefore) {
        appendText = ' ' + key;
      } else {
        appendText = key;
      }
      
      setAnswerText(val + appendText);
    }

    btn.blur();
  });
});

restartBtn.addEventListener('click', () => {
  initAudio();
  restartGame();
});

// Modals opening/closing
openStudyBtn.addEventListener('click', () => {
  initAudio();
  studyModal.classList.add('active');
});

closeStudyBtn.addEventListener('click', () => {
  studyModal.classList.remove('active');
});

studyScopeInputs.forEach(input => {
  input.addEventListener('change', () => {
    if (input.checked) setStudyScope(input.value);
  });
});

// Close modal clicking outside content
window.addEventListener('click', (e) => {
  if (e.target === studyModal) {
    studyModal.classList.remove('active');
  }
});

// Recalculate lighter alignment on screen resize (responsive)
window.addEventListener('resize', () => {
  updateLighterPosition();
});

// 8. Initial Load
window.addEventListener('DOMContentLoaded', () => {
  let savedStudyScope = 'all';
  try {
    savedStudyScope = localStorage.getItem(STUDY_SCOPE_KEY) || 'all';
  } catch (error) {
    // Usa ambos subconjuntos si el almacenamiento no está disponible.
  }
  setStudyScope(savedStudyScope, false);
  populateStudyTable();
  loadNextElement();
  updateLighterPosition();
});
