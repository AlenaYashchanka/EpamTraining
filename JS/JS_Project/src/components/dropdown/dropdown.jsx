import React from 'react';
import PropTypes from 'prop-types';

export class Dropdown extends React.Component {
    render() {
        return (
            <select className = "fashion__dropdown dropdown">
                <option className = "dropdown__option">Public Catalog</option>
                <option className = "dropdown__option" >Private Catalog</option>
                <option className = "dropdown__option" >Reading 3</option>
                <option className = "dropdown__option" >Reading 3</option>
            </select>
        );
    }
}