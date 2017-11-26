
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { menuCollapsed } from './../../store/actions/'
import Items from './../../response-data-export.json';
import { appStore } from './../../store/'

//import compponents
import {Input} from './../input/input.jsx';
import {Dropdown} from './../dropdown/dropdown.jsx';
import {Menu} from './../menu/menu.jsx';
import {Button} from './../button-advanced/button.jsx';
import {Basket} from './../basket/basket.jsx';
import {Catalog} from './../catalog/catalog.jsx';
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

class App extends Component {
    constructor(props){
        super(props);
        this.state = {displayedItems: Items.response.results};
        this.updateItems = this.updateItems.bind(this);
        //this.state = {displayCountItems: this.state.displayedItems.length};
        //this.updateCountItems = this.updateCountItems.bind(this);
    }

    updateItems(a){
        this.setState({displayedItems: a});
    }

    //updateCountItems(){
    //    this.setState({displayCountItems: this.state.displayedItems.length});
    //}

    render(){
        return(
            <Router>
            <div className = "fashion">
                <div className = {["fashion-menu", "fashion-menu__width", this.props.isOpenedMenu && 'fashion-menu__width--big-width'].join(' ')}>
                     <Menu menuCollapsed={this.props.menuCollapsed} openMenu={this.props.isOpenedMenu}/>
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

//ReactDOM.render(<App/>, document.getElementById('container'));

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
export default connect(mapStateToProps, mapDispatchToProps)(App);