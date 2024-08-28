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
        description: 'I specialize in developing custom web experiences using the latest front-end technologies. With over seven years of experience, I have successfully delivered projects for local businesses and large-scale wholesalers, including Michele Corley Clinical Skin Care. I am eager to discuss how I can contribute to your next project.',
        image: SeoImg
      }}
    />
  )
}
