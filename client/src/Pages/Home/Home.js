import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div id="container" className="container py-5 px-md-5 bg-light">
        <div className="embed-responsive embed-responsive-16by9 home__video rounded mt-5">
          <iframe
            title="Impact Motivation Manual Video"
            className="embed-responsive-item"
            src="https://www.youtube.com/embed/RMCOrd3W0rQ"
            allowFullScreen
          />
        </div>

        <div className="text-center mt-5 pt-3">
          <h3 className="home__dark-red">
            <strong className="home__dark-red">
              Regardless of the business, sport, educational, operational or
              personal life goal you're pursuing, you can
            </strong>
          </h3>
          <h2 className="home__h2-font-spacing home__dark-red">
            <strong>MAXIMIZE PERFORMANCE</strong>
          </h2>
          <h3 className="home__dark-red">
            <strong>
              in yourself, your workforce, personnel, students or team you lead.
            </strong>
          </h3>

          <p className="mt-5">
            <strong className="home__dark-red">
              The Impact Motivation Manual contains 101{' '}
            </strong>
            motivational, inspirational, thought provoking and knowledge
            building principles, concepts and philosophies from some of the
            worlds greatest thinkers...and doers.
          </p>

          <hr className="mt-5" />

          <p className="mt-5">
            <strong className="home__dark-red">
              How do your Students, Workforce, Personnel or Athletes benefit?{' '}
            </strong>
            Those who embrace the qualities and attributes this manual promotes
            can dynamically optimize virtually any area of life. They can learn
            to overcome hindering, negative thoughts and develop or strengthen
            powerful, positive characteristics such as:
          </p>

          <div className="row d-flex px-4 mt-4">
            {/* INTEGRITY, HONESTY, MENTAL TOUGHNESS, PERSISTENCE, DISCIPLINE, COURAGE */}
            {/* TENACITY, DETERMINATION, RELENTLESS DRIVE, LEADERSHIP, ACCOUNTABILITY, INDOMITABLE SPIRIT */}
            <ul class="list-inline d-flex align-items-center">
              <div className="row px-2">
                <div className="col-sm-12 col-md-6 px-0">
                  <div className="row d-flex justify-content-start">
                    <div className="col-sm-12 col-md-12 col-lg-4 ">
                      <li class="list-inline-item">
                        <table className="table table-borderless home__action-words-table pl-0 mb-0">
                          <tbody className="container">
                            <tr>
                              <td className="text-right pl-0 pr-1">
                                <img
                                  src="/images/checkmark-30px.png"
                                  alt="checkmark"
                                  style={{ width: '30px', height: '30px' }}
                                />
                              </td>
                              <td
                                className="text-left pl-0 pr-3"
                                style={{ width: '185px' }}
                              >
                                <strong>INTEGRITY</strong>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-right pl-0 pr-1">
                                <img
                                  src="/images/checkmark-30px.png"
                                  alt="checkmark"
                                  style={{ width: '30px', height: '30px' }}
                                />
                              </td>
                              <td
                                className="text-left pl-0 pr-3"
                                style={{ width: '185px' }}
                              >
                                <strong>HONESTY</strong>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-right pl-0 pr-1">
                                <img
                                  src="/images/checkmark-30px.png"
                                  alt="checkmark"
                                  style={{ width: '30px', height: '30px' }}
                                />
                              </td>
                              <td
                                className="text-left pl-0 pr-3"
                                style={{ width: '185px' }}
                              >
                                <strong>PERSISTENCE</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </li>
                    </div>
                    <div className="col" />
                    <div className="col-sm-12 col-md-12 col-lg-7">
                      <li class="list-inline-item">
                        <table className="table table-borderless home__action-words-table pl-0">
                          <tbody className="container">
                            <tr>
                              <td className="text-right pl-0 pr-1">
                                <img
                                  src="/images/checkmark-30px.png"
                                  alt="checkmark"
                                  style={{ width: '30px', height: '30px' }}
                                />
                              </td>
                              <td
                                className="text-left pl-0 pr-3"
                                style={{ width: '185px' }}
                              >
                                <strong>COURAGE</strong>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-right pl-0 pr-1">
                                <img
                                  src="/images/checkmark-30px.png"
                                  alt="checkmark"
                                  style={{ width: '30px', height: '30px' }}
                                />
                              </td>
                              <td
                                className="text-left pl-0 pr-3"
                                style={{ width: '185px' }}
                              >
                                <strong>DETERMINATION</strong>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-right pl-0 pr-1">
                                <img
                                  src="/images/checkmark-30px.png"
                                  alt="checkmark"
                                  style={{ width: '30px', height: '30px' }}
                                />
                              </td>
                              <td
                                className="text-left pl-0 pr-3"
                                style={{ width: '185px' }}
                              >
                                <strong>MENTAL TOUGHNESS</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </li>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-6 px-0 home__list-table-single-col">
                  <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-4">
                      <li class="list-inline-item">
                        <table className="table table-borderless home__action-words-table pl-0 mb-0">
                          <tbody className="container">
                            <tr>
                              <td className="text-right pl-0 pr-1">
                                <img
                                  src="/images/checkmark-30px.png"
                                  alt="checkmark"
                                  style={{ width: '30px', height: '30px' }}
                                />
                              </td>
                              <td
                                className="text-left pl-0 pr-3"
                                style={{ width: '185px' }}
                              >
                                <strong>TENACITY</strong>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-right pl-0 pr-1">
                                <img
                                  src="/images/checkmark-30px.png"
                                  alt="checkmark"
                                  style={{ width: '30px', height: '30px' }}
                                />
                              </td>
                              <td
                                className="text-left pl-0 pr-3"
                                style={{ width: '185px' }}
                              >
                                <strong>LEADERSHIP</strong>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-right pl-0 pr-1">
                                <img
                                  src="/images/checkmark-30px.png"
                                  alt="checkmark"
                                  style={{ width: '30px', height: '30px' }}
                                />
                              </td>
                              <td
                                className="text-left pl-0 pr-3"
                                style={{ width: '185px' }}
                              >
                                <strong>DISCIPLINE</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </li>
                    </div>
                    <div className="col" />
                    <div className="col-sm-12 col-md-12 col-lg-7">
                      <li class="list-inline-item">
                        <table className="table table-borderless home__action-words-table pl-0">
                          <tbody className="container">
                            <tr>
                              <td className="text-right pl-0 pr-1">
                                <img
                                  src="/images/checkmark-30px.png"
                                  alt="checkmark"
                                  style={{ width: '30px', height: '30px' }}
                                />
                              </td>
                              <td
                                className="text-left pl-0 pr-3"
                                style={{ width: '185px' }}
                              >
                                <strong>RELENTLESS DRIVE</strong>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-right pl-0 pr-1">
                                <img
                                  src="/images/checkmark-30px.png"
                                  alt="checkmark"
                                  style={{ width: '30px', height: '30px' }}
                                />
                              </td>
                              <td
                                className="text-left pl-0 pr-3"
                                style={{ width: '185px' }}
                              >
                                <strong>ACCOUNTABILITY</strong>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-right pl-0 pr-1">
                                <img
                                  src="/images/checkmark-30px.png"
                                  alt="checkmark"
                                  style={{ width: '30px', height: '30px' }}
                                />
                              </td>
                              <td
                                className="text-left pl-0 pr-3"
                                style={{ width: '185px' }}
                              >
                                <strong>INDOMITABLE SPIRIT</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </div>

          <hr className="mt-5" />

          <p className="mt-5">
            <strong className="home__dark-red">
              How does your Business, School, City/Village or Team benefit{' '}
            </strong>
            With the possibility of improved performance and productivity
            through the hands of more motivated, inspired, content, disciplined
            and successful team/workforce.
          </p>

          <hr className="mt-5" />

          <p className="mt-5">
            <strong className="home__dark-red">
              Motivate and inspire yourself and/or your team to a higher level
              today!
            </strong>
          </p>

          <p className="mt-4">
            Get all the powerful, positive benefits described here for{' '}
            <strong className="home__dark-red">
              as low as $2.50 per manual!
            </strong>
          </p>

          <Link to="/store">
            <img
              className="my-5 img-fluid"
              src="/images/Paypal-Buy-Now-Button.png"
              alt=""
            />
          </Link>

          <hr className="mt-5 border" />

          <div className="" />

          <div className="mt-5 pt-5">
            <h3 className="card-title home__dark-red my-4">
              <strong>
                The IMPACT MOTIVATION MANUAL is a great tool/gift for:
              </strong>
            </h3>
            <div className="card-text text-left px-4">
              <ul
                className="home__ul"
                // style={{
                //   listStyleImage: 'url(/images/checkmark-30px.png)'
                // }}
              >
                <li className="">
                  <strong>Yourself</strong>
                </li>
                <li className="">
                  <strong>Your family</strong>
                </li>
                <li className="">
                  <strong>Your friends</strong>
                </li>
                <li className="">
                  <strong>Your team / athletes</strong>
                </li>
                <li className="">
                  <strong>Your employees / personnel</strong>
                </li>
                <li className="">
                  <strong>Your students / graduates / teachers</strong>
                </li>
                <li className="">
                  <strong>
                    Anyone that would benefit from improved and optimized
                    performance!
                  </strong>
                </li>
              </ul>
            </div>
          </div>

          <hr className="my-5" />

          <Link
            // style={{ opacity: '.5' }}
            to="/about"
            type="button"
          >
            <button className="btn btn-secondary btn-lg">
              <h4 className="mb-0">Click here to learn more!</h4>
            </button>
          </Link>
        </div>
      </div>
    )
  }
}
