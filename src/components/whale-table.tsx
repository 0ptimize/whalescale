"use client"

import { useEffect, useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { formatDistanceToNow } from "date-fns"
import { ExternalLink } from "lucide-react"

interface Transaction {
  hash: string
  from: string
  to: string
  value: string
  timestamp: number
  gasPrice: number
}

export function WhaleTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch("/api/transactions")
        if (!response.ok) {
          throw new Error("Failed to fetch transactions")
        }
        const data = await response.json()
        setTransactions(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchTransactions()
    // Refresh every 30 seconds
    const interval = setInterval(fetchTransactions, 30000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return <div className="text-center py-8">Loading transactions...</div>
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error: {error}</div>
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Transaction</TableHead>
            <TableHead>From</TableHead>
            <TableHead>To</TableHead>
            <TableHead>Value (ETH)</TableHead>
            <TableHead>Gas Price (Gwei)</TableHead>
            <TableHead>Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((tx) => (
            <TableRow key={tx.hash}>
              <TableCell>
                <a
                  href={`https://etherscan.io/tx/${tx.hash}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:underline"
                >
                  {tx.hash.slice(0, 8)}...{tx.hash.slice(-6)}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </TableCell>
              <TableCell>
                <a
                  href={`https://etherscan.io/address/${tx.from}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {tx.from.slice(0, 6)}...{tx.from.slice(-4)}
                </a>
              </TableCell>
              <TableCell>
                <a
                  href={`https://etherscan.io/address/${tx.to}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {tx.to.slice(0, 6)}...{tx.to.slice(-4)}
                </a>
              </TableCell>
              <TableCell>{tx.value}</TableCell>
              <TableCell>{tx.gasPrice.toFixed(2)}</TableCell>
              <TableCell>{formatDistanceToNow(tx.timestamp)} ago</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
} 