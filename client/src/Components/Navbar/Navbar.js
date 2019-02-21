import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { loginUser, logoutUser } from '../../Redux/Actions/authActions'

class Navbar extends Component {
  onLogoutClick = () => {
    this.props.logoutUser(this.props.history)
  }

  render() {
    // console.log('NavbarProps: ', this.props)
    const { user, isAuthenticated } = this.props.auth
    return (
      <div className="navbar_style fixed-top px-0">
        <nav className="navbar navbar-expand-md d-flex justify-content-center navbar-light bg-light">
          <div id="container" className="container">
            {isAuthenticated ? (
              <Link className="navbar-brand" to="/admin/products">
                <img
                  style={{ width: '200px', height: '50px' }}
                  src="/images/imm-logo.png"
                  alt=""
                />
              </Link>
            ) : (
              <Link className="navbar-brand" to="/">
                <img
                  style={{ width: '200px', height: '50px' }}
                  src="/images/imm-logo.png"
                  alt=""
                />
              </Link>
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
                      <Link className="nav-link nav-text active" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link nav-text" to="/about">
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link nav-text" to="/store">
                        Store
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link nav-text pr-0 mr-0" to="/cart">
                        <img
                          className="mb-1 mr-1"
                          style={{ width: '20px', height: '17px' }}
                          src="/images/shopping-cart.png"
                          alt=""
                        />
                        Cart
                      </Link>
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

export default connect(
  mapState,
  { loginUser, logoutUser }
)(Navbar)
