const transferButton = document.querySelector('.input__btn_action_add');
const form = document.forms.transfer;
const key = form.elements.key;
const isValid = true;

// Заглушка для бэкенда
function addTransfer(nameValue) {
    const achievement = new AchievmentManager();

}

function setSubmitButtonState(isFormValid) {
    if (isFormValid) {
        transferButton.removeAttribute('disabled');
        transferButton.classList.remove('input__btn_disabled');
    } else {
        transferButton.setAttribute('disabled', true);
        transferButton.classList.add('input__btn_disabled');
    }
}

form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    addTransfer(key.value);
    setSubmitButtonState(false);
    key.value = '';
});

form.addEventListener('input', function (evt) {
    const isValid = (key.value[0] === '@' && key.value.length > 1) || key.value.length === 42;
    setSubmitButtonState(isValid);
});
