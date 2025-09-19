import { expect } from "chai";
import { ethers } from "hardhat";

describe("Bridge Transactions", function () {
    let gasTank: any;
    let paymentExecutor: any;

    before(async function () {
        const GasTank = await ethers.getContractFactory("GasTank");
        gasTank = await GasTank.deploy();
        await gasTank.deployed();

        const PaymentExecutor = await ethers.getContractFactory("PaymentExecutor");
        paymentExecutor = await PaymentExecutor.deploy();
        await paymentExecutor.deployed();
    });

    it("should allow deposits to the GasTank", async function () {
        const [owner] = await ethers.getSigners();
        const depositAmount = ethers.utils.parseEther("1.0");

        await gasTank.deposit({ value: depositAmount });
        const balance = await gasTank.balances(owner.address);

        expect(balance).to.equal(depositAmount);
    });

    it("should allow withdrawals from the GasTank", async function () {
        const [owner] = await ethers.getSigners();
        const withdrawAmount = ethers.utils.parseEther("0.5");

        await gasTank.withdraw(withdrawAmount);
        const balance = await gasTank.balances(owner.address);

        expect(balance).to.equal(ethers.utils.parseEther("0.5"));
    });

    it("should log payments in PaymentExecutor", async function () {
        const [sender] = await ethers.getSigners();
        const paymentAmount = ethers.utils.parseEther("0.2");

        await paymentExecutor.log_payment(sender.address, paymentAmount);
        const paymentLog = await paymentExecutor.getPaymentLog(sender.address);

        expect(paymentLog.amount).to.equal(paymentAmount);
        expect(paymentLog.sender).to.equal(sender.address);
    });
});