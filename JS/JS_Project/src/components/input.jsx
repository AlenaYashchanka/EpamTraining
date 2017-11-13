import React from 'react';
import PropTypes from 'prop-types';
import Items from '../catalogItems.json';

//const catalogItems = Items.catalogItems;

export class Input extends React.Component {
    
    constructor(props) {
        super(props);
        console.log('constructor');
        this.onInputChange = this.onInputChange.bind(this);
       /* this.state = { 
            textValue: this.props.textValue,
            //displayedItems: catalogItems
        };*/
    }
        onInputChange(event) {
            let searchQuery = event.target.value.toLowerCase();
            let displayedItems = Items.catalogItems.filter(function(e){
                let searchValue = e.text.toLowerCase();
                return searchValue.indexOf(searchQuery) !== -1;
       });
            this.props.displayResult(displayedItems);
    }    
    
    render() {
        return (
            <input className = "fashion__input" 
                    type = "text" 
                    placeholder = "search input" 
                    onChange = {this.onInputChange}
                    //value={this.state.textValue}
                    >
            </input>
        );
    }
    
    
}
