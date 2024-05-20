"use client";
import WalletIcon from "../public/WalletIcon";
import React, { useState, useEffect } from 'react';
import { Button } from "./ui/button";
import { useSDK, MetaMaskProvider } from "@metamask/sdk-react";
import { formatAddress } from "../utils/lib/welletutils";
import {Popover,PopoverTrigger, PopoverContent,} from "../components/ui/popover";
import transfer from "./transfer";



export const ConnectWalletButton = () => {
  const { sdk, connected, connecting, account, balance } = useSDK();
  const [amount, setAmount] = useState(""); 
  const [transferredAmount, setTransferredAmount] = useState<number | null>(null);
  const [connecte, setConnecting] = useState<boolean>(false);

  const connect = async () => {
    try {
      await sdk?.connect();
    } catch (err) {
      console.warn(`No accounts found`, err);
    }
  };

  const disconnect = () => {
    if (sdk) {
      sdk.terminate();
    }
  };

  // const [transferredAmount, setTransferredAmount] = useState<number | null>(null);
  // const [connecte, setConnecting] = useState<boolean>(false);
  
    const handleTransfer = async () => {
      if (!connected) {
        alert("Please connect your wallet before transferring tokens.");
        return;
      }
      setConnecting(true); // Set connecting state to true while transfer is in progress
      try {
        // Perform transfer
        const address = "0x6739654C51c6ba0E13331d44a5f69a1a6ea9a4C9"; //excmple of the addres to transfer

        // replace the adrdres with account and note the adrres
        const result = await transfer(address, amount);
  
        // Update transferred amount if transfer was successful
        if (true) {
          setTransferredAmount(parseInt(amount)); // Convert amount to number and set transferred amount
          // alert("Successful transfer!");

          await window.ethereum?.request({
            method: 'wallet_requestPermissions',
            params: [
              {
                eth_accounts: {}
              }
            ]
          });
        } else {
          console.error('Failed to transfer funds:');
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setConnecting(false); // Set connecting state back to false
      }
    };

  return (
    <div className="relative">
      {connected ? (
        <Popover>
          <PopoverTrigger>
            <Button>{formatAddress(account)}</Button>
          </PopoverTrigger>
          <PopoverContent className="mt-4 w-44 bg-gray-100 border rounded-md shadow-lg right-0 z-10 top-10">
            <button
              onClick={disconnect}
              className="block w-full pl-2 pr-4 py-2 text-left font-bold text-[#F05252] hover:bg-gray-200"
            >
              Disconnect
            </button>
          </PopoverContent>
        </Popover>
      ) : (
        <Button disabled={connecting} onClick={connect}>
          <WalletIcon className="mr- h-5 w-5" /> Connect Wallet
        </Button>
      )}
      <input
        type="text"
        placeholder="Enter amount of Coins"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="mt-4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
      />
     <div>
        <Button className="mt-4 btn btn-primary submit-button focus:ring focus:outline-none w-full sm:w-auto px-10 "
          disabled={connecting} 
          onClick={handleTransfer}>
        <p className="text-m">Transfer</p>
        </Button>
        {transferredAmount && (
          <p className="text-lg font-bold mt-3">You were transferred : {transferredAmount} DAMA </p>
        )}
      </div>
    </div>
  );
};


export const NavBar = () => {
  const host =
    typeof window !== "undefined" ? window.location.host : "defaultHost";

  const sdkOptions = {
    logging: { developerMode: false },
    checkInstallationImmediately: false,
    dappMetadata: {
      name: "Next-Metamask-Boilerplate",
      url: host, // using the host constant defined above
    },
  };

  return (
    <nav className="flex items-center justify-between max-w-screen-2xl mx-full px-10 py-9 rounded-xl">
        <span className="hidden text-2xl font-bold px-10 text-gray-700 sm:block mb-20">
        Connect to Your Wellet
        </span>
      <div className="flex gap-4">
        <MetaMaskProvider debug={false} sdkOptions={sdkOptions}>
          <ConnectWalletButton />
        </MetaMaskProvider>
      </div>
    </nav>
  );
};

export default NavBar;
