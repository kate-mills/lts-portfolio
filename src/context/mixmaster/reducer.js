import {FETCH_DATA, UPDATE_COCKTAIL_ID, FETCH_COCKTAIL_ID, UPDATE_QUERY_STRING} from './actions'


const reducer = (state, action) => {

  if (action.type === UPDATE_QUERY_STRING) {
    const {qStr} = action.payload
    return {...state, query: qStr}
  }
  if (action.type === FETCH_DATA) {
    const {drinks} = action.payload
    let drinkData = !drinks? []: [...drinks]
    return { ...state, data: [...drinkData]}
  }

  if (action.type === UPDATE_COCKTAIL_ID) {
    const {id} = action.payload
    return {...state, cocktailId: id}
  }
  if (action.type === FETCH_COCKTAIL_ID) {
    const {cocktail} = action.payload
    return {
      ...state,
      cocktailData:cocktail,
    }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default reducer
