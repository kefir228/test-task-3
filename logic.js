const quizData = [
    {
        question: "Is the penis 8 inches or more in length?",
        img: "./img/doc1.png"
    },
    {
        question: "Have you exppirienced erectile problems or decrease in libido?",
        img: "./img/doc2.png"
    },
    {
        question: "Are you currently taking any medications or supplements that might affect your sexual health?",
        img: "./img/doc3.png"
    },
    {
        question: "Do you have any underlying health conditions, such as diabetes or hypertension?",
        img: "./img/doc4.png"
    },
    {
        question: "Have you ever undergone any previous treatments or surgeries for sexual enhancement or related issues?",
        img: "./img/doc5.png"
    },
    {
        question: 'How important is it for you to have access to safe and effective medication for enhancing your sexual health?',
        img: './img/doc6.png'
    },
    {
        question: 'Do you think your wife is satisfied with the size of your penis?',
        img: './img/doc7.png'
    },
]

const questionText = document.querySelector(".section__question")
const questionImage = document.querySelector(".section__img img")
const progressText = document.querySelector(".section__progress")
const buttons = document.querySelectorAll(".section__buttons button")

let currentQuestionIndex = 0

function updateQuiz() {
    if (quizData[currentQuestionIndex]) {
        questionText.textContent = quizData[currentQuestionIndex].question
        questionImage.src = quizData[currentQuestionIndex].img
        updateProgress()
    } else {
        console.error('Питання не знайдено');
    }

    if (currentQuestionIndex === quizData.length) {
        showModal();
    }
}

function updateProgress() {
    let progressHtml = '';
    for (let i = 0; i < quizData.length; i++) {
        if (i === currentQuestionIndex) {
            progressHtml += `<span class="active">${i + 1}</span>`;
        } else {
            progressHtml += `<span>${i + 1}</span>`;
        }
    }
    progressText.innerHTML = progressHtml;
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (currentQuestionIndex < quizData.length) {
            currentQuestionIndex++;
            updateQuiz();
        } else {
            currentQuestionIndex = 0;
            updateQuiz();
        }
    });
});

updateQuiz()



const button = document.querySelectorAll('.scrollTo, .grid-item, .footer_btn')

button.forEach(buttons => {
    buttons.addEventListener('click', () => {
        const targetId = buttons.getAttribute('data-target')
        const targetEl = document.querySelector(targetId)

        targetEl.scrollIntoView({
            behavior: 'smooth',
            block: "center"
        })
    })
})