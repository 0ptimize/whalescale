import { NextResponse } from 'next/server';

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const ETHERSCAN_API_URL = 'https://api.etherscan.io/api';

interface EtherscanResponse {
  status: string;
  message: string;
  result: any[];
}

export async function GET() {
  try {
    if (!ETHERSCAN_API_KEY) {
      console.error('Etherscan API key is missing');
      return NextResponse.json(
        { error: 'Etherscan API key is not configured' },
        { status: 500 }
      );
    }

    // Get the latest block number
    const blockNumberResponse = await fetch(
      `${ETHERSCAN_API_URL}?module=proxy&action=eth_blockNumber&apikey=${ETHERSCAN_API_KEY}`
    );
    const blockNumberData = await blockNumberResponse.json();
    
    if (blockNumberData.status !== '1') {
      console.error('Failed to get block number:', blockNumberData);
      throw new Error(`Failed to get block number: ${blockNumberData.message}`);
    }

    const latestBlock = parseInt(blockNumberData.result, 16);
    console.log('Latest block:', latestBlock);

    // Get the last 1000 blocks worth of transactions
    const fromBlock = Math.max(0, latestBlock - 1000);
    const toBlock = latestBlock;

    // Get transaction logs
    const response = await fetch(
      `${ETHERSCAN_API_URL}?module=account&action=txlist&startblock=${fromBlock}&endblock=${toBlock}&sort=desc&apikey=${ETHERSCAN_API_KEY}`
    );

    const data: EtherscanResponse = await response.json();
    console.log('Etherscan response:', data);

    if (data.status !== '1') {
      console.error('Etherscan API error:', data);
      throw new Error(`Etherscan API error: ${data.message}`);
    }

    if (!Array.isArray(data.result)) {
      console.error('Invalid response format:', data);
      throw new Error('Invalid response format from Etherscan API');
    }

    // Filter and sort transactions by value
    const largeTransactions = data.result
      .filter((tx: any) => {
        const valueInEth = parseInt(tx.value) / 1e18; // Convert wei to ETH
        return valueInEth >= 100; // Filter transactions >= 100 ETH
      })
      .sort((a: any, b: any) => parseInt(b.value) - parseInt(a.value))
      .slice(0, 10) // Get top 10
      .map((tx: any) => ({
        hash: tx.hash,
        from: tx.from,
        to: tx.to,
        value: (parseInt(tx.value) / 1e18).toFixed(2), // Convert to ETH
        timestamp: parseInt(tx.timeStamp) * 1000, // Convert to milliseconds
        gasPrice: parseInt(tx.gasPrice) / 1e9, // Convert to Gwei
      }));

    console.log('Processed transactions:', largeTransactions);

    return NextResponse.json(largeTransactions);
  } catch (error) {
    console.error('Error fetching transactions:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch transactions' },
      { status: 500 }
    );
  }
} 