"use client"

import { WhaleTable } from "@/components/whale-table"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900/50 dark:to-black" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-light tracking-tight text-gray-900 dark:text-white mb-6">
            Whalescale
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Real-time tracking of significant blockchain transactions
          </p>
          <div className="flex items-center justify-center gap-4">
            <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-900 transition-colors dark:bg-white dark:text-black dark:hover:bg-gray-100">
              View Dashboard
            </button>
            <button className="px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors dark:border-gray-700 dark:hover:bg-gray-900">
              Learn More <ArrowRight className="inline-block ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-sm">
              <h3 className="text-4xl font-light text-gray-900 dark:text-white mb-2">$124.5M</h3>
              <p className="text-gray-600 dark:text-gray-400">24h Volume</p>
            </div>
            <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-sm">
              <h3 className="text-4xl font-light text-gray-900 dark:text-white mb-2">42</h3>
              <p className="text-gray-600 dark:text-gray-400">Active Whales</p>
            </div>
            <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-sm">
              <h3 className="text-4xl font-light text-gray-900 dark:text-white mb-2">1.2K</h3>
              <p className="text-gray-600 dark:text-gray-400">Daily Alerts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transactions Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-light text-gray-900 dark:text-white mb-8">Recent Transactions</h2>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden">
            <WhaleTable />
          </div>
        </div>
      </section>
    </main>
  )
}
