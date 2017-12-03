import React from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Link
  } from 'react-router-dom'

import { showDetailedInfo } from './../../store/actions/show-item.actions';
import { addToFavourites } from './../../store/actions/add-to-favourites.actions.js';
import { connect } from 'react-redux'
import './item.styles.css'

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
    
    onBtnClick(){
        let imgValue = this.props.image;
        let titleValue = this.props.title;
        let priceValue = this.props.price;
        let arrFavourite = {image: imgValue, title: titleValue, price: priceValue};
        console.log('===============================');
        console.log("FAVOURITES", arrFavourite);
        console.log('===============================');
        this.props.addToFavourites(arrFavourite)
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
                    <input type = "button" className = "catalog-item__add-to-private" value = "Add to favourites" onClick = {this.onBtnClick.bind(this)}/>
                </div>
            </div>
        )
    }
}



const mapDispatchToProps = dispatch => ({
    showDetailedInfo: showItem => dispatch(showDetailedInfo(showItem)),
    addToFavourites: addFavourit => dispatch(addToFavourites(addFavourit))
  })

export default connect(null, mapDispatchToProps)(Item)
