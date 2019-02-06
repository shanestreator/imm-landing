import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// CSS
import './Navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <div className="main__navbar fixed-top px-0">
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <div className="container px-4">
            <Link className="navbar-brand" to="/">
              IMM
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
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/store">
                    Store
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">
                    <img
                      className="mb-1 mr-1"
                      style={{ width: '20px', height: '17px' }}
                      src="/images/shopping-cart.jpg"
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
