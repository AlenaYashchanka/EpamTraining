import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { menuCollapsed } from './../../store/actions/'
import { addToFavourites } from './../../store/actions/'
import { hideSignFavourites } from './../../store/actions/'
import Items from './../../response-data-export.json'
import { appStore } from './../../store/'

// import compponents
import ViewPublicCatalog from '../../views/view-public-catalog/view-public-catalog.jsx'
import ViewItem from '../../views/view-item/view-item.jsx'
import ViewFavourites from '../../views/view-favourites/view-favourites.jsx'
import Input from './../input/input.jsx'
import { About } from '../../views/veiw-about/view-about.jsx'
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
  }

  render () {
    return (
      <Router>
        <div className='fashion'>
          <div className="fashion-menu">
            <Menu
              menuCollapsed={this.props.menuCollapsed}
              openMenu={this.props.isOpenedMenu}
              showSign={this.props.isAddFafourite}
              hideSign={this.props.hideSignFavourites}
            />
          </div>
          <div className = "fashion-main-page">
            <div className={['main-page-wrapper', this.props.isOpenedMenu && 'wrapper--small-width'].join(' ')}>
              <Switch>
                  <Route exact path='/' render={props => <ViewPublicCatalog />} />
                  <Route path='/private-catalog' render={props => (<ViewPublicCatalog  />)}/>
                  <Route path='/favourites' render={props => (<ViewFavourites  />)}/>
                  <Route path='/about' render={props => (<About />)}/>
                  <Route path='/discover' render={props => ( <ViewItem />)}/>       
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = state => {
    const isOpenedMenu = state.menu.isOpened;
    const isAddFafourite = state.addFafourit.isClicked;
    const isHideSign = state.addFafourit.isClicked
    return {
      isOpenedMenu,
      isAddFafourite,
      isHideSign
    }
  }

const mapDispatchToProps = dispatch => ({
  menuCollapsed: () => dispatch(menuCollapsed()),
  hideSignFavourites: () => dispatch(hideSignFavourites()),
  addToFavourites: () => dispatch(addToFavourites())
  
})

// export const Root = connect(mapStateToProps, mapDispatchToProps)(App);
export default connect(mapStateToProps, mapDispatchToProps)(App)
