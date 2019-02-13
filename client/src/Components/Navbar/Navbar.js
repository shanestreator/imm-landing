import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

// CSS
import './Navbar.css'

class Navbar extends Component {
  render() {
    // console.log('NavbarProps: ', this.props)
    return (
      <div className="main__navbar fixed-top px-0">
        <nav className="navbar navbar-expand-md d-flex justify-content-center navbar-light bg-light">
          <div id="container" className="container">
            <Link className="navbar-brand" to="/">
              <img
                style={{ width: '200px', height: '50px' }}
                src="/images/imm-logo.png"
                alt=""
              />
            </Link>
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
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

const mapState = ({ cart }) => ({ cart })

export default connect(mapState)(Navbar)
