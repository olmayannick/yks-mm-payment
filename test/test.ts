import { expect } from "chai";
import { ethers } from "hardhat";

describe("CbuToken", function () {
  it("Test contract", async function () {
    const ContractFactory = await ethers.getContractFactory("CbuToken");

    const instance = await ContractFactory.deploy();
    await instance.deployed();

    expect(await instance.name()).to.equal("Cbu Token");
  });
});
