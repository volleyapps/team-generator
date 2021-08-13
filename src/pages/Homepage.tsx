import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

// import Header from '../components/Header'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import NativeSelect from '@material-ui/core/NativeSelect'

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

    tableContainer: {
      // minWidth: 650,
      maxWidth: '90%',
    },

    table: {},
  }),
  { name: 'Homepage' }
)

interface PlayerMap {
  [key: string]: string
}

const ALL_STAR_SLUG = 'all-star'
const SETTER_SLUG = 'setter'
const PLAYER_SLUG = 'player'

const PLAYERS: PlayerMap = {
  'Allen Teruel': 'player',
  'Carlos Almaguer': 'player',
  'Darrel Molina': 'player',
  'David Layug': SETTER_SLUG,
  'Ian Lizarda': SETTER_SLUG,
  'Ian Stanley': 'player',
  'Martin Sanchez': ALL_STAR_SLUG,
  'Matt Domingo': 'player',
  'Paulo Madridejos': 'player',
  'Yasmin Bonilla': 'player',
  'Yusuf Van Gieson': ALL_STAR_SLUG,
}

const PLAYER_NAMES = Object.keys(PLAYERS)

const POSITIONS = [SETTER_SLUG, ALL_STAR_SLUG, PLAYER_SLUG]

const Homepage = (props: any) => {
  const classes = useStyles(props)

  return (
    <div className={classes.root}>
      {/* <Header /> */}
      <div className={classes.homepageContainerRoot}>
        <div className={classes.homepage}>
          <TableContainer component={Paper} className={classes.tableContainer}>
            <Table className={classes.table} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>Player</TableCell>
                  <TableCell align="right">Position</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {PLAYER_NAMES.sort().map((name, index) => (
                  <TableRow key={name}>
                    <TableCell component="th" scope="row">
                      {name}
                    </TableCell>
                    <TableCell align="right">
                      <div>
                        <FormControl>
                          <NativeSelect
                            defaultValue={PLAYERS[name]}
                            // value={state.age}
                            // onChange={handleChange}
                            // inputProps={{
                            //   name: 'age',
                            //   id: 'age-native-simple',
                            // }}
                          >
                            <option aria-label="None" value="" />
                            {POSITIONS.map((position, index) => {
                              // return <div>{position}</div>
                              return <option value={position}>{position}</option>
                            })}
                          </NativeSelect>
                        </FormControl>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  )
}

export default Homepage
