import { START_SIMPLE_SEARCH } from './../actions/'
import data from '../../response-data-export.json'

const initialState = {
  state: 'INITIAL',
  data: data.response.results,
  allItems: data.response.results
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
