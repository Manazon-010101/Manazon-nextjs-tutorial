// _app.jsにこのcssが読み込めば,それらが全てnext.jsの今のアプリケーションの中で適応される
import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
