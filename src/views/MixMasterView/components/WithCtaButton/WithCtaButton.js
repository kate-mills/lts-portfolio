import React from 'react'
import Container from 'components/Container'
import Grid from '@mui/material/Grid'
import Drink from '../Drink'

const WithCtaButton = ({data}) => {

  return (
    <Container>
      <Grid container spacing={4}>
        {data.map((item, i) => {
          return (
            <Drink item={item} key={item.idDrink}/>
          )})}
      </Grid>
    </Container>
  )
}

export default WithCtaButton
