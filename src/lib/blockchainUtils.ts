"use client"

import { useState, useCallback, useEffect } from "react"

// Contract addresses for Avalanche networks
const MAINNET_CONTRACT_ADDRESS = "0xB3f57e8fc33f61Ce464a9c287f34EF3FD422B1ae"
const TESTNET_CONTRACT_ADDRESS = "0xfd275143fAbFAb2c4bE8f0d51266e8896B276b3b"

// Helper to get the correct contract address based on current chain
export const getContractAddress = (chainId: number | string | null) => {
  if (chainId === 43113 || chainId === "43113") return TESTNET_CONTRACT_ADDRESS
  return MAINNET_CONTRACT_ADDRESS
}

// Full ABI based on the DroidHubContract
const ABI = [
  // Contract ABI for DroidHub on Avalanche
  { "inputs": [ { "internalType": "string","name": "robotId","type": "string" } ],"name": "addRobot","outputs": [],"stateMutability": "nonpayable","type": "function" },
  { "inputs": [],"name": "collectFees","outputs": [],"stateMutability": "nonpayable","type": "function" },
  { "inputs": [ { "internalType": "uint256","name": "_initialFeePerMinute","type": "uint256" } ],"stateMutability": "nonpayable","type": "constructor" },
  { "inputs": [ { "internalType": "address","name": "owner","type": "address" } ],"name": "OwnableInvalidOwner","type": "error" },
  { "inputs": [ { "internalType": "address","name": "account","type": "address" } ],"name": "OwnableUnauthorizedAccount","type": "error" },
  { "anonymous": false,"inputs": [ { "indexed": true,"internalType": "address","name": "controller","type": "address" },{ "indexed": false,"internalType": "string","name": "robotId","type": "string" },{ "indexed": false,"internalType": "string","name": "command","type": "string" } ],"name": "CommandSent","type": "event" },
  { "anonymous": false,"inputs": [ { "indexed": true,"internalType": "address","name": "oldController","type": "address" },{ "indexed": true,"internalType": "address","name": "newController","type": "address" } ],"name": "ControllerChanged","type": "event" },
  { "anonymous": false,"inputs": [ { "indexed": false,"internalType": "bool","name": "stopped","type": "bool" } ],"name": "EmergencyStatusChanged","type": "event" },
  { "anonymous": false,"inputs": [ { "indexed": true,"internalType": "address","name": "controller","type": "address" },{ "indexed": false,"internalType": "uint256","name": "amount","type": "uint256" },{ "indexed": false,"internalType": "uint256","name": "timestamp","type": "uint256" } ],"name": "FeeCollected","type": "event" },
  { "anonymous": false,"inputs": [ { "indexed": false,"internalType": "uint256","name": "oldFee","type": "uint256" },{ "indexed": false,"internalType": "uint256","name": "newFee","type": "uint256" } ],"name": "FeeUpdated","type": "event" },
  { "anonymous": false,"inputs": [ { "indexed": true,"internalType": "address","name": "owner","type": "address" },{ "indexed": false,"internalType": "uint256","name": "amount","type": "uint256" } ],"name": "FeesWithdrawn","type": "event" },
  { "inputs": [],"name": "forceFeeCollection","outputs": [],"stateMutability": "nonpayable","type": "function" },
  { "anonymous": false,"inputs": [ { "indexed": true,"internalType": "address","name": "previousOwner","type": "address" },{ "indexed": true,"internalType": "address","name": "newOwner","type": "address" } ],"name": "OwnershipTransferred","type": "event" },
  { "inputs": [],"name": "renounceOwnership","outputs": [],"stateMutability": "nonpayable","type": "function" },
  { "anonymous": false,"inputs": [ { "indexed": false,"internalType": "string","name": "robotId","type": "string" } ],"name": "RobotAdded","type": "event" },
  { "anonymous": false,"inputs": [ { "indexed": false,"internalType": "string","name": "robotId","type": "string" },{ "indexed": false,"internalType": "int256","name": "lat","type": "int256" },{ "indexed": false,"internalType": "int256","name": "lng","type": "int256" } ],"name": "RobotLocationUpdated","type": "event" },
  { "anonymous": false,"inputs": [ { "indexed": false,"internalType": "string","name": "robotId","type": "string" },{ "indexed": false,"internalType": "uint256","name": "batteryLevel","type": "uint256" },{ "indexed": false,"internalType": "uint256","name": "uptime","type": "uint256" } ],"name": "RobotStatusUpdated","type": "event" },
  { "inputs": [ { "internalType": "string","name": "robotId","type": "string" } ],"name": "sendCommand","outputs": [],"stateMutability": "nonpayable","type": "function" },
  { "inputs": [ { "internalType": "uint256","name": "newFee","type": "uint256" } ],"name": "setBotFee","outputs": [],"stateMutability": "nonpayable","type": "function" },
  { "inputs": [ { "internalType": "bool","name": "stopped","type": "bool" } ],"name": "setEmergencyStop","outputs": [],"stateMutability": "nonpayable","type": "function" },
  { "anonymous": false,"inputs": [ { "indexed": true,"internalType": "address","name": "user","type": "address" },{ "indexed": false,"internalType": "uint256","name": "amount","type": "uint256" } ],"name": "StakeAdded","type": "event" },
  { "inputs": [],"name": "stakeTokens","outputs": [],"stateMutability": "payable","type": "function" },
  { "anonymous": false,"inputs": [ { "indexed": true,"internalType": "address","name": "user","type": "address" },{ "indexed": false,"internalType": "uint256","name": "amount","type": "uint256" } ],"name": "StakeWithdrawn","type": "event" },
  { "inputs": [ { "internalType": "address","name": "newOwner","type": "address" } ],"name": "transferOwnership","outputs": [],"stateMutability": "nonpayable","type": "function" },
  { "stateMutability": "receive","type": "receive" },
  { "inputs": [ { "internalType": "string","name": "robotId","type": "string" },{ "internalType": "int256","name": "lat","type": "int256" },{ "internalType": "int256","name": "lng","type": "int256" } ],"name": "updateRobotLocation","outputs": [],"stateMutability": "nonpayable","type": "function" },
  { "inputs": [ { "internalType": "string","name": "robotId","type": "string" },{ "internalType": "uint256","name": "batteryLevel","type": "uint256" },{ "internalType": "uint256","name": "uptime","type": "uint256" },{ "internalType": "bool","name": "active","type": "bool" } ],"name": "updateRobotStatus","outputs": [],"stateMutability": "nonpayable","type": "function" },
  { "inputs": [],"name": "withdrawFees","outputs": [],"stateMutability": "nonpayable","type": "function" },
  { "inputs": [ { "internalType": "uint256","name": "amount","type": "uint256" } ],"name": "withdrawTokens","outputs": [],"stateMutability": "nonpayable","type": "function" },
  // View functions
  { "inputs": [],"name": "accumulatedFees","outputs": [ { "internalType": "uint256","name": "","type": "uint256" } ],"stateMutability": "view","type": "function" },
  { "inputs": [],"name": "botFeePerMinute","outputs": [ { "internalType": "uint256","name": "","type": "uint256" } ],"stateMutability": "view","type": "function" },
  { "inputs": [],"name": "currentController","outputs": [ { "internalType": "address","name": "","type": "address" } ],"stateMutability": "view","type": "function" },
  { "inputs": [],"name": "emergencyStop","outputs": [ { "internalType": "bool","name": "","type": "bool" } ],"stateMutability": "view","type": "function" },
  { "inputs": [],"name": "getAllRobotIds","outputs": [ { "internalType": "string[]","name": "","type": "string[]" } ],"stateMutability": "view","type": "function" },
  { "inputs": [],"name": "getBotFee","outputs": [ { "internalType": "uint256","name": "","type": "uint256" } ],"stateMutability": "view","type": "function" },
  { "inputs": [],"name": "getHighestStaker","outputs": [ { "internalType": "address","name": "","type": "address" } ],"stateMutability": "view","type": "function" },
  { "inputs": [],"name": "getMinutesSinceLastCollection","outputs": [ { "internalType": "uint256","name": "","type": "uint256" } ],"stateMutability": "view","type": "function" },
  { "inputs": [ { "internalType": "string","name": "robotId","type": "string" } ],"name": "getRobotBatteryLevel","outputs": [ { "internalType": "uint256","name": "","type": "uint256" } ],"stateMutability": "view","type": "function" },
  { "inputs": [ { "internalType": "string","name": "robotId","type": "string" } ],"name": "getRobotLocation","outputs": [ { "internalType": "int256","name": "lat","type": "int256" },{ "internalType": "int256","name": "lng","type": "int256" } ],"stateMutability": "view","type": "function" },
  { "inputs": [ { "internalType": "string","name": "robotId","type": "string" } ],"name": "getRobotUptime","outputs": [ { "internalType": "uint256","name": "","type": "uint256" } ],"stateMutability": "view","type": "function" },
  { "inputs": [ { "internalType": "address","name": "user","type": "address" } ],"name": "getStakedBalance","outputs": [ { "internalType": "uint256","name": "","type": "uint256" } ],"stateMutability": "view","type": "function" },
  { "inputs": [ { "internalType": "uint256","name": "count","type": "uint256" } ],"name": "getStakingLeaderboard","outputs": [ { "internalType": "address[]","name": "addresses","type": "address[]" },{ "internalType": "uint256[]","name": "amounts","type": "uint256[]" } ],"stateMutability": "view","type": "function" },
  { "inputs": [ { "internalType": "address","name": "user","type": "address" } ],"name": "getTimeRemaining","outputs": [ { "internalType": "uint256","name": "","type": "uint256" } ],"stateMutability": "view","type": "function" },
  { "inputs": [],"name": "getTotalStaked","outputs": [ { "internalType": "uint256","name": "","type": "uint256" } ],"stateMutability": "view","type": "function" },
  { "inputs": [ { "internalType": "address","name": "user","type": "address" } ],"name": "isController","outputs": [ { "internalType": "bool","name": "","type": "bool" } ],"stateMutability": "view","type": "function" },
  { "inputs": [],"name": "lastControllerUpdate","outputs": [ { "internalType": "uint256","name": "","type": "uint256" } ],"stateMutability": "view","type": "function" },
  { "inputs": [],"name": "lastFeeCollection","outputs": [ { "internalType": "uint256","name": "","type": "uint256" } ],"stateMutability": "view","type": "function" },
  { "inputs": [],"name": "owner","outputs": [ { "internalType": "address","name": "","type": "address" } ],"stateMutability": "view","type": "function" },
  { "inputs": [ { "internalType": "uint256","name": "","type": "uint256" } ],"name": "robotIds","outputs": [ { "internalType": "string","name": "","type": "string" } ],"stateMutability": "view","type": "function" },
  { "inputs": [ { "internalType": "string","name": "","type": "string" } ],"name": "robots","outputs": [ { "internalType": "string","name": "id","type": "string" },{ "internalType": "int256","name": "locationLat","type": "int256" },{ "internalType": "int256","name": "locationLng","type": "int256" },{ "internalType": "uint256","name": "batteryLevel","type": "uint256" },{ "internalType": "uint256","name": "uptime","type": "uint256" },{ "internalType": "uint256","name": "lastUpdate","type": "uint256" },{ "internalType": "bool","name": "active","type": "bool" }],"stateMutability": "view","type": "function" },
  { "inputs": [ { "internalType": "address","name": "","type": "address" } ],"name": "stakedBalances","outputs": [ { "internalType": "uint256","name": "","type": "uint256" } ],"stateMutability": "view","type": "function" },
  { "inputs": [ { "internalType": "uint256","name": "","type": "uint256" } ],"name": "stakers","outputs": [ { "internalType": "address","name": "","type": "address" } ],"stateMutability": "view","type": "function" },
  { "inputs": [],"name": "totalStaked","outputs": [ { "internalType": "uint256","name": "","type": "uint256" } ],"stateMutability": "view","type": "function" }
]

