import React from 'react';
import PropTypes from 'prop-types';

export class Basket extends React.Component {
    constructor(props) {
		super(props);
	}
    render() {
        return (
            <div className = "fashion__basket-wrapper">
                <div className = "fashion-counter">
                    <div className = "fashion-counter__number">{this.props.countItems}</div>
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

//