import dotenv from 'dotenv';

dotenv.config();

const config = {
    PORT: process.env.PORT || 3000,
    DB_URI: process.env.DB_URI || '',
    X402_API_KEY: process.env.X402_API_KEY || '',
    AGGLAYER_API_KEY: process.env.AGGLAYER_API_KEY || '',
    ONEINCH_API_URL: process.env.ONEINCH_API_URL || '',
};

export default config;