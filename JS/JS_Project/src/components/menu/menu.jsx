import React from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Link
  } from 'react-router-dom'

export class Menu extends React.Component {
    
    constructor(props) {
		super(props);
		/*this.state = {class: 'menu-item__label'};
		this.onHandleClick = this.onHandleClick.bind(this);*/
	}

	/*onHandleClick() {
		let className = this.state.class === 'menu-item__label' ? 'menu-item__label menu-item__label-hidden' : 'menu-item__label';
        this.setState({class: className});
	}*/

    render() {
        return (
            <div className = "fashion-menu-wrapper">
                <div className="menu-item" >
                    <div className ="menu-item__image menu-item__image--logo" onClick = {this.props.menuCollapsed}></div>
                    <div className={['menu-item__label', !props.openMenu && 'menu-item__label-hidden'].join(' ')}>Logo</div>
                </div>
                < NavLink exact to="/" activeClassName="menu-item--active" className="menu-item">
                    <div className ="menu-item__image menu-item__image--public-catalog"></div>
                    <div className={['menu-item__label', !props.openMenu && 'menu-item__label-hidden'].join(' ')}>Public Catalog</div>
                </NavLink>
                < NavLink to="/private-catalog" activeClassName="menu-item--active" className="menu-item">
                    <div className ="menu-item__image menu-item__image--private-catalog"></div>
                    <div className={['menu-item__label', !props.openMenu && 'menu-item__label-hidden'].join(' ')}>Private Catalog</div>
                </NavLink>
                < NavLink to="/heading3" activeClassName="menu-item--active" className="menu-item">
                    <div className ="menu-item__image menu-item__image--heading"></div>
                    <div className={['menu-item__label', !props.openMenu && 'menu-item__label-hidden'].join(' ')}>Heading 3</div>
                </NavLink>
                < NavLink to="/heading-3" activeClassName="menu-item--active" className="menu-item">
                    <div className ="menu-item__image menu-item__image"></div>
                    <div className={['menu-item__label', !props.openMenu && 'menu-item__label-hidden'].join(' ')}>Heading 3</div>
                </NavLink>
            </div>
        );
    }
}