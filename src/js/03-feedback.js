// вызов метод тротл  для контроля количества раз вызова функци
import throttle from 'lodash.throttle'


const FORM_KEY = 'feedback-form-state';
const formData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
}

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();

    localStorage.removeItem(FORM_KEY);
    
  }


refs.form.addEventListener('input', throttle(onFormInput,500) );

function onFormInput(event) {
// в пустой обект dataForm записываем ключи  и значения (name: email, value: message ) наш ключ [event.target.name].
    formData[event.target.name] = event.target.value
    console.log(formData);
    
    // приобразовуем наш резултатат в JSON формат
    const formDataStr = JSON.stringify(formData);

    // записываем наш обект в localStorage
    localStorage.setItem(FORM_KEY, formDataStr);
    
}

function onAddText(event) {
    const onSaveMessage = localStorage.getItem(FORM_KEY);
   
// ели нам меcедж тру,тoесть значение в локал сторидж то мы можем с ней работать
    if (onSaveMessage) {
        // переводим стору в валидный обект
        const message = JSON.parse(onSaveMessage);
        
        console.log(message);
        
    for (const key in message) {
        if (message.hasOwnProperty(key)) {
            refs.form.elements[key].value = message[key];
        }
    }
    }
}
onAddText();

