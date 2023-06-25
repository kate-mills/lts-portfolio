import React from 'react'
import SnapScapeView from 'views/SnapScapeView'
import Seo from 'components/Seo'
import SeoImg from 'images/snapscape.jpg'

const SnapScapePage = () => {
  return <SnapScapeView />
}

export default SnapScapePage

export const Head = ({location}) => {
  return (
    <Seo
      location={location}
      pageContext={{
        title: 'SnapScape',
        description:
          'Your one-stop destination for delightful and cost-free imagery! Explore, discover, and download captivating visuals for all your creative needs.',
        image: SeoImg
      }}
    />
  )
}
