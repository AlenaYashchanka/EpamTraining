import React from 'react';
import PropTypes from 'prop-types';
import Items from './../../response-data-export.json';
//import Items from './../../services/request-service.jsx';

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

/*
const mapStateToProps = (state) => {
  const values = state.search.inputValue;

  return { values };
};

const mapDispatchToProps = (dispatch) => ({
    startSearch: (search) => dispatch(startSearch(search))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
*/