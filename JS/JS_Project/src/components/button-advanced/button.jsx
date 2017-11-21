import React from 'react';
import PropTypes from 'prop-types';
import {Form} from './../../components/form/form.jsx';


export class Button extends React.Component {
    
    constructor() {
		super();
		this.state = {class: 'fashion-advansed-search__form form'};
		this.onHandleClick = this.onHandleClick.bind(this);
	}

	onHandleClick() {
		let className = this.state.class === 'fashion-advansed-search__form form' ? 'fashion-advansed-search__form form fashion-advansed-search__form--show-form' : 'fashion-advansed-search__form form';
        this.setState({class: className});
	}

    render() {
        return (
            <div className = "fashion-advansed-search">
               <input type = "button" className = "fashion-advansed-search__button" onClick = {this.onHandleClick} value = "Advanced"/>
               <div className = {this.state.class}>
               <Form/>
               </div>
            </div>

        );
    }
}