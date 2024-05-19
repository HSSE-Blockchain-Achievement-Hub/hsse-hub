async function delete_ach(delete_link) {
    let card_to_delete = delete_link.closest('.modal');
    card_to_delete.parentNode.removeChild(card_to_delete);
    let ach_to_delete = document.getElementById('#' + card_to_delete.id.substring(11, card_to_delete.id.length));
    ach_to_delete.parentNode.removeChild(ach_to_delete);
}

window.addEventListener('click', async function () {
    let deleteLinks = document.querySelectorAll('.delete');
    deleteLinks.forEach(async (elem) => {
        elem.addEventListener('click', async function (evt) {
            evt.preventDefault();
            await delete_ach(elem);
        })
    });
})
