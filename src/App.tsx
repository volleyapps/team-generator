// import React from 'react'
// import logo from './logo.svg'
// import './App.css'

import { Helmet } from 'react-helmet'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

// import favIconTrans from './assets/favicon-trans.ico'

import { TITLE } from './constants'

import Homepage from './pages/Homepage'

import theme from './themes/default'

const useStyles = makeStyles(
  theme => ({
    root: {
      width: '100vw',
      height: '100vh',
      padding: 0,
      margin: 0,
      backgroundColor: theme.palette.common.white, // switch to black for debugging
    },
  }),
  { name: 'App' }
)

const App = (props: any) => {
  const classes = useStyles(props)
  return (
    <div className={classes.root}>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={TITLE} />
        {/* <link rel="icon" type="image/png" href={favIconTrans} /> */}

        {/* Open Sans for titling and important buttons */}
        {/* https://fonts.google.com/specimen/Open+Sans */}
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />

        {/* Roboto for content text and normal links */}
        {/* https://fonts.google.com/specimen/Roboto */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  )
}

export default App
