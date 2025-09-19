import { ethers } from "hardhat";

async function main() {
    const GasTank = await ethers.getContractFactory("GasTank");
    const gasTank = await GasTank.deploy();
    await gasTank.deployed();
    console.log("GasTank deployed to:", gasTank.address);

    const PaymentExecutor = await ethers.getContractFactory("PaymentExecutor");
    const paymentExecutor = await PaymentExecutor.deploy();
    await paymentExecutor.deployed();
    console.log("PaymentExecutor deployed to:", paymentExecutor.address);
}

// Execute the deployment script
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });