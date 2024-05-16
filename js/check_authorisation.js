async function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

async function checkAutho() {
    let menuSignUp = document.querySelector('.menu__item_signup');
    let menuWallet = document.querySelector('.menu__wallet');
    let walletAddress = menuWallet.querySelector('.wallet__address');
    let walletBalance = menuWallet.querySelector('.wallet__balance');
    if (getCookie("initialization") === "true") {
        menuWallet.style.display = 'flex';
        let address = getCookie("address");
        let balance = getCookie("balance");
        address = '0xkeognweoiniowejiofmweopgmfiogdfgfdgfdgdfgwengiwe';
        balance = 0.00001;
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

document.cookie = "initialization=true; secure";
document.cookie = "account=" + "0xadsioajfguierhgtioewrnjgifowearsegefhedfherhdsfzhdfsgjrthsrthsre" + "; secure";
document.cookie = "balance=" + "0.00001";
checkAutho();
