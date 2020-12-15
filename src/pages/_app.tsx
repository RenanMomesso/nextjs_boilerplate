import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="shortcut icon" href="images/foto.png" />
        <link rel="shortcut icon" href="/images/foto.png" />
        <link rel="manifest" href="manifest.json" />
        <meta
          name="description"
          content="A simple project to work with typescript, React, NextJS and Styled Components."
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
