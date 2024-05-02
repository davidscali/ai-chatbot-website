import "@ethersproject/providers";
import "@metamask/sdk-react";
import "@quicknode/sdk";

import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { Button } from './Button';
import damaerc20ABI from "../damaERC20.json";

export default function App() {
    const [contractInfo, setContractInfo] = useState({
      address: "-",
      tokenName: "-",
      tokenSymbol: "-",
      totalSupply: "-"
    });
    const [balanceInfo, setBalanceInfo] = useState({
      address: "-",
      balance: "-"
    });

    const QUICKNODE_ENDPOINT = process.env.HTTP_PROVIDER_URL
    
    const provider = new ethers.JsonRpcProvider(QUICKNODE_ENDPOINT)
    //const signer = new ethers.Wallet(PRIVATE_KEY, provider)
    //const userAddress = signer.address

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const contractAddress = formData.get("addr") as string;

      try {
      if(window.ethereum) {
      const erc20 = new ethers.Contract(contractAddress, damaerc20ABI , provider );
  
      const tokenName = await erc20.name();
      const tokenSymbol = await erc20.symbol();
      const totalSupply = await erc20.totalSupply();

      console.log(tokenName)
      console.log(tokenSymbol)
      console.log(totalSupply)

      setContractInfo({
        address: contractAddress,
        tokenName,
        tokenSymbol,
        totalSupply,
      });

    } else {
      console.error('Metamask not installed or not accessible');
    }
  } catch (error) {
    console.error('Error retrieving contract information:', error);
  }
};

const getMyBalance = async () => {
  const QUICKNODE_ENDPOINT = process.env.HTTP_PROVIDER_URL
  const provider = new ethers.JsonRpcProvider(QUICKNODE_ENDPOINT)
  await provider.send('eth_requestAccounts', []);
  const erc20 = new ethers.Contract(contractInfo.address, damaerc20ABI, provider);
  const signer = await provider.getSigner();
  const signerAddress = await signer.getAddress();
  const balance = await erc20.balanceOf(signerAddress);

  setBalanceInfo({
    address: signerAddress,
    balance: String(balance)
  });
};

      return (
        <div className="grid grid-cols-1 gap-1 md:grid-cols-1">
          <div>
            <form className="m-6" onSubmit={handleSubmit}>
              <div className="credit-card w-full lg:w-full sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
                <main className="mt-4 p-4">
                  <h1 className="text-2xl font-semibold text-gray-700 text-center">
                    Read from smart contract
                  </h1>
                  <div className="">
                    <div className="my-4">
                      <input
                        type="text"
                        name="addr"
                        className="flex-auto appearance-none rounded-md input input-bordered border border-gray-300 block w-full py-[calc(theme(spacing.2)-1px)] focus:border-teal-500 focus:ring-4 focus:outline-none shadow-md shadow-zinc-800/5"
                        placeholder="ERC20 contract address"
                      />
                    </div>
                  </div>
                </main>
                <footer className="p-3.5">
                  <Button
                    type="submit"
                    className="btn btn-primary submit-button focus:ring focus:outline-none w-full"
                  >
                    Get token info
                  </Button>
                </footer>
                <div className="px-4 mt-4">
                  <div className="overflow-x-auto">
                    <table className="table w-full">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Symbol</th>
                          <th>Total supply</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="text-center">
                          <th>{contractInfo.tokenName}</th>
                          <td>{contractInfo.tokenSymbol}</td>
                          <td>{String(contractInfo.totalSupply)}</td>
                          {/* <td>{contractInfo.deployedAt}</td> */}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="mt-8"></div>
                <div className="p-3.5">
                  <Button
                    // onClick={getMyBalance}
                    type="submit"
                    className="btn btn-primary submit-button focus:ring focus:outline-none w-full"
                  >
                    Get my balance
                  </Button>
                </div>
                <div className="px-4 mt-6">
                  <div className="overflow-x-auto">
                    <table className="table w-full ">
                      <thead>
                        <tr>
                          <th>Address</th>
                          <th>Balance</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          {/* <th>{balanceInfo.address}</th>
                          <td>{balanceInfo.balance}</td> */}
                        </tr>
                      </tbody>
                    </table>
                    <div className="mt-10"></div>
                  </div>
                </div>
              </div>

              
            </form>
            
            <div className="m-4 credit-card w-full lg:w-3/4 sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
              <div className="mt-10 p-4">
                <h1 className="text-2xl font-semibold text-gray-700 text-center">
                  Write to contract
                </h1>
    
                <form >
                  <div className="my-5">
                    <input
                      type="text"
                      name="recipient"
                      className="flex-auto appearance-none rounded-md input input-bordered border border-gray-300 block w-full py-[calc(theme(spacing.2)-1px)] focus:border-teal-500 focus:ring-4 focus:outline-none shadow-md shadow-zinc-800/5"
                      placeholder="Recipient address"
                    />
                  </div>
                  <div className="my-3">
                    <input
                      type="text"
                      name="amount"
                      className="flex-auto appearance-none rounded-md input input-bordered border border-gray-300 block w-full py-[calc(theme(spacing.2)-1px)] focus:border-teal-500 focus:ring-4 focus:outline-none shadow-md shadow-zinc-800/5"
                      placeholder="Amount to transfer"
                    />
                  </div>
                  <footer className="p-3.5">
                    <Button
                      type="submit"
                      className="btn btn-primary submit-button focus:ring focus:outline-none w-full"
                    >
                      Transfer
                    </Button>
                  </footer>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    }