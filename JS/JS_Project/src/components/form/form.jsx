import React from 'react';
import PropTypes from 'prop-types';


export class Form extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className = "form-wrapper">
                <h4 className = "form__title">Advanced Search</h4>
                <div className = "form-firstline-wrapper">
                <select className = "form__currency currency">
                    <option className = "currency__option">BYR</option>
                    <option className = "currency__option" >RUB</option>
                    <option className = "currency__option" >USD</option>
                    <option className = "currency__option" >EUR</option>
                </select>
               <input type = "text" className = "form__price" />
               </div>
               <div className = "form-secondline-wrapper">
               <input type = "text" className = "form__retailer"/>
               <input type = "text" className = "form__brand" />
               </div>
            </div>
            
        );
    }
}
/*
Form.propTypes = {
    name: PropTypes.string
};*/