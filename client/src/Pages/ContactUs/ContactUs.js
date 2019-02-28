import React, { Component } from 'react'
import { connect } from 'react-redux'

import { sendCustomerEmail } from '../../Redux/Actions/contactActions'
import TextFieldGroup from '../../Components/Common/TextFieldGroup'
import TextAreaFieldGroup from '../../Components/Common/TextAreaFieldGroup'

class ContactUs extends Component {
  state = {
    name: '',
    email: '',
    description: '',
    errors: {},
    contact: {}
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors, contact: nextProps.contact })
    }
  }

  onChange = evt => {
    const { name, value } = evt.target
    this.setState({ [name]: value })
  }

  onSubmit = evt => {
    evt.preventDefault()
    const { name, email, description } = this.state

    const emailData = {
      name,
      email,
      description
    }

    console.log('emailData: ', emailData)

    this.props.sendCustomerEmail(emailData)

    this.setState({
      name: '',
      email: '',
      description: '',
      errors: {}
    })

    // GENERATE A MODAL TO POP UP AFTER SUCCESSFULLY SENDING AN EMAIL?
  }

  render() {
    // console.log('ERRORS: ', Object.keys(this.props.errors).length)
    // console.log('THIS_STATE: ', this.state)
    const { errors, contact } = this.state
    return (
      <div
        id="container"
        className="container home__container-shadow mvh-100 bg-light py-3 py-md-5 px-md-5"
      >
        <h1 className="display-4 text-center">Contact Us</h1>
        <div class="card shadow my-5">
          <div className="card-body p-md-5">
            <h3 className="text-center font-weight-normal mb-4">
              Regarding pricing, quantities, available languages, etc.
            </h3>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <div class="input-group input-group-lg">
                  <div class="input-group-prepend">
                    <span class="input-group-text bg-secondary text-white">
                      <i class="fas fa-user" />
                    </span>
                  </div>

                  <TextFieldGroup
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                    className="form-control bg-light"
                    placeholder="Name"
                    error={errors.name}
                  />
                </div>
              </div>

              <div class="form-group">
                <div class="input-group input-group-lg">
                  <div class="input-group-prepend">
                    <span class="input-group-text bg-secondary text-white">
                      <i class="fas fa-envelope" />
                    </span>
                  </div>
                  <TextFieldGroup
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    className="form-control bg-light"
                    placeholder="Email"
                    error={errors.email}
                  />
                </div>
              </div>

              <div class="form-group">
                <div class="input-group input-group-lg">
                  <div class="input-group-prepend">
                    <span class="input-group-text bg-secondary text-white">
                      <i class="fas fa-pencil-alt" />
                    </span>
                  </div>
                  <TextAreaFieldGroup
                    className="form-control bg-light"
                    placeholder="How can we help you?"
                    name="description"
                    value={this.state.description}
                    onChange={this.onChange}
                    error={errors.description}
                  />
                </div>
              </div>

              <input
                type="submit"
                value="Submit"
                class="btn btn-secondary btn-block btn-lg"
              />
              {contact.success && (
                <div className="d-flex justify-content-center mt-4">
                  <small className="text-success text-center">
                    <i class="fas fa-check" /> {contact.message}
                  </small>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = ({ contact, errors }) => ({ contact, errors })

export default connect(
  mapState,
  { sendCustomerEmail }
)(ContactUs)
