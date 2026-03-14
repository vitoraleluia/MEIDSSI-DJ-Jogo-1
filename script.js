let currentMode = '';
let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let targetWord = '';
let typedWord = '';
let ttsEnabled = false;

const menuScreen = document.getElementById('menu');
const gameScreen = document.getElementById('game-screen');
const victoryScreen = document.getElementById('victory-screen');
const finalScoreDisplay = document.getElementById('final-score');
const gameImage = document.getElementById('game-image');
const questionText = document.getElementById('question-text');
const interactionArea = document.getElementById('interaction-area');
const feedback = document.getElementById('feedback');
const nextBtn = document.getElementById('next-btn');
const retryBtn = document.getElementById('retry-btn');
const ttsBtn = document.getElementById('tts-btn');
const scoreDisplay = document.getElementById('score');

function initQuestions() {
    const storedQuestions = localStorage.getItem('questions');
    const storedVersion = localStorage.getItem('questions_version');
    
    // Se não houver dados ou a versão for antiga (ou se os dados forem os de teste em inglês), resetar
    if (!storedQuestions || storedVersion !== DATA_VERSION || storedQuestions.includes('"Apple"')) {
        questions = initialData;
        localStorage.setItem('questions', JSON.stringify(questions));
        localStorage.setItem('questions_version', DATA_VERSION);
    } else {
        questions = JSON.parse(storedQuestions);
    }
}

function showMenu() {
    menuScreen.classList.remove('hidden');
    gameScreen.classList.add('hidden');
    victoryScreen.classList.add('hidden');
    currentMode = '';
    currentQuestionIndex = 0;
}

function startRandomGame() {
    initQuestions();
    if (questions.length === 0) {
        alert("Não foram encontradas perguntas! Vai a 'Adicionar Conteúdo' para criares algumas!");
        return;
    }
    activeQuestions = [...questions].sort(() => Math.random() - 0.5);
    menuScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    victoryScreen.classList.add('hidden');
    currentQuestionIndex = 0;
    score = 0;
    scoreDisplay.innerText = `Pontos: ${score}`;
    loadQuestion();
}

let activeQuestions = [];

function playSound(file) {
    const audio = new Audio(`sounds/${file}`);
    audio.play().catch(e => console.log("Erro ao reproduzir áudio:", e));
}

function toggleTTS() {
    ttsEnabled = !ttsEnabled;
    ttsBtn.innerText = ttsEnabled ? "🔊 A Ouvir" : "🔇 Ouvir";
    ttsBtn.style.backgroundColor = ttsEnabled ? "var(--green)" : "var(--orange)";
    if (ttsEnabled) speak("Voz ligada. Passa o rato sobre os itens para os ouvires!");
}

function speak(text) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-PT';
    window.speechSynthesis.speak(utterance);
}

function attachTTS(element, textFunc) {
    element.onmouseenter = () => {
        if (ttsEnabled) speak(textFunc());
    };
}

function getSpeakableText(q) {
    if (q.mode === 'complete-phrase') return q.text.replace('___', q.correct_answer);
    return q.correct_answer;
}

function loadQuestion() {
    const question = activeQuestions[currentQuestionIndex];
    currentMode = question.mode;
    feedback.classList.add('hidden');
    nextBtn.classList.add('hidden');
    retryBtn.classList.add('hidden');
    interactionArea.innerHTML = '';
    typedWord = '';
    
    if (question.image) {
        gameImage.src = question.image;
        gameImage.classList.remove('hidden');
        attachTTS(gameImage, () => getSpeakableText(question));
    } else {
        gameImage.classList.add('hidden');
    }

    if (currentMode === 'image-match') {
        renderImageMatch(question);
    } else if (currentMode === 'complete-phrase') {
        renderCompletePhrase(question);
    } else if (currentMode === 'syllable-builder') {
        renderSyllableBuilder(question);
    } else if (currentMode === 'keyboard-typing') {
        renderKeyboardTyping(question);
    }

    ttsBtn.onclick = toggleTTS;
    attachTTS(questionText, () => (currentMode === 'complete-phrase' ? question.text.replace('___', 'espaço em branco') : questionText.innerText));
}

