# Polygon zkEVM and Starknet Project

This project integrates the Polygon Amoy and zkEVM networks with Starknet, providing a robust environment for testing bridge transactions. It includes stub contracts for GasTank and PaymentExecutor, as well as an x402 integration server.

## Project Structure

- **src/**: Contains the main application code.
  - **app.ts**: Entry point of the application.
  - **config/**: Configuration files.
    - **dotenv.ts**: Loads environment variables.
  - **contracts/**: Smart contracts for the project.
    - **GasTank.sol**: Manages user balances for deposits and withdrawals.
    - **PaymentExecutor.cairo**: Logs payment events.
    - **hardhat/**: Hardhat configuration and contracts.
      - **hardhat.config.ts**: Hardhat configuration file.
      - **contracts/**: Contains Solidity contracts.
        - **MyContract.sol**: Placeholder contract for testing.
      - **scripts/**: Deployment scripts.
        - **deploy.ts**: Deploys contracts to the network.
    - **starknet/**: Contains Starknet contracts.
      - **README.md**: Documentation for Starknet contracts.
      - **contracts/**: Placeholder contracts for Starknet.
        - **my_contract.cairo**: Placeholder Cairo contract.
  - **services/**: Integration services.
    - **agglayer.ts**: Logic for AggLayer service.
    - **oneinch.ts**: Proxy server for 1inch Fusion+ API.
    - **x402.ts**: Sets up the x402 integration server.
  - **integrations/**: Logic for integrating with blockchain networks.
    - **polygon-amoy.ts**: Integration with Polygon Amoy.
    - **zkevm.ts**: Integration with zkEVM.

- **tests/**: Contains test files for the contracts and services.
  - **bridge-transactions.test.ts**: Tests for bridge transactions.
  - **gas-tank.test.ts**: Tests for the GasTank contract.
  - **payment-executor.test.ts**: Tests for the PaymentExecutor contract.

- **docker-compose.yml**: Defines services and configurations for containerized environment.
- **package.json**: npm configuration file.
- **tsconfig.json**: TypeScript configuration file.

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd polygon-zkevm-starknet-project
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Configure environment variables**:
   Create a `.env` file in the root directory and set the necessary environment variables.

4. **Run the application**:
   Use Docker Compose to start the services:
   ```
   docker-compose up
   ```

5. **Deploy contracts**:
   Navigate to the `src/contracts/hardhat` directory and run:
   ```
   npx hardhat run scripts/deploy.ts --network <network-name>
   ```

## Usage

- The application provides endpoints for the x402 integration server, allowing for invoice handling and payment requests.
- The GasTank contract manages user balances, while the PaymentExecutor contract logs payment events for tracking.

## Testing

Run the tests using:
```
npm test
```

This will execute all test files in the `tests` directory, ensuring that the contracts and services function as expected.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.