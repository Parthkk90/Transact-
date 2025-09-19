import { config } from 'dotenv';

config(); // Load environment variables from .env file

export const ENV = {
  PORT: process.env.PORT || 3000,
  POLYGON_RPC_URL: process.env.POLYGON_RPC_URL || '',
  ZKEVM_RPC_URL: process.env.ZKEVM_RPC_URL || '',
  STARKNET_RPC_URL: process.env.STARKNET_RPC_URL || '',
  PRIVATE_KEY: process.env.PRIVATE_KEY || '',
  // Add other environment variables as needed
};