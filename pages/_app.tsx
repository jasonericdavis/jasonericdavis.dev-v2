import Head from 'next/head'
import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="favicons/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
    <div className="max-w-screen-xl mx-auto">
      <Component {...pageProps} />
    </div>
    </>
  )
}

export default MyApp