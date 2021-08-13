import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

// import Header from '../components/Header'

import clsx from 'clsx'

import Button from '@material-ui/core/Button'

import FormControl from '@material-ui/core/FormControl'
import NativeSelect from '@material-ui/core/NativeSelect'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

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

    section: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: theme.spacing(1),
      marginTop: theme.spacing(1),
      width: '100%',
    },

    // Sections
    controls: {},

    players: {
      minWidth: '100%',
    },

    teams: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },

    team: {
      marginBottom: theme.spacing(1),
      marginTop: theme.spacing(1),
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

    [SETTER_SLUG]: {
      backgroundColor: 'yellow',
    },

    [ALL_STAR_SLUG]: {
      backgroundColor: 'GreenYellow',
    },

    [PLAYER_SLUG]: {
      backgroundColor: 'white',
    },
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
  'Masao Kitamura': PLAYER_SLUG,
  'Matt Domingo': 'player',
  'Paulo Madridejos': 'player',
  'Yasmin Bonilla': 'player',
  'Yusuf Van Gieson': ALL_STAR_SLUG,
}

const PLAYER_NAMES = Object.keys(PLAYERS)

const POSITIONS = [SETTER_SLUG, ALL_STAR_SLUG, PLAYER_SLUG]

const MOCK_TEAMS = [
  ['Team 1 Player 1', 'Team 1 Player 2'],
  ['Team 2 Player 3', 'Team 2 Player 4'],
]

const shuffle = (arr: any[]) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  return arr
}

const Homepage = (props: any) => {
  const classes = useStyles(props)

  const [numTeams] = useState(2)
  const [playerPositions] = useState<PlayerMap>(PLAYERS)
  const [teams, setTeams] = useState(MOCK_TEAMS)

  const handlePositionChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    name: string
  ): void => {
    console.log('HANDLE POSITION CHANGE')
    console.log(event.currentTarget.name)
    console.log(event.currentTarget.value)
    console.log(name)
  }

  const generateTeams = () => {
    const newTeams: string[][] = []

    // Filter all the players for setters, all stars, and players
    const setters: string[] = []
    const stars: string[] = []
    const players: string[] = []

    PLAYER_NAMES.forEach((name, index) => {
      switch (playerPositions[name]) {
        case SETTER_SLUG:
          setters.push(name)
          break
        case PLAYER_SLUG:
          players.push(name)
          break
        case ALL_STAR_SLUG:
          stars.push(name)
          break
        default:
      }
    })

    const shuffledSetters: string[] = shuffle(setters)
    const shuffledStars: string[] = shuffle(stars)
    const shuffledPlayers: string[] = shuffle(players)

    // Create each new team
    for (let i = 0; i < numTeams; i++) {
      newTeams.push([])
    }

    // Each team gets a setter randomly
    for (let i = 0; i < numTeams; i++) {
      newTeams[i].push(shuffledSetters[i])
    }

    // Each team gets an "All Star" randomly
    for (let i = 0; i < numTeams; i++) {
      newTeams[i].push(shuffledStars[i])
    }

    // Each team randomly gets all the rest of the players
    for (let i = 0; i < players.length; i++) {
      newTeams[i % numTeams].push(shuffledPlayers[i])
    }

    setTeams(newTeams)
  }

  return (
    <div className={classes.root}>
      {/* <Header /> */}
      <div className={classes.homepageContainerRoot}>
        <div className={classes.homepage}>
          <section className={clsx(classes.section, classes.players)}>
            <TableContainer component={Paper} className={classes.tableContainer}>
              <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell>Player</TableCell>
                    <TableCell align="right">Position</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {PLAYER_NAMES.sort().map((name, index) => {
                    const position = playerPositions[name]

                    let customClass
                    switch (position) {
                      case SETTER_SLUG:
                        customClass = classes[position]
                        break
                      case ALL_STAR_SLUG:
                        customClass = classes[position]
                        break
                      case PLAYER_SLUG:
                        customClass = classes[position]
                    }

                    return (
                      <TableRow key={name} classes={{ root: customClass }}>
                        <TableCell component="th" scope="row">
                          {name}
                        </TableCell>
                        <TableCell align="right">
                          <div>
                            <FormControl>
                              <NativeSelect
                                defaultValue={playerPositions[name]}
                                // value={state.age}
                                onChange={e => handlePositionChange(e, name)}
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
                    )
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </section>
          <section className={clsx(classes.section, classes.controls)}>
            <Button variant="contained" color="primary" onClick={generateTeams}>
              Generate Teams
            </Button>
          </section>
          <section className={clsx(classes.section, classes.teams)}>
            {teams.map((team, teamIndex) => {
              return (
                <TableContainer
                  component={Paper}
                  className={clsx(classes.tableContainer, classes.team)}
                >
                  <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Player</TableCell>
                        <TableCell align="right">Position</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {team.map((playerName, playerIndex) => {
                        const position = playerPositions[playerName]

                        let customClass
                        switch (position) {
                          case SETTER_SLUG:
                            customClass = classes[position]
                            break
                          case ALL_STAR_SLUG:
                            customClass = classes[position]
                            break
                          case PLAYER_SLUG:
                            customClass = classes[position]
                        }

                        return (
                          <TableRow key={playerName} classes={{ root: customClass }}>
                            <TableCell component="th" scope="row">
                              {playerName}
                            </TableCell>
                            <TableCell align="right">
                              <div>{playerPositions[playerName]}</div>
                            </TableCell>
                          </TableRow>
                        )
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              )
            })}
          </section>
        </div>
      </div>
    </div>
  )
}

export default Homepage
