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
                  <picture>
                    <source
                      type="image/webp"
                      srcset="/images/thinking-man.webp"
                      style={{
                        width: '50px',
                        height: '50px'
                      }}
                    />
                    <source
                      type="image/png"
                      srcset="/images/thinking-man.png"
                      style={{
                        width: '50px',
                        height: '50px'
                      }}
                    />
                    <img
                      src="image/png"
                      alt="Impact Motivation Manual Logo Home Button"
                      style={{
                        width: '50px',
                        height: '50px'
                      }}
                    />
                  </picture>
                </Link>
              </td>
              <td>
                <div className="row">
                  <div className="col-12 py-1 pr-0">
                    <Link
                      style={{ color: 'black' }}
                      className="text-dark"
                      to="/"
                    >
                      Home
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
          <picture>
            <source
              type="image/webp"
              srcset="/images/secure-checkout.webp"
              style={{ width: '140px', height: '70px' }}
            />
            <source
              type="image/png"
              srcset="/images/secure-checkout.png"
              style={{ width: '140px', height: '70px' }}
            />
            <img
              src="image/png"
              alt="stripe logo"
              style={{ width: '140px', height: '70px' }}
            />
          </picture>
        </div>
      </div>
    )
  }
}

export default FooterMenu
