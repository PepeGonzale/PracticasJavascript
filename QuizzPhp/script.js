const quizData = [
    {
        question: 'How old is Florin?',
        a_text: "10",
        b_text:"17",
        c_text: "26",
        d_text:"32",
        correct: 'c',
    },
    {
        question: 'What is the most used programming language in 2019?',
        a: "Java",
        b:"C",
        c: "Python",
        d:"Javascript",
        correct: 'd',
    },
    {
        question: 'Who is the Presiden of US?',
        a: "Florin Pop",
        b:"Donald Trump",
        c: "Ivan Saldano",
        d:"Mihai Andrei",
        correct: 'b',
    }
]
const question = document.getElementById('question')
const a_text = document.getElementById('a')
const b_text = document.getElementById('b')
const c_text = document.getElementById('c')
const d_text = document.getElementById('d')


let currentQuestion = 0;


function loadQuiz(){
    const currentQuizData = quizData[currentQuestion]
    question.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a_text
    b_text.innerText = currentQuizData.b_text
    c_text.innerText = currentQuizData.c_text
    d_text.innerText = currentQuizData.d_text
    currentQuestion++;
}
loadQuiz();