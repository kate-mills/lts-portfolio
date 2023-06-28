/* eslint-disable react-hooks/exhaustive-deps */

import React, {createContext, useContext, useEffect, useReducer} from 'react'
import axios from 'axios'
import {FETCH_DATA, UPDATE_QUERY_STRING, FETCH_COCKTAIL_ID, UPDATE_COCKTAIL_ID} from './actions'

import reducer from './reducer'

const DEFAULT_QUERY = 'fl'

const SEARCH_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const LOOKUP_URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`

const MixMasterContext = createContext()

const initialState = {
  page: 1,
  query: DEFAULT_QUERY,
  defaultQuery: DEFAULT_QUERY,
  data: [],
  cocktailsFound: 0,
  cocktailId: '',
  cocktailData: {},
  trending: ['fizz', 'tequila', 'fl', 'vodka', 'whisky', 'rum', 'gin', '5', 'sour']
}

const MixMasterProvider = ({children}) => {
  const [loading, setLoading] = React.useState(false)

  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchData = async (query) => {
    if (query) {
      setLoading(true)
      try {
        const {data} = await axios.get(`${SEARCH_URL}${query}`)
        dispatch({type: FETCH_DATA, payload: {drinks: data.drinks}})
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
  }

  const fetchCocktailId = async (cocktailId) => {
    if (cocktailId) {
      setLoading(true)
      try {
        const {data} = await axios.get(`${LOOKUP_URL}${cocktailId}`)
        dispatch({type: FETCH_COCKTAIL_ID, payload: {id: cocktailId, cocktail: data}})
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
  }

  const updateQueryString = (queryStr) => {
    dispatch({type: UPDATE_QUERY_STRING, payload: {qStr: queryStr}})
  }

  const updateCocktailId = (cocktailId) => {
    dispatch({type: UPDATE_COCKTAIL_ID, payload: {id: cocktailId}})
  }

  useEffect(() => {
    fetchCocktailId(state.cocktailId)
  }, [state.cocktailId])

  useEffect(() => {
    fetchData(state.query)
  }, [state.query])

  return (
    <MixMasterContext.Provider value={{loading, updateQueryString, updateCocktailId, state}}>
      {children}
    </MixMasterContext.Provider>
  )
}

export const UseMixMasterContext = () => {
  return useContext(MixMasterContext)
}
export {MixMasterContext, MixMasterProvider}
