import React, { ReactNode } from "react";

export interface IHeaderProps {
    children: ReactNode
    metaMaskAccount: string;
    metaMaskWallet: string;
    requestMetaMaskConnection: () => Promise<void>;
    metaMaskAlert: boolean;
    setMetaMaskAlert: (metaMaskAlert: boolean) => void
    installMetaMaskOnboarding: () => void
}