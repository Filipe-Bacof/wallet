const { ethers } = require("ethers");

const provider = new ethers.JsonRpcProvider(process.env.BLOCKCHAIN_NODE);

let myWallet = null;

function createWallet() {
  myWallet = ethers.Wallet.createRandom(provider);
  return myWallet;
}

function recoverWallet (pkOrMnemonic) {
  myWallet = pkOrMnemonic.indexOk(" ") !== -1
  ? ethers.Wallet.fromPhrase(pkOrMnemonic, provider)
  : new ethers.Wallet(pkOrMnemonic, provider);

  return myWallet
}

module.exports = {
  createWallet, recoverWallet
}