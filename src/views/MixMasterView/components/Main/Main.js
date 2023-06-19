import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'

import {useTheme} from '@mui/material/styles'

import useMediaQuery from '@mui/material/useMediaQuery'

import Chip from '@mui/material/Chip'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import Fab from '@mui/material/Fab'

import {UseMixMasterContext} from 'context/mixmaster'

const Column = ({query, data, dataName, isSm = true}) => {
  const {updateQueryString} = UseMixMasterContext()
  const theme = useTheme()
  const { palette: { mode, background: {paper} } } = theme

  return (
    <Box>
      {[...data].map((item, i) => {
        const { id, alt_description, urls: {small, regular}, links, tags } = item
        let key = `${dataName}--${id}--${i}`
        return (
          <Box
            data-aos="zoom-in-up"
            key={key}
            sx={{marginBottom: {xs: 2, sm: 3}, '&:last-child': {marginBottom: 0}}}
            minHeight={'fit-content'}
          >
            <Box
              boxShadow={1}
              sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 2,
                '&:hover': {'& img': {transform: 'scale(1.2)'}, '& .portfolio-massonry__main-item': {bottom: 0}}
              }}
            >
              <Box
                component={'img'}
                loading={'eager'}
                minHeight={200}
                height={1}
                width={1}
                src={isSm ? small : regular}
                alt={alt_description}
                maxHeight={{xs: 400, sm: 600, md: 1}}
                sx={{
                  transition: 'transform .7s ease !important',
                  transform: 'scale(1.0)',
                  objectFit: 'cover',
                  filter: mode === 'dark' ? 'brightness(0.7)' : 'brightness(0.9)'
                }}
              />
              {isSm ? (
                <Stack
                  direction="row"
                  spacing={1}
                  useFlexGap
                  justifyContent={'space-between'}
                  alignItems="center"
                  flexWrap="wrap"
                  sx={{position: 'absolute', bottom: 20, left: 8, right: 8}}
                >
                  <Stack
                    maxWidth={'80%'}
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    useFlexGap
                    justifyContent="space-between"
                    flexWrap="wrap"
                  >
                    {[...tags].map(({title, i}) => {
                      let isQueryMatch = title.toLowerCase() === query.toLowerCase()
                      return isQueryMatch ? null : (
                        <Chip
                          component={'button'}
                          variant={'filled'}
                          size={'small'}
                          color={'primary'}
                          key={`${title}-${i}`}
                          onClick={() => updateQueryString(title)}
                          label={title}
                          disabled={isQueryMatch}
                        />
                      )
                    })}
                  </Stack>
                  <Fab
                    component={'a'}
                    rel="nofollow"
                    size={'small'}
                    data-test="non-sponsored-photo-download-button"
                    title="Download Photo"
                    href={`${links.download}&force=true`}
                    color="primary"
                    aria-label="Download"
                  >
                    <FileDownloadIcon />
                  </Fab>
                </Stack>
              ) : (
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
                    <path fill={paper} d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"></path>
                  </Box>

                  <Stack
                    direction="row"
                    spacing={1}
                    useFlexGap
                    justifyContent={'space-between'}
                    alignItems="flex-start"
                    flexWrap="wrap"
                  >
                    <Box maxWidth={'100%'}>
                      {[...tags].map(({title, i}) => {
                        let isQueryMatch = title.toLowerCase() === query.toLowerCase()
                        return (
                          <Chip
                            variant={'filled'}
                            size={'small'}
                            color={'primary'}
                            key={`${title}-${i}`}
                            onClick={() => updateQueryString(title)}
                            label={title}
                            sx={{marginBottom: 1, marginRight: 1}}
                            disabled={isQueryMatch}
                          />
                        )
                      })}
                    </Box>
                    <Fab
                      component={'a'}
                      rel="nofollow"
                      size={'small'}
                      data-test="non-sponsored-photo-download-button"
                      title="Download Photo"
                      href={`${links.download}&force=true`}
                      color="primary"
                      aria-label="Download"
                    >
                      <FileDownloadIcon />
                    </Fab>
                  </Stack>
                </Box>
              )}
            </Box>
          </Box>
        )
      })}
    </Box>
  )
}

const Main = ({data1 = [], data2 = [], data3 = []}) => {
  const {
    state: {query}
  } = UseMixMasterContext()

  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.down('md'), {defaultMatches: false})

  return (
    <Box>
      <Grid container spacing={4}>
        {!isSm && (
          <Grid item xs={12} md={4}>
            {data1.length < 1 ? (
              <Skeleton animation={'wave'} height={200} />
            ) : (
              <Column query={query} data={data1} dataName={'data1'} isSm={isSm} />
            )}
          </Grid>
        )}
        {!isSm && (
          <Grid item xs={12} md={4}>
            {data2.length < 1 ? (
              <Skeleton animation={'wave'} />
            ) : (
              <Column query={query} data={data2} dataName={'data2'} isSm={isSm} />
            )}
          </Grid>
        )}

        <Grid item xs={12} md={4}>
          {data3.length < 1 ? (
            <Skeleton animation={'wave'} />
          ) : (
            <Column query={query} data={data3} dataName={'data3'} isSm={isSm} />
          )}
        </Grid>
      </Grid>
    </Box>
  )
}

export default Main
