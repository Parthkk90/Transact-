// This is a placeholder Solidity contract for testing or further development.
pragma solidity ^0.8.0;

contract MyContract {
    string public name = "MyContract";
    
    function getName() public view returns (string memory) {
        return name;
    }
}