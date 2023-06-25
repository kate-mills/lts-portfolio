import React from 'react'
import {useTheme} from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Link from 'components/Link'

import Main from 'layouts/Main'
import Container from 'components/Container'
import ContactImg from 'images/contact.jpg'

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
          alt=""
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
              <Box maxWidth={600} margin={'0 auto'}>
                <Box marginBottom={4}>
                  <Typography variant={'h3'} sx={{fontWeight: 700}} align={'center'} gutterBottom>
                    Success!
                  </Typography>
                  <Typography color="text.secondary" align={'center'}>
                    Thank you! I'll get back to you in 1-2 business days.
                  </Typography>
                </Box>
                <Grid item container justifyContent={'center'} xs={12} paddingTop={5}>
                  <Button component={Link} to={'/'} variant={'contained'}>
                    Home
                  </Button>
                </Grid>
                <Grid item xs={12} paddingTop={12}>
                  <Divider />
                </Grid>
              </Box>
            </Container>
          </Box>
        </Box>
      </Box>
    </Main>
  )
}

export default ContactView
