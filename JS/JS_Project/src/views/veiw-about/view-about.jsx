import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import spec from './React-Project.pdf'
import './styles-veiw-about.css'

export class About extends Component {
    constructor (props) {
      super(props)
    }
  
    render () {
      return (
        <div className = "main-page main-page--about">
            <div className = "main-page__header-about">About</div>
            <div className = "main-page__content-about content-about">
                <div className = "content-about__author">This application designed by Alena Yashchanka</div>
                <div className = "content-about__download-title">Specifications could be downloaded from link below</div>
                <a className = "content-about__download-link" href = {spec} download>Download specifications</a>
                <div className = "content-about__additional-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </div>
        </div>
      )
    }
  }