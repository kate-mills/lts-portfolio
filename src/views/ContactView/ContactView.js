import React from 'react'
import {useTheme} from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Box from '@mui/material/Box'

import Main from 'layouts/Main'
import Container from 'components/Container'
import {Form} from './components'
import ContactImg from 'images/kate-mills.jpg'

const ContactView = () => {
  const theme = useTheme()

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true
  })

  const Sidebar = () => (
    <Box flex={'1 1 30%'} maxWidth={'30%'} maxHeight={'100vh'} position={'sticky'} top={0}>
      <Box display={'flex'} alignItems={'center'} height={1} width={1}>
        <Box
          component={'img'}
          loading="lazy"
          height={1}
          width={1}
          src={ContactImg}
          alt="Kate Mills, Web Developer located in Napa, CA"
          title="Kate Mills, Web Developer located in Napa, CA"
          sx={{
            objectFit: 'cover',
            filter: 'brightness(.7)'
          }}
        />
      </Box>
    </Box>
  )
  return (
    <Main>
      <Box position={'relative'} minHeight={'100vh'} display={'flex'} marginTop={-13}>
        {isMd ? <Sidebar /> : null}
        <Box flex={{xs: '1 1 100%', md: '1 1 70%'}} maxWidth={{xs: '100%', md: '70%'}} paddingTop={14}>
          <Box height={1}>
            <Container>
              <Form />
            </Container>
          </Box>
        </Box>
      </Box>
    </Main>
  )
}

export default ContactView
