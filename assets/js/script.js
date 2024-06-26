const question = document.getElementById("question");
const choices = Array.from( document.getElementsByClassName("answer-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// Question
let questions = [
    {
        question: "What does ROI stand for in investments?",
        choice1: "Return on Investment",
        choice2: "Risk of Investment",
        choice3: "Revenue on Investment",
        choice4: "Rate of Interest",
        answer: 1
    },
    {
        question: "Which of these is not a type of investment?",
        choice1: "Stocks",
        choice2: "Bonds",
        choice3: "Savings Account",
        choice4: "Loans",
        answer: 3
    },
    {
        question: "What is the purpose of diversification in investing?",
        choice1: "Maximize returns",
        choice2: "Minimize risk",
        choice3: "Increase volatility",
        choice4: "Decrease liquidity",
        answer: 2
    },
    {
        question: "What does the P/E ratio measure?",
        choice1: "Profitability",
        choice2: "Liquidity",
        choice3: "Debt",
        choice4: "Valuation",
        answer: 4
    },
    {
        question: "What is a 'bear market'?",
        choice1: "Increasing prices",
        choice2: "Optimistic investors",
        choice3: "Decreasing prices",
        choice4: "Pessimistic investors",
        answer: 3
    },
    {
        question: "What type of investment carries the highest risk?",
        choice1: "Stocks",
        choice2: "Bonds",
        choice3: "Savings Account",
        choice4: "Real Estate",
        answer: 1
    },
    {
        question: "What does ETF stand for?",
        choice1: "Electronic Transfer Fund",
        choice2: "Exchange-Traded Fund",
        choice3: "Equity Trading Fund",
        choice4: "Effective Tax-Free",
        answer: 2
    },
    {
        question: "What is the main factor affecting bond prices?",
        choice1: "Inflation",
        choice2: "Interest rates",
        choice3: "Currency exchange rates",
        choice4: "Market volatility",
        answer: 2
    },
    {
        question: "What is the purpose of a stop-loss order?",
        choice1: "Lock in profits",
        choice2: "Limit losses",
        choice3: "Maximize returns",
        choice4: "Increase leverage",
        answer: 2
    },
    {
        question: "What is the role of a financial advisor?",
        choice1: "Guarantee profits",
        choice2: "Provide investment advice",
        choice3: "Sell financial products",
        choice4: "Predict market trends",
        answer: 2
    }
];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

function getNewQuestion() {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score);
        return window.location.assign("end.html");
    }

    questionCounter++;
    progressText.innerText = `question ${questionCounter}/${MAX_QUESTIONS}`;

    // Progress bar
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 197}px`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
}

const increaseScore = num => {
    score += num;
    scoreText.innerText = score;
}


choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        
        const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect"; 

        if(classToApply === "correct") {
            increaseScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

startGame();