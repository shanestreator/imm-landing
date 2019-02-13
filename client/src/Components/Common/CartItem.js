import React, { Component } from 'react'
import { packInfo, priceRight } from '../../Utils/Utils'
import { connect } from 'react-redux'
import commaNumber from 'comma-number'
import { updateCartItem } from '../../Redux/Actions/Cart/actions'

class CartItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: props.id,
      pack: props.pack,
      quantity: props.quantity,
      created_At: Date()
    }
  }

  componentDidUpdate(prevProps) {
    if (+this.state.quantity !== prevProps.quantity) {
      this.props.updateCartItem(this.state)
    }
  }

  onChange = evt => {
    const { name, value } = evt.target
    // console.log('name: ', name, 'value: ', value)
    this.setState({
      [name]: value
    })
  }

  render() {
    const { id, pack, quantity } = this.state
    // Functions
    const { removeItemFromCart } = this.props
    // PackInfo returns the correct pack information given as property
    const { title, description, price, multiplier } = packInfo(pack)
    // Item total from quantity selected and price of pack
    const itemTotal = commaNumber(priceRight(quantity, +price, +multiplier))
    console.log('itemTotal: ', itemTotal)
    return (
      <React.Fragment>
        <li className="list-group-item container">
          <div className="row">
            <div className="col-6 d-flex align-items-center">
              <h5 className="my-0">
                {title}
                <p style={{ fontSize: '12px' }} className="text-muted mb-0">
                  {description}
                </p>
                <button
                  onClick={() => removeItemFromCart(id)}
                  className="btn btn-sm text-dark p-0"
                  style={{ fontSize: '8.5px' }}
                >
                  delete
                </button>
              </h5>
            </div>

            <div className="col-3 d-flex justify-content-end align-items-center">
              <div className="row">
                <div className="col ">
                  <span className="text-muted">${itemTotal}</span>
                </div>
              </div>
            </div>

            <div className="col-3 d-flex justify-content-center align-items-center">
              <div className="row">
                <div className="col-sm-12 col-md-6 d-flex align-items-center justify-content-center justify-content-md-end px-0">
                  <div className="mr-md-2 mb-sm-1">
                    <h6
                      className="mb-0"
                      htmlFor="quantity"
                      style={{ fontSize: '12px' }}
                    >
                      Qty:
                    </h6>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center px-0">
                  <select
                    className="form-control-sm"
                    onChange={this.onChange}
                    name="quantity"
                    defaultValue={quantity}
                    id="quantity"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </li>
      </React.Fragment>
    )
  }
}

export default connect(
  null,
  { updateCartItem }
)(CartItem)
