"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const mockEntities = [
  {
    id: 1,
    name: "Binance",
    type: "Exchange",
    riskScore: 2,
    lastActive: "2024-03-15",
    totalVolume: "$1.2B",
    transactions: 1245,
  },
  {
    id: 2,
    name: "Coinbase",
    type: "Exchange",
    riskScore: 1,
    lastActive: "2024-03-14",
    totalVolume: "$950M",
    transactions: 892,
  },
  {
    id: 3,
    name: "Unknown Whale #1",
    type: "Individual",
    riskScore: 5,
    lastActive: "2024-03-15",
    totalVolume: "$450M",
    transactions: 12,
  },
]

export default function EntityProfilesPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-light mb-8">Entity Profiles</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Known Entities</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Risk Score</TableHead>
                <TableHead>Last Active</TableHead>
                <TableHead>Total Volume</TableHead>
                <TableHead>Transactions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockEntities.map((entity) => (
                <TableRow key={entity.id}>
                  <TableCell className="font-medium">{entity.name}</TableCell>
                  <TableCell>{entity.type}</TableCell>
                  <TableCell>
                    <Badge variant={entity.riskScore <= 2 ? "default" : "destructive"}>
                      {entity.riskScore}/10
                    </Badge>
                  </TableCell>
                  <TableCell>{entity.lastActive}</TableCell>
                  <TableCell>{entity.totalVolume}</TableCell>
                  <TableCell>{entity.transactions}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
} 