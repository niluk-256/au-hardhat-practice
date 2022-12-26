const { assert, expect } = require("chai")

describe("TestModifyVariable", () => {
  //-------------------------------------
  it("should change x to 2023", async function () {
    const ModifyVariable = await ethers.getContractFactory("ModifyVariable")

    const contract = await ModifyVariable.deploy(10)

    await contract.deployed()

    await contract.modifyToLeet()

    const newX = await contract.x()

    assert.equal(newX.toNumber(), 2023)
  })
  //--------------------------------------------------------
  it("should get MEOW XD ", async function () {
    const ModifyVariable = await ethers.getContractFactory("ModifyVariable")

    const contract = await ModifyVariable.deploy(10)

    await contract.deployed()
    const string = await contract.a()
    assert.equal(string, "MEOW XD")
  })
  //--------------------------------
  it("should Modify != MEOW XD ", async function () {
    const ModifyVariable = await ethers.getContractFactory("ModifyVariable")

    const contract = await ModifyVariable.deploy(10)

    await contract.deployed()
    await contract.modifyMeow("MEEEEEEEOW")
    const string = await contract.a()
    assert.equal(string, "MEEEEEEEOW")
  })
})
