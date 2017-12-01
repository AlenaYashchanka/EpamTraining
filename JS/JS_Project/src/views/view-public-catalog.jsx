import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { menuCollapsed } from './../store/actions/'
import Items from './../response-data-export.json'
import { appStore } from './../store/'
import { simpleSearch } from '../store/actions/'


// import compponents
import { Input } from './../components/input/input.jsx'
import { Dropdown } from './../components/dropdown/dropdown.jsx'
import { Menu } from './../components/menu/menu.jsx'
import { Button } from './../components/button-advanced/button.jsx'
import { Basket } from './../components/basket/basket.jsx'
import { Catalog } from './../components/catalog/catalog.jsx'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Link
} from 'react-router-dom'

// import css-styles
import '../app.css'

// create DOM

class ViewPublicCatalog extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='main-page'>
        <div className='head-items'>
          <Input
            simpleSearch={this.props.simpleSearch}
          /> 
          <Button /> 
          <Dropdown />
        </div>
        <div className='basket'>
          <Basket
            countItemsValue={this.props.countItems}
            countPrice={this.props.countPrice}
          />
        </div>
        <h3>Shop styles</h3>
        <Catalog myCatalog={this.props.items} />
      </div>
    )
  }
}
const mapStateToProps = state => {
    const items = state.items.data;
    const countItems = state.items.data.length;
    let sumPrice = 0;
    state.items.data.forEach(el => {
      sumPrice += el.object.metadata.price
    });
    let countPrice = sumPrice;
    console.log('===============================');
    console.log(countItems);
    console.log('===============================');
    console.log('===============================');
    console.log(countPrice);
    console.log('===============================');
    console.log(items);
    console.log('===============================');

    return {
      items,
      countItems,
      countPrice
    }
  }

  const mapDispatchToProps = dispatch => ({
    simpleSearch: search => dispatch(simpleSearch(search))
  })

//export const Root = connect(mapStateToProps, mapDispatchToProps)(App);
export default connect(mapStateToProps, mapDispatchToProps)(ViewPublicCatalog)
