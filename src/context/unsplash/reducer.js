import {
  UNSET_LOADING,
  SET_LOADING,
  FETCH_ADDITIONAL,
  FETCH_FIRST_PAGE,
  UPDATE_QUERY_STRING,
  INCREMENT_PAGE,
  RESET_PAGE_NUMBER
} from './actions'

const unsplash_reducer = (state, action) => {
  console.log(action.type)
  if (action.type === SET_LOADING) {
    return {...state, loading: true}
  }
  if (action.type === UNSET_LOADING) {
    return {...state, loading: false}
  }
  if (action.type === RESET_PAGE_NUMBER) {
    return {...state, page: 1}
  }
  if (action.type === INCREMENT_PAGE) {
    const {pg} = action.payload
    return {...state, page: pg}
  }
  if (action.type === UPDATE_QUERY_STRING) {
    const {qString} = action.payload
    return {...state, query: qString}
  }
  if (action.type === FETCH_FIRST_PAGE) {
    const {images} = action.payload
    return {
      ...state,
      page: 1,
      photoData: {
        images: [...images],
        data1: [...images.slice(0, 3)],
        data2: [...images.slice(3, 6)],
        data3: [...images.slice(-3)]
      }
    }
  }

  if (action.type === FETCH_ADDITIONAL) {
    const {images, pg} = action.payload

    const {photoData} = state
    return {
      ...state,
      photoData: {
        images: [...photoData.images, ...images],
        data1: [...photoData.data1, ...images.slice(0, 3)],
        data2: [...photoData.data2, ...images.slice(3, 6)],
        data3: [...photoData.data3, ...images.slice(-3)]
      },
      page: pg
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default unsplash_reducer
