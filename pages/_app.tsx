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
      </Head>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
