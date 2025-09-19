# Starknet Contracts Documentation

This directory contains the Cairo contracts for the Starknet integration of the Polygon zkEVM project. Below are the details regarding the contracts and their functionalities.

## Contracts Overview

### my_contract.cairo
- This is a placeholder Cairo contract that can be used for testing or as a template for further development. It serves as a starting point for implementing Starknet functionalities.

### GasTank.sol
- The GasTank contract manages user balances for deposits and withdrawals. It includes functions to deposit and withdraw, updating the balances mapping for each user.

### PaymentExecutor.cairo
- The PaymentExecutor contract logs payment events. It includes a function `log_payment` that takes the sender's address and the payment amount, logging them for tracking purposes.

## Getting Started

To work with the Starknet contracts, ensure you have the necessary development environment set up. Follow these steps:

1. **Install Dependencies**: Make sure you have the required dependencies installed for Cairo development.
2. **Compile Contracts**: Use the appropriate tools to compile the Cairo contracts.
3. **Deploy Contracts**: Utilize the provided deployment scripts to deploy the contracts to the Starknet network.

## Testing

Testing is crucial to ensure the functionality of the contracts. Use the provided test files to verify the behavior of the contracts:

- `tests/gas-tank.test.ts`: Tests for the GasTank contract.
- `tests/payment-executor.test.ts`: Tests for the PaymentExecutor contract.

## Further Development

Feel free to extend the functionality of the existing contracts or create new ones as needed. Ensure to follow best practices for security and efficiency in smart contract development.