// Arena wallet hook
export const useArenaWallet = () => {
  const [address, setAddress] = useState<string | null>(null)
  const [isConnected, setIsConnected] = useState(false)
  const [provider, setProvider] = useState<any>(null)
  const [chainId, setChainId] = useState<string | null>(null)
  const [arenaLoaded, setArenaLoaded] = useState(false)

  // Reown projectId for Arena SDK
  const projectId = '60d1bdef75d2389275fcbf3d875b652a'

  useEffect(() => {
    let interval: any;
    function checkAndInit() {
      const sdk = (window as any).arenaAppStoreSdk;
      if (!sdk) return;
      setArenaLoaded(true);
      // Get initial state
      sdk.getAccounts?.().then((accounts: string[]) => {
        setAddress(accounts?.[0] || null)
        setIsConnected(!!accounts?.[0])
      })
      setProvider(sdk.getProvider?.() || sdk.provider || null)
      setChainId(sdk.chainId || null)
      // Listen for account/chain changes
      const onAccountsChanged = (accounts: string[]) => {
        setAddress(accounts?.[0] || null)
        setIsConnected(!!accounts?.[0])
      }
      const onChainChanged = (cid: string) => setChainId(cid)
      sdk.on?.("accountsChanged", onAccountsChanged)
      sdk.on?.("chainChanged", onChainChanged)
      return () => {
        sdk.off?.("accountsChanged", onAccountsChanged)
        sdk.off?.("chainChanged", onChainChanged)
      }
    }
    if (!(window as any).arenaAppStoreSdk) {
      interval = setInterval(checkAndInit, 100)
      return () => clearInterval(interval)
    } else {
      return checkAndInit();
    }
  }, [])

  // Connect wallet
  const connectWallet = async () => {
    // Wait for Arena SDK to be loaded
    if (!arenaLoaded) {
      // Wait up to 2 seconds for SDK to load
      for (let i = 0; i < 20; i++) {
        if ((window as any).arenaAppStoreSdk) break;
        await new Promise(res => setTimeout(res, 100));
      }
    }
    const sdk = (window as any).arenaAppStoreSdk
    if (!sdk) throw new Error('Arena SDK not loaded on window.arenaAppStoreSdk')
    if (typeof sdk.connectWallet !== 'function') throw new Error('Arena SDK connectWallet method not available')
    let accounts
    try {
      accounts = await sdk.connectWallet({ projectId })
    } catch (err) {
      throw new Error('Arena connectWallet error: ' + (err?.message || err))
    }
    if (!accounts || !accounts[0]) throw new Error('Arena wallet connect: No accounts returned')
    setAddress(accounts[0])
    setIsConnected(true)
    setProvider(sdk.getProvider?.() || sdk.provider || null)
    setChainId(sdk.chainId || null)
  }

  return { address, isConnected, provider, chainId, connectWallet, arenaLoaded }
}

