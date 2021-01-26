require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict roast fortune street name release night snake idea clip slot gas'; 
let testAccounts = [
"0xed2fb7918bf45da0e7055011629cf706718250c3a57598a0e4d848e036318679",
"0xd4b22098d5af5505de4810359db0e3ba6073cc28cd67a6bdf9935c451ec972f2",
"0x73bd10bfe552fc7d39e259e5d02701f3ca1c71fa46607fabe9a18b9ad823bcf0",
"0xddad313274a84eca754e961a0bf8da40f62f6550421ffacce114ca82a4eebdad",
"0x760eaee32774330dbda7f5d026795b1465233f748150158b53c658d2bafefe73",
"0x5e68948582a4180eb6c83ec7a3b6a26761ec26650e3e257d4e0080ef486ae2d2",
"0x28971ea59b59549bee386dee7a8a6bdffcfd303991e4e108a9ebfb448c2b0a09",
"0x4df511f021d5e8e1e7a55a29c04bb20748268130166d53d6c0bb6ea9f5082868",
"0xdcc837be4f374ee5005a079e48b6fce6adf5a858837c5c48c26b2e379cedff10",
"0x13634082b4c9e852c211f2b2094196117ee19f1b8523dbdad7f34a202a64ac70"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
