
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Items from './catalogItems.json';

//import compponents
import {Input} from './components/input.jsx';
import {Dropdown} from './components/dropdown.jsx';
import {Menu} from './components/menu.jsx';
import {Basket} from './components/basket.jsx';
import {Catalog} from './components/catalog.jsx';


//import css-styles
import './app.css';

// create DOM

class App extends Component {
    constructor(props){
        super(props);
        this.state = {displayedItems: Items.catalogItems};
        this.updateItems = this.updateItems.bind(this);
    }

    updateItems(a){
        this.setState({displayedItems: a});
    }

    render(){
        return(
            <div className = "fashion">
                <div className = "fashion-menu"> <Menu/>
                </div>
                <div className = "main-page"> 
                    <div className = "head-items"><Input displayResult = {this.updateItems}/> <Dropdown/>
                    </div>  
                    <div className = "basket"><Basket/></div> 
                    <h3>Shop styles</h3>
                    <Catalog myCatalog = {this.state.displayedItems}/>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('container'));
