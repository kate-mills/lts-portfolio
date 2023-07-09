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
              My diverse portfolio showcases my expertise in programming languages and frameworks like HTML, CSS,
              JavaScript, React, Gatsby, GraphQL, NodeJS, and more. My designs are responsive and mobile-friendly, with
              solid back-end functionality.
            </Typography>
            <Box marginTop={4}>
              <Typography component="p" variant="h6" gutterBottom sx={{fontWeight: 700}}>
                Feedback
              </Typography>

              <Typography gutterBottom color={'text.secondary'} variant="body1">
                I am always open to your feedback at{' '}
                <Link component={'a'} href="mailto:hi@katemillsco.com" color={'primary'}>{`hi@katemillsco.com`}</Link>
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </FixedLayout>
  )
}

export default IndexView
