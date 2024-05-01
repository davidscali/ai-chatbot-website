// import React, { useState, useEffect } from 'react';
// import { Button } from './Button';
// import {readContract,
//     writeContract} from "../interact-ethersjs/index-ethers.js"


// const Contract: React.FC = () => {
//     const [balanceInfo, setBalanceInfo] = useState<string>(''); 
//     const [showModal, setShowModal] = useState<boolean>(false); 

//     const fetchContractBalance = async () => {
//         try {
//             const balance = await readContract(); // Call the readContract function
//             setBalanceInfo(`Contract balance: ${balance}`); // Update state with the balance
//         } catch (error) {
//             console.error('Error fetching contract balance:', error);
//         }
//     };

//     // Function to handle deposit button click
//     const handleDeposit = async () => {
//         try {
//             await writeContract(); // Call the writeContract function to deposit
//             await fetchContractBalance(); // Refresh the contract balance after deposit
//         } catch (error) {
//             console.error('Error depositing to contract:', error);
//         }
//     };

//     const handleWithdrawal = async () => {
//         try {
//             // Add logic to handle withdrawal here
//         } catch (error) {
//             console.error('Error withdrawing from contract:', error);
//         }
//     };

//     // Fetch contract balance on component mount
//     useEffect(() => {
//         fetchContractBalance();
//     }, []);

//     return (
//         <div>
//         <div>
//             {/* Button to interact with contract */}
//             <Button onClick={handleDeposit}>Deposit to Contract</Button>
//             <Button onClick={handleWithdrawal}>Withdraw from Contract</Button>
//             <Button onClick={fetchContractBalance}>Fetch Contract Balance</Button>
            
//             {/* Display contract balance */}
//             <p>{balanceInfo}</p>
//         </div>
//         </div>
//     );
// }

// export default Contract;



    
    
