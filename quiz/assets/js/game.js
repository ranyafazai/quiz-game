const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
let currentQuestion = {};
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions =[
      {
        question: "Inside which HTML element do we put the JavaScript?",
        choice1: "<script>",
        choice2: "<javascript>",
        choice3: "<js>",
        choice4: "<scripting>",
        answer: 1
      },
      {
        question: "What is the capital of France?",
        choice1: "Paris",
        choice2: "London",
        choice3: "Berlin",
        choice4: "Madrid",
        answer: 1
      },
      {
        question: "What is 2 + 2?",
        choice1: "3",
        choice2: "4",
        choice3: "5",
        choice4: "6",
        answer: 2
      },
      {
        question: "What is the largest planet in our solar system?",
        choice1: "Mars",
        choice2: "Jupiter",
        choice3: "Saturn",
        choice4: "Earth",
        answer: 2
      },
      {
        question: "Who is the author of 'To Kill a Mockingbird'?",
        choice1: "Harper Lee",
        choice2: "J.K. Rowling",
        choice3: "Stephen King",
        choice4: "Charles Dickens",
        answer: 1
      },
      {
        question: "Which country is known as the 'Land of the Rising Sun'?",
        choice1: "China",
        choice2: "Japan",
        choice3: "India",
        choice4: "South Korea",
        answer: 2
      },
      {
        question: "What is the chemical symbol for water?",
        choice1: "H2O",
        choice2: "CO2",
        choice3: "NaCl",
        choice4: "O2",
        answer: 1
      },
      {
        question: "Which planet is known as the 'Red Planet'?",
        choice1: "Venus",
        choice2: "Mars",
        choice3: "Neptune",
        choice4: "Mercury",
        answer: 2
      },
      {
        question: "Who painted the Mona Lisa?",
        choice1: "Leonardo da Vinci",
        choice2: "Pablo Picasso",
        choice3: "Vincent van Gogh",
        choice4: "Michelangelo",
        answer: 1
      },
      {
        question: "What is the capital of Australia?",
        choice1: "Sydney",
        choice2: "Melbourne",
        choice3: "Canberra",
        choice4: "Brisbane",
        answer: 3
      }
    ]
;


const MAX_QUESTIONS = 10;
scoreText.innerText=0;
function startGame() {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
}

function getNewQuestion() {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);

    // Go to the end page
    return window.location.assign("../html/end.html");
  }


  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;


  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  
  choices.forEach(function(choice) {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
};

choices.forEach(function(choice) {
  choice.addEventListener("click", function(e) {
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      add();
    }
    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
     selectedChoice.parentElement.classList.remove(classToApply);
     getNewQuestion();
    }, 1000);
  });
});

function add() {
  score += 1;
  scoreText.innerText = score;
}

startGame();
