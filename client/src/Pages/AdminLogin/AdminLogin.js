import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginUser } from '../../Redux/Actions/authActions'
import TextFieldGroup from '../../Components/Common/TextFieldGroup'

class AdminLogin extends Component {
  state = {
    email: '',
    password: '',
    errors: {}
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/admin/prodcuts')
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
    const { errors } = this.state
    return (
      <div
        id="container"
        className="container about__container-shadow bg-light p-5 min-vh-100"
      >
        <div className="container-md px-md-4">
          <h1 className="display-4 text-center">Login</h1>
          <div className="container admin__input-width">
            <form noValidate>
              <div className="row d-flex">
                <div className="col-12 py-2 admin__input-width">
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
                <div className="col-12 py-2 admin__input-width">
                  <TextFieldGroup
                    onChange={this.onChange}
                    label="Password"
                    autoComplete="password"
                    value={this.state.password}
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    error={errors.password}
                  />
                </div>
                <div className="col-12 d-flex justify-content-end pt-4">
                  <button
                    onClick={this.onSubmit}
                    className="btn btn-secondary"
                    type="Submit"
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
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
)(withRouter(AdminLogin))
