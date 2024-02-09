const questions = [
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: 2,
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Venus", "Mars", "Jupiter"],
        correctAnswer: 3,
    },
    {
        question: "What gas do plants use for photosynthesis?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: 2,
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Pablo Picasso","Leonardo da Vinci","Vincent van Gogh","Michelangelo",],
        correctAnswer: 2,
    },
    {
        question: "What is the capital city of Japan?",
        options: ["Tokyo", "Beijing", "Seoul", "Bangkok"],
        correctAnswer: 1,
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Fe", "Hg"],
        correctAnswer: 1,
    },
    {
        question: "Which scientist developed the theory of relativity?",
        options: ["Isaac Newton","Galileo Galilei","Albert Einstein","Nikola Tesla",],
        correctAnswer: 2,
    },
    {
        question: "What is the largest mammal?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correctAnswer: 2,
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "South Korea", "Thailand"],
        correctAnswer: 1,
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["Wa", "Wo", "H2O", "Hy"],
        correctAnswer: 3,
    },
];

const CORRECT_SCORE = 2;
const WRONG_SCORE = -1;

let currentQuestion = 0;
let attemptedCount = 0;
let totalScore = 0;

function startQuiz() {
    updateQuestion();
    document.getElementById("attempted").textContent = attemptedCount;
    document.getElementById("unattempted").textContent =
    questions.length - attemptedCount;
}

function checkAnswer(selectedOption) {
    attemptedCount++;
    document.getElementById("attempted").textContent = attemptedCount;
    document.getElementById("unattempted").textContent =
    questions.length - attemptedCount;
    
    const correctAnswer = questions[currentQuestion].correctAnswer;
    if (selectedOption === correctAnswer) {
        totalScore += CORRECT_SCORE;
        document.getElementsByClassName("option")[
            correctAnswer - 1
        ].style.backgroundColor = "yellow";
    } else {
        totalScore += WRONG_SCORE;
        document.getElementsByClassName("option")[
            selectedOption - 1
        ].style.backgroundColor = "yellow";
        document.getElementsByClassName("option")[
            correctAnswer - 1
        ]
    }
    
    
    setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            resetOptions();
            updateQuestion();
    } else {
        displayResult();
    }
}, 1000);
}


function updateQuestion() {
    const questionElement = document.getElementById("question");
    const options = document.getElementsByClassName("option");
    const currentQ = questions[currentQuestion];
    
    questionElement.textContent = currentQ.question;
    for (let i = 0; i < options.length; i++) {
        options[i].textContent = currentQ.options[i];
    }
}

function resetOptions() {
    const options = document.getElementsByClassName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].style.backgroundColor = "#f0f0f0";
    }
}


function displayResult() {
    document.querySelector(
        ".question-container"
        ).innerHTML = `<p>Your score: ${totalScore.toFixed(2)}</p>`;
    }


    window.onload = startQuiz;
    