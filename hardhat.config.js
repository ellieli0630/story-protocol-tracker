require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: process.env.STORY_RPC_URL,
      accounts: [process.env.STORY_WALLET_PRIVATE_KEY]
    }
  }
};
