import { createMuiTheme } from '@material-ui/core/styles'
import { blue, pink, red } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: blue[500]
    },
    secondary: {
      main: pink.A400
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#fff'
    }
  }
})

export default theme
