import { OneInch } from '@1inch/fusion-sdk';

export class OneInchService {
    private oneInch: OneInch;

    constructor(apiUrl: string) {
        this.oneInch = new OneInch(apiUrl);
    }

    async executeTrade(fromToken: string, toToken: string, amount: string, slippage: number) {
        try {
            const response = await this.oneInch.swap({
                fromToken,
                toToken,
                amount,
                slippage,
            });
            return response;
        } catch (error) {
            throw new Error(`Trade execution failed: ${error.message}`);
        }
    }

    async getLiquidityPools(token: string) {
        try {
            const pools = await this.oneInch.getLiquidityPools(token);
            return pools;
        } catch (error) {
            throw new Error(`Failed to fetch liquidity pools: ${error.message}`);
        }
    }
}