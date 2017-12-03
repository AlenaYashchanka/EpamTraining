import React from 'react'
import PropTypes from 'prop-types'
import './input.styles.css'

export class Input extends React.Component {
  constructor (props) {
    super(props)
  }

  onInputChange (e) {
    const inputValue = e.target.value
    this.props.simpleSearch(inputValue)
  }
  
  render () {
    return (
      <input
        className='fashion__input'
        type='text'
        placeholder='search input'
        onChange={this.onInputChange.bind(this)}
      />
    )
  }
}