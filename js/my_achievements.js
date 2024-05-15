const addButton = document.querySelector('.input__btn_action_add');
const form = document.forms.transfer;
const name = form.elements.name;
const isValid = true;

function addTransfer(recieverValue) {

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
    addTransfer(name.value);
    setSubmitButtonState(false);
    name.value = '';
});

form.addEventListener('input', function (evt) {
    const isValid = name.value.length > 0;
    setSubmitButtonState(isValid);
});
