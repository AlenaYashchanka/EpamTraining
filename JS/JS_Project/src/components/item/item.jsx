import React from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Link
  } from 'react-router-dom'

export class Item extends React.Component {
    
    render() {
        
        return(
            <div className = "catalog-item ">
                < NavLink exact to = "/discover" activeClassName="menu-item--active" className="catalog-item__discover">
                
                <img className = "catalog-item__image" src = {this.props.image}/>
                </ NavLink>
                <div className = "catalog-item-wrapper">
                    <p className = "catalog-item__text">{this.props.title}</p>   
                    <p className = "catalog-item__cost">{this.props.price}</p>
                    <input type = "button" className = "catalog-item__add-to-private" value = "Add to favourites"/>
                </div>
            </div>
        )
    }
}
