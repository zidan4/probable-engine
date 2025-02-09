// Import Web3.js
const Web3 = require('web3');

// Connect to an Ethereum node (Infura, Alchemy, or local node)
const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');

// Example Ethereum address
const address = '0xYourEthereumAddressHere';

// Function to get account balance
async function getBalance() {
    const balance = await web3.eth.getBalance(address);
    console.log(`Balance: ${web3.utils.fromWei(balance, 'ether')} ETH`);
}

// Example Smart Contract interaction
const contractABI = [ /* ABI of the contract */ ];
const contractAddress = '0xYourSmartContractAddressHere';
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Function to call a contract method
async function callContractMethod() {
    const result = await contract.methods.yourMethodName().call();
    console.log('Contract Method Result:', result);
}

// Execute functions
getBalance();
// callContractMethod(); // Uncomment if needed

