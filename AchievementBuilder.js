class AchievementBuilder extends BaseBuilder {
fill_name(input_name) {
    this.name = input_name;
    return this;
}

fill_description(input_description) {
    this.description = input_description;
    return this;
}

fill_URL(input_URL) {
    this.baseURL = input_URL;
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
  if (!this.name) {
      throw 'Name was not given';
  }
  if (!this.description) {
      throw 'Description was not given';
  }
  if (!this.baseURL) {
      throw 'URL to the picture was not given';
  }
    let achievement_dict_transaction = {
        'value': 0,
        'gas': 100000000,
        'chainId': await web3.eth.getChainId().then(count => parseInt(count, 10)),
        'from': account,
        'gas_price': await web3.eth.getGasPrice().then(count => parseInt(count, 10)),
        'nonce': await web3.eth.getTransactionCount(account, 'pending').then(count => parseInt(count, 10)),
        'to': my_token_address,
    }
    if (my_token_contract) {
        await my_token_contract.methods.mint(this.name, this.description, this.baseURL, this.isPrivate, account).send(achievement_dict_transaction)
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
