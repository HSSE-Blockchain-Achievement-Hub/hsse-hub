class Subscriber {
    async subscribe_on(account) {
        if (await getCookie('account') === account)
            throw 'Subscribe to yourself'
        let subscribe_dict_transaction = {
            'value': 0,
            'gas': 100000,
            'chainId': await web3.eth.getChainId().then(count => parseInt(count, 10)),
            'to': subscribers_address,
            'from': await getCookie('account'),
            'gas_price': await web3.eth.getGasPrice().then(count => parseInt(count, 10)),
            'nonce': await web3.eth.getTransactionCount(await getCookie('account'), 'pending').then(count => parseInt(count, 10)),
        }
        await subscribers_contract.methods.subscribeOn(account).send(subscribe_dict_transaction)
    }

    async unsubscribe_from(account) {
        if (await getCookie('account') === account_)
            throw 'Unsubscribe from yourself'
        let unsubscribe_dict_transaction = {
            'value': 0,
            'gas': 100000,
            'chainId': await web3.eth.getChainId().then(count => parseInt(count, 10)),
            'to': subscribers_address,
            'from': await getCookie('account'),
            'gas_price': await web3.eth.getGasPrice().then(count => parseInt(count, 10)),
            'nonce': await web3.eth.getTransactionCount(await getCookie('account'), 'pending').then(count => parseInt(count, 10)),
        }
        await subscribers_contract.methods.unsubscribeFrom(account).send(unsubscribe_dict_transaction)
    }
    get_subscription_count(account) {
        return subscribers_contract.methods.getSubscribersAmount(account).call()
    }
}
