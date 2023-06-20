import React from 'react'
import MixMasterView from 'views/MixMasterView'
import 'css/main.css'
import Seo from 'components/Seo'
import SeoImg from 'images/mixmaster.jpg'

const MixMasterPage = () => {
  return <MixMasterView />
}

export default MixMasterPage

export const Head = ({location}) => {
  return (
    <Seo location={location} pageContext={{
      title: 'MixMaster',
        description: 'From classic concoctions to trendy mixology marvels, MixMaster serves up a comprehensive database of recipes, ingredients, and step-by-step instructions.',
        image: SeoImg,
    }}/>
  )
}
