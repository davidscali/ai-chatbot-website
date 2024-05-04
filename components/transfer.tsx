import React, { useEffect } from 'react';

const transfer = async (address: string, amount: string) => {
    try {
        const response = await fetch('/api/transfer-coin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ address, amount }),
        });

        if (!response.ok) {
            throw new Error('Failed to transfer funds - Check if your conected your wellet');
        }

        console.log('Transfer request sent successfully');
    } catch (error) {
        console.error('Error:', error);
    }
};

export default transfer;

