import React from 'react'
import {useTheme} from '@mui/material/styles'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'

import Link from 'components/Link'
import FixedLayout from 'layouts/Fixed'
import Container from 'components/Container'

import websiteImg from 'images/website.jpg'

const NotFoundView = () => {
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true
  })

  return (
    <FixedLayout>
      <Box sx={{overflow: 'hidden'}} minHeight={'calc(100vh - 288px)'}>
        <Container paddingX={0} paddingY={0} maxWidth={{sm: 1, md: 1236}}>
          <Box display={'flex'} flexDirection={{xs: 'column', md: 'row'}} position={'relative'}>
            <Box width={1} order={{xs: 2, md: 1}} display={'flex'} alignItems={'center'}>
              <Container>
                <Box align={isMd ? 'auto' : 'center'}>
                  <Typography variant="h1" component={'h1'} sx={{fontWeight: 700}}>
                    404
                  </Typography>
                  <Typography variant="h6" component="p" color="text.secondary">
                    Oops! Looks like you followed a bad link.
                  </Typography>
                  <Box marginTop={4}>
                    <Button component={Link} variant="contained" color="primary" size="large" to={'/'}>
                      Back home
                    </Button>
                  </Box>
                </Box>
              </Container>
            </Box>
            <Box
              sx={{
                flex: {xs: '0 0 100%', md: '0 0 50%'},
                position: 'relative',
                maxWidth: {xs: '100%', md: '50%'},
                order: {xs: 1, md: 2},
                minHeight: {xs: 'auto', md: 'calc(100vh - 58px)'}
              }}
            >
              <Box
                sx={{
                  width: {xs: 1, md: '50vw'},
                  height: '100%',
                  position: 'relative'
                }}
              >
                <Box sx={{width: '100%', height: '100%', overflow: 'hidden'}}>
                  <Box
                    sx={{
                      overflow: 'hidden',
                      left: '0%',
                      width: 1,
                      height: 1,
                      position: {xs: 'relative', md: 'absolute'},
                      clipPath: {
                        xs: 'none',
                        md: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)'
                      },
                      shapeOutside: {
                        xs: 'none',
                        md: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)'
                      }
                    }}
                  >
                    <Box
                      sx={{
                        height: {xs: 'auto', md: 1},
                        '& img': {objectFit: 'cover'}
                      }}
                    >
                      <Box
                        component={'img'}
                        loading="lazy"
                        src={websiteImg}
                        height={{xs: 'auto', md: 1}}
                        maxHeight={{xs: 300, md: 1}}
                        width={1}
                        maxWidth={1}
                        sx={{
                          objectPosition: '0 25%',
                          filter: theme.palette.mode === 'dark' ? 'brightness(0.3)' : 'brightness(0.5)'
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </FixedLayout>
  )
}
export default NotFoundView
