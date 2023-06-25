import React from 'react'
import {alpha, useTheme} from '@mui/material/styles'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import InputAdornment from '@mui/material/InputAdornment'
import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'

import {UseUnsplashContext} from 'context/unsplash'

import Container from 'components/Container'

const Hero = ({img}) => {
  const theme = useTheme()
  const {
    primary: {dark}
  } = theme.palette

  const {
    updateQueryString,
    state: {query, trending}
  } = UseUnsplashContext()
  const [inputValue, setInputValue] = React.useState(query)

  React.useEffect(() => {
    setInputValue(query)
  }, [query])

  const handleFormSubmit = (e) => {
    e.preventDefault()
    updateQueryString(e.target[0].value)
  }
  return (
    <Box
      minHeight={300}
      height={'auto'}
      position={'relative'}
      sx={{
        backgroundColor: dark,
        background: `url(${img?.urls?.full || ''})`,
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
          background: alpha(dark, 0.6),
          zIndex: 1
        }}
      />
      <Container position={'relative'} zIndex={2}>
        <Box>
          <Box marginBottom={4}>
            <Typography variant="h3" sx={{fontWeight: 900, color: 'common.white'}} gutterBottom>
              <Typography variant={'cursive'} color={'rgba(225 225 225/ .8)!important'} component={'div'}>
                Introducing "SnapScape"
              </Typography>
              Free, delightful imagery at your fingertips!
            </Typography>

            <Typography variant="h6" sx={{color: 'common.white'}}></Typography>

            <Typography
              variant="h6"
              component="p"
              sx={{
                fontWeight: 400,
                color: 'common.white'
              }}
              gutterBottom
            >
              Your one-stop destination for delightful and cost-free imagery!
            </Typography>

            <Typography component="p" variant="body2" align="left" color={'common.white'}>
              Explore, discover, and download captivating visuals for all your creative needs.{' '}
            </Typography>
          </Box>
          <Box padding={{xs: 3, sm: 6}} width={1} component={Card} boxShadow={1}>
            <form noValidate autoComplete="off" onSubmit={handleFormSubmit}>
              <Box display="flex" flexDirection={{xs: 'column', md: 'row'}}>
                <Box width={1} marginRight={{xs: 0, md: 2}} marginBottom={{xs: 2, md: 0}}>
                  <TextField
                    id="textInputUnsplash"
                    name="textInputUnsplash"
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                    sx={{height: 54, opacity: '1'}}
                    variant="outlined"
                    color="primary"
                    size="medium"
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Box
                            component={'svg'}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width={24}
                            height={24}
                            color={'primary.main'}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                            {query}
                          </Box>
                        </InputAdornment>
                      )
                    }}
                  />
                </Box>
                <Box>
                  <Button
                    type="submit"
                    sx={{height: 54, whiteSpace: 'nowrap'}}
                    variant="contained"
                    color="primary"
                    size="medium"
                    fullWidth
                  >
                    Search Images
                  </Button>
                </Box>
              </Box>
            </form>
            <Box marginY={4} marginX={{xs: -3, sm: -6}}>
              <Divider />
            </Box>

            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
              <Typography component="p" variant="body2" align="left">
                Trending:
              </Typography>
              {[...trending].map((title, i) => {
                let isQueryMatch = title.toLowerCase() === query.toLowerCase()
                return (
                  <Chip
                    component={'button'}
                    size={'small'}
                    color={'primary'}
                    variant={'filled'}
                    key={`${title}-${i}`}
                    onClick={(e) => !isQueryMatch && updateQueryString(title)}
                    label={title}
                    sx={{marginBottom: 1, marginRight: 1}}
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
