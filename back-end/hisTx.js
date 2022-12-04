// Setup: npm install alchemy-sdk
import { Alchemy, Network } from "alchemy-sdk";

const settings = {
  apiKey: "BJYX90Ktxksw0OELSV2cnemZfAH0zQMB",
  network: Network.ETH_GOERLI,
};
const alchemy = new Alchemy(settings);

const data = async () => {
//   const data1 = await alchemy.core.getAssetTransfers({
//     fromBlock: "0x0",
//     fromAddress: "0xD4c1B0bdfC460A7CFE46dBc1B388074D8DcBd0FD",
//     category: ["external", "internal", "erc20", "erc721", "erc1155"],
//   });
//   return data1
const data1 =await alchemy.core.getTransactionCount("0x7521239ff949775759a4a613169fd3C9AE237c75");
const transaction = await provider.send("trace_transaction", [
  "0x7521239ff949775759a4a613169fd3C9AE237c75",
]);

return transaction;
};

  
  
export default data;
