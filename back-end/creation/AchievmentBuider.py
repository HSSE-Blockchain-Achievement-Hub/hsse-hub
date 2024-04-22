from BaseBuilder import BaseBuilder
# from ??? import USER_ADDRESS
from ..contracts.Contracts import my_token_contract


class AchievmentBuilder(BaseBuilder):
    def __init__(self):
        self.name: str = ""
        self.description: str = ""
        self.baseURL: str = ""
        self.isPrivate: bool = False

    def with_name(self, input_name: int):
        self.name = input_name
        return self

    def with_description(self, input_description: int):
        self.description = input_description
        return self

    def with_picture(self, input_url: int):
        self.baseURL = input_url
        return self

    def make_private(self):
        self.isPrivate = True
        return self

    def make_open(self):
        self.isPrivate = False
        return self

    def build(self):
        if self.name == "":
            raise Exception('Name was not given')

        if self.description == "":
            raise Exception('Description was not given')

        if self.baseURL == "":
            raise Exception('URL to the picture was not given')

        my_token_contract.functions.mint(self.name, self.description, self.baseURL, self.isPrivate, USER_ADDRESS).transact()
