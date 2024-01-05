import Image from 'next/image'
import { Inter } from 'next/font/google'
import Pool from '@/components/Pool'
import Head from "next/head";
const inter = Inter({ subsets: ['latin'] })

export default function Myapp() {
  return (
    <div className="">
      <Head>
        <title>Filament</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Pool />
    </div>
  );
}
