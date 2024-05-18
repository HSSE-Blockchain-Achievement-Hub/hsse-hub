async function subscribe(button) {
    let img = button.childNodes[0];
    if (img.alt === 'Отписаться') {
        img.src = 'img/follow.svg';
        img.alt = 'Подписаться';
    } else {
        img.src = 'img/unfollow.svg';
        img.alt = 'Отписаться';
    }

    //Заглушка для бэкенда
    let id = button.parentNode.id;
}

let subscribeButtons = document.querySelectorAll('.card__button');
subscribeButtons.forEach((elem) => {
    elem.addEventListener('click', async function () {
        await subscribe(elem);
    })
});