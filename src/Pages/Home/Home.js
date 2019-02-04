import React, { Component } from 'react'

// CSS
import './Home.css'

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <div
          id
          className="embed-responsive embed-responsive-16by9 imm__video rounded mt-5"
        >
          <iframe
            title="Impact Motivation Manual Video"
            className="embed-responsive-item"
            src="https://www.youtube.com/embed/RMCOrd3W0rQ"
            allowFullScreen
          />
        </div>

        <div className="text-center mt-5">
          <h3>
            <strong>
              Regardless of the business, sport, educational, operational or
              personal life goal you're pursuing, you can
            </strong>
          </h3>
          <h1>
            <strong>MAXIMIZE PERFORMANCE</strong>
          </h1>
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

          <div className="rounded mt-4">
            <table
              id="action-words-table"
              class="table table-responsive table-borderless d-flex justify-content-center"
            >
              <tbody>
                <tr>
                  <td className="text-right pl-0 pr-1">
                    <img
                      src="/images/checkmark-no-box.png"
                      alt="checkmark"
                      style={{ width: '30px', height: '30px' }}
                    />
                  </td>
                  <td className="text-left pl-0 pr-3">
                    <strong>INTEGRITY</strong>
                  </td>
                  <td className="text-right pl-0 pr-1">
                    <img
                      src="/images/checkmark-no-box.png"
                      alt="checkmark"
                      style={{ width: '30px', height: '30px' }}
                    />
                  </td>
                  <td className="text-left pl-0 pr-3">
                    <strong>HONESTY</strong>
                  </td>
                  <td className="text-right pl-0 pr-1">
                    <img
                      src="/images/checkmark-no-box.png"
                      alt="checkmark"
                      style={{ width: '30px', height: '30px' }}
                    />
                  </td>
                  <td className="text-left pl-0 pr-3">
                    <strong>TENACITY</strong>
                  </td>
                  <td className="text-right pl-0 pr-1">
                    <img
                      src="/images/checkmark-no-box.png"
                      alt="checkmark"
                      style={{ width: '30px', height: '30px' }}
                    />
                  </td>
                  <td className="text-left pl-0 pr-3">
                    <strong>DETERMINATION</strong>
                  </td>
                </tr>
                <tr>
                  <td className="text-right pl-0 pr-1">
                    <img
                      src="/images/checkmark-no-box.png"
                      alt="checkmark"
                      style={{ width: '30px', height: '30px' }}
                    />
                  </td>
                  <td className="text-left pl-0 pr-3">
                    <strong>MENTAL TOUGHNESS</strong>
                  </td>
                  <td className="text-right pl-0 pr-1">
                    <img
                      src="/images/checkmark-no-box.png"
                      alt="checkmark"
                      style={{ width: '30px', height: '30px' }}
                    />
                  </td>
                  <td className="text-left pl-0 pr-3">
                    <strong>PERSISTENCE</strong>
                  </td>
                  <td className="text-right pl-0 pr-1">
                    <img
                      src="/images/checkmark-no-box.png"
                      alt="checkmark"
                      style={{ width: '30px', height: '30px' }}
                    />
                  </td>
                  <td className="text-left pl-0 pr-3">
                    <strong>RELENTLESS DRIVE</strong>
                  </td>
                  <td className="text-right pl-0 pr-1">
                    <img
                      src="/images/checkmark-no-box.png"
                      alt="checkmark"
                      style={{ width: '30px', height: '30px' }}
                    />
                  </td>
                  <td className="text-left pl-0 pr-3">
                    <strong>LEADERSHIP</strong>
                  </td>
                </tr>
                <tr>
                  <td className="text-right pl-0 pr-1">
                    <img
                      src="/images/checkmark-no-box.png"
                      alt="checkmark"
                      style={{ width: '30px', height: '30px' }}
                    />
                  </td>
                  <td className="text-left pl-0 pr-3">
                    <strong>DISCIPLINE</strong>
                  </td>
                  <td className="text-right pl-0 pr-1">
                    <img
                      src="/images/checkmark-no-box.png"
                      alt="checkmark"
                      style={{ width: '30px', height: '30px' }}
                    />
                  </td>
                  <td className="text-left pl-0 pr-3">
                    <strong>COURAGE</strong>
                  </td>
                  <td className="text-right pl-0 pr-1">
                    <img
                      src="/images/checkmark-no-box.png"
                      alt="checkmark"
                      style={{ width: '30px', height: '30px' }}
                    />
                  </td>
                  <td className="text-left pl-0 pr-3">
                    <strong>ACCOUNTABILITY</strong>
                  </td>
                  <td className="text-right pl-0 pr-1">
                    <img
                      src="/images/checkmark-no-box.png"
                      alt="checkmark"
                      style={{ width: '30px', height: '30px' }}
                    />
                  </td>
                  <td className="text-left pl-0 pr-3">
                    <strong>INDOMITABLE SPIRIT</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr className="mt-5" />
        </div>
        <div className="my-5 py-5" />
      </div>
    )
  }
}
