import React from 'react';
import PropTypes from 'prop-types';
//import Items from '../catalogItems.json';

//const catalogItems = Items.catalogItems;

class Item extends React.Component {
    
    render() {
        
        return(
            <div className = "catalog-item ">
                <img className = "catalog-item__image" src = {this.props.image} height = "200px" width = "150px"/>
                <div className = "catalog-item-wrapper">
                    <div className = "catalog-item__text">{this.props.text}</div>
                    <div className = "catalog-item__cost">{this.props.cost}</div>
                </div>
            </div>
        )
    }
}

export class Catalog extends React.Component {
    constructor(props){
      super(props);
    }
    render() {
        const catalogItems = this.props.myCatalog;
        return (
                <div className = "fashion__catalog catalog-wrapper">
                    {
                        catalogItems.map(function(el) {return <Item key = {el.key} text = {el.text} cost = {el.cost} image = {el.image}/>})
                    }
                </div>
        );
    }
}

//export {catalogItems};