import { NextApiRequest, NextApiResponse } from 'next';
import { ethers } from 'ethers';
import damaerc20ABI from "/workspace/ai-chatbot-website/damaERC20.json";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    if (req.method === 'POST') {
        try {
            const { contractAddress } = req.body;
            const provider = new ethers.JsonRpcProvider(process.env.INFURA_ENDPOINT);
            const erc20 = new ethers.Contract(contractAddress, damaerc20ABI, provider);

            const tokenName = await erc20.name();
            const tokenSymbol = await erc20.symbol();
            const totalSupply = await erc20.totalSupply();
            // the main addres of my wellet with all the total supply 
            const toBalance = await erc20.balanceOf('0x0dC2d16316e880cF93A9A47fE27d60563B3BBFfE');

            // how much remin 
           const reamintoken = (totalSupply-toBalance).toString();

            const contractInfo = {
                tokenName: tokenName.toString(),
                tokenSymbol: tokenSymbol.toString(),
                totalSupply: totalSupply.toString(),
                toBalance: toBalance.toString(),
                reamintoken
            };
            
            res.status(200).json({ success: true, data: contractInfo});
        } catch (error) {
            console.error('Error retrieving contract information:', error);
            res.status(500).json({ success: false, error: 'Failed to retrieve contract information' });
        }
    } else {
        res.status(405).end(); // Method Not Allowed
    }
}
