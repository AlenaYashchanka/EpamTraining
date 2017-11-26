import React from 'react';
import PropTypes from 'prop-types';

class Item extends React.Component {
    
    render() {
        
        return(
            <div className = "catalog-item ">
                <img className = "catalog-item__image" src = {this.props.image}/>
                <div className = "catalog-item-wrapper">
                    <p className = "catalog-item__text">{this.props.title}</p>   
                    <p className = "catalog-item__cost">{this.props.price}</p>
                    <input type = "button" className = "catalog-item__discover" value = "Discover"/>
                    <input type = "button" className = "catalog-item__add-to-private" value = "Add to Private"/>
                </div>
            </div>
        )
    }
}

export class Catalog extends React.Component {
    constructor(props){
      super(props);
    }
/*
    ComponentDidMount(){
        axios.get('http://docs.threadgenius.co/#public-catalogs?key_NTNiOTMzZDViNzRhZmNmZjQxNTdkOWM1YjQxOGJj')
        .then(function (response) {
          console.log(response);
          this.setState = {Items: [...response.response.results]}
        })
        .catch(function (error) {
          console.log(error);
        });
      
    }*/
    render() {
        const catalogItems = this.props.myCatalog;
        return (
                <div className = "fashion__catalog catalog-wrapper">
                    {
                    //this.state.Items.map((el,i)=><Item key = {i} title = {el.object.metadata.title} price = {el.object.metadata.price} image = {el.object.image.url}/>);
                    catalogItems.map(function(el, i) {return <Item key = {i} title = {el.object.metadata.title} price = {el.object.metadata.price} image = {el.object.image.url}/>})
                    }
                </div>
        );
    }
}
