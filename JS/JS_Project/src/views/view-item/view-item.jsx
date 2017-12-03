import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Link
  } from 'react-router-dom'

import { appStore } from './../../store/'
import { connect } from 'react-redux'
import { showDetailedInfo } from './../../store/actions/show-item.actions';
import './view-item.styles.css'

class ViewItem extends Component {
    constructor (props) {
      super(props)
    }
  
    render () {
      return (
        <div className = "main-page main-page__view-item view-item">
          <div className = "view-item__wrapper">
            < NavLink exact to="/" activeClassName="view-item__button-wrapper--active" className="view-item__button-wrapper">
                    <input type = "button" className = "view-item__button-back" value = "Back"/>
                    <label className = "view-item__button-title">Shop slyle</label>
            </ NavLink>
          </div>
            <div className = "view-item__item-detailed item-detailed">
              <img className = "item-detailed__image" src = {this.props.image} />
              <div className = "item-detailed__wrapper">
                <div className = "item-detailed__title">{this.props.title}</div>
                <div className = "item-detailed__title">Price: ${this.props.price}</div>
                <div className = "item-detailed__title">Retailer: {this.props.retailer}</div>
                <div className = "item-detailed__title">Brand: {this.props.brand}</div>
                <div className = "item-detailed__title">Date: {this.props.date}</div>
              </div>
            </div>
            
        </div>
      )
    }
  }


  const mapStateToProps = state => {
    const image = state.showItem.image;
    const title = state.showItem.title;
    const price = state.showItem.price;
    const retailer = state.showItem.retailer;
    const brand = state.showItem.brand;
    const date = state.showItem.date
    return {
      image,
      title,
      price,
      retailer,
      brand,
      date
    }
  }

const mapDispatchToProps = dispatch => ({
  showDetailedInfo: (showItem) => dispatch(showDetailedInfo(showItem))
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewItem)
