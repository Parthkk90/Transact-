import { ethers } from "hardhat";
import { expect } from "chai";

describe("GasTank Contract", function () {
    let gasTank: any;
    let owner: any;
    let addr1: any;

    beforeEach(async function () {
        const GasTank = await ethers.getContractFactory("GasTank");
        gasTank = await GasTank.deploy();
        [owner, addr1] = await ethers.getSigners();
    });

    describe("Deposit", function () {
        it("Should allow users to deposit funds", async function () {
            await gasTank.connect(addr1).deposit({ value: ethers.utils.parseEther("1.0") });
            const balance = await gasTank.balances(addr1.address);
            expect(balance).to.equal(ethers.utils.parseEther("1.0"));
        });

        it("Should emit a Deposit event", async function () {
            await expect(gasTank.connect(addr1).deposit({ value: ethers.utils.parseEther("1.0") }))
                .to.emit(gasTank, "Deposit")
                .withArgs(addr1.address, ethers.utils.parseEther("1.0"));
        });
    });

    describe("Withdraw", function () {
        it("Should allow users to withdraw funds", async function () {
            await gasTank.connect(addr1).deposit({ value: ethers.utils.parseEther("1.0") });
            await gasTank.connect(addr1).withdraw(ethers.utils.parseEther("0.5"));
            const balance = await gasTank.balances(addr1.address);
            expect(balance).to.equal(ethers.utils.parseEther("0.5"));
        });

        it("Should revert if withdrawal exceeds balance", async function () {
            await gasTank.connect(addr1).deposit({ value: ethers.utils.parseEther("1.0") });
            await expect(gasTank.connect(addr1).withdraw(ethers.utils.parseEther("2.0"))).to.be.revertedWith("Insufficient balance");
        });

        it("Should emit a Withdraw event", async function () {
            await gasTank.connect(addr1).deposit({ value: ethers.utils.parseEther("1.0") });
            await expect(gasTank.connect(addr1).withdraw(ethers.utils.parseEther("0.5")))
                .to.emit(gasTank, "Withdraw")
                .withArgs(addr1.address, ethers.utils.parseEther("0.5"));
        });
    });
});