import React from 'react'
import NotFoundView from 'views/NotFoundView'

import Seo from 'components/Seo'

const FourOFourPage = () => {
  return <NotFoundView />
}

export default FourOFourPage

export const Head = ({location}) => {
  return (
    <Seo
      location={location}
      pageContext={{
        title: 'Oops!'
      }}
    />
  )
}
