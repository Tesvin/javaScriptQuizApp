// select all elements
let userName = document.querySelector("#userName");
let headerText = document.querySelector("#headerText");
let greetingInput = document.querySelector("#greetingInput");
let qn1Button = document.querySelector(".qn1Button");
let qn2Button = document.querySelector(".qn2Button");
let qn3Button = document.querySelector(".qn3Button");
let question = document.querySelector("#question");
let answerA = document.querySelector("#answerA");
let answerB = document.querySelector("#answerB");
let answerC = document.querySelector("#answerC");
let answerD = document.querySelector("#answerD");
let total = document.querySelector("#total");
let timer = document.getElementById("timer");
let iterationNumber = 0;
let qnChoice = "";
let score = 0;

// question
let questionList = [
    "Qn1: Inside which HTML element do we put the JavaScript?",
    "Qn2: Where is the correct place to insert a JavaScript?",
    "Qn3: What is the correct syntax for referring to an external script called xxx.js?"
]

// options to the questions
let aAnswer = ["scripting tag", "The head tag sction", "script href='xxx.js'"]
let bAnswer = ["javascript tag", "the body tag section", "script source='xxx.js'"]
let cAnswer = ["js tag", "The link section tag", "script src='xxx.js'"]
let dAnswer = ["script tag", "the title section tag", "script name='xxx.js"]

// setting this items not to display when the app launches
quiz.style.display = "none";
qn1Button.style.display = "none";
qn2Button.style.display = "none";
qn3Button.style.display = "none";
total.style.display = "none";
timer.style.display = "none";

// A reset function which gives the options default color of lightblu background 
//and iterates the questions and options
function reset() {
    answerA.style.backgroundColor = "rgb(62, 166, 201)";
    answerB.style.backgroundColor = "rgb(62, 166, 201)";
    answerC.style.backgroundColor = "rgb(62, 166, 201)";
    answerD.style.backgroundColor = "rgb(62, 166, 201)";

    question.innerHTML = questionList[iterationNumber];
    answerA.innerHTML = aAnswer[iterationNumber];
    answerB.innerHTML = bAnswer[iterationNumber];
    answerC.innerHTML = cAnswer[iterationNumber];
    answerD.innerHTML = dAnswer[iterationNumber];
}        

// start quiz button function
function greeting() {
    // headerText.innerHTML = ""
    greetingInput.style.display = "none"
    quiz.style.display = "block"
    qn1Button.style.display = "block"
    question.innerHTML = questionList[iterationNumber];
    answerA.innerHTML = aAnswer[iterationNumber];
    answerB.innerHTML = bAnswer[iterationNumber];
    answerC.innerHTML = cAnswer[iterationNumber];
    answerD.innerHTML = dAnswer[iterationNumber]; 
    timer.style.display = "block";
    startCountdown();
}

// option A function
function afunction() {
    answerA.style.backgroundColor = "red";
    answerB.style.backgroundColor = "lightblue";
    answerC.style.backgroundColor = "lightblue";
    answerD.style.backgroundColor = "lightblue";
    qnChoice = "a";
}

// option B function
function bfunction() {
    answerA.style.backgroundColor = "lightblue";
    answerB.style.backgroundColor = "red";
    answerC.style.backgroundColor = "lightblue";
    answerD.style.backgroundColor = "lightblue";
    qnChoice = "b";
}

// option C function
function cfunction() {
    answerA.style.backgroundColor = "lightblue";
    answerB.style.backgroundColor = "lightblue";
    answerC.style.backgroundColor = "red";
    answerD.style.backgroundColor = "lightblue";
    qnChoice = "c";
}

// option D function
function dfunction() {
    answerA.style.backgroundColor = "lightblue";
    answerB.style.backgroundColor = "lightblue";
    answerC.style.backgroundColor = "lightblue";
    answerD.style.backgroundColor = "red";
    qnChoice = "d";
}


// first Next button function
function submitQn1() {
    if (qnChoice == "d") {
        score += 1;
    }
    qn1Button.style.display = "none";
    qn2Button.style.display = "block"
    iterationNumber += 1;
    
    reset();
}

// second Next function
function submitQn2() {
    if (qnChoice == "b") {
        score += 1;
    }
    qn2Button.style.display = "none";
    qn3Button.style.display = "block";
    iterationNumber += 1;
    
    reset();  
}

// third Next function
function submitQn3() {
    if (qnChoice == "c") {
        score += 1;
    }
    iterationNumber += 1;
    // total.innerHTML = "Your Scored " + score + " / 5";
    totalScore();
    quiz.style.display = "none";
    total.style.display = "block";

    reset();
}

// total score function
function totalScore() {
    let quizTotal = `
    <p>Quiz Completed<p>
    <p>You Scored: ${score} of 3<p>
    <div class="quiz-repeat">
        <a href="index.html">Take Quiz Again</a>
    </div>
    `

    total.innerHTML = quizTotal
}


// Add a timer
let time = 0.5;
let quizTimeInMinutes = time * 60 * 60;
let quizTime = quizTimeInMinutes / 60;

function startCountdown() {
    let quizTimer = setInterval(() => {
        if(quizTime <= 0) {
            clearInterval(quizTimer)
            submitQn3();
        } else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60;
            timer.innerHTML = `TIME: ${min} : ${sec}`;
        }
    }, 1000);
}
