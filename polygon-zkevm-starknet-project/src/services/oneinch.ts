import express from 'express';
import axios from 'axios';

const router = express.Router();

// 1inch Fusion+ API endpoint
const ONE_INCH_API_URL = 'https://api.1inch.io/v4.0/1/swap';

// Middleware to handle cross-chain transactions
router.post('/swap', async (req, res) => {
    const { fromToken, toToken, amount, fromAddress, slippage } = req.body;

    try {
        const response = await axios.post(ONE_INCH_API_URL, {
            fromToken,
            toToken,
            amount,
            fromAddress,
            slippage,
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error interacting with 1inch API:', error);
        res.status(500).json({ error: 'Failed to perform swap' });
    }
});

export default router;