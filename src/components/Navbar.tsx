"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useAccount } from "wagmi"
import { Badge } from "@/components/ui/badge"
import { useBlockchainUtils, useArenaConnectDebug } from "@/lib/blockchainUtils"

export const Navbar = () => {
  const location = useLocation()
  const { address, isConnected, getUserBalance, getNetwork, connectWallet } = useBlockchainUtils()
  const [network, setNetwork] = useState<'MainNet' | 'TestNet'>(getNetwork())
  const [userBalance, setUserBalance] = useState("0.0")
  const arenaConnectDebug = useArenaConnectDebug();

  useEffect(() => {
    setNetwork(getNetwork())
    const handler = () => setNetwork(getNetwork())
    const sdk = (window as any).arenaAppStoreSdk
    sdk?.on?.('chainChanged', handler)
    return () => {
      sdk?.off?.('chainChanged', handler)
    }
  }, [getNetwork])

  useEffect(() => {
    let isMounted = true
    let intervalId: NodeJS.Timeout | null = null
    const fetchBalance = async () => {
      if (isConnected && address) {
        try {
          const balance = await getUserBalance()
          if (isMounted) setUserBalance(Number.parseFloat(balance).toFixed(2))
        } catch (error) {
          console.error("Error fetching user balance:", error)
        }
      } else {
        setUserBalance("0.0")
      }
    }
    fetchBalance()
    intervalId = setInterval(fetchBalance, 5000)
    return () => {
      isMounted = false
      if (intervalId) clearInterval(intervalId)
    }
  }, [isConnected, address, getUserBalance])

  const shortAddress = address ? `${address.slice(0, 6)}...${address.slice(-4)}` : null

  const handleConnectWallet = async () => {
    // Run debug logic in console
    if (arenaConnectDebug) await arenaConnectDebug();
    // Then run the normal connect
    if (connectWallet) await connectWallet();
  }

  return (
    <nav className="w-full border-b border-border bg-background/80 backdrop-blur-lg z-50 sticky top-0">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center gap-6">
          <Link to="/" className="font-bold text-lg tracking-tight text-sky-400">DroidHub</Link>
          <div className="flex gap-4 items-center">
            <Link
              to="/app"
              className={
                location.pathname === "/app"
                  ? "text-sky-400 font-semibold"
                  : "text-foreground/80 hover:text-sky-400 transition-colors"
              }
            >
              App
            </Link>
            <Link
              to="/docs"
              className={
                location.pathname === "/docs"
                  ? "text-sky-400 font-semibold"
                  : "text-foreground/80 hover:text-sky-400 transition-colors"
              }
            >
              Docs
            </Link>
            <a
              href="https://github.com/bonusducks777/droidhub/blob/main/README.md"
              className="text-foreground/80 hover:text-sky-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {isConnected && (
            <Badge variant="outline" className="border-sky-400 bg-sky-500/10 text-sky-400 text-sm px-3 py-1">
              {shortAddress} | Balance: {userBalance} AVAX
            </Badge>
          )}
          {!isConnected && (
            <Button className="neo-button" onClick={handleConnectWallet}>
              Connect Arena Wallet
            </Button>
          )}
        </div>
      </div>
    </nav>
  )
}
