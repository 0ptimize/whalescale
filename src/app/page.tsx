import { WhaleTable } from "@/components/whale-table"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-3xl font-bold tracking-tight text-transparent">
              Whale Transactions
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Track large cryptocurrency movements in real-time
            </p>
          </div>
        </div>

        <div className="rounded-xl border bg-white/80 shadow-lg backdrop-blur-sm dark:bg-slate-800/80">
          <WhaleTable />
        </div>
      </div>
    </div>
  )
}
