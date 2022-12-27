const hre = require("hardhat")

async function main() {
  // const lockedAmount = hre.ethers.utils.parseEther("1");

  const BeWinner = await hre.ethers.getContractFactory("BeWinner")
  const beWinner = await BeWinner.deploy(
    "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502"
  )
  console.log("deploying.........")
  await beWinner.deployed()
  console.log(
    ` deployed to https://goerli.etherscan.io/address/${beWinner.address}`
  )
  const becomewinner = await beWinner.becomeWinner()
  console.log("Became the winner")
  console.log(becomewinner)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
