class AchievmentManager {
    async burn_achievement(token) {
        let my_token_transaction_dict = {
            'value': 0,
            'gas': 100000,
            'chainId': await web3.eth.getChainId().then(count => {
                return parseInt(count, 10);
            }),
            'from': await getCookie(account),
            'gasPrice': await web3.eth.getGasPrice().then(count => {
                return parseInt(count, 10);
            }),
            'nonce': await web3.eth.getTransactionCount(await getCookie(account), 'pending').then(count => {
                return parseInt(count, 10);
            }),
            'to': my_token_address
        }
        console.log("burn achievement on ", token);
        if (my_token_contract) {
            await my_token_contract.methods.burn(token).send(my_token_transaction_dict)
                .catch(error => {
                    console.log(error)
                })
                .then(result => {
                    console.log(result)
                })
        } else {
            console.log("Burn error.");
        }
    }

    // async make_private(token) {}

    async transfer_achievement(token_id, receive_address) {
        let my_token_transaction_dict = {
            'value': 0,
            'gas': 100000,
            'chainId': await web3.eth.getChainId().then(count => {
                return parseInt(count, 10);
            }),
            'from': await getCookie(account),
            'gasPrice': await web3.eth.getGasPrice().then(count => {
                return parseInt(count, 10);
            }),
            'nonce': await web3.eth.getTransactionCount(await getCookie(account), 'pending').then(count => {
                return parseInt(count, 10);
            }),
            'to': my_token_address
        }
        console.log("burn achievement ", token_id, " to ", receive_address);
        if (my_token_contract) {
            await my_token_contract.methods.transfer(token_id, receive_address).send(my_token_transaction_dict)
                .catch(error => {
                    console.log(error)
                })
                .then(result => {
                    console.log(result)
                })
        } else {
            console.log("Transfer error.");
        }
    }
}
