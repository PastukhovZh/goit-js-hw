
// Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message, в которых сохраняй текущие значения полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".

// При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы. В противном случае поля должны быть пустыми.

// При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, message и текущими их значениями в консоль.

// Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. Для этого добавь в проект и используй библиотеку lodash.throttle.



import throttle from "lodash.throttle";

const MSG_KEY = "feedback-form-state";

const form = document.querySelector('.feedback-form');
const textareaValue = document.querySelector('textarea');
const inputEmail = document.querySelector('input');
const formData = {};


form.addEventListener('submit', onFormSubmit);
textareaValue.addEventListener('input', throttle(onTextAreaInput, 500));
inputEmail.addEventListener('input', throttle(onTextAreaInput, 500));

savedTextareaValue();


function onFormSubmit(e) {
    e.preventDefault();


  if (textareaValue.value && inputEmail.value !== null) {
        e.currentTarget.reset();
  localStorage.removeItem(MSG_KEY);
    
  } else{
return alert('Ты шо')
}}


function onTextAreaInput(e) {
   formData[e.target.name] = e.target.value;
    const msg = JSON.stringify(formData);
  // const msg = e.target.value;
    localStorage.setItem(MSG_KEY, msg)
}

function savedTextareaValue() {
  // const savedText = localStorage.getItem(MSG_KEY);
  // textareaValue.value = savedText;
  // inputEmail.value = savedText;

 const savedMessage = JSON.parse(localStorage.getItem(MSG_KEY));
  if (textareaValue.value && inputEmail.value) {
    savedMessage['message', 'email']
  }
  
  textareaValue.value = savedMessage['message'] || '';
    inputEmail.value = savedMessage['email'] || '' ;
}



// inputEmail.addEventListener('input', e => {

//     // textareaValue.addEventListener("input", e => {
//     //     formData[e.target.name] = e.target.value;
//     // })

//     formData[e.target.name] = e.target.value;

//   console.log(formData);
// });


// const listnerOfForm = form.addEventListener('input'