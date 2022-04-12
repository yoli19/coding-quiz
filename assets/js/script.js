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
var startQuizBtn = document.querySelector("#start-quiz-btn");
var question = document.querySelector("#question");
var yourScore = document.querySelector("#your-score");
var a = document.querySelector("#a");
var b = document.querySelector("#b");
var c = document.querySelector("#c");
var d = document.querySelector("#d");


var timeLeft = document.querySelector("#time-left");
var timer = document.querySelector("#timer");
var time = 120
var questionsIndex = 0
var score = 0


//WHEN I click the start button THEN a timer starts and I am presented with a question
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

    quizQuestions();
};

//WHEN I answer a question THEN I am presented with another question
var quizQuestions = function() {
    //display each question's text content
    question.textContent = questions[questionsIndex].question;
    a.textContent = questions[questionsIndex].answers[0];
    b.textContent = questions[questionsIndex].answers[1];
    c.textContent = questions[questionsIndex].answers[2];
    d.textContent = questions[questionsIndex].answers[3];


};

//check answer. if correct add 1 to score, else subtract 10 from time
var checkAnswer = function(x) {
    //WHEN I answer a question incorrectly THEN time is subtracted from the clock
    if (questions[questionsIndex].answers[x] === questions[questionsIndex].correct) {
        score++
    } else {
        time -= 10
        timer.textContent = time
    };

    questionsIndex++;

    if (questionsIndex < questions.length) {
        quizQuestions();
    } else {
        quizOver();
    };
};



//WHEN all questions are answered or the timer reaches 0 THEN the game is over
var quizOver = function() {
    quizQuestionScreenEl.style.display = "none"
    saveScoreScreenEl.style.display = "block"
    yourScore.textContent = score
};

//WHEN the game is over THEN I can save my initials and score

startQuizBtn.addEventListener("click", startQuiz);

//listen for button click on answers
a.addEventListener("click", clickA);
b.addEventListener("click", clickB);
c.addEventListener("click", clickC);
d.addEventListener("click", clickD);

function clickA() { checkAnswer(0); };
function clickB() { checkAnswer(1); };
function clickC() { checkAnswer(2); };
function clickD() { checkAnswer(3); };