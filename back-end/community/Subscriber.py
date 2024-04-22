from web3 import Web3
# from ??? import USER_ADDRESS
from ..contracts.Contracts import subscribers_contract
from ..exceptions.AlreadySubscribeExeption import AlreadySubscribeExeption
from ..exceptions.AlreadyUnsubscribeExeption import AlreadyUnsubscribeExeption
from ..exceptions.SubscribeToYourself import SubscribeToYourself
from ..exceptions.UnsubscribeFromYourself import UnsubscribeFromYourself


class Subscriber():
    def subscribe_on(self, account: str):
        if (account == USER_ADDRESS):
            raise SubscribeToYourself
        transaction = subscribers_contract.functions.subscribeOn(account).transact()
        receipt = Web3.eth.wait_for_transaction_receipt(transaction)
        if (receipt == 0):
            raise AlreadySubscribeExeption

    def unsubscribe_from(self, account: str):
        if (account == USER_ADDRESS):
            raise UnsubscribeFromYourself
        transaction = subscribers_contract.functions.unsubscribeFrom(account).transact()
        receipt = Web3.eth.wait_for_transaction_receipt(transaction)
        if (receipt == 0):
            raise AlreadyUnsubscribeExeption

    def get_subscription_count(self, account: str) -> int:
        return subscribers_contract.functions.getSubscribersAmount(account).call()
