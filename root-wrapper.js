import React from 'react'

import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';

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
