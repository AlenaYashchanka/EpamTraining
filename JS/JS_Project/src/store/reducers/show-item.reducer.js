import { SHOW_DETAILED_INFO } from './../actions/'
import items from './../../views/view-item/response-data-export.json'

const initialState = {
  state: 'INITIAL',
  image: [],
  title: [],
  price: [],
  retailer: [],
  brand: [],
  date: []
}

export function showItemReducer (state = initialState, action) {
  let targetItem
  switch (action.type) {
    case SHOW_DETAILED_INFO:
        console.log('===============================');
        console.log(items.response.results);
        console.log('===============================');
        targetItem = items.response.results.filter(item => {
          return(
            item.object.image.url.indexOf(action.payload) !==-1
          )
        }) 
      return { 
        state,
        image: targetItem[0].object.image.url,
        title: targetItem[0].object.metadata.title,
        price: targetItem[0].object.metadata.price,
        retailer: targetItem[0].object.metadata.retailer,
        brand: targetItem[0].object.metadata.brand,
        date: targetItem[0].object.dateCreated
    };
     default:
      return state
  }
}
