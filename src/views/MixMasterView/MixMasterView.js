/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import Box from '@mui/material/Box'

import FluidLayout from 'layouts/Main'
import Container from 'components/Container'
import {Hero, WithCtaButton} from './components'

import {UseMixMasterContext} from 'context/mixmaster'

const MixMasterView = () => {
  const {state: {data, query}} = UseMixMasterContext()

  return (
    <FluidLayout>
      <Box sx={{overflow: 'hidden !important'}} minHeight={'calc(100vh - 179px)'}>
        <Hero query={query} />
        <Container paddingTop={'3 !important'}>
          <WithCtaButton data={data}/>
        </Container>
      </Box>
    </FluidLayout>
  )
}

export default MixMasterView
