/* eslint-disable react-hooks/exhaustive-deps */

import React, {createContext, useContext, useEffect, useReducer} from 'react'
import {FETCH_DATA, UPDATE_QUERY_STRING} from './actions'

import reducer from './reducer'

import {DEFAULT_QUERY, initApi} from './initApi'

const MixMasterContext = createContext()

const initialState = {
  page: 1,
  query: DEFAULT_QUERY,
  defaultQuery: DEFAULT_QUERY,
  trending: ['tequilla'],
  data: [],
  loading: false
}

const MixMasterProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchData = async () => {
    console.log()
  }

  return <MixMasterContext.Provider value={{fetchData, state}}>{children}</MixMasterContext.Provider>
}

export const UseMixMasterContext = () => {
  return useContext(MixMasterContext)
}
export {MixMasterContext, MixMasterProvider}
