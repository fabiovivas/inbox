const contract = require('../deploy/contractSource.js');
const solc = require('solc');

const output = JSON.parse(solc.compile(JSON.stringify(contract)));
//console.log(JSON.parse(JSON.stringify(output.contracts['inbox.sol'].Inbox)));
// console.log(output.contracts['inbox.sol'].Inbox.abi)
// console.log(output.contracts['inbox.sol'].Inbox.evm.bytecode.object)
module.exports = output.contracts['inbox.sol'].Inbox;

//abi
//evm.bytecode.object