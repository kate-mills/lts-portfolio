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
        description: 'I create custom web experiences using the latest front-end technologies. Let\'s discuss your idea and how I can contribute to your project.',
        image: SeoImg
      }}
    />
  )
}
