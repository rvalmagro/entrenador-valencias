/* ==========================================================================
   ENTRENADOR DE VALENCIAS - GAME ENGINE
   ========================================================================== */

// 1. Element lists and valences as requested
const elementosImprescindibles = {
  "Hidrógeno": [1, -1],
  "Litio": [1],
  "Sodio": [1],
  "Potasio": [1],
  "Berilio": [2],
  "Magnesio": [2],
  "Calcio": [2],
  "Estroncio": [2],
  "Bario": [2],
  "Aluminio": [3],
  "Zinc": [2],
  "Plata": [1],
  "Cadmio": [2],
  "Hierro": [2, 3],
  "Cobre": [1, 2],
  "Níquel": [2, 3],
  "Cobalto": [2, 3],
  "Mercurio": [1, 2],
  "Oro": [1, 3],
  "Estaño": [2, 4],
  "Plomo": [2, 4],
  "Platino": [2, 4],
  "Cromo": [2, 3, 6],
  "Manganeso": [2, 3, 4, 6, 7],
  "Boro": [3],
  "Carbono": [2, 4, -4],
  "Silicio": [2, 4, -4],
  "Nitrógeno": [1, 2, -3, 3, 4, 5],
  "Fósforo": [3, -3, 5],
  "Arsénico": [3, -3, 5],
  "Antimonio": [3, -3, 5],
  "Oxígeno": [-2],
  "Azufre": [2, -2, 4, 6],
  "Selenio": [2, -2, 4, 6],
  "Telurio": [2, -2, 4, 6],
  "Flúor": [-1],
  "Cloro": [1, -1, 3, 5, 7],
  "Bromo": [1, -1, 3, 5, 7],
  "Yodo": [1, -1, 3, 5, 7]
};

const elementosComplementarios = {
  "Rubidio": [1],
  "Cesio": [1],
  "Radio": [2],
  "Titanio": [2, 3, 4],
  "Paladio": [2, 4],
  "Galio": [3],
  "Indio": [3],
  "Talio": [1, 3],
  "Germanio": [2, 4, -4],
  "Bismuto": [3, 5],
  "Polonio": [2, -2, 4, 6],
  "Astato": [1, -1, 3, 5, 7]
};

