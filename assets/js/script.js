var questions = [
    {
        question: "HTML tags are enclosed in which of the following?",
        answers: ["[]", "{}", "<>", "()"],
        correct: "<>"
    },
    {
        question: "A block of code in CSS is called a:",
        answers: ["rule", "block", "paragraph", "style"],
        correct: "rule"
    },
    {
        question: "CSS declarations are enlosed in which of the following?",
        answers: ["[]", "{}", "<>", "()"],
        correct: "{}"
    },
    {
        question: "Which of the following is an example of an HTML attribute?",
        answers: ["img", "src", "div", "header"],
        correct: "src"
    },
    {
        question: "Which of the following is an example of an HTML tag?",
        answers: ["alt", "class", "p", "id"],
        correct: "p"
    },
    {
        question: "In a file path, how would we designate going up one folder?",
        answers: ["./", "/folder", ".up", "../"],
        correct: "../"
    },
    {
        question: "Out of the following z-index values, which would position the element in front of all the others?",
        answers: ["-9999", "0", "1", "9999"],
        correct: "9999"
    },
    {
        question: "Which of the following is true?",
        answers: ["1 === '1'", "let x = 0; boolean(x);", "1 == '1'", "'three' === 3"],
        correct: "1 == '1'"
    },
    {
        question: "If an array's highest index is 10, what is the length of the array?",
        answers: ["11", "10", "9", "20"],
        correct: "11"
    },
    {
        question: "In JS objects, the name:value pairs are called:",
        answers: ["declarations", "properties", "rules", "items"],
        correct: "properties"
    }
];

var startQuizScreenEl = document.querySelector("#start-quiz-screen");
var quizQuestionScreenEl = document.querySelector("#quiz-question-screen");
var saveScoreScreenEl = document.querySelector("#save-score-screen");
var viewScoresScreenEl = document.querySelector("#view-scores-screen");

var startQuizBtn = document.querySelector("#start-quiz-btn")

var timeLeft = document.querySelector("#time-left");
var timer = document.querySelector("#timer");
var time = 120
var questionsIndex = 0
var score = 0


//When I click the start button then a timer starts and I am presented with a question.
var startQuiz = function() {
    startQuizScreenEl.style.display = "none"
    quizQuestionScreenEl.style.display = "block"
    questionsIndex = 0;
    time = 120;
    timer.textContent = time;

    var startTimer = setInterval(function() {
        time--;
        timer.textContent = time;
        if(time <= 0) {
            clearInterval(startTimer);
            if (questionsIndex < questions.length - 1) {
                quizOver();
            }
        }
    },1000);
};

startQuizBtn.addEventListener("click", startQuiz);