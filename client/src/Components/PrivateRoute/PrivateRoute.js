import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  // console.log('REST: ', rest)
  return (
    <Route
      {...rest}
      render={props => {
        return auth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/admin/login" />
        )
      }}
    />
  )
}

const mapState = ({ auth, product }) => ({ auth, product })

export default connect(mapState)(PrivateRoute)
