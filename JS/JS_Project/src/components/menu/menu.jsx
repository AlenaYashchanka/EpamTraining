import React from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Link
  } from 'react-router-dom'

import './menu-styles.css'

export class Menu extends React.Component {
    
    constructor(props) {
		super(props);
	}

    render() {
        return (
            <div className = "fashion-menu-wrapper">
                <div className="menu-item" >
                    <div className ="menu-item__image menu-item__image--logo" onClick = {this.props.menuCollapsed}></div>
                    <div className={['menu-item__label', !this.props.openMenu && 'menu-item__label-hidden'].join(' ')}>Logo</div>
                </div>
                < NavLink exact to="/" activeClassName="menu-item--active" className="menu-item">
                    <div className ="menu-item__image menu-item__image--public-catalog"></div>
                    <div className={['menu-item__label', !this.props.openMenu && 'menu-item__label-hidden'].join(' ')}>Public Catalog</div>
                </NavLink>
                < NavLink to="/private-catalog" activeClassName="menu-item--active" className="menu-item">
                    <div className ="menu-item__image menu-item__image--private-catalog"></div>
                    <div className={['menu-item__label', !this.props.openMenu && 'menu-item__label-hidden'].join(' ')}>Private Catalog</div>
                </NavLink>
                < NavLink to="/favourites" activeClassName="menu-item--active" className="menu-item">
                    <div className ="menu-item__image menu-item__image--favourites"></div>
                    <div className={['menu-item__label', !this.props.openMenu && 'menu-item__label-hidden'].join(' ')}>Favourites</div>
                </NavLink>
                < NavLink to="/about" activeClassName="menu-item--active" className="menu-item">
                    <div className ="menu-item__image menu-item__image--about"></div>
                    <div className={['menu-item__label', !this.props.openMenu && 'menu-item__label-hidden'].join(' ')}>About</div>
                </NavLink>
            </div>
        );
    }
}