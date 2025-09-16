import React from 'react'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

import FixedLayout from 'layouts/Fixed'
import Container from 'components/Container'
import {Hero} from './components'

const IndexView = () => {
  return (
    <FixedLayout>
      <Box sx={{overflow: 'hidden !important'}} minHeight={'calc(100vh - 247px)'}>
        <Hero />
        <Container paddingTop={'0 !important'}>
          <Box sx={{maxWidth: '80%'}}>
            <Typography gutterBottom variant="body1" color={'text.secondary'}>
I build custom websites for small businesses, taking care of everything from the first idea to the final launch. I handle each step, including planning, user-friendly design, database setup, testing, and going live. This way, you get a website that fits your business, without any extra work on your end.
            </Typography>
            <Box marginTop={4}>
              <Typography component="p" variant="h6" gutterBottom sx={{fontWeight: 700}}>
                Feedback
              </Typography>

              <Typography gutterBottom color={'text.secondary'} variant="body1">
                Get in touch at{' '}
                <Link
                  component={'a'}
                  href="mailto:kate@katemillscompany.com"
                  color={'primary'}
                >{`kate@katemillscompany.com`}</Link>
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </FixedLayout>
  )
}

export default IndexView
