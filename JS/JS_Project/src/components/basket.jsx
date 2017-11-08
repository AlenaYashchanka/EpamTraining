import React from 'react';
import PropTypes from 'prop-types';

export class Basket extends React.Component {
    render() {
        return (
            <div className = "fashion__basket-wrapper">
                <div className = "fashion-counter">
                    <div className = "fashion-counter__number">256</div>
                    <div className = "fashion-counter__text">Some text</div>
                </div>
                <div className = "fashion-counter">
                    <div className = "fashion-counter__number">$150</div>
                    <div className = "fashion-counter__text">Some text</div>
                </div>
            </div>
        );
    }
}