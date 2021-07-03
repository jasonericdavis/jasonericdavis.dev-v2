import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp