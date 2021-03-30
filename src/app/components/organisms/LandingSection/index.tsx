import { Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'
import React from 'react'
import { animated, useTransition } from 'react-spring'

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: '3rem',
    whiteSpace: 'pre-line',
    wordBreak: 'keep-all',
    fontWeight: 'bold',
    willChange: 'transform, opacity',
    [theme.breakpoints.only('sm')]: {
      fontSize: '3rem'
    },
    [theme.breakpoints.only('xs')]: {
      fontSize: '1.8rem'
    }
  },
  description: {
    marginTop: theme.spacing(2),
    fontSize: '2rem',
    fontWeight: 'bold',
    color: theme.palette._green[400],
    whiteSpace: 'pre-line',
    wordBreak: 'keep-all',
    willChange: 'transform, opacity',
    [theme.breakpoints.only('sm')]: {
      fontSize: '1.2rem'
    },
    [theme.breakpoints.only('xs')]: {
      fontSize: '1rem'
    }
  }
}))

const LandingSection: React.FC = () => {
  const classes = useStyles()
  const items = [
    {
      value: 'Welcome! My name is Min Kim.\nI am a junior studying Computer Science at\nUniversity of Pennsylvania.',
      className: classes.title
    },
    {
      value: 'More about me!👇',
      className: classes.description
    }
  ]
  const transitions = useTransition(items, (item) => item.value, {
    from: {
      opacity: 0,
      transform: 'translate3d(0,-140px,0)'
    },
    enter: {
      opacity: 1,
      transform: 'translate3d(0,0px,0)'
    },
    leave: {
      opacity: 0,
      transform: 'translate3d(0,-100px,0)'
    }
  })

  return (
    <Box display="flex" alignItems="center" height="65vh">
      <Box>
        {transitions.map(({ item, props }, index) => (
          <animated.div key={index} style={props}>
            <Typography className={item.className}>{item.value}</Typography>
          </animated.div>
        ))}
      </Box>
    </Box>
  )
}

export default LandingSection
