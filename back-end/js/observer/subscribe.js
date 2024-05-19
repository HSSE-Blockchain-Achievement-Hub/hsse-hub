async function subscribe(button) {
    let img = button.childNodes[0];

    let subscriber = new Subscriber();

    if (img.alt === 'Отписаться') {
        await subscriber.unsubscribe_from("0x85C3f74d114f0C44889f660371a53B04e6Ce27eB");
        img.src = 'img/follow.svg';
        img.alt = 'Подписаться';
    } else {
        await subscriber.subscribe_on("0x85C3f74d114f0C44889f660371a53B04e6Ce27eB");
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