const mainCounterEl = document.querySelector(".main-counter")

const headingEl = document.querySelector(".heading")

const buttonIncreaseEl = document.querySelector(".counter-button-increase");

const buttonResetEl = document.querySelector(".reset-counter");

const buttonDecreaseEl = document.querySelector(".counter-button-decrease");

const counterValue = document.querySelector(".counter-value");

const increaseValue = () => {
    const currentValue = counterValue.textContent;
    const currentValueAsNumber = +currentValue;
    let newValue = currentValueAsNumber + 1;
    if(newValue > 5){
        newValue = 5;
        mainCounterEl.classList.add("main-counter-limit");
        headingEl.textContent = "MAX LIMIT!";
        buttonIncreaseEl.disabled = true;
    }
    counterValue.textContent = newValue;
}

const decreaseValue = () => {
    const currentValue = counterValue.textContent;
    const currentValueAsNumber = +currentValue;
    let newValue = currentValueAsNumber - 1;
    if(newValue < 0){
        newValue = 0;
    }else if(newValue <= 5){
        mainCounterEl.classList.remove("main-counter-limit")
        buttonIncreaseEl.disabled = false;
    }
    counterValue.textContent = newValue;
}

const resetButton = () => {
    counterValue.textContent = 0;
    mainCounterEl.classList.remove("main-counter-limit")
    headingEl.textContent = "COUNT IT";
    buttonIncreaseEl.disabled = false;
}

buttonIncreaseEl.addEventListener("click", increaseValue);

buttonDecreaseEl.addEventListener("click", decreaseValue);

buttonResetEl.addEventListener("click", resetButton);


