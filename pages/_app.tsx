/* eslint-disable @next/next/no-page-custom-font */
import type { AppProps } from 'next/app'
import Head from 'next/head'
import CssBaseline from '@mui/material/CssBaseline'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>cowCulate</title>
        <meta
          name="cowCulate"
          content="App para ajudar a vizualizar sem problema"
        />
        <link rel="icon" href="/favicon.ico" />

        {/* fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@700&display=swap" rel="stylesheet" />
      </Head>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
