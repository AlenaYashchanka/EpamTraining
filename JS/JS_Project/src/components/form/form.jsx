import React from 'react';
import PropTypes from 'prop-types';
import './form.styles.css'


export class Form extends React.Component {
    constructor(props) {
        super(props);
    }

    onPriceChange (e) {
        const priceValue = e.target.value
        this.props.searchPrice(priceValue)
    }
    
    onCurrencyChange (e) {
        const currencyValue = e.target.value
        this.props.searchCurrency(currencyValue)
    }

    onRetailerChange (e) {
        const retailerValue = e.target.value
        this.props.searchRetailer(retailerValue)
    }

    onBrandChange (e) {
        const brandValue = e.target.value
        this.props.searchBrand(brandValue)
    }


    render() {
        return (
            <div className = "form-wrapper">
                <h4 className = "form__title">Advanced Search</h4>
                <div className = "form-firstline-wrapper">
                    <input type = "text" className = "form__currency" placeholder = "currency" onChange = {this.onCurrencyChange.bind(this)}/>
                    <input type = "text" className = "form__price" placeholder = "price" onChange = {this.onPriceChange.bind(this)}/>
                </div>

                <div className = "form-secondline-wrapper">
                    <input type = "text" className = "form__retailer" placeholder = "retailer" onChange = {this.onRetailerChange.bind(this)} />
                    <input type = "text" className = "form__brand" placeholder = "brand" onChange = {this.onBrandChange.bind(this)} />
                </div>
            </div>
            
        );
    }
}


/*
Form.propTypes = {
    name: PropTypes.string
};*/