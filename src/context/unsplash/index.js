import React, {useContext} from 'react'
import axios from 'axios'

import {createApi} from 'unsplash-js'

const UnsplashContext = React.createContext()

const unsplash = createApi({accessKey: process.env.GATSBY_UNSPLASH_ACCESS_KEY, fetch: fetch})

const UnsplashProvider = ({children}) => {
  return <UnsplashContext.Provider value={{unsplash}}>{children}</UnsplashContext.Provider>
}

export const UseUnsplashContext = () => {
  return useContext(UnsplashContext)
}

export {UnsplashContext, UnsplashProvider}
