// вызов метод тротл  для контроля количества раз вызова функци
import throttle from 'lodash.throttle'

const refs = {
    form: document.querySelector(".feedback-form textarea")
}


    //   слушатель событьй на отправку формы
refs.form.querySelector("submit", onFormSubmit);
//    слушатель событий на ввод текста в форму
refs.form.querySelector("input", onTextAreaInput);
console.log(refs.form);

function onFormSubmit(event) {

}

// ф-ция оброботки события ввода текста
function onTextAreaInput(event) {
    const onFormValue =  event.currentTarget.value;
    // localStorage.setItem("feed-bask", onFormValue)
    // console.log();
};