import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {alpha, useTheme} from '@mui/material/styles'

import Container from 'components/Container'

import images from 'utils/image-data'

const Hero = () => {
  const {
    spacing,
    palette: {
      background: {paper},
      alternate: {main: altMain},
      mode
    }
  } = useTheme()

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to bottom, ${alpha(paper, 0)}, ${alpha(altMain, 1)} 100%)`,
        backgroundRepeat: 'repeat-x',
        position: 'relative'
      }}
    >
      <Box paddingY={{xs: 0, sm: '4rem', md: '8rem'}}>
        <Container>
          <Box maxWidth={{xs: 1, sm: '50%'}}>
            <Typography
              sx={{
                textTransform: 'uppercase',
                fontWeight: 'medium'
              }}
              gutterBottom
              color={'text.secondary'}
            >
              Welcome
            </Typography>
            <Typography
              component="h1"
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: 700
              }}
            >
              Kate Mills Portfolio
              <br />
              <Typography color={'primary.main'} variant={'cursive'} component={'span'}>
                Front-End Web Developer
              </Typography>
            </Typography>
            <Typography component="h2" variant="h6" color={'text.secondary'}>
              Hi, I'm Kate! I help small businesses establish an online presence and reach their target audience.
            </Typography>
          </Box>
        </Container>
        <Box
          sx={{
            transform: 'rotate(-20deg)',
            display: {xs: 'none', sm: 'block'}
          }}
        >
          <Box
            display={'flex'}
            width={'50rem'}
            left={'50%'}
            top={0}
            position={'absolute'}
            sx={{transform: 'translate3d(20%, -50%, 0)'}}
          >
            {images.map((item, i) => (
              <Box key={i} marginTop={{sm: -(i * 16)}} marginX={1}>
                {item.group.map((g, j) => (
                  <Box key={j} padding={1} bgcolor={'background.paper'} borderRadius={2} boxShadow={3} marginTop={2}>
                    <Box
                      component={'img'}
                      loading="lazy"
                      src={mode === 'dark' ? g.imgDark : g.imgLt}
                      height={1}
                      width={1}
                      maxWidth={320}
                    />
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box
        component={'svg'}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1920 100.1"
        sx={{width: '100%', marginBottom: spacing(-1)}}
      >
        {' '}
        <path fill={paper} d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"></path>{' '}
      </Box>
    </Box>
  )
}

export default Hero
