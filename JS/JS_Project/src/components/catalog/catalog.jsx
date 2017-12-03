import React from 'react';
import PropTypes from 'prop-types';
import Item  from '../item/item.jsx'

export class Catalog extends React.Component {
    constructor(props){
      super(props);
    }

    render() {
        const catalogItems = this.props.myCatalog;
        return (
                <div className = "fashion__catalog catalog-wrapper">
                    {
                    catalogItems.map(function(el, index) {return <Item key = {index} title = {el.object.metadata.title} price = {el.object.metadata.price} image = {el.object.image.url}/>})
                    }
                </div>
        );
    }
}
