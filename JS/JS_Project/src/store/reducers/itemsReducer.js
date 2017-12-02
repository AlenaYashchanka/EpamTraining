import { START_SIMPLE_SEARCH } from './../actions/'
import { START_SEARCH_CURRENCY } from './../actions/'
import { START_SEARCH_PRICE } from './../actions/'
import { START_SEARCH_RETAILER } from './../actions/'
import { START_SEARCH_BRAND } from './../actions/'
import data from '../../response-data-export.json'

const initialState = {
  state: 'INITIAL',
  data: data.response.results,
  allItems: data.response.results
}

export function itemsReducer (state = initialState, action) {
  let newValue
  switch (action.type) {
    case START_SIMPLE_SEARCH:
      if (!action.payload) {
          console.log(state);
        newValue = state.allItems
      } else {
        newValue = state.allItems.filter(item => {
          return (
            item.object.metadata.title
              .toLowerCase()
              .indexOf(action.payload.toLowerCase()) !== -1
          )
        }) 
      }
      return { 
        state,
        data: newValue, 
        allItems: state.allItems
  }

    case START_SEARCH_PRICE:
    if (!action.payload) {
          console.log(state);
        newValue = state.allItems
      } else {
      newValue = state.allItems.filter(item => {
        return (
          item.object.metadata.price == action.payload
        )
      }) 
    }
    return { 
      state,
      data: newValue, 
      allItems: state.allItems
    }

    case START_SEARCH_CURRENCY:
      if (!action.payload) {
          console.log(state);
        newValue = state.allItems
      } else {
        newValue = state.allItems.filter(item => {
          return (
            item.object.metadata.currency.indexOf(action.payload.toUpperCase()) !== -1
          )
        }) 
      }
    return { 
      state,
      data: newValue, 
      allItems: state.allItems
    }

    case START_SEARCH_RETAILER:
      if (!action.payload) {
          console.log(state);
        newValue = state.allItems
      } else {
        newValue = state.allItems.filter(item => {
          return (
            item.object.metadata.retailer.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1
          )
        }) 
      }
    return { 
      state,
      data: newValue, 
      allItems: state.allItems
    }

    case START_SEARCH_BRAND:
      if (!action.payload) {
          console.log(state);
        newValue = state.allItems
      } else {
        newValue = state.allItems.filter(item => {
          return (
            item.object.metadata.brand.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1
          )
        }) 
      }
    return { 
      state,
      data: newValue, 
      allItems: state.allItems
    }


     default:
      return state
  }
}
