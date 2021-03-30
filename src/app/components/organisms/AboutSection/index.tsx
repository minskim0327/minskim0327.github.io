import { Typography, useMediaQuery, useTheme } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import makeStyles from '@material-ui/core/styles/makeStyles'
import GitHubIcon from '@material-ui/icons/GitHub'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import MailIcon from '@material-ui/icons/Mail'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import { useSpring, animated } from 'react-spring'

export const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: '3rem',
    whiteSpace: 'pre-line',
    wordBreak: 'keep-all',
    fontWeight: 'bold',
    [theme.breakpoints.only('sm')]: {
      fontSize: '2.5rem'
    },
    [theme.breakpoints.only('xs')]: {
      fontSize: '1.5rem'
    }
  },
  subtitle: {
    marginTop: theme.spacing(2),
    fontSize: '1.7rem',
    whiteSpace: 'pre-line',
    wordBreak: 'keep-all',
    fontWeight: 'bold',
    [theme.breakpoints.only('sm')]: {
      fontSize: '1.3rem',
      marginTop: theme.spacing(1)
    },
    [theme.breakpoints.only('xs')]: {
      fontSize: '0.9rem',
      marginTop: theme.spacing(1)
    }
  },
  descriptionContainer: {
    marginTop: theme.spacing(2),
    [theme.breakpoints.only('xs')]: {
      marginTop: theme.spacing(0)
    }
  },
  description: {
    marginTop: theme.spacing(1),
    whiteSpace: 'pre-line',
    wordBreak: 'keep-all',
    [theme.breakpoints.only('xs')]: {
      fontSize: '0.9rem',
      marginTop: theme.spacing(0)
    }
  },
  subDescription: {
    fontSize: '1rem',
    marginTop: theme.spacing(1),
    whiteSpace: 'pre-line',
    wordBreak: 'keep-all',
    [theme.breakpoints.only('xs')]: {
      fontSize: '0.8rem'
    }
  },
  iconContainer: {
    marginTop: theme.spacing(6),
    [theme.breakpoints.only('sm')]: {
      marginTop: theme.spacing(4)
    },
    [theme.breakpoints.only('xs')]: {
      marginTop: theme.spacing(2)
    }
  },
  iconButton: {
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(2),
    boxSizing: 'border-box',
    borderRadius: theme.spacing(4.5),
    backgroundColor: 'white',
    border: '2px solid white',
    color: 'rgba(20, 150, 120)',
    cursor: 'pointer',
    transition: '0.3s',
    '&:hover': {
      backgroundColor: 'transparent',
      color: 'white'
    },
    [theme.breakpoints.only('xs')]: {
      margin: theme.spacing(0.5),
      marginTop: theme.spacing(0),
      width: 48,
      height: 48
    }
  },
  profileContainer: {
    margin: theme.spacing(6),
    maxWidth: 700,
    maxHeight: 700,
    border: '17px solid white',
    willChange: 'transform',
    boxShadow: '0px 10px 30px -5px rgba(0, 0, 0, 0.3)',
    [theme.breakpoints.only('sm')]: {
      marginLeft: 0,
      maxWidth: '35vw',
      maxHeight: '35vw',
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      border: '8px solid white',
      boxShadow: '0px 6px 20px -3px rgba(0, 0, 0, 0.3)'
    },
    [theme.breakpoints.only('xs')]: {
      marginTop: -theme.spacing(4),
      margin: 'auto',
      maxWidth: '35vw',
      maxHeight: '35vw',
      marginBottom: theme.spacing(2),
      border: '4px solid white',
      boxShadow: '0px 3px 10px -2px rgba(0, 0, 0, 0.3)'
    }
  }
}))

const calc = (x, y): number[] => {
  return [-(y - window.innerHeight / 2) / 140, (x - window.innerWidth / 2) / 140, 1.05]
}

const trans = (x, y, s): string => {
  return `perspective(700px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
}

const AboutSection: React.FC = () => {
  const classes = useStyles()

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 1, tension: 250, friction: 40 }
  }))

  const profileQuery = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "profile.png" }) {
        childImageSharp {
          fluid(maxWidth: 700, maxHeight: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <Box display="flex" height="90vh" alignItems="center" color="white">
      <Grid container alignItems="center">
        <Grid item xs={12} md={6}>
          <animated.div
            className={classes.profileContainer}
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{
              // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
              // @ts-ignore
              transform: props.xys.interpolate(trans)
            }}
          >
            <Img fluid={profileQuery.fileName.childImageSharp.fluid} />
          </animated.div>
        </Grid>
        <Grid item md={1}> </Grid>
        <Grid item xs={12} md={5}>
          <Typography variant="h1" className={classes.title}>🧐 So, Who am I?</Typography>
          <Typography variant="h1" className={classes.subtitle}>
              I am a ____ software developer.
          </Typography>
          <Box className={classes.descriptionContainer}>
            <Box pt={1.5}>
              <Typography variant="h4" className={classes.description}>
                🤔 Curious
              </Typography>
              <Typography variant="body1" className={classes.subDescription}>
                New technologies are flooding in software development, and why not bother catching up?
              </Typography>
            </Box>
            <Box pt={1.5}>
              <Typography variant="h4" className={classes.description}>
                🚀 High standarded
              </Typography>
              <Typography variant="body1" className={classes.subDescription}>
                There always exists a better way of doing things, and software development is not an exception!
              </Typography>
            </Box>
            {matches &&
              <Box pt={1.5}>
                <Typography variant="h4" className={classes.description}>
                 🎧 Music loving
                </Typography>
                <Typography variant="body1" className={classes.subDescription}>
                  Music helps me concentrate for hours and put me into good mood!
                </Typography>
              </Box>
            }
          </Box>
          <Box className={classes.iconContainer}>
            <IconButton
              className={classes.iconButton}
              href="https://github.com/minskim0327"
              target="_blank"
              rel="noreferrer noopener"
            >
              <GitHubIcon fontSize="large" />
            </IconButton>
            <IconButton
              className={classes.iconButton}
              href="https://www.linkedin.com/in/minskim0327"
              target="_blank"
              rel="noreferrer noopener"
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton
              className={classes.iconButton}
              href="https://www.instagram.com/minskim0327/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <InstagramIcon fontSize="large" />
            </IconButton>
            <IconButton
              className={classes.iconButton}
              href="mailto:minskim0327@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <MailIcon fontSize="large" />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default AboutSection
