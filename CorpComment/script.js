//GLOBAL SELECTORS
const MAX_CHARS = 150;
const BASE_API_URL = 'https://bytegrad.com/course-assets/js/1/api';

const formEl = document.querySelector('.form');
const textareaEl = document.querySelector('.form__textarea');
const counterEl = document.querySelector('.counter');
const feedbackListEl = document.querySelector('.feedbacks')
const submitButtonEl = document.querySelector('.submit-btn');
const spinnerEl = document.querySelector('.spinner');

const renderFeedbackItem = (feedbackItem) => {
    const feedbackItemHtml = `
        <li class="feedback">
            <button class="upvote">
                <i class="fa-solid fa-caret-up upvote__icon"></i>
                <span class="upvote__count">${feedbackItem.upvoteCount}</span>
            </button>
            <section class="feedback__badge">
                <p class="feedback__letter">${feedbackItem.badgeLetter}</p>
            </section>
            <div class="feedback__content">
                <p class="feedback__company">${feedbackItem.company}</p>
                <p class="feedback__text">${feedbackItem.text}</p>
            </div>
            <p class="feedback__date">${feedbackItem.daysAgo === 0 ? 'NEW' : `${feedbackItem.daysAgo}d`}</p>
        </li>
    `;

    feedbackListEl.insertAdjacentHTML('beforeend', feedbackItemHtml)

}

//COUNTER COMPONENT

const inputHandler = () => {
    //max characters
    const maxChars = MAX_CHARS;
    //characters entered
    const charsEntered = textareaEl.value.length;
    //characters left
    const charsLeft = maxChars - charsEntered;
    //output results
    counterEl.textContent = charsLeft;
};

textareaEl.addEventListener('input', inputHandler);

const showVisualIndicator = (textCheck) => {
    if (textCheck == 'valid'){
        formEl.classList.add('form--valid');
        //remove visual indicator
        setTimeout(() => {
            formEl.classList.remove('form--valid');
        }, 2000);
    }else{
        formEl.classList.add('form--invalid');
        //remove visual indicator
        setTimeout(() => {
            formEl.classList.remove('form--invalid');
        }, 2000);
    }
}
//FORM COMPONENT

const submitHandler = (e) => {
    //preventing default browser action
    e.preventDefault();
    //getting input data 
    const text = textareaEl.value;
    //text validation
    if (text.includes('#') && text.length > 4) {
        //show valid indicator
        showVisualIndicator('valid');
    } else {
        //show invalid indicator
        showVisualIndicator();

        //focus textarea
        textareaEl.focus();

        return 1;
    }

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

    //feedback Items object
    const feedbackItem = {
        upvoteCount:upvoteCount,
        company:company,
        badgeLetter:badgeLetter,
        text:text,
        daysAgo:daysAgo
    };

    //render feedback item
    renderFeedbackItem(feedbackItem);

    //Add feedbackItem to server
    fetch(`${BASE_API_URL}/feedbacks`, {
        method: 'POST',
        body: JSON.stringify(feedbackItem),
        headers: {
            Accept: 'application/json',
            'content-Type': 'application/json'
        }
    }).then(response => {
        if (!response.ok){
            return console.log("Something went wrong")
        }

        console.log("Submitted successfully")
    }).catch(error => console.log(`Error message: ${error.message}`))

    //clear textarea
    textareaEl.value = '';
    //blur submit button
    submitButtonEl.blur();
    //set counter to zero
    counterEl.textContent = MAX_CHARS;
}

formEl.addEventListener('submit', submitHandler);


// FEEDBACK LIST COMPONENT
const clickHandler = (event) => {
    //get clicked html element
    const clickedEl = event.target;

    const upvoteIntention = clickedEl.className.includes('upvote');

    if (upvoteIntention){
        const upvoteButtonEl = clickedEl.closest('.upvote');

        //disable upvote element
        upvoteButtonEl.disabled = true;

        //select upvoteCount element
        const upvoteCountEl = upvoteButtonEl.querySelector('.upvote__count');

        //get current value of upvote Count element
        const upvoteCount = +upvoteCountEl.textContent;
        upvoteCountEl.textContent = upvoteCount + 1;
    }else{
        clickedEl.closest('.feedback').classList.toggle('feedback--expand');
    }
}

feedbackListEl.addEventListener('click', clickHandler);


fetch(`${BASE_API_URL}/feedbacks`).then(response => {
    return response.json()
}).then(
    data => {
        //remove spinner
        spinnerEl.remove()

        //iterate over each feedback item in array and render in a list
        data.feedbacks.forEach(feedbackItem => {

            //New feedback item
         renderFeedbackItem(feedbackItem);

        })
    }
).catch(error =>{
    feedbackListEl.textContent = `Failed to load feedbacks, Error Message: ${error.message}`
});
