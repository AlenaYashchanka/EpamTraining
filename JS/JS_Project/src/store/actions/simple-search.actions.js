import { START_SIMPLE_SEARCH } from './simple-search.types.js'
import { START_SEARCH_CURRENCY } from './simple-search.types.js'
import { START_SEARCH_PRICE } from './simple-search.types.js'
import { START_SEARCH_RETAILER } from './simple-search.types.js'
import { START_SEARCH_BRAND } from './simple-search.types.js'

export function simpleSearch (payload) {
  return {
    type: START_SIMPLE_SEARCH,
    payload
  }
}

export function searchCurrency (payload) {
  return {
    type: START_SEARCH_CURRENCY,
    payload
  }
}

export function searchPrice (payload) {
  return {
    type: START_SEARCH_PRICE,
    payload
  }
}

export function searchRetailer (payload) {
  return {
    type: START_SEARCH_RETAILER,
    payload
  }
}

export function searchBrand (payload) {
  return {
    type: START_SEARCH_BRAND,
    payload
  }
}