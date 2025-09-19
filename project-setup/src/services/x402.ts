import { X402 } from 'x402';

export const processPayment = async (paymentDetails: any) => {
    try {
        const response = await X402.processPayment(paymentDetails);
        return response;
    } catch (error) {
        throw new Error(`Payment processing failed: ${error.message}`);
    }
};

export const handleTransaction = async (transactionId: string) => {
    try {
        const transaction = await X402.getTransaction(transactionId);
        return transaction;
    } catch (error) {
        throw new Error(`Transaction retrieval failed: ${error.message}`);
    }
};