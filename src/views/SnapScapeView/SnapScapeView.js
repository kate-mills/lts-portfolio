import React from 'react'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import {useTheme} from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import FixedLayout from 'layouts/Fixed'
import Container from 'components/Container'
import {Hero, Main} from './components'

import {UseUnsplashContext} from 'context/unsplash'

const IndexView = () => {
  const theme = useTheme()
  const {
    palette: {mode}
  } = theme
  const DEFAULT_QUERY = 'Travel Destination'

  const {unsplash} = UseUnsplashContext()
  const [loading, setLoading] = React.useState(false)
  const [page, setPage] = React.useState(1)
  const [query, setQuery] = React.useState(DEFAULT_QUERY)
  const [photos, setPhotos] = React.useState([])
  const [data1, setData1] = React.useState([])
  const [data2, setData2] = React.useState([])
  const [data3, setData3] = React.useState([])
  const [photoData, setPhotoData] = React.useState({data1, data2, data3})

  const focusInput = () => {
    const el = document.getElementsByTagName('input')[0]
    el.focus()
    return
  }

  const updataPhotoData = () => {
    setPhotoData((prevPhotoData) => {
      return {data1, data2, data3}
    })
  }

  const fetchImages = async (qInput = '') => {
    let searchQ = qInput || query || DEFAULT_QUERY
    if (searchQ && page <= 6) {
      setLoading(true)
      unsplash.search
        .getPhotos({page, query: searchQ})

        .then((result) => {
          let tempPhotos = []

          let newPhotos = result.response.results.reverse()

          let sliceLength = newPhotos.length / 3

          let lastThird = newPhotos.length - sliceLength

          setPhotos((oldPhotos) => {
            return page === 1 ? [...newPhotos] : [...oldPhotos, ...tempPhotos]
          })

          setData1((oldData1) => {
            let tempData1 = [...newPhotos.slice(0, sliceLength)]
            return page === 1 ? [...tempData1] : [...oldData1, ...tempData1]
          })

          setData2((oldData2) => {
            let tempData2 = [...newPhotos.slice(sliceLength, sliceLength * 2)]
            return page === 1 ? [...tempData2] : [...oldData2, ...tempData2]
          })

          setData3((oldData3) => {
            let tempData3 = [...newPhotos.slice(-sliceLength)]
            return page === 1 ? [...tempData3] : [...oldData3, ...tempData3]
          })

          focusInput()
          setLoading(false)
          updataPhotoData()
        })
        .catch((err) => {
          console.log(err)
          focusInput()
          setLoading(false)
        })
    }
  }

  React.useEffect(() => {
    fetchImages()
  }, [page])

  React.useEffect(() => {
    const event = window.addEventListener('scroll', () => {
      const footerHeight = 180
      if ((!loading && window.innerHeight + window.scrollY) >= document.body.scrollHeight - footerHeight) {
        setPage((oldPage) => {
          return oldPage < 4 ? oldPage + 1 : oldPage
        })
      }
    })
    return () => window.removeEventListener('scroll', event)
  }, [])

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setPage(1)
    let qInput = e.target[0].value
    setQuery(qInput)
    fetchImages(qInput)
  }

  const handleButtonClick = (qString) => {
    setPage(1)
    setQuery(qString)
    fetchImages(qString)
  }

  return (
    <FixedLayout>
      <Box sx={{overflow: 'hidden !important'}} minHeight={'calc(100vh - 247px)'}>
        <Hero query={query} handleSubmit={handleFormSubmit} img={data1[0]} />
        <Container paddingTop={'3 !important'}>
          <Main
            colorsInvert={true}
            query={query}
            handleButtonClick={handleButtonClick}
            loading={loading}
            data1={data1}
            data2={data2}
            data3={data3}
          ></Main>
        </Container>
      </Box>
    </FixedLayout>
  )
}

export default IndexView
