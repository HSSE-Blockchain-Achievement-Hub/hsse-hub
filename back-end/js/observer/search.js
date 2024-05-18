//Заглушка для бэкенда
async function addAllCommonDivs(key_or_nick) {
}
let searching_form = document.querySelector('.search');

document.addEventListener('submit', async function(evt) {
    evt.preventDefault();
})

document.addEventListener( 'input', async function() {
    await addAllCommonDivs(searching_form.elements.name.value);
});
