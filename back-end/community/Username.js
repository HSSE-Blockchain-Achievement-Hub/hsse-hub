class Username {
    async has_username(...args) {
        if (args.length === 0) {
            return await usernames_contract.methods.hasUsername(await getCookie("account")).call();
        } else if (args.length === 1) {
            return await usernames_contract.methods.hasUsername(args[0]).call();
        }
        throw new Error("Incorrectly overloaded function");
    }

    async get_username(...args) {
        if (args.length === 0) {
            return await usernames_contract.methods.getUsername(await getCookie("account")).call();
        } else if (args.length === 1) {
            return await usernames_contract.methods.getUsername(args[0]).call();
        }
        throw new Error("Incorrectly overloaded function");
    }

    async get_owner(username) {
        return usernames_contract.methods.getOwner(username).call();
    }

    async set_username(username) {
        console.log("set username", username);
        let usernames_dict_transaction = {
            'value': 0,
            'gas': 100000,
            'chainId': await web3.eth.getChainId().then(count => {
                return parseInt(count, 10);
            }),
            'from': await getCookie("account"),
            'gasPrice': await web3.eth.getGasPrice().then(count => {
                return parseInt(count, 10);
            }),
            'nonce': await web3.eth.getTransactionCount(await getCookie("account"), 'pending').then(count => {
                return parseInt(count, 10);
            }),
            'to': usernames_address
        }
        if (usernames_contract) {
            await usernames_contract.methods.setUsername(username).send(usernames_dict_transaction)
                .catch(error => {
                    console.log(error)
                })
                .then(result => {
                    console.log(result)
                })
        } else {
            console.log("Set error.");
        }
    }

}