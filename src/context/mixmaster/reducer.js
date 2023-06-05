import {FETCH_DATA, UPDATE_QUERY_STRING} from './actions'

const reducer = (state, action) => {
  console.log(action.type)

  if (action.type === UPDATE_QUERY_STRING) {
    const {qString} = action.payload
    return {...state, query: qString}
  }

  if (action.type === FETCH_DATA) {
    const {data} = action.payload
    return {
      ...state,
      data: [...data]
    }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default reducer
