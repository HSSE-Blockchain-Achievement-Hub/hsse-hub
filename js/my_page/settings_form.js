let updateButton = document.querySelector('.input__btn_action_update');
let settings_form = document.forms.settings;

// Заглушка для бэкенда
async function updateSettings(nicknameValue) {
    nickname.innerHTML = nicknameValue;
    const usrnm = new Username();
    await usrnm.set_username(nicknameValue);
    nickname.innerHTML = await usrnm.get_username();
    account.innerHTML = await getCookie("account");
    role.innerHTML = await getCookie("role");
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

    let nickname = settings_form.elements.nickname;
    updateSettings(nickname.value);
    setSubmitButtonState_settings(false);
});

settings_form.addEventListener('input', function (evt) {
    let nickname = settings_form.elements.nickname;
    setSubmitButtonState_settings(nickname.value.length > 0 && nickname.value.length <= 30);
});