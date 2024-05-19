class AchievementBuilder extends BaseBuilder {
    constructor() {
        super();
        this.name = "";
        this.description = "";
        this.baseURL = "";
        this.recipient = "";
        this.isPrivate = false;
    }

    with_name(input_name) {
        this.name = input_name;
        return this;
    }

    with_description(input_description) {
        this.description = input_description;
        return this;
    }

    with_URL(input_URL) {
        this.baseURL = input_URL;
        return this;
    }

    with_recipient(address) {
        this.recipient = address;
        return this;
    }

    make_private() {
        this.isPrivate = true;
        return this;
    }

    make_public() {
        this.isPrivate = false;
        return this;
    }

    async build() {
        if (this.name === "") {
            throw 'Name was not given';
        }
        if (this.baseURL === "") {
            throw 'URL to the picture was not given';
        }
        if(this.recipient === "") {
            throw 'Recipient was not given';
        }
        let achievement_dict_transaction = {
            'value': 0,
            'gas': 3500000,
            'chainId': await web3.eth.getChainId().then(count => parseInt(count, 10)),
            'from': this.recipient,
            'gasPrice': await web3.eth.getGasPrice().then(count => parseInt(count, 10)),
            'nonce': await web3.eth.getTransactionCount(await getCookie('account'), 'pending').then(count => parseInt(count, 10)),
            'to': my_token_address,
        }
        if (my_token_contract) {
            await my_token_contract.methods.mint(this.name, this.description, this.baseURL, this.isPrivate, this.recipient).send(achievement_dict_transaction)
                .catch(error => {
                    console.log(error)
                })
                .then(result => {
                    console.log(result)
                })
        } else {
            console.log("No account found.");
        }
    }
}
