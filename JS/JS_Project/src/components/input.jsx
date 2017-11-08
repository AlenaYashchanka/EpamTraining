import React from 'react';
import PropTypes from 'prop-types';




export class Input extends React.Component {
    
    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = { textValue: this.props.textValue };
    }
    render() {
        return (
            <input className = "fashion__input" 
                    type = "text" 
                    placeholder = "search input" 
                    onChange = {this.onInputChange.bind(this)}
                    value={this.state.textValue}>
            </input>
        );
    }
    
    onInputChange(event) {
        if (this.props.onChange) {
            this.props.onChange(event.target.value);
        }
    }    
}
