let testTexts = [
  "The quick brown fox jumps over the lazy dog. This pangram contains every letter of the English alphabet at least once.",
  "Technology has revolutionized the way we communicate and work. From smartphones to artificial intelligence, innovation continues to shape our future.",
  "Learning to type quickly and accurately is a valuable skill in today's digital world. Practice makes perfect, so keep typing!",
  "The art of programming requires patience, logic, and creativity. Every line of code is a step toward solving complex problems.",
  "Nature provides endless inspiration for human innovation. From bird flight to dolphin echolocation, biomimicry drives technological advancement.",
];

let currentText = "";
let startTime = null;
let timerInterval = null;
let timeLimit = 30;
let timeLeft = 30;
let isActive = false;

const elements = {
  textDisplay: document.getElementById("textDisplay"),
  textInput: document.getElementById("textInput"),
  startBtn: document.getElementById("startBtn"),
  submitBtn: document.getElementById("submitBtn"),
  resetBtn: document.getElementById("resetBtn"),
  wpmDisplay: document.getElementById("wpm"),
  accuracyDisplay: document.getElementById("accuracy"),
  timeLeftDisplay: document.getElementById("timeLeft"),
  timerFill: document.getElementById("timerFill"),
  resultModal: document.getElementById("resultModal"),
  finalWpm: document.getElementById("finalWpm"),
  finalAccuracy: document.getElementById("finalAccuracy"),
};

document.querySelectorAll(".difficulty-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (isActive) return;

    document
      .querySelectorAll(".difficulty-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    timeLimit = parseInt(btn.dataset.time);
    timeLeft = timeLimit;
    elements.timeLeftDisplay.textContent = timeLimit;
    elements.timerFill.style.width = "100%";
  });
});

function startTest() {
  currentText = testTexts[Math.floor(Math.random() * testTexts.length)];
  elements.textDisplay.innerHTML = "";

  currentText.split("").forEach((char) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.classList.add("char");
    elements.textDisplay.appendChild(span);
  });

  elements.textInput.disabled = false;
  elements.textInput.value = "";
  elements.textInput.focus();
  elements.startBtn.disabled = true;
  elements.submitBtn.disabled = false;

  isActive = true;
  startTime = Date.now();
  timeLeft = timeLimit;

  timerInterval = setInterval(() => {
    timeLeft--;
    elements.timeLeftDisplay.textContent = timeLeft;
    elements.timerFill.style.width = (timeLeft / timeLimit) * 100 + "%";

    if (timeLeft <= 0) endTest();
  }, 1000);
}

function endTest() {
  isActive = false;
  clearInterval(timerInterval);

  elements.textInput.disabled = true;
  elements.startBtn.disabled = false;
  elements.submitBtn.disabled = true;

  const timeElapsed = (Date.now() - startTime) / 1000;
  const typedText = elements.textInput.value;

  const wordsTyped = typedText
    .trim()
    .split(/\s+/)
    .filter(word => word.length > 0).length;

  const wpm = timeElapsed > 0
    ? Math.round((wordsTyped / timeElapsed) * 60)
    : 0;

  let correctChars = 0;
  const maxLength = Math.max(typedText.length, currentText.length);

  for (let i = 0; i < maxLength; i++) {
    if (typedText[i] === currentText[i]) correctChars++;
  }

  const accuracy = typedText.length > 0
    ? Math.round((correctChars / typedText.length) * 100)
    : 0;

  elements.finalWpm.textContent = wpm;
  elements.finalAccuracy.textContent = accuracy + "%";
  elements.resultModal.classList.remove("hidden");
}

function updateDisplay() {
  if (!isActive) return;

  const typedText = elements.textInput.value;
  const chars = elements.textDisplay.querySelectorAll(".char");

  chars.forEach((char, index) => {
    char.classList.remove("correct", "incorrect", "current");

    if (index < typedText.length) {
      if (typedText[index] === currentText[index]) {
        char.classList.add("correct");
      } else {
        char.classList.add("incorrect");
      }
    } else if (index === typedText.length) {
      char.classList.add("current");
    }
  });

  const timeElapsed = (Date.now() - startTime) / 1000;

  if (timeElapsed > 0) {
    const wordsTyped = typedText
      .trim()
      .split(/\s+/)
      .filter(word => word.length > 0).length;

    const wpm = Math.round((wordsTyped / timeElapsed) * 60);
    elements.wpmDisplay.textContent = wpm;

    let correctChars = 0;
    const maxLength = Math.max(typedText.length, currentText.length);

    for (let i = 0; i < maxLength; i++) {
      if (typedText[i] === currentText[i]) correctChars++;
    }

    const accuracy = typedText.length > 0
      ? Math.round((correctChars / typedText.length) * 100)
      : 0;

    elements.accuracyDisplay.textContent = accuracy + "%";
  }

  if (typedText === currentText) endTest();
}

function submitTest() {
  if (isActive) endTest();
}

function resetTest() {
  isActive = false;
  clearInterval(timerInterval);

  elements.textInput.disabled = true;
  elements.textInput.value = "";
  elements.startBtn.disabled = false;
  elements.submitBtn.disabled = true;

  timeLeft = timeLimit;
  elements.timeLeftDisplay.textContent = timeLimit;
  elements.timerFill.style.width = "100%";
  elements.wpmDisplay.textContent = "0";
  elements.accuracyDisplay.textContent = "100%";

  elements.textDisplay.textContent =
    'Click "Start Test" to begin typing the text that will appear here.';
  elements.resultModal.classList.add("hidden");
}

function closeResults() {
  elements.resultModal.classList.add("hidden");
}

elements.startBtn.addEventListener("click", startTest);
elements.submitBtn.addEventListener("click", submitTest);
elements.resetBtn.addEventListener("click", resetTest);
elements.textInput.addEventListener("input", updateDisplay);

elements.textInput.addEventListener("paste", (e) => {
  e.preventDefault();
});
