import React from 'react'
import IndexView from 'views/IndexView'

import Seo from 'components/Seo'
import SeoImg from 'images/website.jpg'

const IndexPage = () => {
  return <IndexView />
}

export default IndexPage

export const Head = ({location}) => {
  return (
    <Seo
      location={location}
      pageContext={{
        title: 'Kate Mills, Web Developer based in Napa, CA',
        description: 'My portfolio demonstrates expertise in HTML, CSS, JavaScript, React, Gatsby, GraphQL, and NodeJS. I create responsive, mobile-friendly designs with robust back-end functionality.',
        image: SeoImg
      }}
    />
  )
}
