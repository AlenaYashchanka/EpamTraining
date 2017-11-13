import React from 'react';
import PropTypes from 'prop-types';


export class Button extends React.Component {
    
    constructor() {
		super();
		this.state = {class: 'fashion__advansed-search'};
		this.onHandleClick = this.onHandleClick.bind(this);
	}

	onHandleClick() {
		let className = this.state.class === 'fashion__advansed-search' ? 'fashion__advansed-search fashion__advansed-search--show-form' : 'fashion__advansed-search';
        this.setState({class: className});
	}

    render() {
        return (
            <div className = "fashion-advansed-search">
               <input type = "button" className = {this.state.class} onClick = {this.onHandleClick}/>
            </div>
        );
    }
}