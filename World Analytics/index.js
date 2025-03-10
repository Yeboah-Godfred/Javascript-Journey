const textareaEl = document.querySelector(".textarea");
const charactersEl = document.querySelector(".stat-number-characters");
const wordsEl = document.querySelector(".stat-number-words");
const twitterEl = document.querySelector(".stat-number-twitter");
const facebookEl = document.querySelector(".stat-number-facebook");



const textFunction = () => {
    const numberOfChars = textareaEl.value.length;
    const twitterCharsLeft = 280 -numberOfChars;
    const facebookCharsLeft = 2200 -numberOfChars;
    
    charactersEl.textContent = numberOfChars;
    twitterEl.textContent = twitterCharsLeft;
    facebookEl.textContent = facebookCharsLeft;
}
    


textareaEl.addEventListener("input", textFunction);
