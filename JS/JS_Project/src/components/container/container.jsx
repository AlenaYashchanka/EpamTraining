import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { menuCollapsed } from './../../store/actions/'
import Items from './../../response-data-export.json'
import { appStore } from './../../store/'

// import compponents
import ViewPublicCatalog from '../../views/view-public-catalog.jsx'
import Input from './../input/input.jsx'
import { Dropdown } from './../dropdown/dropdown.jsx'
import { Menu } from './../menu/menu.jsx'
import { Button } from './../button-advanced/button.jsx'
import { Basket } from './../basket/basket.jsx'
import { Catalog } from './../catalog/catalog.jsx'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Link
} from 'react-router-dom'

// import css-styles

// create DOM

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { displayedItems: Items.response.results }
    this.updateItems = this.updateItems.bind(this)
  }

  updateItems (a) {
    this.setState({ displayedItems: a })
  }

  updatePrice () {
    let sumPrice = 0
    this.state.displayedItems.forEach(el => {
      sumPrice += el.object.metadata.price
    })
    return sumPrice
  }

  render () {
    return (
      <Router>
        <div className='fashion'>
          <div
            className={[
              'fashion-menu',
              'fashion-menu__width',
              this.props.isOpenedMenu && 'fashion-menu__width--big-width'
            ].join(' ')}
          >
            <Menu
              menuCollapsed={this.props.menuCollapsed}
              openMenu={this.props.isOpenedMenu}
            />
          </div>

          <Switch>
            <Route exact path='/' render={props => <ViewPublicCatalog />} />
            <Route
              path={`/private-catalog`}
              render={props => (
                <Catalog myCatalog={this.state.displayedItems} {...props} />
              )}
            />
            <Route
              path={`/favourites`}
              render={props => (
                <Catalog myCatalog={this.state.displayedItems} {...props} />
              )}
            />
            <Route
              path={`/about`}
              render={props => (
                <Catalog myCatalog={this.state.displayedItems} {...props} />
              )}
            />
          </Switch>
        </div>
      </Router>
    )
  }
}

// ReactDOM.render(<App/>, document.getElementById('container'));

const mapStateToProps = state => {
    const isOpenedMenu = state.menu.isOpened
    return {
      isOpenedMenu
    }
  }

const mapDispatchToProps = dispatch => ({
  menuCollapsed: () => dispatch(menuCollapsed())
})

// export const Root = connect(mapStateToProps, mapDispatchToProps)(App);
export default connect(mapStateToProps, mapDispatchToProps)(App)
