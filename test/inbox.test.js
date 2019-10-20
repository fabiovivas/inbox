const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const { abi, evm } = require('../deploy/compile');

const provider = ganache.provider();
const web3 = new Web3(provider);

let accounts;
let inbox;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();

    inbox = await new web3.eth.Contract(abi)
        .deploy({ data: evm.bytecode.object, arguments: ['Hi there!'] })
        .send({ from: accounts[0], gas: 1000000 });

    //inbox.setProvider(provider);
})

describe('Inbox', () => {
    it('deploys a contract', () => {
        console.log(inbox);
        assert.ok(inbox.options.address)
    });
    it('has a default message', async () => {
        const message = await inbox.methods.message().call();
        assert.equal(message, 'Hi there!');
    });
    it('modify the default message', async () => {
        await inbox.methods.setMessage('Hello World').send({ from: accounts[0], gas: 1000000 });
        const message = await inbox.methods.message().call();
        assert.equal(message, 'Hello World');
    })
})