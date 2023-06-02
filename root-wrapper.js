import React from 'react'

import {UnsplashProvider} from './src/context/unsplash'

export const wrapRootElement = ({element}) => {
  return (
    <>
      <UnsplashProvider>{element}</UnsplashProvider>
    </>
  )
}
