import React from 'react'
import PropTypes from 'prop-types'
import Items from './../../response-data-export.json'
// import Items from './../../services/request-service.jsx';

import { connect } from 'react-redux'

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

// export default connect(mapStateToProps, mapDispatchToProps)(Input)