export const useBlockchainUtils = () => {
  const { address, isConnected, provider, chainId, connectWallet } = useArenaWallet()
  const [cachedLeaderboard, setCachedLeaderboard] = useState<any[]>([])

  // ========== STAKING OPERATIONS ==========

  const stakeTokens = async (amount: string) => {
    if (!isConnected) {
      console.error("Wallet not connected")
      return false
    }
    try {
      const sdk = (window as any).arenaAppStoreSdk
      if (!sdk) throw new Error("Arena SDK not loaded")
      const tx = await sdk.stakeTokens?.(amount)
      if (tx?.wait) await tx.wait()
      console.log("Staking transaction:", tx?.hash || tx)
      return true
    } catch (error) {
      console.error("Error staking tokens:", error)
      return false
    }
  }

  const withdrawTokens = async (amount: string) => {
    if (!isConnected) {
      console.error("Wallet not connected")
      return false
    }
    try {
      const sdk = (window as any).arenaAppStoreSdk
      if (!sdk) throw new Error("Arena SDK not loaded")
      const tx = await sdk.withdrawTokens?.(amount)
      if (tx?.wait) await tx.wait()
      console.log("Withdrawal transaction:", tx?.hash || tx)
      return true
    } catch (error) {
      console.error("Error withdrawing tokens:", error)
      return false
    }
  }

  // ========== BALANCE ==========

  const getUserBalance = useCallback(async () => {
    if (!isConnected || !address) {
      return "0.0"
    }
    try {
      const sdk = (window as any).arenaAppStoreSdk
      if (!sdk) throw new Error("Arena SDK not loaded")
      const balance = await sdk.getStakedBalance?.(address)
      return balance?.toString?.() || balance || "0.0"
    } catch (error) {
      console.error("Error getting user balance:", error)
      return "0.0"
    }
  }, [isConnected, address])

  // ========== LEADERBOARD ========== (SDK must provide this, else placeholder)
  const getLeaderboard = async () => {
    try {
      const sdk = (window as any).arenaAppStoreSdk
      if (sdk?.getStakingLeaderboard) {
        const leaderboard = await sdk.getStakingLeaderboard(5)
        setCachedLeaderboard(leaderboard)
        return leaderboard
      }
      // fallback placeholder
      return cachedLeaderboard
    } catch (error) {
      console.error("Error fetching leaderboard:", error)
      return cachedLeaderboard
    }
  }

  // ========== TOP STAKER & BALANCE ========== (SDK must provide this, else placeholder)
  const getHighestStaker = useCallback(async () => {
    try {
      const sdk = (window as any).arenaAppStoreSdk
      if (sdk?.getHighestStaker) {
        return await sdk.getHighestStaker()
      }
      return null
    } catch (error) {
      console.error("Error getting highest staker:", error)
      return null
    }
  }, [])

  const getStakedBalance = useCallback(async (userAddress: string) => {
    try {
      const sdk = (window as any).arenaAppStoreSdk
      if (sdk?.getStakedBalance) {
        const balance = await sdk.getStakedBalance(userAddress)
        return balance?.toString?.() || balance || "0.0"
      }
      return "0.0"
    } catch (error) {
      console.error("Error getting staked balance:", error)
      return "0.0"
    }
  }, [])

  // ========== CONNECT WALLET BUTTON ==========
  // Use connectWallet for UI button

  // ========== CONTROLLER ========== (for AppPage)
  const getCurrentController = useCallback(async () => {
    try {
      const sdk = (window as any).arenaAppStoreSdk
      if (sdk?.currentController) {
        return await sdk.currentController()
      }
      if (sdk?.getCurrentController) {
        return await sdk.getCurrentController()
      }
      return "0x0000000000000000000000000000000000000000"
    } catch (error) {
      console.error("Error getting current controller:", error)
      return "0x0000000000000000000000000000000000000000"
    }
  }, [])

  // ========== BOT FEE ========== (for AppPage)
  const getBotFee = useCallback(async () => {
    try {
      const sdk = (window as any).arenaAppStoreSdk
      if (sdk?.getBotFee) {
        const fee = await sdk.getBotFee()
        // Convert from wei if needed (assume AVAX has 18 decimals)
        if (typeof fee === "string" || typeof fee === "number") {
          const val = typeof fee === "string" ? parseFloat(fee) : fee
          // If value is very large, assume it's in wei
          if (val > 1e10) return (val / 1e18).toString()
          return val.toString()
        }
        return fee?.toString?.() || "0.0"
      }
      return "0.0"
    } catch (error) {
      console.error("Error getting bot fee:", error)
      return "0.0"
    }
  }, [])

  return {
    stakeTokens,
    withdrawTokens,
    getUserBalance,
    getLeaderboard,
    getHighestStaker,
    getStakedBalance,
    connectWallet,
    address,
    isConnected,
    provider,
    chainId,
    getNetwork, // add getNetwork to the returned object
    getCurrentController, // add for AppPage
    getBotFee, // add for AppPage
    // ...add more Arena SDK methods as needed...
  }
}

