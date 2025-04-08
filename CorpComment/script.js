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

    e.preventDefault();

    const text = textareaEl.value;
    
    console.log(text)
}

formEl.addEventListener('submit', submitHandler);