require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const FORK_FUJI = false;
const FORK_MAINNET = false;
let forkingData = undefined;

if (FORK_MAINNET) {
  forkingData = {
    url: "https://api.avax.network/ext/bc/C/rpcc",
  };
}
if (FORK_FUJI) {
  forkingData = {
    url: "https://api.avax-test.network/ext/bc/C/rpc",
  };
}

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    hardhat: {
      gasPrice: 225000000000,
      chainId: !forkingData ? 43112 : undefined, 
      forking: forkingData,
    },

    // Uncomment for test with fuji
    // fuji: {
    //   url: "https://api.avax-test.network/ext/bc/C/rpc",
    //   gasPrice: 225000000000,
    //   chainId: 43113,
    //   accounts: ['Private Key'], 
    // },
    // mainnet: {
    //   url: "https://api.avax.network/ext/bc/C/rpc",
    //   gasPrice: 225000000000,
    //   chainId: 43114,
    //   accounts: ['Private Key'],
    // },
    localhost: {
      url: "http://localhost:8545", // Adjust port number if needed
    },
  },
  etherscan: {
    apiKey: 'API KEY', 
  },
};
