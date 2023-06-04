import React, {useState, createContext, useContext, useEffect, useReducer} from 'react'

import {
  UNSET_LOADING,
  SET_LOADING,
  FETCH_ADDITIONAL,
  FETCH_FIRST_PAGE,
  UPDATE_QUERY_STRING,
  INCREMENT_PAGE,
  RESET_PAGE_NUMBER
} from './actions'

import reducer from './reducer'

import {DEFAULT_QUERY, initApi} from './initApi'

const UnsplashContext = createContext()

const initialState = {
  page: 1,
  unsplash: initApi(),
  query: DEFAULT_QUERY,
  defaultQuery: DEFAULT_QUERY,
  trending: ['flower', 'wallpapers', 'backgrounds', 'happy', 'love'],
  photoData: {data1: [], data2: [], data3: []},
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
  const startLoading = () => {
    dispatch({type: SET_LOADING})
  }
  const stopLoading = () => {
    dispatch({type: UNSET_LOADING})
  }

  const resetPageNumber = () => {
    return dispatch({type: RESET_PAGE_NUMBER})
  }

  const updateQueryString = (query) => {
    dispatch({type: UPDATE_QUERY_STRING, payload: {qString: query}})
    fetchFirstPage(query)
  }

  const fetchPageNumber = async (pg) => {
    /* Append to image list */
    let nextPage = pg + 1

    console.log('fetchPageNumber - pg', pg)
    console.log('fetchPageNumber - nextPage', nextPage)
    pg < 10 &&
      state.unsplash?.search
        .getPhotos({page: pg, query: state.query})
        .then((result) => {
          dispatch({type: FETCH_ADDITIONAL, payload: {images: result?.response?.results, pg: nextPage}})
        })
        .catch((err) => {
          console.log('err', err)
        })
  }

  const updatePageNumber = (pg) => {
    dispatch({type: INCREMENT_PAGE, payload: {pg}})
  }

  useEffect(() => {
    fetchFirstPage(DEFAULT_QUERY)
  }, [])

  return (
    <UnsplashContext.Provider value={{updateQueryString, fetchPageNumber, state}}>{children}</UnsplashContext.Provider>
  )
}

export const UseUnsplashContext = () => {
  return useContext(UnsplashContext)
}
export {UnsplashContext, UnsplashProvider}
