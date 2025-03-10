const textareaEl = document.querySelector(".textarea");
const charactersEl = document.querySelector(".stat-number-characters");
const wordsEl = document.querySelector(".stat-number-words");
const twitterEl = document.querySelector(".stat-number-twitter");
const facebookEl = document.querySelector(".stat-number-facebook");



const textFunction = () => {
    const numberOfChars = textareaEl.value.length;
    const twitterCharsLeft = 280 -numberOfChars;
    const facebookCharsLeft = 2200 -numberOfChars;

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


    charactersEl.textContent = numberOfChars;
    twitterEl.textContent = twitterCharsLeft;
    facebookEl.textContent = facebookCharsLeft;
}
    


textareaEl.addEventListener("input", textFunction);
