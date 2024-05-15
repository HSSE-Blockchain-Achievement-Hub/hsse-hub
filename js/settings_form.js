const updateButton = document.querySelector('.input__btn_action_update');
const settings_form = document.forms.settings;
const nickname = settings_form.elements.nickname;
const profile_description = settings_form.elements.descr;

// Заглушка для бэкенда
function updateSettings(nicknameValue, descrValue) {
}

function setSubmitButtonState_settings(isFormValid) {
    if (isFormValid) {
        updateButton.removeAttribute('disabled');
        updateButton.classList.remove('input__btn_disabled');
    } else {
        updateButton.setAttribute('disabled', true);
        updateButton.classList.add('input__btn_disabled');
    }
}

settings_form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    updateSettings(nickname.value, profile_description.value);
    setSubmitButtonState_settings(false);
});

settings_form.addEventListener('input', function (evt) {
    setSubmitButtonState_settings(nickname.value.length > 0);
});
