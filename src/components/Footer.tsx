import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import { FOOTER_TITLE } from '../constants'

const useStyles = makeStyles(theme => ({
  footer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    padding: theme.spacing(3),
    backgroundColor: theme.palette.primary.light,
    position: 'fixed',
    width: '100vw', // width of screen including margin: https://stackoverflow.com/a/25225716
    bottom: 0,
  },
  link: {
    marginRight: theme.spacing(0),
  },
  footerText: {
    fontSize: '90%',
  },
}))

const Footer = (props: any) => {
  const classes = useStyles(props)

  return (
    <div className={classes.footer}>
      <Typography className={classes.footerText}>{FOOTER_TITLE}</Typography>
    </div>
  )
}

export default Footer
