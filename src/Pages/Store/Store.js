import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// CSS
import './Store.css'

export default class Options extends Component {
  render() {
    return (
      <div className="mt-5">
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4">Pricing</h1>
          <p className="lead">
            Quickly build an effective pricing table for your potential
            customers with this Bootstrap example. It’s built with default
            Bootstrap components and utilities with little customization.
          </p>
        </div>

        <div className="container px-5">
          <div className="card-deck mb-3 text-center">
            <div className="row">
              {/* -------------------- $5 -------------------- */}
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 ">
                <div className="card card-red-hover mb-4">
                  <img
                    src="/images/imm-1.PNG"
                    className="card-img-top"
                    alt="..."
                  />

                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">
                      $5 <small className="text-muted">/ ea</small>
                    </h1>
                    <ul className="list-unstyled text-muted mt-3 mb-4">
                      <li className="font-italic">
                        <h3>Couple Pack</h3>
                      </li>
                      <li>Quantity: 2</li>
                    </ul>
                    <div className="p-4">
                      <Link to="/store">
                        <img
                          className="img-fluid"
                          src="/images/add-to-cart.png"
                          alt=""
                          // style={{ height: '60px', width: '200px' }}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* -------------------- $4.50 -------------------- */}
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 ">
                <div className="card card-red-hover mb-4 shadow">
                  <img
                    src="/images/imm-10.PNG"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">
                      $4.50 <small className="text-muted">/ ea</small>
                    </h1>
                    <ul className="list-unstyled text-muted mt-3 mb-4">
                      <li className="font-italic">
                        <h3>Family Pack</h3>
                      </li>
                      <li>Quantity: 10</li>
                    </ul>
                    <div className="p-4">
                      <Link to="/store">
                        <img
                          className="img-fluid"
                          src="/images/add-to-cart.png"
                          alt=""
                          // style={{ height: '60px', width: '200px' }}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* -------------------- $4 -------------------- */}
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 ">
                <div className="card card-red-hover mb-4 shadow">
                  <img
                    src="/images/imm-25.PNG"
                    className="card-img-top"
                    alt="..."
                  />

                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">
                      $4 <small className="text-muted">/ ea</small>
                    </h1>
                    <ul className="list-unstyled text-muted mt-3 mb-4">
                      <li className="font-italic">
                        <h3>Group Pack</h3>
                      </li>
                      <li>Quantity: 25</li>
                    </ul>
                    <div className="p-4">
                      <Link to="/store">
                        <img
                          className="img-fluid"
                          src="/images/add-to-cart.png"
                          alt=""
                          // style={{ height: '60px', width: '200px' }}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* -------------------- $3.50 -------------------- */}
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 ">
                <div className="card card-red-hover mb-4 shadow">
                  <img
                    src="/images/imm-25.PNG"
                    className="card-img-top"
                    alt="..."
                  />

                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">
                      $3.50 <small className="text-muted">/ ea</small>
                    </h1>
                    <ul className="list-unstyled text-muted mt-3 mb-4">
                      <li className="font-italic">
                        <h3>Business Pack</h3>
                      </li>
                      <li>Quantity: 100</li>
                    </ul>
                    <div className="p-4">
                      <Link to="/store">
                        <img
                          className="img-fluid"
                          src="/images/add-to-cart.png"
                          alt=""
                          // style={{ height: '60px', width: '200px' }}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* -------------------- $3 -------------------- */}
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 ">
                <div className="card card-red-hover mb-4 shadow">
                  <img
                    src="/images/imm-25.PNG"
                    className="card-img-top"
                    alt="..."
                  />

                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">
                      $3 <small className="text-muted">/ ea</small>
                    </h1>
                    <ul className="list-unstyled text-muted mt-3 mb-4">
                      <li className="font-italic">
                        <h3>Company Pack</h3>
                      </li>
                      <li>Quantity: 1,000</li>
                    </ul>
                    <div className="p-4">
                      <Link to="/store">
                        <img
                          className="img-fluid"
                          src="/images/add-to-cart.png"
                          alt=""
                          // style={{ height: '60px', width: '200px' }}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* -------------------- $2.50 -------------------- */}
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 ">
                <div className="card card-red-hover mb-4 shadow">
                  <img
                    src="/images/imm-25.PNG"
                    className="card-img-top"
                    alt="..."
                  />

                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">
                      $2.50 <small className="text-muted">/ ea</small>
                    </h1>
                    <ul className="list-unstyled text-muted mt-3 mb-4">
                      <li className="font-italic">
                        <h3>Big-Company Pack</h3>
                      </li>
                      <li>Quantity: 5,000</li>
                    </ul>
                    <div className="p-4">
                      <Link to="/store">
                        <img
                          className="img-fluid"
                          src="/images/add-to-cart.png"
                          alt=""
                          // style={{ height: '60px', width: '200px' }}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-5 py-5" />
      </div>
    )
  }
}
