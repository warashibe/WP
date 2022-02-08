require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
const secrets = require("./secrets.json")
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})

module.exports = {
  solidity: "0.8.0",
  networks: {
    polygon: {
      url: secrets.polygon.url,
      accounts: [secrets.polygon.key],
    },
    shibuya: {
      url: secrets.shibuya.url,
      accounts: [secrets.shibuya.key],
    },
  },
  etherscan: {
    apiKey: secrets.polygon.apiKey,
  },
}
