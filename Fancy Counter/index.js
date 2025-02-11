const buttonIncreaseEl = document.querySelector(".counter-button-increase");

const buttonResetEl = document.querySelector(".reset-counter");

const buttonDecreaseEl = document.querySelector(".counter-button-decrease");

const counterValue = document.querySelector(".counter-value");

const increaseValue = () => {
    const currentValue = counterValue.textContent;
    const currentValueAsNumber = +currentValue;
    const newValue = currentValueAsNumber + 1;
    counterValue.textContent = newValue;
}

const decreaseValue = () => {
    const currentValue = counterValue.textContent;
    const currentValueAsNumber = +currentValue;
    const newValue = currentValueAsNumber - 1;
    counterValue.textContent = newValue;
}

const resetButton = () => {
    counterValue.textContent = 0;
}

buttonIncreaseEl.addEventListener("click", increaseValue);

buttonDecreaseEl.addEventListener("click", decreaseValue);

buttonResetEl.addEventListener("click", resetButton);


