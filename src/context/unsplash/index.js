/* eslint-disable react-hooks/exhaustive-deps */

import React, {createContext, useContext, useEffect, useReducer} from 'react'
import {FETCH_ADDITIONAL, FETCH_FIRST_PAGE, UPDATE_QUERY_STRING, SET_LOADING, UNSET_LOADING} from './actions'

import reducer from './reducer'

import {DEFAULT_QUERY, initApi} from './initApi'

const UnsplashContext = createContext()

const initialState = {
  page: 1,
  unsplash: initApi(),
  query: DEFAULT_QUERY,
  defaultQuery: DEFAULT_QUERY,
  trending: ['flower', 'wallpapers', 'backgrounds', 'happy', 'love'],
  photoData: {images: [], data1: [], data2: [], data3: []},
  loading: false
}

const UnsplashProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchFirstPage = async (query) => {
    /* Start a new image list */
    state.unsplash?.search
      .getPhotos({page: 1, query: query || DEFAULT_QUERY})
      .then((result) => {
        dispatch({type: FETCH_FIRST_PAGE, payload: {images: result?.response?.results, qString: query}})
      })
      .catch((err) => {
        console.log('err', err)
      })
  }
  const updateQueryString = (query) => {
    dispatch({type: UPDATE_QUERY_STRING, payload: {qString: query}})
    fetchFirstPage(query)
  }

  const setLoading = () => {
    dispatch({type: SET_LOADING})
  }

  const fetchPageNumber = async (pg) => {
    /* Append to image list */
    pg < 10 &&
      state.unsplash?.search
        .getPhotos({page: pg, query: state.query})
        .then((result) => {
          dispatch({type: FETCH_ADDITIONAL, payload: {images: result?.response?.results, pg: pg + 1}})
        })
        .then((response) => {
          dispatch({type: UNSET_LOADING})
        })
        .catch((err) => {
          console.log('err', err)
        })
  }

  useEffect(() => {
    fetchFirstPage(DEFAULT_QUERY)
  }, [])

  return (
    <UnsplashContext.Provider value={{setLoading, updateQueryString, fetchPageNumber, state}}>
      {children}
    </UnsplashContext.Provider>
  )
}

export const UseUnsplashContext = () => {
  return useContext(UnsplashContext)
}
export {UnsplashContext, UnsplashProvider}
