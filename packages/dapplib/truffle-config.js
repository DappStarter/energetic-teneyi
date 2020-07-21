require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace industry frame solution firm cruise million purse grace industry furnace squeeze'; 
let testAccounts = [
"0xd736c67c679f8598d143858b1cc93157978ef54be07c958a66e054221d8b2799",
"0x4f99958d82ea20cd71a7a25db8de3612eccf9fdb4ae80fc104e5df2562356c8a",
"0xb039ede6737c302a1eeb245248a0506026a366ee56b6a14bae6709d9693ee828",
"0x2d86e5d27d31df53182b713a4c1453d9373f99451c26871aa6385fe98d7dd019",
"0x1c33e751a871d7cf7c0528b9c621ed55e730b7a78f432790682ae0cea747c70b",
"0x10e9996092f90cddf12d91ddbc9002033e0baefd48e7c285a50afc8e712be493",
"0x29bdfd3dca122d9890e21b1cbd7dffce9ebb9df48fe027050821a46fe7752976",
"0xf74d710dd87fe3996d325d15ddeac83aaa44f9776a769958900500e30bc3b954",
"0xca65483cfb653c93417e41df9fac4ea6fd9e239301cd16e2c7b746ce7a955350",
"0xae9dd2799116f306953033f9ee123517a9070616d2146487916a3f950ce5fcf7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
