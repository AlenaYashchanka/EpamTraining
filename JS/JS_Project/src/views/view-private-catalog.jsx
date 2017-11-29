
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { menuCollapsed } from './../store/actions/'
import Items from './../response-data-export.json';
import { appStore } from './../store/'

//import compponents
import {Input} from './../components/input/input.jsx';
import {Dropdown} from './../components/dropdown/dropdown.jsx';
import {Menu} from './../components/menu/menu.jsx';
import {Button} from './../components/button-advanced/button.jsx';
import {Basket} from './../components/basket/basket.jsx';
import {Catalog} from './../components/catalog/catalog.jsx';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch,
    Link
  } from 'react-router-dom'


//import css-styles
import './../../app.css';

// create DOM

export class ViewPrivateCatalog extends Component {
    constructor(props){
        super(props);
        this.state = {displayedItems: Items.response.results};
        this.updateItems = this.updateItems.bind(this);
    }

    updateItems(a){
        this.setState({displayedItems: a});
    }

    updatePrice(){
        let sumPrice=0;
        this.state.displayedItems.forEach((el)=>{sumPrice+=el.object.metadata.price;});
        return sumPrice;
    }

    render(){
        return(
            <div className = "main-page"> 
                <div className = "head-items">
                    <Input displayResult = {this.updateItems}/> <Button/> <Dropdown/>
                </div>  
                <div className = "basket">
                    <Basket 
                    countItems = {this.state.displayedItems.length}
                    countPrice = {this.updatePrice()} 
                    />
                </div> 
                <h3>Shop styles</h3>             
                <Catalog myCatalog = {this.state.displayedItems}/>     
            </div>
        );
    }
}

/*
const mapStateToProps = (state) => {
    const isOpenedMenu = state.menu.isOpened;
    return {
        isOpenedMenu
    };
};

const mapDispatchToProps = (dispatch) => ({
    menuCollapsed: () => dispatch(menuCollapsed()),
});

//export const Root = connect(mapStateToProps, mapDispatchToProps)(App);
export default connect(mapStateToProps, mapDispatchToProps)(App);*/