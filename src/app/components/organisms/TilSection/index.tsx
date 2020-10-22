import { Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import makeStyles from '@material-ui/core/styles/makeStyles'
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded'
import { Link } from 'gatsby'
import _ from 'lodash'
import React from 'react'

import { useLatestPostPath } from '../../../hooks/useLatestPost'
import TilCard from '../../molecules/TilCard'

export const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: '4rem',
    whiteSpace: 'pre-line',
    wordBreak: 'keep-all',
    fontWeight: 'bold',
    [theme.breakpoints.only('sm')]: {
      fontSize: '3rem'
    },
    [theme.breakpoints.only('xs')]: {
      fontSize: '2rem'
    }
  },
  subtitle: {
    marginTop: theme.spacing(10),
    fontSize: '2rem',
    whiteSpace: 'pre-line',
    wordBreak: 'keep-all',
    fontWeight: 'bold',
    [theme.breakpoints.only('sm')]: {
      fontSize: '1.5rem'
    },
    [theme.breakpoints.only('xs')]: {
      fontSize: '1rem',
      marginTop: theme.spacing(5)
    }
  },
  description: {
    marginTop: theme.spacing(1),
    whiteSpace: 'pre-line',
    wordBreak: 'keep-all'
  },
  arrowIcon: {
    fontSize: '24px',
    fontWeight: 'bold'
  },
  arrowText: {
    marginLeft: theme.spacing(2),
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

const TilSection: React.FC = () => {
  const classes = useStyles()

  // TODO(poqw): Replace this with recent TIL posts.
  const tils = [
    {
      title: 'Today I Learned',
      description: '나의 TIL은 다음 목표를 가진다.\n1. 아는 것도 다시 보는 습관을 길러 의도적 수련을 유도한다.\n.2. 점진적으로 개선되는 나만의 노트를 만든다.\n.3. 지식을 공유한다.',
      mediaImg: 'https://media.vlpt.us/images/hyounglee/post/22417c83-7c63-44d2-b230-fe795e67b137/til-01.png'
    },
    {
      title: 'TDD: Test Driven Development',
      description: '테스트 주도 개발(Test-driven development, TDD)은 매우 짧은 개발 사이클을 반복하는 소프트웨어 개발 프로세스 중 하나이다. 우선 개발자는 바라는 향상 또는 새로운 함수를 정의하는 (초기적 결함을 점검하는) 자동화된 테스트 케이스를 작성한다.',
      mediaImg: 'https://www.xenonstack.com/images/blog/Test-Driven-Development-in-Java.png'
    },
    {
      title: 'Scrum',
      description: '스크럼은 비즈니스 요구를 충족시키는데 초점을 맞추기 위해, 작은 목표를 짧은 주기로 점진적이며 경험적으로 제품을 지속적으로 개발(전달)하는 관리 프레임워크이다.',
      mediaImg: 'https://tms-outsource.com/blog/wp-content/uploads/2019/02/agile-working-1.jpg'
    }
  ]

  const latestPostPath = useLatestPostPath()

  return (
    <Box display="flex" height="120vh" alignItems="center" color="white">
      <Grid container alignItems="center">
        <Grid item xs={12} md={5}>
          <Box m={3}>
            <Typography variant="h1" className={classes.title}>TIL: Today I Learned</Typography>
            <Typography variant="h1" className={classes.subtitle}>
              저는 끊임없이 배우고, 기록하며, 지식을 나눕니다.
            </Typography>
            <Box mt={3}>
              <Typography variant="body1" className={classes.description}>
                {'그 과정에서 항상 \'왜?\' 라는 질문에 답하기 위해 노력합니다.'}
              </Typography>
              <Typography variant="body1" className={classes.description}>
                그리고 이 모든 노력이 제가 더 나은 개발자가 될 수 있게 해줄 것이라 믿습니다.
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
              <Typography variant="button" className={classes.arrowText}>
                TODAY I LEARNED
              </Typography>
            </Button>
          </Box>
        </Grid>
        <Grid item md={1}> </Grid>
        <Grid item xs={12} md={6}>
          <Box mt={5}>
            {_.map(tils, (til) => {
              return (
                <Box m={3} key={til.title}>
                  <Link to={latestPostPath}>
                    <TilCard
                      title={til.title}
                      description={til.description}
                      mediaImg={til.mediaImg}
                    />
                  </Link>
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