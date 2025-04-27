import { WhaleTable } from "@/components/whale-table"

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Whale Transactions</h1>
        <p className="text-muted-foreground">
          Real-time tracking of large Bitcoin and Ethereum transactions
        </p>
      </div>

      <div className="rounded-lg border bg-card">
        <WhaleTable />
      </div>
    </div>
  )
}
