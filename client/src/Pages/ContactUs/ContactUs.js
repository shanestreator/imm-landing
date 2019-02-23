import React, { Component } from 'react'
import TextFieldGroup from '../../Components/Common/TextFieldGroup'
import TextAreaFieldGroup from '../../Components/Common/TextAreaFieldGroup'

export default class ContactUs extends Component {
  state = {
    name: '',
    email: '',
    description: '',
    errors: ''
  }

  onChange = evt => {
    const { name, value } = evt.target
    this.setState({ [name]: value })
  }

  onSubmit = evt => {
    evt.preventDefault()
  }

  render() {
    console.log('THIS.STATE: ', this.state)
    const { errors } = this.state
    return (
      <div id="container" className="container vh-100 bg-light p-5">
        <div class="card shadow my-5">
          <div className="card-body p-5">
            <h3>Contact Us</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              quos illo, dicta id voluptates enim.
            </p>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <div class="input-group input-group-lg">
                  <div class="input-group-prepend">
                    <span class="input-group-text bg-danger text-white">
                      <i class="fas fa-user" />
                    </span>
                  </div>

                  <TextFieldGroup
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                    className="form-control bg-dark text-white"
                    placeholder="Name"
                    error={errors}
                  />
                </div>
              </div>

              <div class="form-group">
                <div class="input-group input-group-lg">
                  <div class="input-group-prepend">
                    <span class="input-group-text bg-danger text-white">
                      <i class="fas fa-envelope" />
                    </span>
                  </div>
                  <TextFieldGroup
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    className="form-control bg-dark text-white"
                    placeholder="Email"
                    error={errors}
                  />
                </div>
              </div>

              <div class="form-group">
                <div class="input-group input-group-lg">
                  <div class="input-group-prepend">
                    <span class="input-group-text bg-danger text-white">
                      <i class="fas fa-pencil-alt" />
                    </span>
                  </div>
                  <TextAreaFieldGroup
                    className="form-control bg-dark text-white"
                    placeholder="How can we help you?"
                    name="description"
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                </div>
              </div>

              <input
                type="submit"
                value="Submit"
                class="btn btn-danger btn-block btn-lg"
              />
            </form>
          </div>
        </div>
      </div>
    )
  }
}
