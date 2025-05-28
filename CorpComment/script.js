//GLOBAL SELECTORS

const formEl = document.querySelector('.form');

const textareaEl = document.querySelector('.form__textarea');

const counterEl = document.querySelector('.counter');

const feedbackListEl = document.querySelector('.feedbacks')

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
        
        textareaEl.focus();

        return 1;
    }

    //focus textarea

    //extract hashtag from text
    const hashtag = text.split(' ').find(word => word.includes('#'));

    //company name
    const company = hashtag.substring(1);

    //company badge letter
    const badgeLetter = company.substring(0, 1).toUpperCase();

    //vote count
    const upvoteCount = 0;

    //days ago the text was sent
    const daysAgo = 0;

    const feedbackItemHtml = `
        <li class="feedback">
            <button class="upvote">
                <i class="fa-solid fa-caret-up upvote__icon"></i>
                <span class="upvote__count">${upvoteCount}</span>
            </button>
            <section class="feedback__badge">
                <p class="feedback__letter">${badgeLetter}</p>
            </section>
            <div class="feedback__content">
                <p class="feedback__company">${company}</p>
                <p class="feedback__text">${text}</p>
            </div>
            <p class="feedback__date">${daysAgo === 0 ? 'NEW' : `${daysAgo}d`}</p>
        </li>
    `;

    feedbackListEl.insertAdjacentHTML('beforeend', feedbackItemHtml)

}

formEl.addEventListener('submit', submitHandler);