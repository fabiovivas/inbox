const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { abi, evm } = require('./compile')

const provider = new HDWalletProvider(
    'save frame filter isolate yard output people rude absurd table shy bomb',
    'https://rinkeby.infura.io/v3/b1c6c2b959fc4a8f9646681d8976963f'
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