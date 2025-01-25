const questions = {
    Easy: [
        { category: "Science", difficulty: "Easy", question: "What planet is known as the Red Planet?", options: ["Mars", "Venus", "Earth", "Jupiter"], answer: 0 },
        { category: "Science", difficulty: "Easy", question: "What is H2O?", options: ["Water", "Oxygen", "Helium", "Hydrogen"], answer: 0 },
        { category: "Science", difficulty: "Easy", question: "How many legs does a spider have?", options: ["6", "8", "10", "12"], answer: 1 },
        { category: "Science", difficulty: "Easy", question: "What is the boiling point of water in Celsius?", options: ["50°C", "100°C", "150°C", "200°C"], answer: 1 },
        { category: "Science", difficulty: "Easy", question: "Which gas do humans breathe in?", options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Helium"], answer: 1 },
        { category: "Science", difficulty: "Easy", question: "What is the closest star to Earth?", options: ["Sirius", "Proxima Centauri", "The Sun", "Alpha Centauri"], answer: 2 },
        { category: "Science", difficulty: "Easy", question: "Which planet is the largest in our Solar System?", options: ["Mars", "Jupiter", "Earth", "Saturn"], answer: 1 },
        { category: "Science", difficulty: "Easy", question: "What do bees make?", options: ["Honey", "Sugar", "Wax", "Sap"], answer: 0 },
        { category: "Science", difficulty: "Easy", question: "Which animal is known as the King of the Jungle?", options: ["Tiger", "Elephant", "Lion", "Leopard"], answer: 2 },
        { category: "Science", difficulty: "Easy", question: "What is the capital of the human brain?", options: ["Cerebrum", "Cerebellum", "Medulla", "Pons"], answer: 0 },
        { category: "Science", difficulty: "Easy", question: "Which organ pumps blood through the body?", options: ["Liver", "Heart", "Kidney", "Lungs"], answer: 1 },
        { category: "Science", difficulty: "Easy", question: "What is the largest mammal?", options: ["Elephant", "Blue Whale", "Giraffe", "Shark"], answer: 1 },
        { category: "Science", difficulty: "Easy", question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Fe", "Go"], answer: 0 },
        { category: "Science", difficulty: "Easy", question: "How many bones are in the adult human body?", options: ["206", "210", "180", "150"], answer: 0 },
        { category: "Science", difficulty: "Easy", question: "What is the colour of chlorophyll?", options: ["Red", "Yellow", "Green", "Blue"], answer: 2 }
      ],

    Medium: [
        { category: "Science", difficulty: "Medium", question: "What gas do plants primarily take in?", options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"], answer: 0 },
        { category: "Science", difficulty: "Medium", question: "What is the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"], answer: 1 },
        { category: "Science", difficulty: "Medium", question: "What planet has the Great Red Spot?", options: ["Mars", "Jupiter", "Saturn", "Neptune"], answer: 1 },
        { category: "Science", difficulty: "Medium", question: "Which element has the chemical symbol 'K'?", options: ["Potassium", "Krypton", "Calcium", "Sulphur"], answer: 0 },
        { category: "Science", difficulty: "Medium", question: "Which gas makes up the majority of Earth's atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"], answer: 1 },
        { category: "Science", difficulty: "Medium", question: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Quartz"], answer: 2 },
        { category: "Science", difficulty: "Medium", question: "What part of the brain controls balance and coordination?", options: ["Cerebrum", "Cerebellum", "Brainstem", "Hypothalamus"], answer: 1 },
        { category: "Science", difficulty: "Medium", question: "Which planet is known as the Morning Star?", options: ["Mars", "Venus", "Mercury", "Saturn"], answer: 1 },
        { category: "Science", difficulty: "Medium", question: "Which vitamin is primarily produced when exposed to sunlight?", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], answer: 3 },
        { category: "Science", difficulty: "Medium", question: "What is the most abundant element in the universe?", options: ["Oxygen", "Carbon", "Hydrogen", "Helium"], answer: 2 },
        { category: "Science", difficulty: "Medium", question: "What type of energy is stored in a stretched rubber band?", options: ["Kinetic", "Thermal", "Elastic Potential", "Chemical"], answer: 2 },
        { category: "Science", difficulty: "Medium", question: "Which organ in the human body produces insulin?", options: ["Liver", "Pancreas", "Kidney", "Stomach"], answer: 1 },
        { category: "Science", difficulty: "Medium", question: "What is the main gas responsible for the greenhouse effect?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Methane"], answer: 1 },
        { category: "Science", difficulty: "Medium", question: "What is the chemical formula for table salt?", options: ["NaCl", "KCl", "CaCl2", "MgCl2"], answer: 0 },
        { category: "Science", difficulty: "Medium", question: "Which blood type is considered the universal donor?", options: ["A", "B", "O", "AB"], answer: 2 }
    ],

    Hard: [
        { category: "Science", difficulty: "Hard", question: "What is the second law of thermodynamics?", options: ["Entropy increases", "Energy is conserved", "For every action, there is a reaction", "Matter cannot be created or destroyed"], answer: 0 },
        { category: "Science", difficulty: "Hard", question: "Who proposed the theory of general relativity?", options: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Niels Bohr"], answer: 2 },
        { category: "Science", difficulty: "Hard", question: "What particle is responsible for giving mass to other particles?", options: ["Photon", "Electron", "Higgs boson", "Neutrino"], answer: 2 },
        { category: "Science", difficulty: "Hard", question: "What is the chemical formula of benzene?", options: ["C6H12", "C6H6", "C5H10", "C2H6"], answer: 1 },
        { category: "Science", difficulty: "Hard", question: "Which planet has the most moons?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], answer: 1 },
        { category: "Science", difficulty: "Hard", question: "What is the name of the first artificial satellite launched into space?", options: ["Explorer 1", "Sputnik 1", "Voyager 1", "Apollo 11"], answer: 1 },
        { category: "Science", difficulty: "Hard", question: "Which law explains why an object in motion stays in motion?", options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Universal Gravitation"], answer: 0 },
        { category: "Science", difficulty: "Hard", question: "What is the SI unit of electrical resistance?", options: ["Watt", "Ohm", "Volt", "Ampere"], answer: 1 },
        { category: "Science", difficulty: "Hard", question: "What phenomenon causes light to bend when passing through different media?", options: ["Reflection", "Diffraction", "Refraction", "Dispersion"], answer: 2 },
        { category: "Science", difficulty: "Hard", question: "What is the name of the process by which cells obtain energy from glucose?", options: ["Photosynthesis", "Glycolysis", "Fermentation", "Respiration"], answer: 1 },
        { category: "Science", difficulty: "Hard", question: "What is the main component of natural gas?", options: ["Methane", "Propane", "Butane", "Ethane"], answer: 0 },
        { category: "Science", difficulty: "Hard", question: "Which element has the highest melting point?", options: ["Iron", "Tungsten", "Titanium", "Platinum"], answer: 1 },
        { category: "Science", difficulty: "Hard", question: "What type of electromagnetic radiation has the shortest wavelength?", options: ["X-rays", "Microwaves", "Gamma rays", "Ultraviolet"], answer: 2 },
        { category: "Science", difficulty: "Hard", question: "What fundamental force is responsible for holding the nucleus together?", options: ["Electromagnetic", "Gravitational", "Strong Nuclear", "Weak Nuclear"], answer: 2 },
        { category: "Science", difficulty: "Hard", question: "Which scientist is credited with the discovery of penicillin?", options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Joseph Lister"], answer: 1 }
    ]
};

//DOM elements
const welcomeSection = document.getElementById("welcome-section");
const difficultySection = document.getElementById("difficulty-section");
const quizSection = document.getElementById('quiz-section');
const leaderboardSection = document.getElementById('leaderboard-section');

const difficultyElement = document.getElementById('difficulty');
const categoryElement = document.getElementById('category');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const leaderboardTable = document.getElementById('leaderboard').querySelector('tbody');

const homeButton = document.getElementById('home-btn');
const nextButton = document.getElementById('next-btn');
const backButton = document.getElementById('back-btn');

const restartButton = document.getElementById('restart-btn');
const startQuizButton = document.getElementById('start-quiz-btn');
const viewLeaderboardButton = document.getElementById('view-leaderboard-btn');

const exitWarning = document.getElementById('exit-warning');
const exitYesBtn = document.getElementById('exit-yes-btn');
const exitNoBtn = document.getElementById('exit-no-btn');

//timer
const timerElement = document.createElement("div");
timerElement.id = "quiz-timer";
quizSection.insertBefore(timerElement, questionElement);

let timer;
let totalTime = 60; //total time in seconds
let currentTime = totalTime;

function startTimer() {
    updateTimer(currentTime);

    timer = setInterval(() => {
        currentTime--;
        if (currentTime <= 0) {
                clearInterval(timer);
                endQuiz();
                return;
            }
        updateTimer(currentTime);
    }, 1000);
}

function updateTimer(currentTime) {
    const percent = (currentTime / totalTime) * 100; //percentage of time left
    const minutes = Math.floor(currentTime / 60); //update timer with format
    const seconds = currentTime % 60;
    const timeText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    document.querySelector(".timer-text").textContent = timeText; //update time display text

    //update circular progress
    const circle = document.querySelector(".timer-progress");
    const offset = 100 - percent;
    circle.style.strokeDashoffset = offset;
}

//track progress
const progressTracker = document.createElement("div");
progressTracker.id = "progress-tracker";
progressTracker.style.margin = "20px 0";
quizSection.insertBefore(progressTracker, questionElement);

function updateProgress() {
    progressTracker.textContent = `Question ${currentQIndex + 1} of ${currentQ.length}`;
}

//name modal
const nameModal = document.createElement("div");
nameModal.id = "name-modal";
nameModal.style.display = "none";
nameModal.innerHTML = `
    <div class="modal-content">
    <h2>Enter Your Name</h2>
    <input type="text" id="name-input" placeholder="Your Name">
    <button id="submit-name-btn" class="primary-btn">Submit</button>
    </div>`;
document.body.appendChild(nameModal);

//quiz state
let currentQ = [];
let currentQIndex = 0;
let score = 0;
let answers = [];
const leaderboard = [];

//start quiz
startQuizButton.addEventListener('click', () => {
    welcomeSection.style.display = 'none';
    difficultySection.style.display = 'block';
});

//view leaderboard
viewLeaderboardButton.addEventListener('click', () => {
    welcomeSection.style.display = 'none';
    updateLeaderboard();
    leaderboardSection.style.display = 'block';
});

//home button
homeButton.addEventListener('click', () => {

    //show confirm popup
    exitWarning.style.display = 'flex';
    exitWarning.style.zIndex = '9999';
    document.body.style.overflow = 'hidden'; //disable scrolling
    clearInterval(timer);
});

//yes button on exit warning
exitYesBtn.addEventListener('click', () => {
    welcomeSection.style.display = 'block'; //back to welcome page
    quizSection.style.display = "none";
    leaderboardSection.style.display = "none";
    exitWarning.style.display = 'none'; //hide warning popup
    document.body.style.overflow = ''; //reenable scrolling
    clearInterval(timer); //clear time when leaving
});

//no button on exit warning
exitNoBtn.addEventListener('click', () => {
    //close warning and resume
    exitWarning.style.display = 'none';
    document.body.style.overflow = ''; //reenable scrolling
    startTimer(); //clear time when leaving
});

//select difficulty
["easy", "medium", "hard"].forEach((level) => {
    document.getElementById(`${level}-btn`).addEventListener("click", () => startQuiz(level.charAt(0).toUpperCase() + level.slice(1)));
});

function startQuiz(difficulty) {
    currentQ = questions[difficulty];
    currentQIndex = 0;
    score = 0;
    answers = []; //reset answers

    difficultyElement.textContent = `Difficulty: ${difficulty}`;

    difficultySection.style.display = "none";
    quizSection.style.display = "block";

    startTimer();
    loadQuestion();
}

//load question
function loadQuestion() {
    updateProgress();
    const question = currentQ[currentQIndex];
    categoryElement.textContent = `Category: ${question.category}`;
    questionElement.textContent = question.question;
    optionsElement.innerHTML = "";

    // loop and restore selected answers
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add("option-btn");
        
        //restore previous answer
        if (answers[currentQIndex] === index) {
            button.classList.add("selected"); //restore previous answer
        }
        button.onclick = () => selectAnswer(button, index);
        optionsElement.appendChild(button);
    });

    //show/hide buttons
    backButton.style.display = currentQIndex === 0 ? "none" : "inline-block";
    nextButton.style.display = "none";
}

//check selected answer
function selectAnswer(button, index) {
    Array.from(optionsElement.children).forEach((btn) => btn.classList.remove("selected"));
    button.classList.add("selected");

    answers[currentQIndex] = index; //save selected answer

    if (index === currentQ[currentQIndex].answer) {
        score++;
    }
    nextButton.style.display = "inline-block";
}

//move next question or end quiz
nextButton.addEventListener("click", () => {
    if (currentQIndex < currentQ.length) {
        currentQIndex++;
        loadQuestion();
    } else {
        endQuiz();
    }
});

backButton.addEventListener("click", () => {
    if (currentQIndex > 0) {
        currentQIndex--;
        loadQuestion();
    }
});

//end quiz and show leaderboard
function endQuiz() {
    clearInterval(timer);
    quizSection.style.display = "none";
    nameModal.style.display = "flex";
    const percentage = ((score / currentQ.length) * 100).toFixed(2);

    document.getElementById("submit-name-btn").onclick = () => {
        const name = document.getElementById("name-input").value.trim() || "Anonymous";
        leaderboard.push({ name, score, percentage });
        leaderboard.sort((a, b) => b.score - a.score);
        updateLeaderboard();

        nameModal.style.display = "none";
        leaderboardSection.style.display = "block";
    };   
}

//update leaderboard
function updateLeaderboard() {
    leaderboardTable.innerHTML = "";
    leaderboard.forEach((entry, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${index + 1}</td><td>${entry.name}</td><td>${entry.score}</td>`;
        leaderboardTable.appendChild(row);
    });
}

//restart quiz
restartButton.addEventListener("click", () => {
    leaderboardSection.style.display = "none";
    welcomeSection.style.display = "block";
}
);