class Subscriber {
    async subscribe_on(account_) {
        if (account === account_)
            throw 'Subscribe to yourself'
        let subscribe_dict_transaction = {
            'value': 0,
            'gas': 100000,
            'chainId': await web3.eth.getChainId().then(count => parseInt(count, 10)),
            'to': subscribers_address,
            'from': account,
            'gas_price': await web3.eth.getGasPrice(account).then(count => parseInt(count, 10)),
            'nonce': await web3.eth.getTransactionCount(account, 'pending').then(count => parseInt(count, 10)),
        }
        await subscribers_contract.methods.subscribeOn(account_).send(subscribe_dict_transaction)
    }

    async unsubscribe_from(account_) {
        if (account === account_)
            throw 'Unsubscribe from yourself'
        let unsubscribe_dict_transaction = {
            'value': 0,
            'gas': 100000,
            'chainId': await web3.eth.getChainId().then(count => parseInt(count, 10)),
            'to': subscribers_address,
            'from': account,
            'gas_price': await web3.eth.getGasPrice(account).then(count => parseInt(count, 10)),
            'nonce': await web3.eth.getTransactionCount(account, 'pending').then(count => parseInt(count, 10)),
        }
        await subscribers_contract.methods.unsubscribeFrom(account_).send(unsubscribe_dict_transaction)
    }
    get_subscription_count(account_) {
        return subscribers_contract.methods.getSubscribersAmount(account_).call()
    }
}
