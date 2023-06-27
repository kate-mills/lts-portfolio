/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import Box from '@mui/material/Box'

import FluidLayout from 'layouts/Main'
import Container from 'components/Container'
import {Hero, ShowcaseGrid} from './components'

import {UseMixMasterContext} from 'context/mixmaster'

const MixMasterView = () => {
  const {
    state: {trending, data, query}
  } = UseMixMasterContext()

  return (
    <FluidLayout>
      <Box sx={{overflow: 'hidden !important'}} minHeight={'calc(100vh - 179px)'}>
        <Hero query={query} />
        <Container paddingTop={'0 !important'}>
          <ShowcaseGrid data={data} trending={trending} query={query}/>
        </Container>
      </Box>
    </FluidLayout>
  )
}

export default MixMasterView
