import Head from 'next/head'
import AppLayout from '../components/layouts/app-layout'
import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      {/* Favicon */}
      <link rel="apple-touch-icon" sizes="180x180" href="favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="favicons/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
        rel="stylesheet"
      />

      <title>JasonEricDavis.dev</title>
    </Head>
    <div className="max-w-screen-xl mx-auto">
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </div>
    </>
  )
}

export default MyApp