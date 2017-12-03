import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Items from './../../response-data-export.json'
import { appStore } from './../../store/'
import { addToFavourites } from '../../store/actions'


// import compponents
import { Input } from './../../components/input/input.jsx'
import { Dropdown } from './../../components/dropdown/dropdown.jsx'
import { Menu } from './../../components/menu/menu.jsx'
import Button from './../../components/button-advanced/button.jsx'
import { Basket } from './../../components/basket/basket.jsx'
import { FavouriteCatalog } from './../../components/favourite-catalog/favourite-catalog.jsx'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Link
} from 'react-router-dom'

// import css-styles
import '../../app.css'
import '../view-public-catalog/view-public-catalog-styles.css'
import './view-favourites.styles.css'

// create DOM

class ViewFavourites extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='main-page'>
        <div className = 'main-page__head-wrapper'>
          <div className='main-page__head-items'>
            <Input
              simpleSearch={this.props.simpleSearch}
            /> 
            <Button /> 
          </div>
          <div className='basket'>
            <Basket
              countItemsValue={this.props.countItems}
              countPrice={this.props.countPrice}
            />
          </div>
        </div>
        <div className = "main-page__catalog-wrapper">
          <h3 className = "main-page__catalog-title">Favourites</h3>
          <FavouriteCatalog myCatalog={this.props.items} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
    const items = state.addFafourit.favouritesItems;
    const countItems = state.addFafourit.favouritesItems.length;
    let sumPrice = 0;
    state.addFafourit.favouritesItems.forEach(el => {
      sumPrice += el.price
    });
    let countPrice = sumPrice;
    console.log('===============================');
    console.log(countItems);
    console.log('===============================');
    console.log("I T E M S",items);
    console.log('===============================');

    return {
      items,
      countItems,
      countPrice
    }
  }

  const mapDispatchToProps = dispatch => ({
    addToFavourites: addFavourit => dispatch(addToFavourites(addFavourit))
  })

export default connect(mapStateToProps, mapDispatchToProps)(ViewFavourites)
