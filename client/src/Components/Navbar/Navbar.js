import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import classNames from 'classnames'

import { loginUser, logoutUser } from '../../Redux/Actions/authActions'

class Navbar extends Component {
  onLogoutClick = () => {
    this.props.logoutUser(this.props.history)
  }

  render() {
    const { productsInCart } = this.props.cart
    const { user, isAuthenticated } = this.props.auth
    return (
      <div className="navbar__style fixed-top px-0">
        <nav className="navbar navbar-expand-md d-flex justify-content-center navbar-light bg-light">
          <div id="container" className="container">
            {isAuthenticated ? (
              <NavLink className="navbar-brand" to="/admin/products">
                <img
                  style={{ width: '200px', height: '50px' }}
                  src="/images/imm-logo.png"
                  alt=""
                />
              </NavLink>
            ) : (
              <NavLink className="navbar-brand" to="/">
                <img
                  style={{ width: '200px', height: '50px' }}
                  src="/images/imm-logo.png"
                  alt=""
                />
              </NavLink>
            )}
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                {isAuthenticated ? (
                  <React.Fragment>
                    <li className="nav-item d-flex">
                      <i
                        className="fas fa-user align-self-center"
                        style={{
                          fontSize: '14px',
                          opacity: '.75',
                          paddingBottom: '2px'
                        }}
                      />
                      <p
                        className="pl-1 mr-4 mb-0"
                        style={{ fontSize: '16px', opacity: '.75' }}
                      >
                        {user.name}
                      </p>
                    </li>
                    <li className="nav-item">
                      <button
                        onClick={this.onLogoutClick}
                        className="nav-link nav-text btn btn-secondary text-white btn-sm py-0 mr-0"
                      >
                        Logout
                      </button>
                    </li>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link nav-text navbar__navlink-hover-style"
                        active={
                          window.location.pathname === '/' ? 'selected' : ''
                        }
                        activeStyle={{
                          fontWeight: 'bold'
                        }}
                        exact
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link nav-text navbar__navlink-hover-style"
                        active={
                          window.location.pathname === '/about'
                            ? 'selected'
                            : ''
                        }
                        activeStyle={{
                          fontWeight: 'bold'
                        }}
                        exact
                        to="/about"
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link nav-text navbar__navlink-hover-style"
                        active={
                          window.location.pathname === '/store'
                            ? 'selected'
                            : ''
                        }
                        activeStyle={{
                          fontWeight: 'bold'
                        }}
                        exact
                        to="/store"
                      >
                        Store
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link nav-text navbar__navlink-hover-style pr-0 mr-0"
                        active={
                          window.location.pathname === '/cart' ? 'selected' : ''
                        }
                        activeStyle={{
                          fontWeight: 'bold'
                        }}
                        exact
                        to="/cart"
                      >
                        Cart
                        <span
                          className={classNames({
                            badge: true,
                            'badge-pill': true,
                            'badge-light': productsInCart.length < 1,
                            'border-danger':
                              productsInCart.length > 0 &&
                              window.location.pathname !== '/cart',
                            'text-danger':
                              productsInCart.length > 0 &&
                              window.location.pathname !== '/cart',
                            border: true,
                            'text-black-50':
                              window.location.pathname !== '/cart' &&
                              productsInCart.length < 1,
                            'text-body':
                              window.location.pathname === '/cart' &&
                              productsInCart.length < 1,
                            'border-dark': window.location.pathname === '/cart',
                            'ml-1': true
                          })}
                        >
                          {productsInCart.length}
                        </span>
                      </NavLink>
                    </li>
                  </React.Fragment>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

const mapState = ({ cart, auth }) => ({ cart, auth })

export default withRouter(
  connect(
    mapState,
    { loginUser, logoutUser }
  )(Navbar)
)
