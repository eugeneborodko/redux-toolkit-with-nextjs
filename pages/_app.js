import '../styles/globals.css'
// import withRedux from 'next-redux-wrapper'
import { makeStore } from './../store/store'
import { createWrapper } from 'next-redux-wrapper'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

// export default withRedux(makeStore)(MyApp)
export default createWrapper(makeStore).withRedux(MyApp)

//test commit
