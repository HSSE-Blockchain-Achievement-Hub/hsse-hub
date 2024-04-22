from typing import List
from ..contracts.Contracts import my_token_contract


class Observer():
    def get_all(self, account: str) -> List[Achievement]:
        return my_token_contract.functions.getAllAchievements(account).call()

    def get_open(self, account: str) -> List[Achievement]:
        return my_token_contract.functions.getOpenAchievements(account).call()
