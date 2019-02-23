import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class FooterMenu extends Component {
  render() {
    return (
      <div className="row">
        <table className="table table-borderless col-6 d-flex align-items-center mb-0 pl-0">
          <tbody className="container d-flex align-items-center pr-0">
            <tr className="footer-menu__links">
              <td className="text-center px-0">
                <Link style={{ color: 'black' }} className="text-dark" to="/">
                  <img
                    src="/images/thinking-man.png"
                    alt="Thinking Man"
                    style={{ width: '50px', height: '50px' }}
                  />
                </Link>
              </td>
              <td>
                <div className="row">
                  <div className="col-12 py-1 pr-0">
                    <Link
                      style={{ color: 'black' }}
                      className="text-dark"
                      to="/about"
                    >
                      About
                    </Link>
                  </div>
                  <div className="col-12 py-1 pr-0">
                    <Link
                      style={{ color: 'black' }}
                      className="text-dark"
                      to="/contact"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="col-6 d-flex justify-content-end align-items-center">
          <img
            className="image-fluid"
            style={{ width: '140px', height: '70px' }}
            src="/images/stripe-secure.png"
            alt="stripe"
          />
        </div>
      </div>
    )
  }
}

export default FooterMenu