// 2. Extra chemistry details to render high-fidelity periodic blocks
const elementosData = {
  "Hidrógeno": { symbol: "H", number: 1, mass: 1.008 },
  "Litio": { symbol: "Li", number: 3, mass: 6.94 },
  "Sodio": { symbol: "Na", number: 11, mass: 22.99 },
  "Potasio": { symbol: "K", number: 19, mass: 39.10 },
  "Berilio": { symbol: "Be", number: 4, mass: 9.012 },
  "Magnesio": { symbol: "Mg", number: 12, mass: 24.31 },
  "Calcio": { symbol: "Ca", number: 20, mass: 40.08 },
  "Estroncio": { symbol: "Sr", number: 38, mass: 87.62 },
  "Bario": { symbol: "Ba", number: 56, mass: 137.33 },
  "Aluminio": { symbol: "Al", number: 13, mass: 26.98 },
  "Zinc": { symbol: "Zn", number: 30, mass: 65.38 },
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
  "Fósforo": { symbol: "P", number: 15, mass: 30.97 },
  "Arsénico": { symbol: "As", number: 33, mass: 74.92 },
  "Antimonio": { symbol: "Sb", number: 51, mass: 121.76 },
  "Oxígeno": { symbol: "O", number: 8, mass: 15.999 },
  "Azufre": { symbol: "S", number: 16, mass: 32.06 },
  "Selenio": { symbol: "Se", number: 34, mass: 78.97 },
  "Telurio": { symbol: "Te", number: 52, mass: 127.60 },
  "Flúor": { symbol: "F", number: 9, mass: 19.00 },
  "Cloro": { symbol: "Cl", number: 17, mass: 35.45 },
  "Bromo": { symbol: "Br", number: 35, mass: 79.90 },
  "Yodo": { symbol: "I", number: 53, mass: 126.90 },
  
  "Rubidio": { symbol: "Rb", number: 37, mass: 85.47 },
  "Cesio": { symbol: "Cs", number: 55, mass: 132.91 },
  "Radio": { symbol: "Ra", number: 88, mass: 226 },
  "Titanio": { symbol: "Ti", number: 22, mass: 47.87 },
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

// 6. Game Logic Functions

// Pick random element weighted: 60% Imprescindibles, 40% Complementarios
function getRandomElement() {
  const useImprescindible = Math.random() < 0.6;
  const list = useImprescindible ? elementosImprescindibles : elementosComplementarios;
  const keys = Object.keys(list);
  
  let chosenKey = keys[Math.floor(Math.random() * keys.length)];
  
  // Reroll once if it's the exact same element to give more variety
  if (chosenKey === game.lastElement && keys.length > 1) {
    chosenKey = keys[Math.floor(Math.random() * keys.length)];
  }
  
  game.lastElement = chosenKey;
  
  return {
    name: chosenKey,
    valencias: list[chosenKey],
    category: useImprescindible ? "imprescindible" : "complementario"
  };
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

// Load a new element question
function loadNextElement() {
  clearAnswerText();

  game.currentElement = getRandomElement();
  const el = game.currentElement;
  const details = elementosData[el.name] || { symbol: "?", number: "?", mass: "?" };
  
  // Reset card state
  elCard.className = `element-card card-${el.category}`;
  
  if (el.category === 'imprescindible') {
    elBadge.className = 'category-badge badge-imprescindible';
    elBadge.innerHTML = '⭐ Imprescindible';
  } else {
    elBadge.className = 'category-badge badge-complementario';
    elBadge.innerHTML = 'ℹ️ Complementario';
  }
  
  elAtomicNumber.textContent = details.number;
  elSymbol.textContent = details.symbol;
  elAtomicMass.textContent = details.mass;
  elName.textContent = el.name;
}

// Parse user input into clean integer values
function parseUserInput(inputString) {
  // Replace ± with +-
  let normalized = inputString.replace(/±/g, '+-');
  // Remove space after sign (e.g. "+ 2" -> "+2", "+- 3" -> "+-3")
  normalized = normalized.replace(/([+-]{1,2})\s+(\d+)/g, '$1$2');
  
  // Split on commas, spaces, or semicolons
  const tokens = normalized.split(/[\s,;]+/);
  const results = [];
  
  for (let token of tokens) {
    token = token.trim();
    if (!token) continue;
    
    // Check for +-X or -+X (double valence)
    const doubleMatch = token.match(/^([+-]{2}|[-+]{2})(\d+)$/);
    if (doubleMatch) {
      const val = parseInt(doubleMatch[2], 10);
      results.push(val);
      results.push(-val);
    } else {
      // Single valence (+X, -X, X)
      const singleMatch = token.match(/^([+-]?\d+)$/);
      if (singleMatch) {
        const val = parseInt(singleMatch[1], 10);
        results.push(val);
      }
    }
  }
  
  // Remove duplicates and return
  return [...new Set(results)];
}

// Compare user set of valences with the expected set of valences
function validateAnswer(userValences, expectedValences) {
  if (userValences.length !== expectedValences.length) return false;
  
  const userSet = new Set(userValences);
  for (let val of expectedValences) {
    if (!userSet.has(val)) return false;
  }
  return true;
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
  const expectedValences = game.currentElement.valencias;
  const isCorrect = validateAnswer(userValences, expectedValences);
  
  const expectedStr = formatValencesText(expectedValences);
  
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
    feedbackDesc.innerHTML = `Las valencias de <strong>${game.currentElement.name}</strong> son correctas: <span class="correct-answer-display">${expectedStr}</span>.`;
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
    feedbackDesc.innerHTML = `Para el <strong>${game.currentElement.name}</strong> se esperaba: <span class="correct-answer-display">${expectedStr}</span>.<br>Escribiste: <em>${inputStr || 'nada'}</em>.`;
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
  submitBtn.textContent = 'Comprobar Enter ↵';
  
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
  const impList = document.getElementById('study-imprescindibles');
  const compList = document.getElementById('study-complementarios');
  
  impList.innerHTML = '';
  compList.innerHTML = '';
  
  const sortedImp = Object.keys(elementosImprescindibles).sort((a, b) => a.localeCompare(b));
  const sortedComp = Object.keys(elementosComplementarios).sort((a, b) => a.localeCompare(b));
  
  sortedImp.forEach(name => {
    const valences = elementosImprescindibles[name];
    const details = elementosData[name] || { symbol: '?' };
    
    const row = document.createElement('div');
    row.className = 'study-row';
    row.innerHTML = `<span><strong>${details.symbol}</strong> - ${name}</span><span class="valence-list">${formatValencesText(valences)}</span>`;
    impList.appendChild(row);
  });
  
  sortedComp.forEach(name => {
    const valences = elementosComplementarios[name];
    const details = elementosData[name] || { symbol: '?' };
    
    const row = document.createElement('div');
    row.className = 'study-row';
    row.innerHTML = `<span><strong>${details.symbol}</strong> - ${name}</span><span class="valence-list">${formatValencesText(valences)}</span>`;
    compList.appendChild(row);
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
  populateStudyTable();
  loadNextElement();
  updateLighterPosition();
});
