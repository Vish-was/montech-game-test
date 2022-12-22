import { ethers } from 'ethers';
import MetaMaskOnboarding from '@metamask/onboarding';
import { useEffect, useRef, useState } from 'react';




export default function useMetaMask() {

    const [metaMaskAccount, setMetaMaskAccount] = useState<string>("")
    const [metaMaskWallet, setMetaMaskWallet] = useState<string>("")
    const [metaMaskAlert, setMetaMaskAlert] = useState(false)
    const onboarding = useRef<MetaMaskOnboarding>();
    let WINDOW: any
    const requestMetaMaskConnection = async () => {
        WINDOW = window
        if (MetaMaskOnboarding.isMetaMaskInstalled()) {
            console.log("he")
            try {
                const account = await WINDOW.ethereum.request({
                    method: "eth_requestAccounts",
                })
                setMetaMaskAccount(account[0])
                const balance = await WINDOW.ethereum.request({
                    method: "eth_getBalance",
                    params: [String(account), "latest"]
                })
                setMetaMaskWallet(ethers.utils.formatEther(balance));
            }
            catch (e) {
                console.log(e)
            }
        }
        else {
            setMetaMaskAlert(true)
        }
    }

    const installMetaMaskOnboarding = () => {
        if (onboarding.current)
            onboarding.current.startOnboarding();
    }

    useEffect(() => {
        if (!onboarding.current) {
            onboarding.current = new MetaMaskOnboarding();
        }
    }, []);

    return {
        metaMask: {
            metaMaskAccount: metaMaskAccount,
            metaMaskWallet: metaMaskWallet,
            requestMetaMaskConnection: requestMetaMaskConnection,
            metaMaskAlert: metaMaskAlert,
            setMetaMaskAlert: setMetaMaskAlert,
            installMetaMaskOnboarding: installMetaMaskOnboarding
        }
    };
}