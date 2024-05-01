// Import necessary libraries
import { useState } from 'react';
import { ethers } from 'ethers';

// Function to transfer funds to an address
async function transferFundsToAddress(address, amount) {
    // Connect to Ethereum provider
    const provider = new ethers.providers.JsonRpcProvider("YOUR_RPC_ENDPOINT");

    // Set up signer with private key or mnemonic phrase
    const signer = new ethers.Wallet("YOUR_PRIVATE_KEY_OR_MNEMONIC", provider);

    // Contract address and ABI
    const contractAddress = "YOUR_CONTRACT_ADDRESS";
    const abi = [ /* Your contract ABI */ ];

    // Connect to the contract
    const contract = new ethers.Contract(contractAddress, abi, signer);

    // Call the contract's transfer function
    try {
        const tx = await contract.transfer(address, amount);
        await tx.wait(); // Wait for transaction to be mined
        return { success: true, transactionHash: tx.hash };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

// Next.js API route handler
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { address, amount } = req.body;

        // Perform transfer
        const result = await transferFundsToAddress(address, amount);

        if (result.success) {
            res.status(200).json({ success: true, transactionHash: result.transactionHash });
        } else {
            res.status(500).json({ success: false, error: result.error });
        }
    } else {
        res.status(405).end(); // Method Not Allowed
    }
}
