import React, { useState } from 'react';
import { Button } from './Button';

const ConectDama = () => {
    const [contractInfo, setContractInfo] = useState({
        tokenName: '-',
        tokenSymbol: '-',
        totalSupply: '-',
        toBalance: '-',
        reamintoken: '',
    });
    const [showTextBox, setShowTextBox] = useState(false); 

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const contractAddress = formData.get('addr') as string;

        try {
            const response = await fetch('/api/show-contract', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ contractAddress}),
            });

            if (!response.ok) {
                throw new Error('Failed to fetch contract information');
            }

            const data = await response.json();
            setContractInfo(data.data);
            setShowTextBox(true);
        } catch (error) {
            console.error('Error fetching contract information:', error);
        }
    };
    return (
      <div className="grid grid-cols-1 gap-1 md:grid-cols-1">
      <div>
      <form className="m-6" onSubmit={handleSubmit}>
        <div className="credit-card w-full lg:w-full sm:w-auto shadow-lg mx-auto px-4 py-2 rounded-xl bg-white">
           <main className="mt-3 p-4">
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
            <footer className="p-3.5 mb-7 flex justify-center">
            <Button
              type="submit"
              className="btn btn-primary submit-button focus:ring focus:outline-none w-full sm:w-auto "
            >
            Get token info
            </Button>
            </footer>
              <div className="px-4 mt-4 ">
                <div className="overflow-x-auto ">
                  <table className="table w-full ">
                    <thead>
                    <tr className='text-lg '>
                    <th className='px-5'>Name</th>
                    <th className='px-5'>Symbol</th>
                    <th>Total supply</th>
                    <th>Balance</th>
                     </tr>
                    </thead>
                  <tbody>
                    <tr className="text-center mt-6">
                    <th className='text font-normal'>{contractInfo.tokenName}</th>
                    <td>{contractInfo.tokenSymbol}</td>
                    <td>{String(contractInfo.totalSupply)}</td>
                    <td>{String(contractInfo.toBalance)}</td>
                  </tr>
                 </tbody>
                 </table>
                 {showTextBox && (
                        <div className="px-4 mt-4 ">
                            <div className="text text-center overflow-x-auto ">
                                <p>The number of remaining DAMA tokens:</p>
                                <em className='font-bold'>{String(contractInfo.reamintoken)}</em>
                                <div className='mt-3'></div>
                            </div>
                        </div> )}
                  </div>
                </div> 
             </div>
        </form>
          </div>
      </div>
  );
};

export default ConectDama;