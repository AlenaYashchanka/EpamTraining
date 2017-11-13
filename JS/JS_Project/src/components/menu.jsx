import React from 'react';
import PropTypes from 'prop-types';
import $ from "jquery";

//import {Bag} from '../images/bag.jpg';
//import {Folder1} from '../images/folder1.jpg';
//import {Folder2} from '../images/folder2.jpg';
//import {Picture1} from '../images/picture1.png';
//import {Picture2} from '../images/picture2.png';

export class Menu extends React.Component {
    
    constructor() {
		super();
		this.state = {class: 'menu-item__label'};
		this.onHandleClick = this.onHandleClick.bind(this);
	}

	onHandleClick() {
		let className = this.state.class === 'menu-item__label' ? 'menu-item__label menu-item__label-hidden' : 'menu-item__label';
        this.setState({class: className});
	}

    render() {
        return (
            <div className = "fashion-menu-wrapper">
                <div className="menu-item" >
                    <div className ="menu-item__image menu-item__image--logo" onClick = {this.onHandleClick}></div>
                    <a className={this.state.class}>Logo</a>
                </div>
                <div className="menu-item">
                    <div className ="menu-item__image menu-item__image--public-catalog"></div>
                    <a className={this.state.class}>Public Catalog</a>
                </div>
                <div className="menu-item">
                    <div className ="menu-item__image menu-item__image--private-catalog"></div>
                    <a className={this.state.class}>Private Catalog</a>
                </div>
                <div className="menu-item">
                    <div className ="menu-item__image menu-item__image--heading"></div>
                    <a className={this.state.class}>Heading 3</a>
                </div>
                <div className="menu-item">
                    <div className ="menu-item__image menu-item__image"></div>
                    <a className={this.state.class}>Heading 3</a>
                </div>
            </div>
        );
    }
}