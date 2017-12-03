import React from 'react';
import PropTypes from 'prop-types';
import { Form } from './../../components/form/form.jsx';
import { appStore } from './../../store/index.js'
import { connect } from 'react-redux'

import { searchPrice } from '../../store/actions'
import { searchCurrency } from '../../store/actions'
import { searchRetailer } from '../../store/actions'
import { searchBrand } from '../../store/actions'
import './button-advanced.styles.css'


class Button extends React.Component {
    
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
               <Form 
                    searchPrice={this.props.searchPrice} 
                    searchCurrency = {this.props.searchCurrency} 
                    searchRetailer = {this.props.searchRetailer} 
                    searchBrand = {this.props.searchBrand} 
                />
               </div>
            </div>

        );
    }
}


const mapDispatchToProps = dispatch => ({
    searchPrice: pricesearch => dispatch(searchPrice(pricesearch)),
    searchCurrency: currencysearch => dispatch(searchCurrency(currencysearch)),
    searchRetailer: retailersearch => dispatch(searchRetailer(retailersearch)),
    searchBrand: brandsearch => dispatch(searchBrand(brandsearch))
  })

  export default connect(null, mapDispatchToProps)(Button)