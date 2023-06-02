/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import {alpha, useTheme} from '@mui/material/styles'

import Avatar from '@mui/material/Avatar'
import Chip from '@mui/material/Chip'
import FileDownloadIcon from '@mui/icons-material/FileDownload'

const Column = ({loading, query, handleButtonClick, data, dataName}) => {
  const theme = useTheme()
  const {
    palette: {divider, mode}
  } = theme

  return loading ? (
    <CircularProgress />
  ) : (
    <Box>
      {data.map((item, i) => {
        const {
          id,
          description,
          alt_description,
          urls: {regular},
          links,
          tags,
          user: {name, username}
        } = item

        let key = `${dataName}--${id}--${i}`
        return (
          <Box
            key={key}
            sx={{
              marginBottom: {xs: 2, sm: 3},
              '&:last-child': {marginBottom: 0}
            }}
          >
            <Box
              boxShadow={1}
              sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 2,
                '&:hover': {
                  '& img': {transform: 'scale(1.2)'},
                  '& .portfolio-massonry__main-item': {
                    bottom: 0
                  }
                }
              }}
            >
              <Box
                component={'img'}
                loading={'eager'}
                height={1}
                width={1}
                src={item.urls?.regular}
                alt={alt_description}
                maxHeight={{xs: 400, sm: 600, md: 1}}
                sx={{
                  transition: 'transform .7s ease !important',
                  transform: 'scale(1.0)',
                  objectFit: 'cover',
                  filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none'
                }}
              />
              <Box
                position={'absolute'}
                bottom={'-100%'}
                left={0}
                right={0}
                padding={4}
                bgcolor={'background.paper'}
                className={'portfolio-massonry__main-item'}
                sx={{transition: 'bottom 0.3s ease 0s'}}
              >
                <Box
                  component={'svg'}
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 1920 100.1"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    transform: 'translateY(-90%)',
                    zIndex: 2,
                    width: 1
                  }}
                >
                  <path fill={theme.palette.background.paper} d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"></path>
                </Box>
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                  <Box maxWidth={'75%'} sx={{display: 'inline-block'}}>
                    {[...tags].map(({title, i}) => {
                      let isQueryMatch = title.toLowerCase() === query.toLowerCase()
                      return (
                        <Chip
                          component={'button'}
                          size={'small'}
                          color={'primary'}
                          key={`${title}-${i}`}
                          onClick={(e) => !isQueryMatch && handleButtonClick(title)}
                          label={title}
                          sx={{marginBottom: 1, marginRight: 1}}
                          disabled={isQueryMatch}
                        />
                      )
                    })}
                  </Box>
                  <Box
                    component={'a'}
                    rel="nofollow"
                    data-test="non-sponsored-photo-download-button"
                    title="Download Photo"
                    href={`${links.download}&force=true`}
                    bgcolor={alpha(divider, 0.05)}
                    width={50}
                    height={50}
                    sx={{borderRadius: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                  >
                    <Box component={FileDownloadIcon} color={'primary.main'} />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        )
      })}
    </Box>
  )
}

Column.propTypes = {
  data: PropTypes.array.isRequired,
  dataName: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
}

const Main = ({query = '', handleButtonClick, loading = true, data1 = [], data2 = [], data3 = []}) => {
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Column
            loading={loading || data1?.length < 1}
            query={query}
            handleButtonClick={handleButtonClick}
            data={data1}
            dataName={'data1'}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Column
            query={query}
            handleButtonClick={handleButtonClick}
            data={data2}
            dataName={'data2'}
            loading={loading || data2?.length < 1}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Column
            query={query}
            handleButtonClick={handleButtonClick}
            data={data3}
            dataName={'data3'}
            loading={loading || data3?.length < 1}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Main
