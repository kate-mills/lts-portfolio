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
      title: 'Kate Mills Company',
        description: '',
        image: SeoImg,
    }}
    />
  )
}
