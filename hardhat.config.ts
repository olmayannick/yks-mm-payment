import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

require('dotenv').config()


//const ALCHEMY_API_KEY = "wDJhjJCqm7Etp3RZHSmqv36mdnAO4r8b";
//const GOERLI_PRIVATE_KEY = "18a34bc6653180387f7d4bda1d0d6efa391828ac02d67f6340ce78a35bfc4803";

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY
const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY

module.exports = {
  solidity: "0.8.9",
  etherscan: {
    apiKey: "6X2ZY8NJHNRRFUE5ZJ3YZ79T17B9RDYD1U",
  },
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
};