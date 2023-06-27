import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import Container from 'components/Container'

import ShowcasePopover from '../ShowcasePopover'
import {UseMixMasterContext} from 'context/mixmaster'

const ShowcaseGrid = () => {
  const {
    loading,
    state: {data, query}
  } = UseMixMasterContext()
  return (
    <Box bgcolor={'background.paper'}>
      <Container paddingY={'0 !important'}>
        <Stack
          direction="row"
          spacing={1}
          justifyContent={'space-between'}
          alignItems={'flex-end'}
          useFlexGap
          flexWrap="wrap">
          <Typography component={'span'} variant="subtitle2" align="left" minWidth={'30%'} py={1}>
            {loading ? `LOADING...` : `${data.length} COCKTAIL${data.length === 1 ? '' : 'S'} FOUND`}
          </Typography>
        </Stack>
      </Container>
      <Container paddingTop={'0 !important'}>
        <Grid container spacing={{xs: 2, md: 4}}>
          {data.map((item, i) => (
            <Grid key={item.idDrink} item xs={12} sm={6} md={4} data-aos="zoom-in-up">
              <Box width={1} height={1} position={'relative'}>
                <img
                  src={item.strDrinkThumb}
                  alt={item.strDrink}
                  loading="eager"
                  style={{
                    filter: 'brightness(0.7)',
                    borderRadius: 8,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <Box position={'absolute'} bottom={0} left={0} right={0} width={1} padding={2} zIndex={2}>
                  <Typography color={'common.white'} fontWeight={700} variant={'h6'}>
                    {item.strDrink}
                  </Typography>
                  <Typography color={'common.white'}>{item.strGlass}</Typography>
                  <ShowcasePopover item={item} />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default ShowcaseGrid
