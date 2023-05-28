import appsLt from 'images/coverpages/apps--light.jpg'
import appsDk from 'images/coverpages/apps--dark.jpg'

import coversLt from 'images/coverpages/covers--light.jpg'
import coversDk from 'images/coverpages/covers--dark.jpg'

import homeLt from 'images/coverpages/home--light.jpg'
import homeDk from 'images/coverpages/home--dark.jpg'

import welcomeLt from 'images/coverpages/welcome--light.jpg'
import welcomeDk from 'images/coverpages/welcome--dark.jpg'

const indexViewHeroImages = [
  {
    group: [
      {imgLt: welcomeLt, imgDark: welcomeDk},
      {imgLt: appsLt, imgDark: appsDk}
    ]
  },
  {
    group: [
      {imgLt: coversLt, imgDark: coversDk},
      {imgLt: homeLt, imgDark: homeDk},
      {imgLt: coversLt, imgDark: coversDk}
    ]
  },
  {
    group: [
      {imgLt: coversLt, imgDark: coversDk},
      {imgLt: coversLt, imgDark: coversDk},
      {imgLt: welcomeLt, imgDark: welcomeDk},
      {imgLt: homeLt, imgDark: homeDk}
    ]
  }
]
export default indexViewHeroImages
