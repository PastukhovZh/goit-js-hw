
// Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message, в которых сохраняй текущие значения полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".

// При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы. В противном случае поля должны быть пустыми.

// При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, message и текущими их значениями в консоль.

// Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. Для этого добавь в проект и используй библиотеку lodash.throttle.



import throttle from "lodash.throttle";

const MSG_KEY = "feedback-form-state";

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInputValues, 500));



function onFormSubmit(e) {
  e.preventDefault();
  if (form.message.value && form.email.value !== "") {
  e.currentTarget.reset();
  localStorage.removeItem(MSG_KEY);
  } else{
return alert('Ты шо')
}
}



function onInputValues() {
    const formData = new FormData(form);
  let userForm = {};
  formData.forEach((value, name) => (userForm[name] = value.trim()));
  localStorage.setItem(MSG_KEY, JSON.stringify(userForm));
console.log(userForm)
}

savedInputValue()


function savedInputValue() {

  const savedText = JSON.parse(localStorage.getItem(MSG_KEY));
  if (!savedText) {
    return
  }
    savedText['message', 'email'] || '';
    form.message.value = savedText['message'] || '';
    form.email.value = savedText['email'] || '';
}
