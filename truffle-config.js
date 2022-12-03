require('babel-register');
require('babel-polyfill');

module.exports = {
  networks: {
    development: {
      host: "172.28.112.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
  },
  contracts_directory: './src/contratos/',
  contracts_build_directory: './src/json-contratos/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
