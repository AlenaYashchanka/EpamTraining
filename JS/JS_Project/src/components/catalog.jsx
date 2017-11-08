import React from 'react';
import PropTypes from 'prop-types';

var catalogItems = [
    {
        key: 1,
        text: 'Men clothes',
        cost: '256$',
        image: 'https://i.pinimg.com/736x/35/89/68/358968e62760566d6a48b0879323bcfa--mens-fashion-styles-style-fashion.jpg' 
    },
    {
        key: 2,
        text: 'Women clothes',
        cost: '296$',
        image: 'http://world.philipp-plein.com/data/images/galleries/4293/philipp-plein-women-s-fashion-show-ss15-24-20140922562002.jpg'
    },
    {
        key: 3,
        text: 'Men Accesoires',
        cost: '256$',
        image: 'https://i.pinimg.com/736x/9d/45/0a/9d450a8c3b91772176f34150fe69ae4c--mens-fashion-clothing-attractive-guys.jpg'
    },
    {
        key: 4,
        text: 'Women Accesoires',
        cost: '256$',
        image: 'https://i.pinimg.com/736x/9a/b0/22/9ab02215dabb075f5ecf62323f0bed7a--barbie-style-barbie-girl.jpg'
    },
    {
        key: 5,
        text: 'Bags',
        cost: '256$',
        image: ''
    },
    {
        key: 6,
        text: 'Watches',
        cost: '256$',
        image: 'https://i.pinimg.com/736x/4e/f6/62/4ef6627b8453566f1240d7da10b8e7ea--cute-accessories-accesories.jpg'
    },
    {
        key: 7,
        text: 'Shoes',
        cost: '256$',
        image: 'https://ae01.alicdn.com/kf/HTB1EBgNQpXXXXX_XVXXq6xXFXXXf/Women-shoes-2017-New-Fashion-Brand-shoes-for-women-Casual-shoes-flat-gold-black-white-shoes.jpg'
    }
]

class Item extends React.Component {
    render() {
        return(
            <div className = "catalog-item ">
                <img className = "catalog-item__image" src = {this.props.image} height = "200px" width = "150px"/>
                <div className = "catalog-item-wrapper">
                    <div className = "catalog-item__text">{this.props.text}</div>
                    <div className = "catalog-item__cost">{this.props.cost}</div>
                </div>
            </div>
        )
    }
}

export class Catalog extends React.Component {
    render() {
        return (
                <div className = "fashion__catalog catalog-wrapper">
                    {
                        catalogItems.map(function(el) {return <Item key = {el.key} text = {el.text} cost = {el.cost} image = {el.image}/>})
                    }
                </div>
        );
    }
}