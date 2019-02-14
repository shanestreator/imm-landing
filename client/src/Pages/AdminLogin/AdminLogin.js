import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loginUser } from '../../Redux/Actions/authActions'

// Components
import TextFieldGroup from '../../Components/Common/TextFieldGroup'

class AdminLogin extends Component {
  state = {
    email: '',
    password: '',
    errors: {}
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard')
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }
  }

  onChange = evt => {
    const { name, value } = evt.target
    this.setState({ [name]: value })
  }

  onSubmit = evt => {
    evt.preventDefault()
    const { email, password } = this.state

    const userData = {
      email,
      password
    }

    this.props.loginUser(userData, this.props.history)
  }

  render() {
    // console.log('THIS.PROPS: ', this.props)
    const { errors } = this.state
    return (
      <div id="container" className="container bg-light p-5 vh-100">
        <div className="row justify-content-center py-5 bg-dark text-white">
          <div className="card bg-dark text-white border">
            <div className="card-header px-5 py-4 border border-left-0 border-right-0 border-top-0">
              <h1 className="text-center">Login</h1>
            </div>
            <div className="card-body m-5 px-5">
              <form noValidate>
                <div className="row">
                  <TextFieldGroup
                    onChange={this.onChange}
                    label="Email"
                    autoComplete="email"
                    value={this.state.email}
                    name="email"
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    error={errors.email}
                  />
                </div>
                <div className="row">
                  <TextFieldGroup
                    onChange={this.onChange}
                    label="Password"
                    autoComplete="password"
                    value={this.state.password}
                    name="password"
                    type="text"
                    className="form-control"
                    placeholder="Password"
                    error={errors.password}
                  />
                </div>
                <div className="row justify-content-end pt-4">
                  <button
                    onClick={this.onSubmit}
                    className="btn btn-dark border"
                    type="Submit"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = ({ auth, errors }) => ({ auth, errors })

export default connect(
  mapState,
  { loginUser }
)(AdminLogin)
