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
  from: string
  to: string
  amount: number
  timestamp: Date
  entity?: string
}

const mockTransactions: Transaction[] = [
  {
    id: "1",
    blockchain: "BTC",
    from: "bc1q...xyz",
    to: "bc1q...abc",
    amount: 100,
    timestamp: new Date(),
    entity: "Binance",
  },
  {
    id: "2",
    blockchain: "ETH",
    from: "0x123...xyz",
    to: "0x456...abc",
    amount: 1000,
    timestamp: new Date(Date.now() - 3600000),
    entity: "Coinbase",
  },
]

export function WhaleTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Blockchain</TableHead>
          <TableHead>From</TableHead>
          <TableHead>To</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Entity</TableHead>
          <TableHead>Time</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mockTransactions.map((tx) => (
          <TableRow key={tx.id}>
            <TableCell className="font-medium">{tx.blockchain}</TableCell>
            <TableCell className="flex items-center gap-2">
              <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
              {tx.from}
            </TableCell>
            <TableCell className="flex items-center gap-2">
              <ArrowDownLeft className="h-4 w-4 text-muted-foreground" />
              {tx.to}
            </TableCell>
            <TableCell>
              {tx.amount} {tx.blockchain}
            </TableCell>
            <TableCell>{tx.entity || "Unknown"}</TableCell>
            <TableCell className="text-muted-foreground">
              {formatDistanceToNow(tx.timestamp, { addSuffix: true })}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
} 