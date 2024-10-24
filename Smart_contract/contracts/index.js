const keyStore = new keyStores.BrowserLocalStorageKeyStore();
const near = await connect({
  networkId: "testnet",
  keyStore,
  nodeUrl: "https://rpc.testnet.near.org",
  walletUrl: "https://wallet.testnet.near.org",
  helperUrl: "https://helper.testnet.near.org",
  explorerUrl: "https://explorer.testnet.near.org",
});

const wallet = new WalletConnection(near);

if (!wallet.isSignedIn()) {
  wallet.requestSignIn("<your-account>.testnet");
}

const account = wallet.account();
const contract = new nearAPI.Contract(account, "<your-contract-account>.testnet", {
  viewMethods: ["get_message"],
  changeMethods: ["set_message"],
});

console.log(await contract.get_message());
await contract.set_message({ newMessage: "Nuevo mensaje desde JS!" });

init();