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
                    <div className = "fashion-counter__text">Items Found</div>
                </div>
                <div className = "fashion-counter">
                    <div className = "fashion-counter__number">{this.props.countPrice}</div>
                    <div className = "fashion-counter__text">Average cost</div>
                </div>
            </div>
        );
    }
}

//{this.props.countItems}