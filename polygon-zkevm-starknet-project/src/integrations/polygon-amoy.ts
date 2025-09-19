import { ethers } from 'ethers';

const POLYGON_AMOY_RPC_URL = process.env.POLYGON_AMOY_RPC_URL || 'https://polygon-amoy.rpc.url';
const provider = new ethers.providers.JsonRpcProvider(POLYGON_AMOY_RPC_URL);

export const fundWallet = async (walletAddress: string, amount: string) => {
    const tx = {
        to: walletAddress,
        value: ethers.utils.parseEther(amount),
    };

    const signer = provider.getSigner();
    const transactionResponse = await signer.sendTransaction(tx);
    await transactionResponse.wait();
    console.log(`Funded wallet ${walletAddress} with ${amount} ETH`);
};

export const getWalletBalance = async (walletAddress: string) => {
    const balance = await provider.getBalance(walletAddress);
    return ethers.utils.formatEther(balance);
};