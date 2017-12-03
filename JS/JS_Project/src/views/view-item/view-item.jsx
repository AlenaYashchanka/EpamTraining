import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Link
  } from 'react-router-dom'

export class ViewItem extends Component {
    constructor (props) {
      super(props)
    }
  
    render () {
      return (
        <div className = "main-page main-page__view-item view-item">
            < NavLink exact to="/" activeClassName="view-item__button-wrapper--active" className="view-item__button-wrapper">
                    <input type = "button" className = "view-item__button-back" value = "Back"/>
                    <h5 className = "view-item__button-title">Shop slyle</h5>
            </ NavLink>
            <div className = "view-item__item-detailed">About</div>
            
        </div>
      )
    }
  }