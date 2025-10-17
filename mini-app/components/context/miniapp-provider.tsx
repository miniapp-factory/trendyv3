"use client";

import { createContext, useContext, useEffect, useState } from "react";
import sdk, { Context } from "@farcaster/miniapp-sdk";
import { MiniAppSDK } from "@farcaster/miniapp-sdk/dist/types";

export interface MiniAppContext {
  sdk: MiniAppSDK;
  context: Context.MiniAppContext | undefined;
  isInMiniApp: boolean | undefined;
  walletAddress: string | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
}
const defaultSettings: MiniAppContext = {
  sdk,
  context: undefined,
  isInMiniApp: undefined,
  walletAddress: null,
  connectWallet: async () => {},
  disconnectWallet: () => {},
};
const MiniAppContext = createContext<MiniAppContext>(defaultSettings);

export function MiniAppProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<MiniAppContext>(defaultSettings);

  useEffect(() => {
    const ready = async () => {
      await Promise.all([
        sdk.context
          .then((context) =>
            setState((old) => ({ ...old, context }))
          )
          .catch(console.error),
        sdk
          .isInMiniApp()
          .then((isInMiniApp) =>
            setState((old) => ({ ...old, isInMiniApp }))
          )
          .catch(console.error),
      ]);

      await sdk.actions.ready().catch(console.error);
    };

    ready();
  }, []);

  const connectWallet = async () => {
    try {
      const address = await sdk.actions.requestWallet();
      setState((old) => ({ ...old, walletAddress: address }));
    } catch (e) {
      console.error(e);
    }
  };

  const disconnectWallet = () => {
    setState((old) => ({ ...old, walletAddress: null }));
  };

  return (
    <MiniAppContext.Provider value={{ ...state, connectWallet, disconnectWallet }}>
      {children}
    </MiniAppContext.Provider>
  );
}

export function useMiniAppContext() {
  return useContext(MiniAppContext);
}
