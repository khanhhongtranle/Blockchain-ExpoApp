const contract = require("truffle-contract");
const bookstore_artifact = require("./build/contracts/BookStore.json");
let BookStore = contract(bookstore_artifact);

module.exports = {
    start: function (callback) {
        BookStore.setProvider(self.web3.currentProvider);
        self.web3.eth.getAccounts((err, accoutns) => {
            if (err != null){
                console.log("There was an error fetching your accounts.");
                return;
            }
            if (accoutns.length === 0) {
                console.log("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
                return;
            }
            self.accounts = accoutns;
            self.account = self.accounts[2];

            callback(self.accounts);
        })
    }
}
