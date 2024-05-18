const authorizarionButton = document.querySelector(".menu__item_signup");

authorizarionButton.addEventListener("click", async () => {
    if(await getCookie("initialization") === "false") {
        await init();
    } else {
        await logout();
    }
})

// Выход из аккаунта Metamask
let logout = async () => {
    if (window.ethereum) {
        await window.ethereum.request({
            "method": "wallet_revokePermissions",
            "params": [
                {
                    "eth_accounts": {}
                }
            ]
        });
        document.cookie = "initialization=false; secure"
        await deleteCookie("account");
        await deleteCookie("balance");
        return true
    } else {
        console.log("No account found.");
        return false
    }
}

// Вход в аккаунт Metamask
let init = async () => {
    if (window.ethereum) {
        // Входим в тестировочную систему
        let web3 = new Web3(window.ethereum || new Web3.providers.HttpProvider("https://eth-sepolia.g.alchemy.com/v2/sKjb3I0S9k-uMxAlbTrBBnkkTT1Ssvxh"));
        const accounts = await window.ethereum.request({method: "eth_requestAccounts"}).catch((err) => {
            if (err.code === 4001) {
                console.log("Please connect to MetaMask.");
            } else {
                console.error(err);
            }
        });
        document.cookie = "initialization=true; secure"
        document.cookie = "account=" + accounts[0] + "; secure";
        document.cookie = "balance=" + await web3.eth.getBalance(accounts[0]).then(count => {
            return (parseInt(count, 10) / 10 ** 18).toFixed(5);
        });
        return true
    } else {
        console.log("No account found.");
        return false
    }
}
