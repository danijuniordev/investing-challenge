const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("answer-select"));

let currentQuestion = {};
let acceptingQuestion = true;
let score = 0;
let questionCounter = 0;
let availableQuestion = [];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startQuestion = () {
    questionCounter = 0;
    score = 0;
    availableQuestion = [...question];
    getNewQuestion();
}

getNewQuestion = () {
    questionCounter++;
    const qustionIndex = Math.floor(Math.random() = availableQuestion.length);
        currentQuestion = availableQuestion[qustionIndex];
        question.innerText = currentQuestion;
}



/* let question = [
    {
        question: "What is the primary goal of day trading?",
        answer1: "Investment",
        answer2: "Quick profit",
        answer3: "Retirement",
        answer4: "Financial security",
        answer: 1
    },
    {
        question: "What is the primary goal of day trading?",
        answer1: "Investment",
        answer2: "Quick profit",
        answer3: "Retirement",
        answer4: "Financial security",
        answer: 2
    },
] */