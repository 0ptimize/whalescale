"use client"

import { formatDistanceToNow } from "date-fns"
import { Bitcoin } from "lucide-react"

interface Transaction {
  blockchain: "BTC" | "ETH"
  from: string
  to: string
  amount: number
  entity: string
  time: Date
}

const mockTransactions: Transaction[] = [
  {
    blockchain: "BTC",
    from: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
    to: "3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5",
    amount: 1000,
    entity: "Binance",
    time: new Date(),
  },
  {
    blockchain: "ETH",
    from: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
    to: "0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed",
    amount: 5000,
    entity: "Coinbase",
    time: new Date(Date.now() - 1000 * 60 * 5),
  },
]

export function WhaleTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-700">
            <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Blockchain
            </th>
            <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
              From
            </th>
            <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
              To
            </th>
            <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Amount
            </th>
            <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Entity
            </th>
            <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Time
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {mockTransactions.map((tx, i) => (
            <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700">
              <td className="whitespace-nowrap px-6 py-4">
                <div className="flex items-center">
                  {tx.blockchain === "BTC" ? (
                    <Bitcoin className="h-5 w-5 text-orange-500" />
                  ) : (
                    <svg
                      className="h-5 w-5 text-blue-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2L2 7L12 12L22 7L12 2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 17L12 22L22 17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 12L12 17L22 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                  <span className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                    {tx.blockchain}
                  </span>
                </div>
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <div className="flex items-center">
                  <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {tx.from.slice(0, 6)}...{tx.from.slice(-4)}
                  </div>
                  <button className="ml-2 text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5H6V3H4v2H2v2h2v2h2V7h2V5zm10 0h-2V3h-2v2h-2v2h2v2h2V7h2V5zM8 15H6v-2H4v2H2v2h2v2h2v-2h2v-2zm10 0h-2v-2h-2v2h-2v2h2v2h2v-2h2v-2z" />
                    </svg>
                  </button>
                </div>
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <div className="flex items-center">
                  <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {tx.to.slice(0, 6)}...{tx.to.slice(-4)}
                  </div>
                  <button className="ml-2 text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5H6V3H4v2H2v2h2v2h2V7h2V5zm10 0h-2V3h-2v2h-2v2h2v2h2V7h2V5zM8 15H6v-2H4v2H2v2h2v2h2v-2h2v-2zm10 0h-2v-2h-2v2h-2v2h2v2h2v-2h2v-2z" />
                    </svg>
                  </button>
                </div>
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {tx.amount.toLocaleString()} {tx.blockchain}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  ${(tx.amount * (tx.blockchain === "BTC" ? 50000 : 3000)).toLocaleString()}
                </div>
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <div className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                  {tx.entity}
                </div>
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {formatDistanceToNow(tx.time, { addSuffix: true })}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
} 