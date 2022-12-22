import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../src/layout/header";
import useMetaMask from "../src/hook/useMataMask";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const { metaMask } = useMetaMask();
  const route = useRouter();
  useEffect(() => {
    if (!!metaMask.metaMaskWallet.length && !!metaMask.metaMaskAccount.length) {
      route.push("/home");
    } else {
      route.push("/");
    }
  }, [metaMask.metaMaskWallet, metaMask.metaMaskAccount]);

  return (
    <Header {...metaMask}>
      <Head>
        <title>Game Zone</title>
      </Head>
      <Component {...pageProps} {...metaMask} />
    </Header>
  );
}
