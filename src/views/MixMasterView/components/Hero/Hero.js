import React from 'react'
import {alpha, useTheme} from '@mui/material/styles'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import InputAdornment from '@mui/material/InputAdornment'
import HeroImg from 'images/mixmaster.jpg'

import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'

import {UseMixMasterContext} from 'context/mixmaster'
import Container from 'components/Container'

const Hero = () => {
  const theme = useTheme()
  const {primary} = theme.palette

  const {
    state: {trending, query},
    updateQueryString
  } = UseMixMasterContext()

  const [inputValue, setInputValue] = React.useState('')

  const focusMethod = () => {
    document.getElementById('textInputMixMaster').focus()
  }
  const clearInputValue = () => {
    setInputValue('')
    focusMethod()
  }

  React.useEffect(() => {
    focusMethod()
  }, [])

  const handleFormSubmit = (e) => {
    e.preventDefault()
    updateQueryString(inputValue)
  }
  const handleInputChangeWithString = (str) => {
    setInputValue(str)
    updateQueryString(str)
  }
  const handleInputChange = (e) => {
    let str = e.target.value
    handleInputChangeWithString(str)
  }
  return (
    <Box
      minHeight={300}
      height={'auto'}
      position={'relative'}
      sx={{
        backgroundColor: 'primary.dark',
        background: `url(${HeroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: 1,
          height: 1,
          background: alpha(primary.dark, 0.6),
          filter: 'brightness(.5)',
          zIndex: 1
        }}
      />
      <Container position={'relative'} zIndex={2}>
        <Box>
          <Box marginBottom={4}>
            <Typography variant="h3" sx={{fontWeight: 900, color: 'common.white'}} gutterBottom>
              <Typography variant={'cursive'} color={'rgba(225 225 225/ .8)!important'} component={'div'}>
                Meet, MixMaster!
              </Typography>
              The ultimate cocktail companion app
            </Typography>
            <Typography variant="h6" sx={{color: 'common.white'}} gutterBottom>
              From classic concoctions to trendy mixology marvels,
              <Typography variant={'cursive'} fontWeight={'700'} component={'span'}>{` MixMaster `}</Typography>
              serves up a comprehensive database of recipes, ingredients, and step-by-step instructions.
            </Typography>
          </Box>
          <Box padding={{xs: 3, sm: 6}} width={1} component={Card} boxShadow={1}>
            <form noValidate autoComplete="off" onSubmit={handleFormSubmit}>
              <Box display="flex" flexDirection={{xs: 'column', md: 'row'}}>
                <Box width={1} marginRight={{xs: 0, md: 2}} marginBottom={{xs: 2, md: 0}}>
                  <TextField
                    label={'Enter the first few letters of the cocktail name to begin your search'}
                    id="textInputMixMaster"
                    name="textInputMixMaster"
                    variant="outlined"
                    type="search"
                    onChange={handleInputChange}
                    value={inputValue}
                    sx={{height: 54, opacity: '1'}}
                    color="primary"
                    size="medium"
                    fullWidth
                  />
                </Box>
              </Box>
            </form>
            <Box marginY={4} marginX={{xs: -3, sm: -6}}>
              <Divider />
            </Box>
            <Stack
              direction="row"
              spacing={1}
              useFlexGap
              flexWrap="wrap"
              alignItems={'baseline'}
              data-aos="fade"
              data-aos-duration="3000"
            >
              <Typography component={'p'} variant="body2" align="left">
                Trending:{' '}
              </Typography>
              {[...trending].map((title, i) => {
                let isQueryMatch = title.toLowerCase() === query.toLowerCase()
                return (
                  <Chip
                    size={'small'}
                    color={'primary'}
                    variant={'filled'}
                    key={`${title}-${i}`}
                    onClick={(e) => handleInputChangeWithString(title)}
                    label={title}
                    sx={{marginBottom: 1, marginRight: 1, verticalAlign: 'middle'}}
                    disabled={isQueryMatch}
                  />
                )
              })}
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Hero
