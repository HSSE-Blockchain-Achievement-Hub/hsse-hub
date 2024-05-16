const authorizarionButton = document.querySelector(".authorization__button");
authorizarionButton.addEventListener("click", async () => {
    await init();
})

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

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
        document.cookie = "initialization=true; secure";
        document.cookie = "account=" + accounts[0] + "; secure";
        document.cookie = "balance=" + await web3.eth.getBalance(accounts[0]).then(count => {
            return (parseInt(count, 10) / 10 ** 18).toFixed(5);
        });
        alert(document.cookie);
        if (getCookie("initialization") === "true") {
            window.location.href = 'main_page.html';
        }
        return true
    } else {
        console.log("No account found.");
        return false
    }
}
