import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Hero from "@/components/Hero";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | HOME</title>
        <meta name="description" content="Morgan Mutugi Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
          <Hero />
      </main>
    </>
  )
}
