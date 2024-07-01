require("dotenv").config();

const SYMBOL = process.env.SYMBOL;

const WalletService = require('./WalletService')

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let myAddress = null;

function menu() {
  setTimeout(() => {
    console.clear();

    if (myAddress) {
      console.log(`You are logged as ${myAddress}`)
    } else {
      console.log("You aren't logged!")
    }

    console.log("1 = Create Wallet");
    console.log("2 = Recover Wallet");
    console.log("3 = Balance");
    console.log(`4 = Send ${SYMBOL}`);
    console.log("3 = Search Transaction");
  
    rl.question("Choose your option: ", (answer) => {
      switch(answer) {
        case "1": createWallet(); break;
        case "2": recoverWallet(); break;
        case "3": break;
        case "4": break;
        case "5": break;
        default: {
          console.log("Wrong option!")
          menu();
        }
      }
    })
  }, 1000)
}

function preMenu() {
  rl.question("Press any key to continue...", () => {
    menu()
  })
}

function createWallet () {
  const myWallet = WalletService.createWallet()
  myAddress = myWallet.address;

  console.log(`Your new wallet = ${myAddress}`)
  console.log(`PK = ${myWallet.privateKey}`)
  preMenu()
}

function recoverWallet () {
  console.clear();
  rl.question(`Whats is your private key or phrase mnemonic? `, (pkOrMnemonic) => {
    const myWallet = WalletService.recoverWallet(pkOrMnemonic);
    myAddress = myWallet.address;

    console.log(`Your recovered wallet = ${myAddress}`);
    preMenu();
  })
}

menu()