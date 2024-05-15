const addButton = document.querySelector('.input__btn_action_add');
const form = document.forms.create;
const name = form.elements.name;
const key = form.elements.key;
const ref = form.elements.ref;
const descr = form.elements.descr;
const checked = form.elements.checked;
const isValid = true;

// Заглушка для бэкенда
function addCreation(nameValue, keyValue, refValue, descrValue, checkedValue) {

}

function setSubmitButtonState(isFormValid) {
    if (isFormValid) {
        addButton.removeAttribute('disabled');
        addButton.classList.remove('input__btn_disabled');
    } else {
        addButton.setAttribute('disabled', true);
        addButton.classList.add('input__btn_disabled');
    }
}

form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    addCreation(name.value, key.value, ref.value, descr.value, checked.value);
    setSubmitButtonState(false);
    name.value = '';
    key.value = '';
    ref.value = '';
    descr.value = '';
    checked.checked = false;
});

form.addEventListener('input', function (evt) {
    const isValid = name.value.length > 0 && ((key.value[0] === '@' && key.value.length > 1) || key.value.length === 42) && key.value.length > 0 && ref.value.length > 0;
    setSubmitButtonState(isValid);
});
