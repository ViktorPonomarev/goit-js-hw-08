import throttle from 'lodash.throttle';

// Ключ к хранилищу
const STORAGE_KEY = 'feedback-form-state';

// Доступ к элементам формы
const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form  textarea'),
    input: document.querySelector('.feedback-form input')
};

// Добавить значения
let formData = {};

/*Сделай так, чтобы хранилище обновлялось 
не чаще чем раз в 500 миллисекунд.
 */
populateTextarea();

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));

/*
 * - Получаем значение поля
 * - Сохраняем его в хранилище
 * - Можно добавить throttle
 */
function onTextareaInput(e) {
     e.preventDefault();
    formData[e.target.name] = e.target.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

/*
 * - Получаем значение из хранилища
 * - Если там что-то было, обновляем DOM
 */
function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    const parseMessage = JSON.parse(savedMessage);

    if (savedMessage) {
        (refs.textarea.value = parseMessage.message || "");
        (refs.input.value = parseMessage.email || "");
       
        
    }
}

/*
 * - Останавливаем поведение по умолчанию
 * - Убираем сообщение из хранилища
 * - Очищаем форму
 */
function onFormSubmit(e) {
   e.preventDefault();
    console.log('Отправил форму');
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}