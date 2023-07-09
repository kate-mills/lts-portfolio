import React from 'react'
import PropTypes from 'prop-types'
import {Helmet} from 'react-helmet'

import Page from '../../src/components/Page'

//import 'slick-carousel/slick/slick.css'
//import 'slick-carousel/slick/slick-theme.css'

import 'aos/dist/aos.css'

export default function TopLayout(props) {
  return (
    <React.Fragment>
      <Helmet htmlAttributes={{lang: 'en'}}>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="og:locale" content="en_US" />
        <meta name="og:site_name" content="Kate Mills Portfolio" />
        <meta name="og:type" content="website" />
      </Helmet>
      <Page>{props.children}</Page>
    </React.Fragment>
  )
}

TopLayout.propTypes = {
  children: PropTypes.node
}
