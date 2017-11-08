import React from 'react';
import PropTypes from 'prop-types';


//import Bag from './images/bag.jpg';
//import Folder1 from './images/folder1.jpg';
//import Folder2 from './images/folder2.jpg';
//import Picture1 from './images/picture1.png';
//import Picture2 from './images/picture2.png';

export class Menu extends React.Component {
    
    constructor(props) {
		super(props);
		this.state = {isCollapsed: false};
		this.onHandleClick = this.onHandleClick.bind(this);
	}

	onHandleClick() {
		this.setState(event => ({
			isCollapsed: !event.isCollapsed

		}));
	}

    render() {
        return (
            <div className = "fashion-menu-wrapper">
                <div className="menu-item">
                    <div className = "menu-item__image"></div>
                    <label className="menu-item__label" onClick = {this.onHandleClick}>Logo</label>
                </div>
                <div className="menu-item">
                    
                    <label className="menu-item__label">Public Catalog</label>
                </div>
                <div className="menu-item">
                    
                    <label className="menu-item__label">Private Catalog</label>
                </div>
                <div className="menu-item">
                   
                    <label className="menu-item__label">Reading 3</label>
                </div>
                <div className="menu-item">
                    
                    <label className="menu-item__label">Reading 3</label>
                </div>
            </div>
        );
    }
}