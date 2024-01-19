import Sites from "@/components/Site";
import "@/styles/globals.css";
import { WagmiConfig, createConfig, mainnet } from 'wagmi'
import { createPublicClient, http } from 'viem'
import type { AppProps } from "next/app";
import { Provider } from 'react-redux';
import store from "../../redux/store";
import React from "react";
import Head from "next/head";
const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http()
  }),
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>


      <Head>
        <title>Filament</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Onest:wght@300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      ></link>
      <WagmiConfig config={config}>
        <Sites>
          <Component {...pageProps} />
        </Sites>
      </WagmiConfig>
    </Provider>
  );
}
