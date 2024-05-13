import json
from web3 import Web3

account_address = "0x57e3E07dd8c130949A6a02742Ee43003314b3b3c"  # my address for tests

with open('contracts/abies/Usernames.json', 'r') as json_file:
    abi = json.load(json_file)['abi']
    username_contract_address = Web3.to_checksum_address('0x8E46Bad5b883266989D0699f96d0B5624f721f9f')
    alchemy_url = "https://eth-sepolia.g.alchemy.com/v2/sKjb3I0S9k-uMxAlbTrBBnkkTT1Ssvxh"
    w3 = Web3(Web3.HTTPProvider(alchemy_url))

    username_contract = w3.eth.contract(address=username_contract_address, abi=abi)

__all__ = ["username_contract"]