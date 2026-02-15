let count = 0;

const countDisplay = document.querySelector("#count");
const increaseBtn = document.querySelector("#increase");
const decreaseBtn = document.querySelector("#decrease");
const resetBtn = document.querySelector("#reset");

function updateDisplay() {
    countDisplay.textContent = count;
}

increaseBtn.addEventListener("click", function () {
    count++;
    updateDisplay();
});

decreaseBtn.addEventListener("click", function () {
    if (count > 0) {
        count--;
    }
    updateDisplay();
});

resetBtn.addEventListener("click", function () {
    count = 0;
    updateDisplay();
});