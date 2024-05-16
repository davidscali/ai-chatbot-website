import { ethers } from 'ethers';
import damaerc20ABI from "/workspace/ai-chatbot-website/damaERC20.json";
import { NextApiRequest, NextApiResponse } from 'next';
//import "@quicknode/sdk";

// Function to transfer funds to an address
async function transferFundsToAddress(address: string , amount: number) {

//   const QUICKNODE_ENDPOINT = process.env.HTTP_PROVIDER_URL
//   const provider = new ethers.JsonRpcProvider(QUICKNODE_ENDPOINT)

  const INFURA_ENDPOINT = process.env.INFURA_ENDPOINT;
  const provider = new ethers.JsonRpcProvider(INFURA_ENDPOINT);

    // Set up signer with private key or mnemonic phrase
    const signer = new ethers.Wallet("5d5fea13e640212648ece95dd41d77da39e671d24ccc546d1c0c765affb5d659", provider);
    // Contract address and ABI
    const contractAddress = "0xacC2011537d02d139A074174a32a801332D0CDc2";
    const abi = damaerc20ABI;
    // Connect to the contract
    const contract = new ethers.Contract(contractAddress, abi, signer);
    // Call the contract's transfer function
    try {
        const tx = await contract.transfer(address, amount);
        await tx.wait(); // Wait for transaction to be mined
        return { success: true, transactionHash: tx.hash };
    } catch (error) {
        return { success: false, error: (error as any).message};
    }
}

// Next.js API route handler
export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
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





