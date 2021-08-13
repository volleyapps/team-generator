import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(
  theme => ({
    header: {
      display: 'flex',
      alignItems: 'center', // center on the cross axis
      justifyContent: 'space-between', // max space between items
      backgroundColor: theme.palette.common.white,
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(10),
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },

    logo: {
      height: 45,
    },

    button: {
      marginBottom: theme.spacing(1),
    },
  }),
  { name: 'Header' }
)

const Header = props => {
  const classes = useStyles(props)

  return <div className={classes.header}>HEADER</div>
}

export default Header
