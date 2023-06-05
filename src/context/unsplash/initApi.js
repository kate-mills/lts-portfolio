import {createApi} from 'unsplash-js'

export const DEFAULT_QUERY = 'smoothie'

export const initApi = () => {
  const unsplash = createApi({accessKey: process.env.GATSBY_UNSPLASH_ACCESS_KEY, fetch: fetch})
  return unsplash
}
