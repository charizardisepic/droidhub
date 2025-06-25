import { Button } from "@/components/ui/button";
import { useBlockchainUtils } from "@/lib/blockchainUtils";

export const HeroSection = () => {
  const { isConnected, address, connectWallet } = useBlockchainUtils();
  const shortAddress = address ? `${address.slice(0, 6)}...${address.slice(-4)}` : null;

  return (
    <div className="relative overflow-hidden py-24 grid-pattern animate-fade-in">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl glow animate-pulse">
              Control the Bot.
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
              Stake AVAX. Outbid. Take command of real-world robotics.
            </p>
          </div>
          <div className="flex justify-center w-full mt-6 relative z-50">
            <div className="hover-scale relative z-50">
              {!isConnected ? (
                <Button className="neo-button" onClick={connectWallet}>
                  Connect Arena Wallet
                </Button>
              ) : (
                <span className="text-sky-400 font-mono text-sm">{shortAddress}</span>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-2/3 h-96 bg-sky-500/20 blur-[100px] rounded-full opacity-60 soft-pulse z-10"></div>
    </div>
  );
};
