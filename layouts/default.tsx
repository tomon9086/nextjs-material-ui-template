import { FC } from 'react'
import PropTypes from 'prop-types'
import { AppBar } from '@material-ui/core'

import styles from '@/styles/layouts/Default.module.css'

const DefaultLayout: FC<{}> = ({ children }) => {
  return (
    <div className={styles.container}>
      <AppBar position='static' />
      <main className={styles.main}>
        {children}
      </main>
      <footer />
    </div>
  )
}
DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default DefaultLayout
