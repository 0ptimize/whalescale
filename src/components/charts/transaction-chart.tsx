"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface TransactionChartProps {
  data: Array<{
    date: string
    btc: number
    eth: number
  }>
}

export function TransactionChart({ data }: TransactionChartProps) {
  return (
    <div className="h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="btc" stroke="#8884d8" name="BTC" />
          <Line type="monotone" dataKey="eth" stroke="#82ca9d" name="ETH" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
} 