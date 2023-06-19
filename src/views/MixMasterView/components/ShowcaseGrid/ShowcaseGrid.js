import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'


import Container from 'components/Container'

import ShowcasePopover from '../ShowcasePopover'

const ShowcaseGrid = ({data = {}}) => {
  return (
    <Box bgcolor={'background.paper'}>
      <Container>
        <Grid container spacing={{xs: 2, md: 4}}>
          {data.map((item, i) => (
            <Grid key={item.idDrink} item xs={12} sm={6} md={4}>
              <Box width={1} height={1} position={'relative'}>
                <img
                  src={item.strDrinkThumb}
                  alt={item.strDrink}
                  loading="lazy"
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
                  <Typography color={'common.white'}>{item.strGlass}

            </Typography>

           <ShowcasePopover item={item}/>

            
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
