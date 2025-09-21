#[starknet::contract]
mod PaymentExecutor {
    use starknet::ContractAddress;
    
    #[event]
    #[derive(Drop, starknet::Event)]
    enum Event {
        PaymentReceived: PaymentReceived,
    }

    #[derive(Drop, starknet::Event)]
    struct PaymentReceived {
        sender: ContractAddress,
        amount: u128,
    }
    
    #[storage]
    struct Storage {
        payments: LegacyMap::<ContractAddress, u128>,
    }

    #[external]
    fn log_payment(ref self: ContractState, sender: ContractAddress, amount: u128) {
        // Store payment info
        self.payments.write(sender, amount);
        
        // Emit event
        self.emit(Event::PaymentReceived(PaymentReceived { sender, amount }));
        
        // Log to console (for debugging)
        starknet::info::print("Payment received:");
        starknet::info::print_felt252(sender.into());
        starknet::info::print_u128(amount);
    }
    
    #[view]
    fn get_payment(self: @ContractState, sender: ContractAddress) -> u128 {
        self.payments.read(sender)
    }
}
