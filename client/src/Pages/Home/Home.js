import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// CSS
import './Home.css'

export default class Home extends Component {
  render() {
    return (
      <div id="container" className="container p-5 bg-light">
        <div className="embed-responsive embed-responsive-16by9 imm__video rounded shadow mt-5">
          <iframe
            title="Impact Motivation Manual Video"
            className="embed-responsive-item"
            src="https://www.youtube.com/embed/RMCOrd3W0rQ"
            allowFullScreen
          />
        </div>

        <div className="text-center mt-5 pt-3">
          <h3>
            <strong>
              Regardless of the business, sport, educational, operational or
              personal life goal you're pursuing, you can
            </strong>
          </h3>
          <h2 className="h2-font-spacing">
            <strong>MAXIMIZE PERFORMANCE</strong>
          </h2>
          <h3>
            <strong>
              in yourself, your workforce, personnel, students or team you lead.
            </strong>
          </h3>

          <p className="mt-5">
            <strong>The Impact Motivation Manual contains 101 </strong>
            motivational, inspirational, thought provoking and knowledge
            building principles, concepts and philosophies from some of the
            worlds greatest thinkers...and doers.
          </p>

          <hr className="mt-5" />

          <p className="mt-5">
            <strong>
              How do your Students, Workforce, Personnel or Athletes benefit?{' '}
            </strong>
            Those who embrace the qualities and attributes this manual promotes
            can dynamically optimize virtually any area of life. They can learn
            to overcome hindering, negative thoughts and develop or strengthen
            powerful, positive characteristics such as:
          </p>

          <div className="table-responsive px-4 mt-4">
            <table
              id="action-words-table"
              className="table table-borderless pl-0"
            >
              <tbody className="container px-5">
                <tr>
                  <td className="text-right pl-0 pr-1">
                    <img
                      src="/images/checkmark-30px.png"
                      alt="checkmark"
                      style={{ width: '30px', height: '30px' }}
                    />
                  </td>
                  <td className="text-left pl-0 pr-3">
                    <strong>INTEGRITY</strong>
                  </td>
                  <td className="text-right pl-0 pr-1">
                    <img
                      src="/images/checkmark-30px.png"
                      alt="checkmark"
                      style={{ width: '30px', height: '30px' }}
                    />
                  </td>
                  <td className="text-left pl-0 pr-3">
                    <strong>HONESTY</strong>
                  </td>
                  <td className="text-right pl-0 pr-1">
                    <img
                      src="/images/checkmark-30px.png"
                      alt="checkmark"
                      style={{ width: '30px', height: '30px' }}
                    />
                  </td>
                  <td className="text-left pl-0 pr-3">
                    <strong>TENACITY</strong>
                  </td>
                  <td className="text-right pl-0 pr-1">
                    <img
                      src="/images/checkmark-30px.png"
                      alt="checkmark"
                      style={{ width: '30px', height: '30px' }}
                    />
                  </td>
                  <td className="text-left pl-0 pr-0">
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
                  <td className="text-left pl-0 pr-3">
                    <strong>MENTAL TOUGHNESS</strong>
                  </td>
                  <td className="text-right pl-0 pr-1">
                    <img
                      src="/images/checkmark-30px.png"
                      alt="checkmark"
                      style={{ width: '30px', height: '30px' }}
                    />
                  </td>
                  <td className="text-left pl-0 pr-3">
                    <strong>PERSISTENCE</strong>
                  </td>
                  <td className="text-right pl-0 pr-1">
                    <img
                      src="/images/checkmark-30px.png"
                      alt="checkmark"
                      style={{ width: '30px', height: '30px' }}
                    />
                  </td>
                  <td className="text-left pl-0 pr-3">
                    <strong>RELENTLESS DRIVE</strong>
                  </td>
                  <td className="text-right pl-0 pr-1">
                    <img
                      src="/images/checkmark-30px.png"
                      alt="checkmark"
                      style={{ width: '30px', height: '30px' }}
                    />
                  </td>
                  <td className="text-left pl-0 pr-0">
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
                  <td className="text-left pl-0 pr-3">
                    <strong>DISCIPLINE</strong>
                  </td>
                  <td className="text-right pl-0 pr-1">
                    <img
                      src="/images/checkmark-30px.png"
                      alt="checkmark"
                      style={{ width: '30px', height: '30px' }}
                    />
                  </td>
                  <td className="text-left pl-0 pr-3">
                    <strong>COURAGE</strong>
                  </td>
                  <td className="text-right pl-0 pr-1">
                    <img
                      src="/images/checkmark-30px.png"
                      alt="checkmark"
                      style={{ width: '30px', height: '30px' }}
                    />
                  </td>
                  <td className="text-left pl-0 pr-3">
                    <strong>ACCOUNTABILITY</strong>
                  </td>
                  <td className="text-right pl-0 pr-1">
                    <img
                      src="/images/checkmark-30px.png"
                      alt="checkmark"
                      style={{ width: '30px', height: '30px' }}
                    />
                  </td>
                  <td className="text-left pl-0 pr-0">
                    <strong>INDOMITABLE SPIRIT</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr className="mt-5" />

          <p className="mt-5">
            <strong>
              How does your Business, School, City/Village or Team benefit{' '}
            </strong>
            With the possibility of improved performance and productivity
            through the hands of more motivated, inspired, content, disciplined
            and successful team/workforce.
          </p>

          <hr className="mt-5" />

          <p className="mt-5">
            <strong>
              Motivate and inspire yourself and/or your team to a higher level
              today!
            </strong>
          </p>

          <p className="mt-4">
            Get all the powerful, positive benefits described here for{' '}
            <strong>as low as $2.50 per manual!</strong>
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
            <h3 className="card-title  my-4">
              <strong>
                The IMPACT MOTIVATION MANUAL is a great tool/gift for:
              </strong>
            </h3>
            <div className="card-text text-left ml-5">
              <ul style={{ listStyleImage: 'url(/images/checkmark-30px.png)' }}>
                <li className="">
                  <p>Yourself</p>
                </li>
                <li className="">
                  <p>Your family</p>
                </li>
                <li className="">
                  <p>Your friends</p>
                </li>
                <li className="">
                  <p>Your team / athletes</p>
                </li>
                <li className="">
                  <p>Your employees / personnel</p>
                </li>
                <li className="">
                  <p>Your students / graduates / teachers</p>
                </li>
                <li className="">
                  <p>
                    Anyone that would benefit from improved and optimized
                    performance!
                  </p>
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
              <h4 className="mb-0 button-red">Click here to learn more!</h4>
            </button>
          </Link>
        </div>
      </div>
    )
  }
}
