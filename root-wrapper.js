import React from 'react'

import {UnsplashProvider} from './src/context/unsplash'
import {MixMasterProvider} from './src/context/mixmaster'

export const wrapRootElement = ({element}) => {
  return (
    <>
      <UnsplashProvider>
        <MixMasterProvider>{element}</MixMasterProvider>
      </UnsplashProvider>
    </>
  )
}
