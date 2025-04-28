import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { MobileThemeToggle } from "@/components/mobile-theme-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Whalescale - Track Whale Transactions",
  description: "Tracking whales on the blockchain",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-white dark:bg-black">
            <Navbar />
            <main className="container mx-auto px-4 py-8">{children}</main>
            <MobileThemeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
