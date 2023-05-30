import React from 'react'
import PropTypes from 'prop-types'
import {Helmet} from 'react-helmet'

import Page from '../../src/components/Page'

//import 'slick-carousel/slick/slick.css'
//import 'slick-carousel/slick/slick-theme.css'
import 'aos/dist/aos.css'

export default function TopLayout(props) {
  const siteUrl = 'https://lts-portfolio-m.netlify.app'

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <title>Kate Mills Portfolio</title>
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta
          name="description"
          content="Kate Mills Portfolio, featuring fast, secure, and robust websites I built using React, Gatsby, GraphQL, NodeJS, and more."
        />
        <meta name="og:title" content="Kate Mills Portfolio" />
        <meta name="og:type" content="website" />
        <meta name="og:image" content={`${siteUrl}/kate-mills-portfolio.jpg`} />
        <meta name="og:url" content={`${siteUrl}/`} />
        <meta
          name="og:description"
          content="Kate Mills Portfolio, featuring fast, secure, and robust websites I built using React, Gatsby, GraphQL, NodeJS, and more."
        />
        <meta name="og:locale" content="en_US" />
        <meta name="og:site_name" content="Kate Mills Portfolio" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://use.typekit.net/cku7ykx.css" />
      </Helmet>
      <Page>{props.children}</Page>
    </React.Fragment>
  )
}

TopLayout.propTypes = {
  children: PropTypes.node
}
