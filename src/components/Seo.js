import React from 'react'
const Seo = ({location, params, data, pageContext = {}}) => {
  const {title, description, image} = pageContext
  const siteUrl = `https://katemillscompany.com`
  const defaultTitle = 'Kate Mills Company'
  const defaultDescription =
    'Kate Mills Portfolio, featuring fast, secure, and robust websites I built using React, Gatsby, GraphQL, NodeJS, and more.'
  const defaultImage = `${siteUrl}w-image.jpg`
  return (
    <>
      <title>{title || defaultTitle}</title>
      <meta name="og:title" content={title || defaultTitle} />
      <meta name="description" content={description || defaultDescription} />
      <meta name="og:description" content={description || defaultDescription} />
      <meta name="twitter:url" content={`${siteUrl}${location.pathname}`} />
      <meta name="og:image" content={image || defaultImage} />
      <meta name="google-site-verification" content="tJW0STrTxKy1PIWkoG6tshYZ4VbEW_V6-EPXFwFUEuc" />
      <meta name="keywords" content="custom front-end developer, content management, web app"/>
    </>
  )
}
export default Seo
