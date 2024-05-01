"use client";

import Link from "next/link";
import WalletIcon from "../public/WalletIcon";
import React, { useState, useEffect } from 'react';
import { Button } from "./ui/button";
import { useSDK, MetaMaskProvider } from "@metamask/sdk-react";
import { formatAddress } from "../utils/lib/welletutils";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "../components/ui/popover";
import Balancer from "react-wrap-balancer";
import transfer from "./transfer";

export const ConnectWalletButton = () => {
  const { sdk, connected, connecting, account, balance } = useSDK();
  const [walletBalance, setWalletBalance] = useState("");

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

  const [transferredAmount, setTransferredAmount] = useState<number | null>(null);
  const [connecte, setConnecting] = useState<boolean>(false);
  
    const handleTransfer = async () => {
      setConnecting(true); // Set connecting state to true while transfer is in progress
  
      try {
        // Perform transfer
        const amount = "10000000"; // Example amount
        const address = "0x0dC2d16316e880cF93A9A47fE27d60563B3BBFfE"; // Example address
        const result = await transfer(address, amount);
  
        // Update transferred amount if transfer was successful
        if (true) {
          setTransferredAmount(parseInt(amount)); // Convert amount to number and set transferred amount
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
          <PopoverContent className="mt-2 w-44 bg-gray-100 border rounded-md shadow-lg right-0 z-10 top-10">
            <button
              onClick={disconnect}
              className="block w-full pl-2 pr-4 py-2 text-left text-[#F05252] hover:bg-gray-200"
            >
              Disconnect
            </button>
          </PopoverContent>
        </Popover>
      ) : (
        <Button disabled={connecting} onClick={connect}>
          <WalletIcon className="mr-2 h-4 w-4" /> Connect Wallet
        </Button>
      )}
     <div>
        <Button className="mt-4"
          disabled={connecting} 
          onClick={handleTransfer}>
          Transfer
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
    <nav className="flex items-center justify-between max-w-screen-xl px-6 mx-auto py-7 rounded-xl">
      <Link href="/" className="flex gap-1 px-6"> 
        <span className="hidden text-2xl font-bold sm:block">
          <span className="text-gray-900">To Your Wellet</span>
        </span>
      </Link>
      <div className="flex gap-4 px-6">
        <MetaMaskProvider debug={false} sdkOptions={sdkOptions}>
          <ConnectWalletButton />
        </MetaMaskProvider>
      </div>
    </nav>
  );
};

export default NavBar;
