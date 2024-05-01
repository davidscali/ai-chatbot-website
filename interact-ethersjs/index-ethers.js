require('dotenv').config({path: '.env'})
const ethers = require('ethers')

const QUICKNODE_ENDPOINT = process.env.HTTP_PROVIDER_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY

const provider = new ethers.JsonRpcProvider(QUICKNODE_ENDPOINT)
const signer = new ethers.Wallet(PRIVATE_KEY, provider)
const userAddress = signer.address
const contractAddress = '0x10571B410735B6df0E3119FB86CaC80742025711'

// the last one i open, in openZepplein ERC20 -1 
// const seceonedDamaAdrees = "0xacC2011537d02d139A074174a32a801332D0CDc2"


 const  contractABI = [
    
    {
        constant: true,
        inputs: [{ name: '', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: false,
        inputs: [],
        name: 'deposit',
        outputs: [],
        payable: true,
        stateMutability: 'payable',
        type: 'function',
    },
]

const contract = new ethers.Contract(contractAddress, contractABI, provider)
const contractWithSigner = contract.connect(signer)


// Reading from the contract
async function readContract() {
    console.log('Reading the balance...')
    const balance = await contract.balanceOf(userAddress)
    const balanceInEther = ethers.formatEther(balance)
    console.log(`User's DAMA balance in SepETH: ${balance}`)
    console.log(`User's DAMA balance in Ether: ${balanceInEther}`)
}

// Writing to the contract
async function writeContract() {
    console.log('Calling deposit function...')
    const transactionResponse = await contractWithSigner.deposit({
        value: ethers.parseEther('0.05'),
    })
    await transactionResponse.wait()
    console.log(`Transaction hash: ${transactionResponse.hash}`)
}

// Call the functions
;(async () => {
    // First, read the contract to get the initial state
    await readContract()
    // Next, write to the contract and wait for the transaction to complete
    await writeContract()
    // Finally, read the contract again to see the changes made by the write operation
    await readContract()
})().catch(console.error)

module.exports = {
    readContract,
    writeContract
};

