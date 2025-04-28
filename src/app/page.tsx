"use client"

import { WhaleTable } from "@/components/whale-table"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 pt-16 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Whale Transactions
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Track large blockchain transactions in real-time
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Volume (24h)</div>
              <div className="mt-1 text-2xl font-bold text-gray-900 dark:text-gray-100">$124.5M</div>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Active Whales</div>
              <div className="mt-1 text-2xl font-bold text-gray-900 dark:text-gray-100">42</div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-800">
          <div className="border-b border-gray-200 bg-gray-50 px-6 py-4 dark:border-gray-700 dark:bg-gray-700">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Recent Transactions</h2>
              <div className="flex items-center space-x-4">
                <button className="rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-900 hover:bg-gray-200 dark:bg-gray-600 dark:text-gray-100 dark:hover:bg-gray-500">
                  All
                </button>
                <button className="rounded-lg px-3 py-1.5 text-sm font-medium text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
                  BTC
                </button>
                <button className="rounded-lg px-3 py-1.5 text-sm font-medium text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
                  ETH
                </button>
              </div>
            </div>
          </div>
          <WhaleTable />
        </div>
      </div>
    </main>
  )
}
