import React from 'react';
import PropTypes from 'prop-types';
import Item  from '../item/item.jsx'

export class FavouriteCatalog extends React.Component {
    constructor(props){
      super(props);
    }

    render() {
        const catalogItems = this.props.myCatalog;
        return (
                <div className = "fashion__catalog catalog-wrapper">
                    {
                    catalogItems.map(function(el, index) {return <Item key = {index} title = {el.title} price = {el.price} image = {el.image}/>})
                    }
                </div>
        );
    }
}
