
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Items from './response-data-export.json';

import { appStore } from './store/index.jsx';
import Provider from 'react-redux';

//import compponents
//import {Input} from './components/input/input.jsx';
//import {Dropdown} from './components/dropdown/dropdown.jsx';
//import {Menu} from './components/menu/menu.jsx';
//import {Button} from './components/button-advanced/button.jsx';
//import {Basket} from './components/basket/basket.jsx';
//import {Catalog} from './components/catalog/catalog.jsx';
//import Root from './components/container/container.jsx';
import App from './components/container/container.jsx';

import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch,
    Link
  } from 'react-router-dom'


//import css-styles
import './app.css';

ReactDOM.render(
    <Provider store = {appStore}>
        <App />
    </Provider>, document.getElementById('container')
);


// create DOM
/*
class App extends Component {
    constructor(props){
        super(props);
        this.state = {displayedItems: Items.response.results};
        this.updateItems = this.updateItems.bind(this);
    }

    updateItems(a){
        this.setState({displayedItems: a});
    }

    render(){
        return(
            <Router>
            <div className = "fashion">
                <div className = "fashion-menu"> <Menu/>
                </div>
                <div className = "main-page"> 
                    <div className = "head-items"><Input displayResult = {this.updateItems}/> <Button/> <Dropdown/>
                    </div>  
                    <div className = "basket"><Basket/></div> 
                    <h3>Shop styles</h3>                  
                    <Switch>
                        <Route exact path= "/" render={(props)=><Catalog myCatalog = {this.state.displayedItems} {...props}/>}/>
                        <Route path={`/private-catalog`} render={(props)=><Catalog myCatalog = {this.state.displayedItems} {...props}/>}/>
                        <Route path={`/heading3`} render={(props)=><Catalog myCatalog = {this.state.displayedItems} {...props}/>}/>
                        <Route path={`/heading-3`} render={(props)=><Catalog myCatalog = {this.state.displayedItems} {...props}/>}/>
                    </Switch>
                </div>
            </div>
            </Router>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('container'));
*/