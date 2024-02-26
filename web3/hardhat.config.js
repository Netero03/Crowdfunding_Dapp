require("@matterlabs/hardhat-zksync-solc");
require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, './.env')});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    localhost: {
      url: "http://localhost:5173/",
    },
    sepolia : {
      url: `${process.env.SEPOLIA_RPC}/${process.env.PROJECT_ID}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    },
    hardhat: {
    }
  },
  etherscan: {
    apiKey: "76WXAM398IGSEF5MSRHZUH1Q6R2GRE5M7J",
  },
};
