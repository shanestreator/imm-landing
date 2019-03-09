import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getAllOrders } from '../../Redux/Actions/Admin/orderActions'

class AdminDashboard extends Component {
  componentDidMount() {
    this.props.getAllOrders()
  }

  render() {
    // const { orders, questions } = this.props.admin

    return (
      <div
        id="container"
        className="container about__container-shadow py-5 pb-3 bg-light"
      >
        <div className="container-md px-md-4">
          <h1 className="display-4 text-center">Dashboard</h1>

          <h2>Most Recent Orders</h2>
          <div className="card shadow">
            <div className="card-body">hi</div>
          </div>

          <h2>Most Recent Orders</h2>
          <div className="card shadow">
            <div className="card-body">hi</div>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = ({ admin }) => ({ admin })

export default connect(
  mapState,
  { getAllOrders }
)(AdminDashboard)
