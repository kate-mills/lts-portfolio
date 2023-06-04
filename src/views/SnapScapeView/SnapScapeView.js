import React from 'react'
import Box from '@mui/material/Box'

import FixedLayout from 'layouts/Fixed'
import Container from 'components/Container'
import {Hero, Main} from './components'

import {UseUnsplashContext} from 'context/unsplash'

const SnapScapeView = () => {
  const DEFAULT_QUERY = 'Travel Destination'
  const {
    fetchPageNumber,
    state: {
      photoData: {data1, data2, data3},
      query,
      loading,
      page
    }
  } = UseUnsplashContext()

  const [pg, setPg] = React.useState(page)

  const focusInput = () => {
    const el = document.getElementsByTagName('input')[0]
    el.focus()
    return
  }

  React.useEffect(() => {
    pg > 1 && fetchPageNumber(pg)
  }, [pg])

  React.useEffect(()  => {
    setPg(1)
  }, [query])

  React.useEffect(() => {
    const event = window.addEventListener('scroll', () => {
      const footerHeight = 179
      if ((!loading && window.innerHeight + window.scrollY) >= document.body.scrollHeight - footerHeight) {
        setPg(prevPg => prevPg + 1)
      }
    })
    return () => window.removeEventListener('scroll', event)
  }, [])


  return (
    <FixedLayout>
      <Box sx={{overflow: 'hidden !important'}} minHeight={'calc(100vh - 179px)'}>
        <Hero img={data1[0]} />
        <Container paddingTop={'3 !important'}>
          <Main
            colorsInvert={true}
            query={query}
            loading={loading}
            data1={data1}
            data2={data2}
            data3={data3}
          />
        </Container>
      </Box>
    </FixedLayout>
  )
}

export default SnapScapeView
