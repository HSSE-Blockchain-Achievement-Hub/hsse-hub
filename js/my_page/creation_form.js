const addButton = document.querySelector('.input__btn_action_add');
const creation_form = document.forms.create;

// Заглушка для бэкенда
function addCreation(nameValue, keyValue, refValue, descrValue, checkedValue) {
    let subsNumber = document.querySelector('.header__information__top_value');
    subsNumber.innerHTML = +subsNumber.textContent + 1;
}

function setSubmitButtonState_creation(isFormValid) {
    if (isFormValid) {
        addButton.removeAttribute('disabled');
        addButton.classList.remove('input__btn_disabled');
    } else {
        addButton.setAttribute('disabled', true);
        addButton.classList.add('input__btn_disabled');
    }
}

creation_form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    const name = creation_form.elements.name;
    const key = creation_form.elements.key;
    const ref = creation_form.elements.ref;
    const descr = creation_form.elements.descr;
    const checked = creation_form.elements.checked;

    addCreation(name.value, key.value, ref.value, descr.value, checked.value);
    setSubmitButtonState_creation(false);
    name.value = '';
    key.value = '';
    ref.value = '';
    descr.value = '';
    checked.checked = false;
});

creation_form.addEventListener('input', function (evt) {
    const name = creation_form.elements.name;
    const key = creation_form.elements.key;
    const ref = creation_form.elements.ref;

    const isValid = name.value.length > 0 && ((key.value[0] === '@' && key.value.length > 1) || key.value.length === 42) && key.value.length > 0 && ref.value.length > 0;
    setSubmitButtonState_creation(isValid);
});
