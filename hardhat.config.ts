import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import '@typechain/hardhat'
import "solidity-coverage"

import "./tasks/accounts";
import "./tasks/balance";
import "./tasks/block-number";


module.exports = {
  solidity: "0.7.6",
  networks: {
    hardhat: {
      forking: {
        url: "https://opt-mainnet.g.alchemy.com/v2/4iPSn5hKKNYRUYWzxqskuLD9MR093pkg",
        blockNumber: 12975788
      }
    }
  },
  mocha: {
    timeout: 200000
  }
};