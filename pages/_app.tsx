import { Provider } from 'react-redux'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@material-ui/core/styles'

import store from '@/store'
import theme from '@/theme'

import 'normalize.css'
import '@/styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
