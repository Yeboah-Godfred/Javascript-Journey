const textareaEl = document.querySelector('.form__textarea');

const counterEl = document.querySelector('.counter');

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