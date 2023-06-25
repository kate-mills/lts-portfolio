import * as React from 'react'
import ContactView from 'views/ContactView'

import Seo from 'components/Seo'
import SeoImg from 'images/website.jpg'

const ContactPage = () => {
  return <ContactView />
}

export default ContactPage
export const Head = ({location}) => {
  return (
    <Seo
      location={location}
      pageContext={{
        title: 'Contact Me',
        description: '',
        image: SeoImg
      }}
    />
  )
}
