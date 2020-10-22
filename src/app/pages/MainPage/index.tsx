import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import { RouteComponentProps } from '@reach/router'
import React from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'

import AboutSection from '../../components/organisms/AboutSection'
import FooterSection from '../../components/organisms/FooterSection'
import LandingSection from '../../components/organisms/LandingSection'
import TilSection from '../../components/organisms/TilSection'
import TimelineSection from '../../components/organisms/TimelineSection'

const MainPage: React.FC<RouteComponentProps> = () => {
  return (
    <Parallax pages={4} scrolling>
      <ParallaxLayer offset={0} speed={0.5}>
        <Box>
          <Container maxWidth="xl">
            <LandingSection />
          </Container>
        </Box>
      </ParallaxLayer>

      <ParallaxLayer offset={0.15} speed={-0.2} factor={3.9}>
        <Box bgcolor="rgba(20, 150, 120, 0.1)" height="100%" width="100%" style={{
          clipPath: 'polygon(0 15%, 100% 20%, 100% 75%, 0 100%)'
        }} />
      </ParallaxLayer>

      <ParallaxLayer offset={0.7} speed={-0.1} factor={1.3}>
        <Box bgcolor="rgba(20, 150, 120, 0.6)" height="100%" width="100%" style={{
          clipPath: 'polygon(0 25%, 100% 15%, 100% 85%, 0 95%)'
        }} />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.1} factor={1.2}>
        <Box bgcolor="rgba(20, 30, 60, 0.9)" height="100%" width="100%" style={{
          clipPath: 'polygon(0 0%, 100% 5%, 100% 100%, 0 95%)'
        }}>
          <Container maxWidth="xl">
            <Box >
              <TilSection />
            </Box>
          </Container>
        </Box>
      </ParallaxLayer>

      <ParallaxLayer offset={2} speed={1.3} factor={1.2}>
        <Box bgcolor="white" height="100%" width="100%" display="flex" alignItems="center">
          <Container maxWidth="xl">
            <TimelineSection />
          </Container>
        </Box>
      </ParallaxLayer>

      <ParallaxLayer offset={3} speed={0.5} factor={1.2}>
        <Box bgcolor="rgba(20, 150, 120, 0.7)" height="100%" width="100%" style={{
          clipPath: 'polygon(0 5%, 100% 0%, 100% 95%, 0 100%)'
        }}>
          <Container maxWidth="xl">
            <AboutSection />
          </Container>
        </Box>
      </ParallaxLayer>

      <ParallaxLayer offset={3.95} speed={0.2}>
        <Box bgcolor="rgba(40, 40, 40, 0.3)" height="100%" width="100%" >
          <Container maxWidth="xl">
            <FooterSection />
          </Container>
        </Box>
      </ParallaxLayer>
    </Parallax>
  )
}

export default MainPage