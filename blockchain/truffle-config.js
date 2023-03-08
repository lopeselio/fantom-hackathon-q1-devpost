require('dotenv').config()
const HDWalletProvider = require('@truffle/hdwallet-provider');

// console.log(process.env.PRIVATE_KEY);

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard OEC port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    opera_testnet: {
      url: "https://rpc.ankr.com/fantom_testnet",
      provider: function() {
        return new HDWalletProvider(process.env.PRIVATE_KEY, "https://rpc.ankr.com/fantom_testnet");
      },
      network_id: 4002
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
        version: '0.8.0+commit.c7dfd78e',
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/'
}