// Minimal getContract export for compatibility (returns address and ABI)
export const getContract = (providerOrSigner?: any) => {
  const sdk = (window as any).arenaAppStoreSdk
  const chainId = sdk?.chainId || 43114
  const contractAddress = getContractAddress(chainId)
  return { contractAddress, ABI, providerOrSigner }
}

// Add getNetwork export for UI compatibility
export const getNetwork = () => {
  const sdk = (window as any).arenaAppStoreSdk
  const chainId = sdk?.chainId || 43114
  return chainId == 43113 || chainId == "43113" ? "TestNet" : "MainNet"
}

// DEBUG: Manual Arena connect handler for troubleshooting
export function useArenaConnectDebug() {
  return async function arenaConnectDebug() {
    if (!(window as any).arenaAppStoreSdk) {
      alert('Arena SDK not loaded!');
      return;
    }
    if (typeof (window as any).arenaAppStoreSdk.connectWallet !== 'function') {
      alert('Arena SDK connectWallet not available!');
      return;
    }
    try {
      const accounts = await (window as any).arenaAppStoreSdk.connectWallet({ projectId: '60d1bdef75d2389275fcbf3d875b652a' });
      alert('Connected accounts: ' + JSON.stringify(accounts));
    } catch (e) {
      alert('Error connecting wallet: ' + (e?.message || e));
    }
  }
}

export default useBlockchainUtils
