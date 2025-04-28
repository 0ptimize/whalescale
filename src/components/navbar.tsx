"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, ChevronDown } from "lucide-react"
import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-xl font-bold">
            WHALESCALE
          </Link>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <div className="hidden md:flex md:items-center md:space-x-6">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm hover:text-gray-600 dark:hover:text-gray-300">
                Analytics <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/analytics/trends">Transaction Trends</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/analytics/patterns">Whale Patterns</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/analytics/market-impact">Market Impact</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm hover:text-gray-600 dark:hover:text-gray-300">
                Alerts <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/alerts/settings">Alert Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/alerts/history">Alert History</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/alerts/integrations">Integrations</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm hover:text-gray-600 dark:hover:text-gray-300">
                Entities <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/entities/profiles">Entity Profiles</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/entities/network">Entity Network</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/entities/risk">Risk Analysis</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm hover:text-gray-600 dark:hover:text-gray-300">
                Portfolio <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/portfolio/tracking">Portfolio Tracking</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/portfolio/analysis">Asset Analysis</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/portfolio/performance">Performance</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="border-t px-4 py-2 md:hidden">
          <div className="space-y-2">
            <div className="py-2">
              <Link
                href="/analytics/trends"
                className="block text-sm hover:text-gray-600 dark:hover:text-gray-300"
              >
                Analytics
              </Link>
              <div className="ml-4 mt-1 space-y-1">
                <Link
                  href="/analytics/trends"
                  className="block text-sm text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  Transaction Trends
                </Link>
                <Link
                  href="/analytics/patterns"
                  className="block text-sm text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  Whale Patterns
                </Link>
                <Link
                  href="/analytics/market-impact"
                  className="block text-sm text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  Market Impact
                </Link>
              </div>
            </div>

            <div className="py-2">
              <Link
                href="/alerts/settings"
                className="block text-sm hover:text-gray-600 dark:hover:text-gray-300"
              >
                Alerts
              </Link>
              <div className="ml-4 mt-1 space-y-1">
                <Link
                  href="/alerts/settings"
                  className="block text-sm text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  Alert Settings
                </Link>
                <Link
                  href="/alerts/history"
                  className="block text-sm text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  Alert History
                </Link>
                <Link
                  href="/alerts/integrations"
                  className="block text-sm text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  Integrations
                </Link>
              </div>
            </div>

            <div className="py-2">
              <Link
                href="/entities/profiles"
                className="block text-sm hover:text-gray-600 dark:hover:text-gray-300"
              >
                Entities
              </Link>
              <div className="ml-4 mt-1 space-y-1">
                <Link
                  href="/entities/profiles"
                  className="block text-sm text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  Entity Profiles
                </Link>
                <Link
                  href="/entities/network"
                  className="block text-sm text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  Entity Network
                </Link>
                <Link
                  href="/entities/risk"
                  className="block text-sm text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  Risk Analysis
                </Link>
              </div>
            </div>

            <div className="py-2">
              <Link
                href="/portfolio/tracking"
                className="block text-sm hover:text-gray-600 dark:hover:text-gray-300"
              >
                Portfolio
              </Link>
              <div className="ml-4 mt-1 space-y-1">
                <Link
                  href="/portfolio/tracking"
                  className="block text-sm text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  Portfolio Tracking
                </Link>
                <Link
                  href="/portfolio/analysis"
                  className="block text-sm text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  Asset Analysis
                </Link>
                <Link
                  href="/portfolio/performance"
                  className="block text-sm text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  Performance
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
} 