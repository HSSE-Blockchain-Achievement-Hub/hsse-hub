const ethereumButton = document.querySelector(".authorization__button");
const showAccount = document.querySelector(".authorization__name");

ethereumButton.addEventListener("click", () => {
    getAccount();
});

// While awaiting the call to eth_requestAccounts, you should disable any buttons the user can
// select to initiate the request. MetaMask rejects any additional requests while the first is still
// pending.
async function getAccount() {
     const accounts = await window.ethereum // Or window.ethereum if you don't support EIP-6963.
        .request({ method: "eth_requestAccounts" })
            .catch((err) => {
                 if (err.code === 4001) {
                     // EIP-1193 userRejectedRequest error.
                     // If this happens, the user rejected the connection request.
                     console.log("Please connect to MetaMask.");
                } else {
                     console.error(err);
                 }
            });
     const account = accounts[0];
     showAccount.innerHTML = account;
}

let currentAccount = null;
provider // Or window.ethereum if you don't support EIP-6963.
  .request({ method: "eth_accounts" })
  .then(handleAccountsChanged)
  .catch((err) => {
    // Some unexpected error.
    // For backwards compatibility reasons, if no accounts are available, eth_accounts returns an
    // empty array.
    console.error(err);
  });

// Note that this event is emitted on page load. If the array of accounts is non-empty, you're
// already connected.
provider // Or window.ethereum if you don't support EIP-6963.
  .on("accountsChanged", handleAccountsChanged);

// eth_accounts always returns an array.
function handleAccountsChanged(accounts) {
  if (accounts.length === 0) {
    // MetaMask is locked or the user has not connected any accounts.
    console.log("Please connect to MetaMask.");
  } else if (accounts[0] !== currentAccount) {
    // Reload your interface with accounts[0].
    currentAccount = accounts[0];
    // Update the account displayed (see the HTML for the connect button)
    showAccount.innerHTML = currentAccount;
  }
}
