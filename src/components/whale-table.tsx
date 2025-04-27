"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { formatDistanceToNow } from "date-fns"
import { ArrowUpRight, ArrowDownLeft } from "lucide-react"

interface Transaction {
  id: string
  blockchain: "BTC" | "ETH"
  amount: number
  usdSize: number
  from: string
  to: string
  timestamp: Date
  entity?: string
}

const mockTransactions: Transaction[] = [
  {
    id: "1",
    blockchain: "BTC",
    amount: 100,
    usdSize: 4350000, // $43.5M
    from: "bc1q...xyz",
    to: "bc1q...abc",
    timestamp: new Date(),
    entity: "Binance",
  },
  {
    id: "2",
    blockchain: "ETH",
    amount: 1000,
    usdSize: 2500000, // $2.5M
    from: "0x123...xyz",
    to: "0x456...abc",
    timestamp: new Date(Date.now() - 3600000),
    entity: "Coinbase",
  },
]

function formatUSD(amount: number): string {
  if (amount >= 1000000000) {
    return `$${(amount / 1000000000).toFixed(2)}B`
  }
  if (amount >= 1000000) {
    return `$${(amount / 1000000).toFixed(2)}M`
  }
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

function formatCrypto(amount: number, blockchain: string): string {
  return `${amount.toLocaleString()} ${blockchain}`
}

export function WhaleTable() {
  return (
    <div className="p-1">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[100px] text-muted-foreground">Blockchain</TableHead>
            <TableHead className="text-muted-foreground">Amount</TableHead>
            <TableHead className="text-muted-foreground">USD</TableHead>
            <TableHead className="text-muted-foreground">Entity</TableHead>
            <TableHead className="text-muted-foreground">Time</TableHead>
            <TableHead className="text-muted-foreground">From</TableHead>
            <TableHead className="text-muted-foreground">To</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockTransactions.map((tx) => (
            <TableRow 
              key={tx.id} 
              className="group cursor-pointer transition-all hover:bg-slate-50 dark:hover:bg-slate-700/50"
            >
              <TableCell className="font-medium">
                <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${
                  tx.blockchain === "BTC" 
                    ? "bg-orange-500/20 text-orange-600 dark:text-orange-400 ring-1 ring-orange-500/20" 
                    : "bg-blue-500/20 text-blue-600 dark:text-blue-400 ring-1 ring-blue-500/20"
                }`}>
                  {tx.blockchain}
                </span>
              </TableCell>
              <TableCell className="font-mono text-foreground/90">
                {formatCrypto(tx.amount, tx.blockchain)}
              </TableCell>
              <TableCell className="font-mono font-semibold text-green-600 dark:text-green-400">
                {formatUSD(tx.usdSize)}
              </TableCell>
              <TableCell>
                <span className="inline-flex items-center rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium ring-1 ring-slate-200 dark:bg-slate-700 dark:ring-slate-600">
                  {tx.entity || "Unknown"}
                </span>
              </TableCell>
              <TableCell className="text-muted-foreground">
                {formatDistanceToNow(tx.timestamp, { addSuffix: true })}
              </TableCell>
              <TableCell className="font-mono">
                <div className="flex items-center gap-1.5 text-red-500 dark:text-red-400">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                  <span className="text-foreground/80">{tx.from}</span>
                </div>
              </TableCell>
              <TableCell className="font-mono">
                <div className="flex items-center gap-1.5 text-green-500 dark:text-green-400">
                  <ArrowDownLeft className="h-3.5 w-3.5" />
                  <span className="text-foreground/80">{tx.to}</span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
} 