function renderImageMatch(q) {
    questionText.innerText = "Escolhe a palavra correta:";
    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.className = 'option-btn';
        btn.onclick = () => checkAnswer(opt, q.correct_answer, btn);
        attachTTS(btn, () => opt);
        interactionArea.appendChild(btn);
    });
}

function renderCompletePhrase(q) {
    questionText.innerText = q.text;
    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.className = 'option-btn';
        btn.onclick = () => {
            questionText.innerText = q.text.replace('___', opt);
            checkAnswer(opt, q.correct_answer, btn);
        };
        attachTTS(btn, () => opt);
        interactionArea.appendChild(btn);
    });
    const fullSentenceFunc = () => q.text.replace('___', q.correct_answer);
    attachTTS(questionText, fullSentenceFunc);
    if (q.image) attachTTS(gameImage, fullSentenceFunc);
}

function renderSyllableBuilder(q) {
    questionText.innerText = "Constrói a palavra:";
    const syllables = [...q.syllables].sort(() => Math.random() - 0.5);
    const currentBuild = document.createElement('div');
    currentBuild.id = 'current-build';
    interactionArea.appendChild(currentBuild);

    let builtSyllables = [];
    syllables.forEach(syl => {
        const btn = document.createElement('button');
        btn.innerText = syl;
        btn.className = 'syllable-btn';
        btn.onclick = () => {
            builtSyllables.push(syl);
            currentBuild.innerText = builtSyllables.join('-');
            btn.disabled = true;
            btn.style.opacity = '0.5';
            if (builtSyllables.length === q.syllables.length) {
                checkAnswer(builtSyllables.join(''), q.correct_answer, currentBuild);
            }
        };
        attachTTS(btn, () => syl);
        interactionArea.appendChild(btn);
    });
}

function renderKeyboardTyping(q) {
    targetWord = q.correct_answer.toUpperCase();
    questionText.innerText = "Escreve a palavra:";
    const display = document.createElement('div');
    display.id = 'typing-display';
    interactionArea.appendChild(display);

    const keyboard = document.createElement('div');
    keyboard.id = 'keyboard';
    const rows = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];
    const targetLetters = new Set(targetWord.split(''));

    rows.forEach(row => {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'keyboard-row';
        row.split('').forEach(key => {
            const btn = document.createElement('button');
            btn.innerText = key;
            btn.className = 'key';
            if (targetLetters.has(key)) btn.classList.add('highlight');
            btn.onclick = () => {
                typedWord += key;
                display.innerText = typedWord;
                if (typedWord.length === targetWord.length) {
                    checkAnswer(typedWord, targetWord, display);
                }
            };
            attachTTS(btn, () => key);
            rowDiv.appendChild(btn);
        });
        keyboard.appendChild(rowDiv);
    });
    interactionArea.appendChild(keyboard);
}

function checkAnswer(selected, correct, element) {
    const isCorrect = selected.toLowerCase() === correct.toLowerCase();
    if (isCorrect) {
        score += 10;
        feedback.innerText = "🌟 Incrível! Estás correto! 🌟";
        feedback.className = "correct";
        if (element && element.classList) element.classList.add('correct');
        playSound('correct.mp3');
        nextBtn.classList.remove('hidden');
        retryBtn.classList.add('hidden');
    } else {
        feedback.innerText = "Tenta outra vez! Tu consegues!";
        feedback.className = "wrong";
        if (element && element.classList) element.classList.add('wrong');
        playSound('wrong.mp3');
        retryBtn.classList.remove('hidden');
        nextBtn.classList.add('hidden');
    }
    scoreDisplay.innerText = `Pontos: ${score}`;
    feedback.classList.remove('hidden');
}

function loadNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < activeQuestions.length) {
        loadQuestion();
    } else {
        showVictoryScreen();
    }
}

function showVictoryScreen() {
    gameScreen.classList.add('hidden');
    victoryScreen.classList.remove('hidden');
    finalScoreDisplay.innerText = `Pontuação Final: ${score}`;
    playSound('finish.mp3');
}

function saveNewQuestion(question) {
    initQuestions();
    questions.push(question);
    localStorage.setItem('questions', JSON.stringify(questions));
}

initQuestions();
