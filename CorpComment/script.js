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
    if(text.includes('#') && text.length > 4){
        formEl.classList.add('form--valid');

        setTimeout(()=>{
            formEl.classList.remove('form--valid');
        },2000);
    }else{
        formEl.classList.add('form--invalid');
        setTimeout(()=>{
            formEl.classList.remove('form--invalid');
        },2000);
    }
}

formEl.addEventListener('submit', submitHandler);