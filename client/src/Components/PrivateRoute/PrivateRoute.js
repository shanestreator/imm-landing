import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, admin, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        admin ? <Component {...props} /> : <Redirect to="/admin/login" />
      }
    />
  )
}

const mapState = ({ admin }) => ({ admin })

export default connect(mapState)(PrivateRoute)
