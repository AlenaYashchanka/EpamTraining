import React from 'react';
import PropTypes from 'prop-types';


export class Form extends React.Component {
    
    render() {
        return (
            <div className = "fashion-advansed-search__form form">
               <input type = "text" className = "form__currency" onClick = {this.onHandleClick}/>
               <input type = "text" className = "form__price" onClick = {this.onHandleClick}/>
               <input type = "text" className = "form__retailer" onClick = {this.onHandleClick}/>
               <input type = "text" className = "form__brand" onClick = {this.onHandleClick}/>
            </div>
            
        );
    }
}