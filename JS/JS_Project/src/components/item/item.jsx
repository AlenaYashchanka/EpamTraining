import React from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Link
  } from 'react-router-dom'

import { showDetailedInfo } from './../../store/actions/show-item.actions';
import { connect } from 'react-redux'

class Item extends React.Component {
    constructor (props) {
        super(props)
    }

    onImgClick(){
        let srcValue = this.props.image;
        console.log('===============================');
        console.log(srcValue);
        console.log('===============================');
        this.props.showDetailedInfo(srcValue)
    }
    
    render() {
        
        return(
            <div className = "catalog-item ">
                < NavLink exact to = "/discover" activeClassName="menu-item--active" className="catalog-item__discover">  
                    <img className = "catalog-item__image" src = {this.props.image} onClick = {this.onImgClick.bind(this)}/>
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



const mapDispatchToProps = dispatch => ({
    showDetailedInfo: showItem => dispatch(showDetailedInfo(showItem))
  })

export default connect(null, mapDispatchToProps)(Item)
