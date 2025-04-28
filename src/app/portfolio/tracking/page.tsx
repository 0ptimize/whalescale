"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const mockPortfolios = [
  {
    id: 1,
    name: "Binance Hot Wallet",
    assets: [
      { symbol: "BTC", amount: "125,000", value: "$7.5B", change: "+2.3%" },
      { symbol: "ETH", amount: "1.2M", value: "$3.6B", change: "-1.2%" },
    ],
    totalValue: "$11.1B",
    riskScore: 2,
  },
  {
    id: 2,
    name: "Coinbase Institutional",
    assets: [
      { symbol: "BTC", amount: "85,000", value: "$5.1B", change: "+1.8%" },
      { symbol: "ETH", amount: "800K", value: "$2.4B", change: "-0.8%" },
    ],
    totalValue: "$7.5B",
    riskScore: 1,
  },
]

export default function PortfolioTrackingPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-light mb-8">Portfolio Tracking</h1>
      
      <div className="grid gap-6">
        {mockPortfolios.map((portfolio) => (
          <Card key={portfolio.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{portfolio.name}</CardTitle>
                <div className="text-sm text-gray-500">
                  Total Value: {portfolio.totalValue}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {portfolio.assets.map((asset) => (
                  <div key={asset.symbol} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">{asset.symbol}</div>
                      <div className="text-sm">
                        {asset.amount} ({asset.value})
                      </div>
                    </div>
                    <Progress value={parseFloat(asset.change)} className="h-2" />
                    <div className="text-sm text-gray-500">
                      {asset.change} change
                    </div>
                  </div>
                ))}
              </div>
              
              <Table className="mt-6">
                <TableHeader>
                  <TableRow>
                    <TableHead>Asset</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Value</TableHead>
                    <TableHead>24h Change</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {portfolio.assets.map((asset) => (
                    <TableRow key={asset.symbol}>
                      <TableCell className="font-medium">{asset.symbol}</TableCell>
                      <TableCell>{asset.amount}</TableCell>
                      <TableCell>{asset.value}</TableCell>
                      <TableCell className={asset.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
                        {asset.change}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
} 