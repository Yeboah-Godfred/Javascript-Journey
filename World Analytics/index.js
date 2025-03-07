const textareaEl = document.querySelector(".textarea");

const textFunction = () => {
    const numberOfChars = textareaEl.value.length;

    const charactersEl = document.querySelector(".stat-number-characters");

    charactersEl.textContent = numberOfChars;
}

textareaEl.addEventListener("input", textFunction);