import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import classNames from 'classnames'

import { Badge, Icon } from 'antd'

import 'antd/dist/antd.css'

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
                  style={{ width: '125px', height: '50px' }}
                  src="/images/imm-logo.webp"
                  alt=""
                />
              </NavLink>
            ) : (
              <NavLink className="navbar-brand" to="/">
                <img
                  style={{ width: '190px', height: '50px' }}
                  src="/images/imm-logo.webp"
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
                    <li className="nav-item">
                      <NavLink
                        className="nav-link nav-text navbar__navlink-hover-style"
                        active={
                          window.location.pathname === 'admin/dashboard'
                            ? 'selected'
                            : ''
                        }
                        activeStyle={{
                          fontWeight: 'bold'
                        }}
                        exact
                        to="/admin/dashboard"
                      >
                        Dashboard
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link nav-text navbar__navlink-hover-style"
                        active={
                          window.location.pathname === 'admin/products'
                            ? 'selected'
                            : ''
                        }
                        activeStyle={{
                          fontWeight: 'bold'
                        }}
                        exact
                        to="/admin/products"
                      >
                        Products
                      </NavLink>
                    </li>
                    <li className="nav-item d-flex align-items-end">
                      <div className="dropdown py-2">
                        <button
                          className="bg-light text-muted border-0 px-0 pt-0 pb-1 ml-md-2 dropdown-toggle"
                          type="button"
                          id="dropdownMenu2"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          style={{ cursor: 'pointer' }}
                        >
                          {user.name}
                        </button>
                        <div
                          className="dropdown-menu dropdown-menu-right"
                          aria-labelledby="dropdownMenu2"
                        >
                          <button
                            onClick={this.onLogoutClick}
                            className="dropdown-item"
                          >
                            Logout
                          </button>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item d-flex align-items-center" />
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link nav-text navbar__navlink-hover-style text-center"
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
                        className="nav-link nav-text navbar__navlink-hover-style text-center"
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
                        style={{ paddingTop: '5px' }}
                        className="nav-link nav-text navbar__navlink-hover-style text-center"
                        active={
                          window.location.pathname === '/cart' ? 'selected' : ''
                        }
                        activeStyle={{
                          fontWeight: 'bold'
                        }}
                        exact
                        to="/cart"
                      >
                        <Badge count={productsInCart.length}>
                          <Icon
                            style={{ fontSize: '20px' }}
                            type="shopping-cart"
                          />
                        </Badge>
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
