import { START_SIMPLE_SEARCH } from './../actions/'
import data from '../../response-data-export.json'

let sumPrice = 0
data.response.results.forEach(el => {
  sumPrice += el.object.metadata.price
})

const initialState = {
  state: 'INITIAL',
  data: data.response.results,
  allItems: data.response.results,
  countItems: data.response.results.length,
  countPrice: sumPrice
}

export function itemsReducer (state = initialState, action) {
  switch (action.type) {
    case START_SIMPLE_SEARCH:
      let newValue
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

        sumPrice = 0
        state.data.forEach(el => {
          sumPrice += el.object.metadata.price
        })
      }
      return { 
        data: newValue, 
        allItems: state.allItems, 
        countItems: state.data.length,
        countPrice: sumPrice
      }
     default:
      return state
  }
}
