from web3 import Web3
from ..contracts.Contracts import my_token_contract


class AchivementManager():
    def burn_achievement(self, token: int):
        my_token_contract.functions.burn(token).transfer()

    def hide_achievement(self, token: int):
        my_token_contract.functions.hide(token).transfer()

    def transfer_achievement(self, token: int, address: str):
        transaction = my_token_contract.functions.transfer(token, address).transfer()
        receipt = Web3.eth.wait_for_transaction_receipt(transaction)
        if (receipt == 0):
            raise "Error while transfering"
