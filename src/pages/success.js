import * as React from 'react'
import SuccessView from 'views/SuccessView'

import Seo from 'components/Seo'
import SeoImg from 'images/website.jpg'

const SuccessPage = () => {
  return <SuccessView />
}

export default SuccessPage
export const Head = ({location}) => {
  return (
    <Seo
      location={location}
      pageContext={{
        title: 'Success',
        description: '',
        image: SeoImg
      }}
    />
  )
}
