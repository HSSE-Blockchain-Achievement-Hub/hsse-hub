const addButton = document.querySelector('.input__btn_action_add');
const creation_form = document.forms.create;

// Заглушка для бэкенда
async function addCreation(nameValue, keyValue, refValue, descrValue, checkedValue) {
    let subsNumber = document.querySelector('.header__information__top_value');
    subsNumber.innerHTML = +subsNumber.textContent + 1;
}

async function setSubmitButtonState_creation(isFormValid) {
    if (isFormValid) {
        addButton.removeAttribute('disabled');
        addButton.classList.remove('input__btn_disabled');
    } else {
        addButton.setAttribute('disabled', true);
        addButton.classList.add('input__btn_disabled');
    }
}

creation_form.addEventListener('submit', async function (evt) {
    evt.preventDefault();
    const name = creation_form.elements.name;
    const key = creation_form.elements.key;
    const ref = creation_form.elements.ref;
    const descr = creation_form.elements.descr;
    const checked = creation_form.elements.checked;

    await addCreation(name.value, key.value, ref.value, descr.value, checked.value);
    await setSubmitButtonState_creation(false);
    name.value = '';
    key.value = '';
    ref.value = '';
    descr.value = '';
    checked.checked = false;
});

creation_form.addEventListener('input', async function (evt) {
    const name = creation_form.elements.name;
    const key = creation_form.elements.key;
    const ref = creation_form.elements.ref;

    const isValid = name.value.length > 0 && ((key.value[0] === '@' && key.value.length > 1) || key.value.length === 42) && key.value.length > 0 && ref.value.length > 0;
    await setSubmitButtonState_creation(isValid);
});
