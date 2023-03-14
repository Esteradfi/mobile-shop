// Активация кнопки авторизации при заполненных инпутах
let inputs = [].slice.call(document.querySelectorAll('.page-auth__input-required')),
button = document.querySelector('.page-auth__form-button');

inputs.forEach(function(el){
el.addEventListener('input', checkInputs, false);
});
function checkInputs(){
    var empty = inputs.filter(function(el){
    return el.value.trim() === '';
}).length;
button.disabled = empty !== 0;
}
checkInputs();