/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import Box from '@mui/material/Box'

import FluidLayout from 'layouts/Main'
import Container from 'components/Container'
import {Hero, ShowcaseGrid} from './components'

const MixMasterView = () => {
  return (
    <FluidLayout>
      <Box sx={{overflow: 'hidden !important'}} minHeight={'calc(100vh - 179px)'}>
        <Hero />
        <Container paddingTop={'0 !important'} tabIndex="0">
          <ShowcaseGrid />
        </Container>
      </Box>
    </FluidLayout>
  )
}

export default MixMasterView
