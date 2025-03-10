const textareaEl = document.querySelector(".textarea");
const charactersEl = document.querySelector(".stat-number-characters");
const wordsEl = document.querySelector(".stat-number-words");
const twitterEl = document.querySelector(".stat-number-twitter");
const facebookEl = document.querySelector(".stat-number-facebook");



const textFunction = () => {
    //setting the values
    const numberOfChars = textareaEl.value.length;
    const numberOfWords = textareaEl.value.split(' ').length;
    const twitterCharsLeft = 280 -numberOfChars;
    const facebookCharsLeft = 2200 -numberOfChars;

    //character validations
    if(twitterCharsLeft < 0){
        twitterEl.classList.add("stat-number-limit");
    }else{
        twitterEl.classList.remove("stat-number-limit");
    }

    if(facebookCharsLeft < 0){
        facebookEl.classList.add("stat-number-limit");
    }else{
        facebookEl.classList.remove("stat-number-limit");
    }

    //assignment and display
    charactersEl.textContent = numberOfChars;
    wordsEl.textContent = numberOfWords;
    twitterEl.textContent = twitterCharsLeft;
    facebookEl.textContent = facebookCharsLeft;

    //setting number of words to zero
    if(numberOfChars === 0){
        wordsEl.textContent = 0;
    }
}
    


textareaEl.addEventListener("input", textFunction);
