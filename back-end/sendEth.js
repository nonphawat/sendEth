
const { Network,Alchemy } = require('alchemy-sdk');
const settings = {
    apiKey: "BJYX90Ktxksw0OELSV2cnemZfAH0zQMB",
    network: Network.ETH_GOERLI,
};

const alchemy = new Alchemy(settings);  
  
// // Get the latest block
// const latestBlock = alchemy.core.getBlockNumber();
    

const ethers = require('ethers')

 


export default async function main(op) {
    let say="OKKKK";
    console.log(op)
    
    const API_URL= process.env.API_URL; //API_URL = "https://eth-goerli.g.alchemy.com/v2/BJYX90Ktxksw0OELSV2cnemZfAH0zQMB"
    const PRIVATE_KEY= process.env.PRIVATE_KEY;
    
    const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
    const web3 = createAlchemyWeb3(API_URL);
    const myAddress = '0xbEEc0623be5516eDd3591d3E0586eC20632fD2DB' //TODO: replace this address with your own public address

    const nonce = await web3.eth.getTransactionCount(myAddress, 'latest'); // nonce starts counting from 0

    const transaction = {
     'to': op, // faucet address to return eth "0x303f170Bd2062392cA30FF5E36BCF3A53a668a58"
     'value': ethers.utils.parseEther("0.005"), 
     'gas': 30000,
     'nonce': nonce,
     // optional data field to send message or execute smart contract
    };

    const signedTx = await web3.eth.accounts.signTransaction(transaction, PRIVATE_KEY);
    // console.log(signedTx);
    web3.eth.sendSignedTransaction(signedTx.rawTransaction, function(error, hash) {
    if (!error) {
      //  console.log("🎉 The hash of your transaction is: ", hash, "\n Check Alchemy's Mempool to view the status of your transaction!");
       console.log("ok");
       
      } else {
        
      
      say="Something went wrong "+error
      console.log("no");
      
    }
    
   });
   
   
}
