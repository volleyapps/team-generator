import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

// import Header from '../components/Header'

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'grid',
      gridTemplateRows: 'auto auto',

      width: '100vw',
      height: '100vh',
      margin: 0,
      padding: 0,
    },

    homepageContainerRoot: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      overflowY: 'scroll',
    },

    homepage: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.palette.common.white,
    },
  }),
  { name: 'Homepage' }
)

const Homepage = (props: any) => {
  const classes = useStyles(props)

  return (
    <div className={classes.root}>
      {/* <Header /> */}
      <div className={classes.homepageContainerRoot}>
        <div className={classes.homepage}>HOMEPAGE</div>
      </div>
    </div>
  )
}

export default Homepage
