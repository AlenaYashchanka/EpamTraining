import { START_SIMPLE_SEARCH } from './simple-search.types.js'

export function simpleSearch (payload) {
  return {
    type: START_SIMPLE_SEARCH,
    payload
  }
}
