# Project Setup

This project is designed to integrate various blockchain technologies and SDKs, including x402 payments, AggLayer Sandbox, and 1inch Fusion+. It also includes smart contracts deployed on both the Polygon Amoy and Starknet networks.

## Table of Contents

- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [License](#license)

## Installation

To set up the project, ensure you have Node.js (LTS) installed. Then, run the following commands to install the necessary dependencies:

```bash
npm install
```

This will install all required packages as specified in the `package.json` file.

## Project Structure

```
project-setup
├── src
│   ├── app.ts                  # Entry point of the application
│   ├── services                # Contains service files for various SDKs
│   │   ├── x402.ts             # Functions for x402 payments SDK
│   │   ├── agglayer.ts         # Functions for AggLayer Sandbox SDK
│   │   └── oneinch.ts          # Functions for 1inch Fusion+ SDK
│   ├── contracts               # Contains smart contracts
│   │   ├── hardhat             # Hardhat related files
│   │   │   ├── contracts
│   │   │   │   └── MyContract.sol  # Solidity smart contract
│   │   │   ├── scripts
│   │   │   │   └── deploy.ts   # Deployment script for Solidity contract
│   │   │   └── hardhat.config.ts # Hardhat configuration
│   │   └── starknet            # Starknet related files
│   │       ├── contracts
│   │       │   └── my_contract.cairo # Cairo smart contract
│   │       └── README.md       # Documentation for Starknet contracts
│   └── config                  # Configuration files
│       └── dotenv.ts           # Loads environment variables
├── package.json                # npm configuration file
├── tsconfig.json               # TypeScript configuration file
└── README.md                   # Project documentation
```

## Usage

After setting up the project, you can start the application by running:

```bash
npm start
```

Make sure to configure your environment variables in a `.env` file as needed.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.