"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useBlockchainUtils } from "@/lib/blockchainUtils"
import { toast } from "@/components/ui/sonner"
import { ethers } from "ethers"
import { getContract } from "@/lib/blockchainUtils"

interface StakeDashboardProps {
  onUserBalanceChange?: (balance: string) => void
  onTopStakeChange?: (stake: string) => void
}

export const StakeDashboard = ({ onUserBalanceChange, onTopStakeChange }: StakeDashboardProps) => {
  // Dialog open state
  const [isStakeDialogOpen, setIsStakeDialogOpen] = useState(false)
  const [isWithdrawDialogOpen, setIsWithdrawDialogOpen] = useState(false)
  const [userBalance, setUserBalance] = useState("0.0")
  const [topStake, setTopStake] = useState("0.0")
  const [topStaker, setTopStaker] = useState("0x0000...0000")
  const [stakeAmount, setStakeAmount] = useState("")
  const [withdrawAmount, setWithdrawAmount] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [arenaWalletAddress, setArenaWalletAddress] = useState<string | null>(null)

  // Listen for wallet changes from Arena SDK
  useEffect(() => {
    if (window.arenaAppStoreSdk) {
      window.arenaAppStoreSdk.on('walletChanged', ({ address }) => {
        setArenaWalletAddress(address)
      })
    }
  }, [])

  // Replace address and isConnected with Arena wallet
  const address = arenaWalletAddress
  const isConnected = !!arenaWalletAddress

  // Fetch AVAX balance using Arena SDK
  const fetchArenaBalance = async () => {
    if (!window.arenaAppStoreSdk?.provider || !arenaWalletAddress) return "0.0"
    try {
      const balanceHex = await window.arenaAppStoreSdk.provider.request({
        method: 'eth_getBalance',
        params: [arenaWalletAddress, 'latest']
      })
      return (Number.parseFloat(parseInt(balanceHex, 16) / 1e18 + "")).toFixed(2)
    } catch (e) {
      return "0.0"
    }
  }

  // Update user balance using Arena SDK
  useEffect(() => {
    let isMounted = true
    const updateBalance = async () => {
      if (!isConnected) return
      setUserBalance("Loading...")
      const bal = await fetchArenaBalance()
      if (isMounted) setUserBalance(bal)
    }
    updateBalance()
    return () => { isMounted = false }
  }, [arenaWalletAddress])

  // Use a ref to track if data has been fetched
  const dataFetched = useRef(false)

  const { getHighestStaker, getStakedBalance, getNetwork } = useBlockchainUtils()

  // Helper to get Arena provider signer
  const getArenaSigner = () => {
    if (window.arenaAppStoreSdk?.provider && address) {
      return new ethers.providers.Web3Provider(window.arenaAppStoreSdk.provider).getSigner(address)
    }
    return null
  }

  // ========== STAKING OPERATIONS (Arena SDK) ==========
  const stakeTokens = async (amount: string) => {
    if (!isConnected) {
      toast("Wallet not connected")
      return false
    }
    try {
      const signer = getArenaSigner()
      if (!signer) throw new Error("No signer available")
      const contract = getContract(signer)
      const tx = await contract.stakeTokens({
        value: ethers.utils.parseEther(amount),
        gasLimit: 300000,
        gasPrice: ethers.utils.parseUnits("1", "gwei"),
      })
      await tx.wait()
      console.log("Staking transaction:", tx.hash)
      return true
    } catch (error) {
      console.error("Error staking tokens:", error)
      return false
    }
  }

  const withdrawTokens = async (amount: string) => {
    if (!isConnected) {
      toast("Wallet not connected")
      return false
    }
    try {
      const signer = getArenaSigner()
      if (!signer) throw new Error("No signer available")
      const contract = getContract(signer)
      const tx = await contract.withdrawTokens(ethers.utils.parseEther(amount), {
        gasLimit: 300000,
        gasPrice: ethers.utils.parseUnits("1", "gwei"),
      })
      await tx.wait()
      console.log("Withdrawal transaction:", tx.hash)
      return true
    } catch (error) {
      console.error("Error withdrawing tokens:", error)
      return false
    }
  }

  // Update to poll every 5 seconds and replace DOT with AVAX
  useEffect(() => {
    let isMounted = true
    let intervalId: NodeJS.Timeout | null = null

    const fetchData = async () => {
      if (!isConnected || !address) return

      try {
        // Only show loading state on initial fetch
        if (!dataFetched.current) {
          setUserBalance("Loading...")
          setTopStaker("Loading...")
          setTopStake("Loading...")
        }

        // Get user's staked balance
        const balance = await fetchArenaBalance()
        if (isMounted) {
          // Round to 2 decimal places
          setUserBalance(Number.parseFloat(balance).toFixed(2))
        }

        // Get highest staker and their stake
        const highest = await getHighestStaker()
        if (highest && highest !== ethers.constants.AddressZero && isMounted) {
          const short = `${highest.slice(0, 6)}...${highest.slice(-4)}`
          setTopStaker(short)

          const stake = await getStakedBalance(highest)
          if (isMounted) {
            // Round to 2 decimal places
            setTopStake(Number.parseFloat(stake).toFixed(2))
          }
        } else if (isMounted) {
          setTopStaker("0x0000...0000")
          setTopStake("0.0")
        }

        // Mark data as fetched
        dataFetched.current = true
      } catch (error) {
        console.error("Error fetching stake data:", error)
        if (isMounted) {
          // Set error states or fallback values
          if (userBalance === "Loading...") setUserBalance("0.0")
          if (topStaker === "Loading...") setTopStaker("0x0000...0000")
          if (topStake === "Loading...") setTopStake("0.0")
        }
      }
    }

    // Fetch data immediately
    fetchData()

    // Set up interval to refresh data every 5 seconds
    intervalId = setInterval(fetchData, 5000)

    return () => {
      isMounted = false
      if (intervalId) clearInterval(intervalId)
    }
  }, [isConnected, address, getHighestStaker, getStakedBalance])

  // Callbacks for parent component
  useEffect(() => {
    if (onUserBalanceChange) onUserBalanceChange(userBalance)
  }, [userBalance, onUserBalanceChange])

  useEffect(() => {
    if (onTopStakeChange) onTopStakeChange(topStake)
  }, [topStake, onTopStakeChange])

  const handleStake = async () => {
    if (!isConnected || !address) {
      toast("Please connect your wallet first")
      return
    }

    if (!stakeAmount || Number.parseFloat(stakeAmount) <= 0) {
      toast("Please enter a valid amount")
      return
    }

    setIsLoading(true)
    try {
      const success = await stakeTokens(stakeAmount)
      if (success) {
        toast.success(`Successfully staked ${stakeAmount} AVAX`)
        // Optimistically update balances
        setIsStakeDialogOpen(false)
        setStakeAmount("")
        const newBalance = (Number.parseFloat(userBalance) + Number.parseFloat(stakeAmount)).toFixed(2)
        setUserBalance(newBalance)
        // Update top stake if needed
        if (Number.parseFloat(newBalance) > Number.parseFloat(topStake)) {
          const short = `${address?.slice(0, 6)}...${address?.slice(-4)}`
          setTopStaker(short)
          setTopStake(newBalance)
        }
      } else {
        toast.error("Staking failed")
      }
    } catch (error) {
      toast.error("An error occurred while staking")
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleWithdraw = async () => {
    if (!isConnected || !address) {
      toast("Please connect your wallet first")
      return
    }

    if (!withdrawAmount || Number.parseFloat(withdrawAmount) <= 0) {
      toast("Please enter a valid amount")
      return
    }

    if (Number.parseFloat(withdrawAmount) > Number.parseFloat(userBalance)) {
      toast.error("Insufficient balance")
      return
    }

    setIsLoading(true)
    try {
      const success = await withdrawTokens(withdrawAmount)
      if (success) {
        toast.success(`Successfully withdrawn ${withdrawAmount} AVAX`)
        setWithdrawAmount("")
        setIsWithdrawDialogOpen(false)
        // Optimistically update balances
        const newBalanceW = (Number.parseFloat(userBalance) - Number.parseFloat(withdrawAmount)).toFixed(2)
        setUserBalance(newBalanceW)
        // Update top stake if this user was controller
        const shortAddr = `${address?.slice(0, 6)}...${address?.slice(-4)}`
        if (topStaker === shortAddr) {
          setTopStake(newBalanceW)
        }
      } else {
        toast.error("Withdrawal failed")
      }
    } catch (error) {
      toast.error("An error occurred while withdrawing")
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="neo-card h-full">
      <div className="p-2 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-sm font-bold mb-1 flex items-center">
            Stake Dashboard <span className="text-[10px] text-sky-400 ml-1">({getNetwork()})</span>
          </h3>

          <div className="space-y-0.5">
            <div className="flex justify-between items-center">
              <span className="text-xs text-muted-foreground">Your Stake:</span>
              <span className="text-xs font-bold text-sky-400">
                {userBalance === "Loading..." ? (
                  <span className="animate-pulse">Loading...</span>
                ) : (
                  `${userBalance} AVAX`
                )}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-xs text-muted-foreground">Top Stake:</span>
              <span className="text-xs font-bold text-sky-400">{topStake} AVAX</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-xs text-muted-foreground">Controller:</span>
              <span className="text-xs font-mono text-sky-400">{topStaker}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-1 mt-1">
          <Dialog open={isStakeDialogOpen} onOpenChange={setIsStakeDialogOpen}>
            <DialogTrigger asChild>
              <Button className="neo-button h-7 text-xs py-0" disabled={!isConnected}>
                Stake More
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Stake AVAX Tokens</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Amount to Stake</label>
                  <Input
                    type="number"
                    placeholder="Enter AVAX amount"
                    value={stakeAmount}
                    onChange={(e) => setStakeAmount(e.target.value)}
                  />
                </div>
                <Button onClick={handleStake} className="w-full neo-button" disabled={isLoading || !stakeAmount}>
                  {isLoading ? "Processing..." : "Confirm Stake"}
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog open={isWithdrawDialogOpen} onOpenChange={setIsWithdrawDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="border-sky-400 h-7 text-xs py-0" disabled={!isConnected}>
                Withdraw
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Withdraw AVAX Tokens</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Amount to Withdraw</label>
                  <Input
                    type="number"
                    placeholder="Enter AVAX amount"
                    value={withdrawAmount}
                    onChange={(e) => setWithdrawAmount(e.target.value)}
                  />
                </div>
                <Button onClick={handleWithdraw} className="w-full neo-button" disabled={isLoading || !withdrawAmount}>
                  {isLoading ? "Processing..." : "Confirm Withdrawal"}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </Card>
  )
}
