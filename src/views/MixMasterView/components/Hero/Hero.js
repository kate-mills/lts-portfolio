import React from 'react'
import {alpha, useTheme} from '@mui/material/styles'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import InputAdornment from '@mui/material/InputAdornment'
import HeroImg from 'images/mixmaster.jpg'

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import LinearProgress from '@mui/material/LinearProgress'

import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'

import {UseMixMasterContext} from 'context/mixmaster'
import Container from 'components/Container'

const Hero = () => {
  const theme = useTheme()
  const {primary} = theme.palette
  const {
    loading,
    state: {trending, query, cocktailsFound},
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
    let isSpace = str === ' '
    !isSpace && handleInputChangeWithString(str)
  }

  React.useEffect(() => { focusMethod() }, [])
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

            <Stack
              direction="row"
              spacing={'11px'}
              useFlexGap
              alignItems={'baseline'}
              data-aos="fade"
              data-aos-duration="3000"
              overflow="scroll"
              mb={2}
              pb={1}
            >
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



            <Box marginBottom={6} marginTop={0} marginX={{xs: -3, sm: -6}}> <Divider /> <Box height={'2px'} minHeight={'2px'}> <Box sx={{width: '100%'}} height={'2px'}>{loading && <LinearProgress sx={{height: '2px'}}/>}</Box> </Box> </Box>

            <form noValidate autoComplete="off" onSubmit={handleFormSubmit}>
              <Box display="flex" flexDirection={{xs: 'column', md: 'row'}}>


                <Box width={1} marginRight={{xs: 0, md: 2}} marginBottom={{xs: 2, md: 0}}>
                  <TextField
                    label={'Cocktail Name'}
                    helperText={
                      inputValue &&
                      (loading ? 'Loading...' : `${cocktailsFound} cocktail${cocktailsFound === 1 ? '' : 's'} found`)
                    }
                    id="textInputMixMaster"
                    name="textInputMixMaster"
                    variant="outlined"
                    onChange={handleInputChange}
                    value={inputValue}
                    sx={{height: 54, opacity: '1'}}
                    color="primary"
                    size="medium"
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          {inputValue && (
                            <Box
                              onClick={clearInputValue}
                              onKeyPress={clearInputValue}
                              tabIndex="0"
                              component={'svg'}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              width={20}
                              height={20}
                              color={'primary.main'}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                                strokeWidth={2}
                              />
                            </Box>
                          )}
                        </InputAdornment>
                      )
                    }}
                  />
                </Box>
              </Box>
            </form>

          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Hero
