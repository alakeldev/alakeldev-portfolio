import type { AppProps } from 'next/app'
import Head from 'next/head'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Abdullah Alakel - Full Stack Developer</title>
        <meta name="description" content="Full Stack Software Developer & IT Specialist portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}