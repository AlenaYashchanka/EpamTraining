import React from 'react';
import PropTypes from 'prop-types';
import Items from './../../response-data-export.json';

export class Input extends React.Component {
    
    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
    }
        onInputChange(event) {
            let searchQuery = event.target.value.toLowerCase();
            let displayedItems = Items.response.results.filter(function(e){
                let searchValue = e.object.metadata.title.toLowerCase();
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
            />
        );
    }
    
    
}
