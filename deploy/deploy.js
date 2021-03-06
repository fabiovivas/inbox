const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { abi, evm } = require('./compile')

const provider = new HDWalletProvider(
    'x x x x x x x x x x x x',
    'https://rinkeby.infura.io/v3/xxxxxxxxxxxxxxxxxx'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('account used to deploy', accounts[0]);

    let inbox = await new web3.eth.Contract(abi)
        .deploy({ data: `0x${evm.bytecode.object}`, arguments: ['Hi there!'] })
        .send({ from: accounts[0] });

    console.log('hash', inbox.options.address)
}
deploy();