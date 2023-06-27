/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import LinearProgress from '@mui/material/LinearProgress'

import FluidLayout from 'layouts/Main'
import Container from 'components/Container'
import {Hero, ShowcaseGrid, TrendingTags} from './components'

import {UseMixMasterContext} from 'context/mixmaster'

const MixMasterView = () => {
  const {
    loading,
    state: {trending, data, query}
  } = UseMixMasterContext()
  return (
    <FluidLayout>
      <Box sx={{overflow: 'hidden !important'}} minHeight={'calc(100vh - 179px)'}>
        <Hero query={query} />
        <Container paddingTop={'0 !important'}>
          <Container sx={{minHeight: '2rem !important'}} paddingY={'0 !important'}>
            {loading && (
              <Box sx={{width: '100%'}} pt={2}>
                <LinearProgress />
              </Box>
            )}
          </Container>

          <ShowcaseGrid data={data} trending={trending} query={query} />
        </Container>
      </Box>
    </FluidLayout>
  )
}

export default MixMasterView
