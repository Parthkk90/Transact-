// This file contains the Cairo smart contract definition for Starknet. 
// It defines the contract's logic and state.

@contract
namespace MyContract:
    @storage_var
    func my_storage_var() -> (value: felt):
    end

    @constructor
    func constructor(initial_value: felt):
        my_storage_var.write(initial_value)
    end

    @public
    func set_value(new_value: felt):
        my_storage_var.write(new_value)
    end

    @public
    func get_value() -> (value: felt):
        return my_storage_var.read()
    end