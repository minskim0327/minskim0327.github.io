import { Typography, useMediaQuery, useTheme } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import makeStyles from '@material-ui/core/styles/makeStyles'
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded'
import { Link } from 'gatsby'
import _ from 'lodash'
import React, { useMemo } from 'react'

import { useLatestPostPath } from '../../../hooks/useLatestPost'
import TilCard from '../../molecules/TilCard'

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: '3rem',
    whiteSpace: 'pre-line',
    wordBreak: 'keep-all',
    fontWeight: 'bold',
    [theme.breakpoints.only('sm')]: {
      fontSize: '2.5rem'
    },
    [theme.breakpoints.only('xs')]: {
      fontSize: '2rem'
    }
  },
  subtitle: {
    marginTop: theme.spacing(10),
    fontSize: '1.7rem',
    whiteSpace: 'pre-line',
    wordBreak: 'keep-all',
    fontWeight: 'bold',
    [theme.breakpoints.only('sm')]: {
      fontSize: '1.3rem'
    },
    [theme.breakpoints.only('xs')]: {
      fontSize: '1.1rem',
      marginTop: theme.spacing(5)
    }
  },
  descriptionContainer: {
    [theme.breakpoints.only('xs')]: {
      display: 'none'
    }
  },
  description: {
    whiteSpace: 'pre-line',
    wordBreak: 'keep-all'
  },
  arrowIcon: {
    fontSize: '24px',
    fontWeight: 'bold'
  },
  buttonText: {
    marginLeft: theme.spacing(1.5),
    marginRight: theme.spacing(1.5),
    fontSize: '24px',
    fontWeight: 'bold',
    [theme.breakpoints.only('xs')]: {
      fontSize: '18px'
    }
  },
  button: {
    marginTop: theme.spacing(8),
    boxSizing: 'border-box',
    padding: theme.spacing(1.5),
    borderRadius: theme.spacing(4.5),
    paddingLeft: 24,
    paddingRight: 24,
    backgroundColor: 'white',
    border: '2px solid white',
    color: 'rgba(20, 30, 60, 0.9)',
    cursor: 'pointer',
    transition: '0.3s',
    '&:hover': {
      backgroundColor: 'transparent',
      color: 'white'
    },
    [theme.breakpoints.only('xs')]: {
      marginTop: theme.spacing(4)
    }
  }
}))

// TODO (minseok): Replace this with my posts.
const tils = [
  {
    title: 'Keys in RDBMS',
    description: 'This document deals with concepts related to keys in relational database.',
    mediaImg: 'https://community-cdn-digitalocean-com.global.ssl.fastly.net/variants/nha7XM3be77CtxxXUgDuVirp/035575f2985fe451d86e717d73691e533a1a00545d7230900ed786341dc3c882',
    link: "/tils/DEV/database/relational/keys"
  },
  {
    title: 'TDD: Test Driven Development',
    description: '테스트 주도 개발(Test-driven development, TDD)은 매우 짧은 개발 사이클을 반복하는 소프트웨어 개발 프로세스 중 하나이다. 우선 개발자는 바라는 향상 또는 새로운 함수를 정의하는 (초기적 결함을 점검하는) 자동화된 테스트 케이스를 작성한다.',
    mediaImg: 'https://www.xenonstack.com/images/blog/Test-Driven-Development-in-Java.png',
    link: "/tils/DEV/database/relational/keys"
  },
  {
    title: 'Scrum',
    description: '스크럼은 비즈니스 요구를 충족시키는데 초점을 맞추기 위해, 작은 목표를 짧은 주기로 점진적이며 경험적으로 제품을 지속적으로 개발(전달)하는 관리 프레임워크이다.',
    mediaImg: 'https://tms-outsource.com/blog/wp-content/uploads/2019/02/agile-working-1.jpg',
    link: "/tils/DEV/database/relational/keys"
  }
]

const TilSection: React.FC = () => {
  const classes = useStyles()

  const latestPostPath = useLatestPostPath()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))
  const tilsToDisplay = useMemo(() => {
    if (matches) {
      return _.drop(_.clone(tils), 1)
    } else {
      return tils
    }
  }, [matches])

  return (
    <Box display="flex" height="120vh" alignItems="center" color="white">
      <Grid container alignItems="center">
        <Grid item xs={12} md={5}>
          <Typography variant="h1" className={classes.title}>✏️ Today I Learned</Typography>
          <Typography variant="h1" className={classes.subtitle}>
            TIL is records of what I learned today.
          </Typography>
          <Box mt={3} className={classes.descriptionContainer}>
            <Typography variant="body1" className={classes.description}>
              I am a person who loves <b>software development</b> and <b>jazz.</b>
            </Typography>
            <Typography variant="body1" className={classes.description}>
              TIL keeps track of daily learnings and updates on interesting news on topics above.
            </Typography>

          </Box>
          <Button
            component={Link}
            variant="contained"
            color="default"
            className={classes.button}
            classes={{ startIcon: classes.arrowIcon }}
            startIcon={<ArrowForwardRoundedIcon />}
            to={latestPostPath}
          >
            <Typography variant="button" className={classes.buttonText}>
              Go to TIL
            </Typography>
          </Button>
        </Grid>
        <Grid item md={1}> </Grid>
        <Grid item xs={12} md={6}>
          <Box mt={5}>
            {_.map(tilsToDisplay, (til) => {
              return (
                <Box mb={3} key={til.title}>
                  {/* <Link to={latestPostPath}> */}
                    <TilCard
                      link={til.link}
                      title={til.title}
                      description={til.description}
                      mediaImg={til.mediaImg}
                    />
                  {/* </Link> */}
                </Box>
              )
            })}
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default TilSection
