from contracts.Contracts import username_contract
from web3 import Web3

private_key = ""


class Username_class():
    def __init__(self):
        self.account_address = "0x57e3E07dd8c130949A6a02742Ee43003314b3b3c"
        self.alchemy_url = "https://eth-sepolia.g.alchemy.com/v2/sKjb3I0S9k-uMxAlbTrBBnkkTT1Ssvxh"
        self.w3 = Web3(Web3.HTTPProvider(self.alchemy_url))
        self.dict_transaction = {
            'chainId': self.w3.eth.chain_id,
            'from': self.account_address,
            'gasPrice': self.w3.eth.gas_price,
            'nonce': self.w3.eth.get_transaction_count(Web3.to_checksum_address(self.account_address)),
        }

    def has_username(self, *args) -> bool:
        if len(args) == 0:
            return username_contract.functions.hasUsername().call()
        elif len(args) == 1 and isinstance(args[0], str):
            return username_contract.functions.hasUsername(args[0]).call()

    def get_owner(self, username: str) -> str:
        return username_contract.functions.getOwner(username).call()

    def get_username(self, *args) -> str:
        if len(args) == 1 and isinstance(args[0], str):
            return username_contract.functions.getUsername(args[0]).call()
        elif len(args) == 2 and isinstance(args[1], str) and isinstance(args[0], str):
            return username_contract.functions.getUsername(args[1]).call()

    def set_username(self, name: str):
        print(username_contract.functions.setUsername(name).build_transaction(self.dict_transaction))
        # signed_txn = self.w3.eth.account.sign_transaction(transaction, private_key)
        # txn_hash = self.w3.eth.send_raw_transaction(signed_txn.rawTransaction)
        # print(txn_hash.hex())
