"use client"

import { WhaleTable } from "@/components/whale-table"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Whale Transactions
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Track large blockchain transactions in real-time
          </p>
        </div>
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow dark:border-gray-800 dark:bg-gray-800">
          <WhaleTable />
        </div>
      </div>
    </main>
  )
}
