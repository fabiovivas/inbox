const contract = require('../deploy/contractSource.js');
const solc = require('solc');

const output = JSON.parse(solc.compile(JSON.stringify(contract)));
module.exports = output.contracts['inbox.sol'].Inbox;