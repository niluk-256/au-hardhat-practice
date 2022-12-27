const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers")
const { expect } = require("chai")

describe("Faucet", function () {
  async function deployContractAndSetVariables() {
    const Faucet = await ethers.getContractFactory("Faucet")
    const faucet = await Faucet.deploy()

    const [owner, attacker] = await ethers.getSigners()
    const contractCode = await ethers.provider.getCode(faucet.address)
    console.log(contractCode)
    let withdrawAmount = ethers.utils.parseUnits("1", "ether")
    let withdrawAmount2 = ethers.utils.parseUnits("0.01", "ether")
    return {
      faucet,
      owner,
      withdrawAmount,
      attacker,
      withdrawAmount2,
      contractCode,
    }
  }

  it("should deploy and set the owner correctly", async function () {
    const { faucet, owner } = await loadFixture(deployContractAndSetVariables)

    expect(await faucet.owner()).to.equal(owner.address)
  })

  it("should not allow withdrawals above .1 ETH at a time", async function () {
    const { faucet, withdrawAmount } = await loadFixture(
      deployContractAndSetVariables
    )
    await expect(faucet.withdraw(withdrawAmount)).to.be.reverted
  })

  it("should only owner could call withdraw", async function () {
    const { faucet, attacker, withdrawAmount2 } = await loadFixture(
      deployContractAndSetVariables
    )
    await expect(
      faucet.connect(attacker).withdraw(withdrawAmount2)
    ).to.be.revertedWith("Failed to send Ether")
  })

  //--------------------------------------------------
  // it("should self destruct ", async function () {
  //   const { faucet, contractCode, owner } = await loadFixture(
  //     deployContractAndSetVariables
  //   )
  //   await expect(
  //     faucet.connect(owner).destroyFaucet().to.equal("0x")
  //   ).to.be.revertedWith("Failed to send Ether")
  // })
})
