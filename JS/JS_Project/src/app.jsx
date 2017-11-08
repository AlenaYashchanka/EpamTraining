
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

//import compponents
import {Input} from './components/input.jsx';
import {Dropdown} from './components/dropdown.jsx';
import {Menu} from './components/menu.jsx';
import {Basket} from './components/basket.jsx';
import {Catalog} from './components/catalog.jsx';


//import css-styles
import './app.css';
//import { Catalog } from './components/catalog';

// create DOM
ReactDOM.render(
<div className = "fashion">
    <div className = "fashion-menu"> <Menu/>
    </div>
    <div className = "main-page"> 
        <div className = "head-items"><Input/> <Dropdown/>
        </div>  
        <div className = "basket"><Basket/></div> <Catalog/>
    </div>
</div>, document.getElementById('container'));
