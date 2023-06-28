import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import Container from 'components/Container'

import ShowcasePopover from '../ShowcasePopover'
import {UseMixMasterContext} from 'context/mixmaster'

const ShowcaseGrid = () => {
  const {
    state: {data, query}
  } = UseMixMasterContext()
  return (
    <Box bgcolor={'background.paper'}>
      <Container minHeight={'44px'} paddingY={2}>
        <Typography
          component={'span'}
          variant="h6"
          fontWeight={'600'}
          textTransform="uppercase"
          align="left"
          pl={2}
          color={'primary.main'}
          pt={1}
          pb={2}
        >
          {' '}
          {query}{' '}
        </Typography>
      </Container>
      <Container paddingTop={'0 !important'} sx={{minHeight: '50vh'}}>
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
