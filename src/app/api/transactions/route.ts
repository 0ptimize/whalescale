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
    // Get the latest block number
    const blockNumberResponse = await fetch(
      `${ETHERSCAN_API_URL}?module=proxy&action=eth_blockNumber&apikey=${ETHERSCAN_API_KEY}`
    );
    const blockNumberData = await blockNumberResponse.json();
    const latestBlock = parseInt(blockNumberData.result, 16);

    // Get the last 1000 blocks worth of transactions
    const fromBlock = latestBlock - 1000;
    const toBlock = latestBlock;

    // Get transaction logs
    const response = await fetch(
      `${ETHERSCAN_API_URL}?module=account&action=txlist&startblock=${fromBlock}&endblock=${toBlock}&sort=desc&apikey=${ETHERSCAN_API_KEY}`
    );

    const data: EtherscanResponse = await response.json();

    if (data.status !== '1') {
      throw new Error(`Etherscan API error: ${data.message}`);
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

    return NextResponse.json(largeTransactions);
  } catch (error) {
    console.error('Error fetching transactions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch transactions' },
      { status: 500 }
    );
  }
} 