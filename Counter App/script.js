const display = document.querySelector(".number")
const increaseBtn = document.querySelector("#increase");
const resetBtn = document.querySelector("#reset");
const decreaseBtn = document.querySelector("#decrease");

var count = 0;

const increaseCount = () => {
    count++;
    display.textContent = count;
};

increaseBtn.addEventListener("click", () => {
    increaseCount();
});

const decreaseCount = () => {
    if (count > 0) {
        count--;
        display.textContent = count;
    }
};

decreaseBtn.addEventListener("click", () => {
    decreaseCount();
});

const reset = () => {
    count = 0;
    display.textContent = count;
};

resetBtn.addEventListener("click" , () => {
    reset();
});