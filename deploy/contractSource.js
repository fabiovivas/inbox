const path = require('path');
const fs = require('fs');

const inboxPath = path.resolve(__dirname, '../contracts', 'Inbox.sol');
const input = fs.readFileSync(inboxPath, 'utf8');

module.exports = {
    language: 'Solidity',
    sources: {
        'inbox.sol': {
            content: input
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*']
            }
        }
    }
}