const modalOverlay = document.querySelector(".modal-overlay")
const sendButton = document.querySelector(".form-container button")
const emailInput = document.querySelector(".form-container input")
const minutesElement = document.querySelector(".timer .minutes");
const digits = document.querySelectorAll(".timer .digit"); 

let timerInterval

function showModal() {
    const fixedMinutes = 10 
    const minutesString = String(fixedMinutes).padStart(2, "0")

    digits[0].textContent = minutesString[0]
    digits[1].textContent = minutesString[1]

    if (timerInterval) {
        clearInterval(timerInterval);
    }

    startTimer(fixedMinutes * 60)
    modalOverlay.style.display = "flex"
}

function startTimer(seconds) {
    let remainingTime = seconds
    timerInterval = setInterval(() => {
        remainingTime--
        const remainingMinutes = Math.floor(remainingTime / 60)
        const remainingSeconds = remainingTime % 60
       
        const minutesString = String(remainingMinutes).padStart(2, "0")
        const secondsString = String(remainingSeconds).padStart(2, "0")

        digits[0].textContent = minutesString[0];
        digits[1].textContent = minutesString[1];
        digits[2].textContent = secondsString[0];
        digits[3].textContent = secondsString[1];

        if (remainingTime <= 0) {
            clearInterval(timerInterval)
            modalOverlay.style.display = "none"
        }
    }, 1000)
}

sendButton.addEventListener("click", () => {
    emailInput.value = "";
    modalOverlay.style.display = "none"
});
