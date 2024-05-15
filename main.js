const ethereumButton = document.querySelector(".enableEthereumButton");
const showAccount = document.querySelector(".showAccount");
const prevNickname = document.querySelector(".prevNickname");
const presentNickname = document.querySelector(".presentNickname");
let initialization = false,
    ether,
    account,
    web3,
    contract,
    usernames_dict_transaction;


ethereumButton.addEventListener('click', async () => {
    await init()
    await getInfo()
    await web3.eth.getGasPrice().then(count => {
        return parseInt(count, 10);
    }).then(console.log);
    await web3.eth.getTransactionCount(account, 'pending').then(count => {
        return parseInt(count, 10);
    }).then(console.log);
    await web3.eth.getChainId().then(count => {
        return parseInt(count, 10);
    }).then(console.log);
    // await setNickname("TEST_WITHOUT_DATA")
})

let init = async () => {
    if (window.ethereum) {
        ether = window.ethereum;
        // web3 = new Web3(ether || "ws://localhost:8545");
        web3 = new Web3(window.ethereum || new Web3.providers.HttpProvider("https://eth-sepolia.g.alchemy.com/v2/sKjb3I0S9k-uMxAlbTrBBnkkTT1Ssvxh"));
        const accounts = await ether.request({method: "eth_requestAccounts"}).catch((err) => {
            if (err.code === 4001) {
                console.log("Please connect to MetaMask.");
            } else {
                console.error(err);
            }
        });
        account = accounts[0];
        initialization = true;
        showAccount.innerHTML = account;
        return true
    } else {
        console.log("No account found.");
        return false
    }
}

let getInfo = async () => {
    contract = new web3.eth.Contract(usernames_json['abi'], usernames_address)
    prevNickname.innerHTML = await contract.methods.getUsername(account).call();
    console.log(await contract.methods.getUsername(account).call())
}

let setNickname = async (nickname) => {
    console.log("set Nickname", nickname);
    usernames_dict_transaction = {
        'value': 0,
        'gas': 100000,
        'chainId': await web3.eth.getChainId().then(count => {
            return parseInt(count, 10);
        }),
        'from': account,
        'gasPrice': await web3.eth.getGasPrice().then(count => {
            return parseInt(count, 10);
        }),
        'nonce': await web3.eth.getTransactionCount(account, 'pending').then(count => {
            return parseInt(count, 10);
        }),
        'to': usernames_address
    }
    if (contract) {
        await contract.methods.setUsername(nickname).send(usernames_dict_transaction)
            .catch(error => {
                console.log(error)
            })
            .then(result => {
                console.log(result)
            })
        presentNickname.innerHTML = await contract.methods.getUsername(account).call();
    } else {
        console.log("No account found.");
    }
}