"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TransactionChart } from "@/components/charts/transaction-chart"

const mockData = [
  { date: '2024-01', btc: 4000, eth: 2400 },
  { date: '2024-02', btc: 3000, eth: 1398 },
  { date: '2024-03', btc: 2000, eth: 9800 },
  { date: '2024-04', btc: 2780, eth: 3908 },
  { date: '2024-05', btc: 1890, eth: 4800 },
]

export default function TrendsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-light mb-8">Transaction Trends</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>24h Volume</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$124.5M</p>
            <p className="text-sm text-gray-500">+12.3% from yesterday</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Whales</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">42</p>
            <p className="text-sm text-gray-500">+5 from yesterday</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Average Transaction</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$2.96M</p>
            <p className="text-sm text-gray-500">+8.2% from yesterday</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Transaction Volume Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          <TransactionChart data={mockData} />
        </CardContent>
      </Card>
    </div>
  )
} 