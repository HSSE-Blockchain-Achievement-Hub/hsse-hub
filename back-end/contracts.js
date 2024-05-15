const web3 = new Web3(window.ethereum || new Web3.providers.HttpProvider("https://eth-sepolia.g.alchemy.com/v2/sKjb3I0S9k-uMxAlbTrBBnkkTT1Ssvxh"));

const usernames_contract = new web3.eth.Contract(usernames_json['abi'], usernames_address);
const unique_users_contract = new web3.eth.Contract(unique_users_json['abi'], unique_users_address);
const subscribers_contract = new web3.eth.Contract(super_user_json['abi'], subscribers_address);
const super_users_contract = new web3.eth.Contract(subscribers_json['abi'], super_users_address);
const my_token_contract = new web3.eth.Contract(my_token_json['abi'], my_token_address);