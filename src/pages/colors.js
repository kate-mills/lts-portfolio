import * as React from 'react';
import ColorsView from 'views/ColorsView';

import Seo from 'components/Seo'
import SeoImg from 'images/colors.jpg'

const ColorsPage = () => {
  return <ColorsView />;
};

export default ColorsPage;
export const Head = ({location}) => {
  return (
    <Seo 
    location={location} 
    pageContext={{
      title: 'Color Palette',
        description: '',
        image: SeoImg,
    }}
    />
  )
}
