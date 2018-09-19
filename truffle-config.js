const HDWalletProvider = require(truffle-hdwallet-provider);
const mnemonic = 'cross idea zebra diet easily panther wing silk horse increase clerk upper';

module.exports = {
  networks: {
    development: {      
      host: 'localhost',
      port: 7545,
      network_id: '*',
      gas: 5000000
    },
    rinkeby:{
      provider: () => new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/v3/4616cba3fdf74ab4bc0f8ace056aeb45'),
      network_id: 4
    }
  }
}