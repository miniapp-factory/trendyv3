import { useMiniAppContext } from "@/components/context/miniapp-provider";
import { title, description } from "@/lib/metadata";

export default function Home() {
  const { walletAddress, connectWallet } = useMiniAppContext();

  return (
    <main className="flex flex-col gap-3 place-items-center px-4 py-8">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-muted-foreground">{description}</p>
      {walletAddress ? (
        <p className="text-green-600">Connected: {walletAddress}</p>
      ) : (
        <button
          onClick={connectWallet}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Connect Wallet
        </button>
      )}
    </main>
  );
}
