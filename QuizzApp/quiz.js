const questions = [
    {
        question: "Which is largest animal in the world",
        answer: [
            { text: "Shark", correct: false },
            { text: "BlueWhale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false }
        ]
    },
    {
        question: "Which is smalleest country in the world",
        answer: [
            { text: "vaticanCity", correct: true },
            { text: "Bhutan", correct: false },
            { text: "Nepal", correct: false },
            { text: "Srilanka", correct: false }
        ]
    },
    {
        question: "Which is largest desert in the world",
        answer: [
            { text: "Thar", correct: false },
            { text: "Gobi", correct: false },
            { text: "Sahara", correct: true },
            { text: "Kalhari", correct: false }
        ]
    },
    {
        question: "Which is Smallest Continent in the world",
        answer: [
            { text: "Asia", correct: false },
            { text: "Astralia", correct: true },
            { text: "Arctic", correct: false },
            { text: "Africa", correct: false }
        ]
    }
]

const questionElement = document.getElementById("quetion");
const answerButton = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

let currentQuentionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuentionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuetions();
}

function showQuetions() {
    resetState();
    let currentQuention = questions[currentQuentionIndex];
    let quetionNo = currentQuentionIndex + 1;
    // it will display the quetion with quetionNo
    questionElement.innerHTML = quetionNo + ". " + currentQuention.question;
    // it will display the answers in the buttons
    currentQuention.answer.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
    })  
}

function selectAnswer(e) {
    const answerBtn = e.target;
    const isCorrectAnswer = answerBtn.dataset.correct === "true";
    if (isCorrectAnswer) {
        answerBtn.classList.add("correct");
        score++;
    } else {
        answerBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach((button)=>{
        if(button.dataset.correct==="true"){
           button.classList.add("correct");
        }
        button.disabled = true; 
    });
    nextBtn.style.display="block"
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextBtn.innerHTML="Play Again";
    nextBtn.style.display="block";
}

function handleNextButton(){
    currentQuentionIndex++;
    if(currentQuentionIndex < questions.length){
        showQuetions();
    }else{
        showScore();
    }
}

nextBtn.addEventListener('click',()=>{
    if(currentQuentionIndex < questions.length){
        handleNextButton();
    }else{
        showQuetions();
    }
})
// it will hide the previous quetion and answers
function resetState() {
    nextBtn.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

startQuiz();