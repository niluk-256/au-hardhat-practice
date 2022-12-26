const hre = require("hardhat");

async function main() {
  // const lockedAmount = hre.ethers.utils.parseEther("1");

  const Faucet = await hre.ethers.getContractFactory("Faucet");
  const faucet = await Faucet.deploy();
  console.log("deploying.........");
  await faucet.deployed();

  console.log(` deployed to ${faucet.address}`);
  console.log(
    ` deployed to https://goerli.etherscan.io/address/${faucet.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
