const question = document.getElementById("question");
const choices = Array.from( document.getElementsByClassName("answer-text"));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "What is the primary goal of day trading?",
        choice1: "Investment",
        choice2: "Quick profit",
        choice3: "Retirement",
        choice4: "Financial security",
        answer: 1
    },
    {
        question: "= trading?",
        choice1: "Investment",
        choice2: "Quick profit",
        choice3: "Retirement",
        choice4: "Financial security",
        answer: 2
    },
    {
        question: "Whary goal of day trading?",
        choice1: "Investment",
        choice2: "Quick profit",
        choice3: "Retirement",
        choice4: "Financial security",
        answer: 3
    },
] ;

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
}

function getNewQuestion() {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        return window.location.assign("end.html");
    }
    
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);
    console.log(availableQuestions);
    acceptingAnswers = true;
}

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        getNewQuestion();
    });
});

startGame();