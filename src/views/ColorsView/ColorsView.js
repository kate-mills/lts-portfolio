/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import {useTheme} from '@mui/material/styles'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

import FixedLayout from 'layouts/Fixed'
import Container from 'components/Container'

const ColorsView = () => {
  const {
    palette: {primary, secondary, common, alternate, background}
  } = useTheme()

  return (
    <FixedLayout>
      <Container>
        <Box marginBottom={4}>
          <Typography variant="h3" gutterBottom sx={{fontWeight: 600}}>
            Colors
          </Typography>
          <Typography
            sx={{
              '& code': {
                background: secondary.light,
                color: common.black
              }
            }}
          >
            The MUI <code>palette</code> object declaration is <code>src/theme/palette.js</code>
          </Typography>
        </Box>
        <Box marginBottom={4}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom sx={{fontWeight: 600}}>
                Primary
              </Typography>
              <Grid container spacing={2}>
                {[primary.light, primary.main, primary.dark].map((color) => (
                  <Grid item xs={12} sm={4} key={color}>
                    <Box component={Card} boxShadow={3} borderRadius={2}>
                      <Box width={1} height={200} bgcolor={color} />
                      <CardContent>{color}</CardContent>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontWeight: 600
                }}
              >
                Secondary
              </Typography>
              <Grid container spacing={2}>
                {[secondary.light, secondary.main, secondary.dark].map((color) => (
                  <Grid item xs={12} sm={4} key={color}>
                    <Box component={Card} boxShadow={3} borderRadius={2}>
                      <Box width={1} height={200} bgcolor={color} />
                      <CardContent>{color}</CardContent>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontWeight: 600
                }}
              >
                Alternate
              </Typography>
              <Grid container spacing={2}>
                {[alternate.main, alternate.dark].map((color) => (
                  <Grid item xs={12} sm={6} key={color}>
                    <Box component={Card} boxShadow={3} borderRadius={2}>
                      <Box width={1} height={200} bgcolor={color} />
                      <CardContent>{color}</CardContent>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontWeight: 600
                }}
              >
                Background
              </Typography>
              <Grid container spacing={2}>
                {[background.paper, background.default, background.level1, background.level2].map((color, i) => (
                  <Grid item xs={12} sm={3} key={i}>
                    <Box component={Card} boxShadow={3} borderRadius={2}>
                      <Box width={1} height={200} bgcolor={color} />
                      <CardContent>{color}</CardContent>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </FixedLayout>
  )
}

export default ColorsView
