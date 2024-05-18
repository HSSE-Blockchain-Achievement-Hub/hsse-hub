async function checkAutho() {
    let menuSignUp = document.querySelector('.menu__item_signup');
    let menuWallet = document.querySelector('.menu__wallet');
    let walletAddress = menuWallet.querySelector('.wallet__address');
    let walletBalance = menuWallet.querySelector('.wallet__balance');
    if (await getCookie("initialization") === "true") {
        menuWallet.style.display = 'flex';
        let address = await getCookie("account");
        let balance = await getCookie("balance");
        walletAddress.innerHTML = address.substr(0, 5) + '...' + address.substr(39, 3);
        walletBalance.innerHTML = balance + ' ETH';
        menuSignUp.classList.add('menu__item_able');
        menuSignUp.innerHTML = 'Выйти';
    } else {
        menuWallet.style.display = 'none';
        walletAddress.innerHTML = '';
        walletBalance.innerHTML = '';

        menuSignUp.classList.remove('menu__item_able');
        menuSignUp.innerHTML = 'Авторизация';
    }
}

checkAutho();
