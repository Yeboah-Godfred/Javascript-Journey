//GLOBAL SELECTORS

const formEl = document.querySelector('.form');

const textareaEl = document.querySelector('.form__textarea');

const counterEl = document.querySelector('.counter');

//COUNTER COMPONENT

const inputHandler = () => {
    //max characters
    const maxChars = 150;

    //characters entered
    const charsEntered = textareaEl.value.length;

    //characters left
    const charsLeft = maxChars - charsEntered;

    //output results

    counterEl.textContent = charsLeft;
};

textareaEl.addEventListener('input', inputHandler);


//FORM COMPONENT

const submitHandler = (e) => {
    //preventing default browser action
    e.preventDefault();

    //getting input data 
    const text = textareaEl.value;

    //text validation
    if (text.includes('#') && text.length > 4) {
        //show valid indicator
        formEl.classList.add('form--valid');

        //remove visual indicator
        setTimeout(() => {
            formEl.classList.remove('form--valid');
        }, 2000);
    } else {
        //show invalid indicator
        formEl.classList.add('form--invalid');

        //remove visual indicator
        setTimeout(() => {
            formEl.classList.remove('form--invalid');
        }, 2000);

        return 1;
    }

    //focus textarea
    textareaEl.focus();

    //extract hashtag from text
    const hashtag = text.split(' ').find(word => word.includes('#'));

    //company name
    const company = hashtag.substring(1);

    //company badge letter
    const badgeLetter = company.substring(0, 1);

    //vote count
    const upvoteCount = 0;

    //days ago the text was sent
    const daysAgo = 0;




}

formEl.addEventListener('submit', submitHandler);