import React from 'react'
import { connect } from 'react-redux'

import { updateProduct } from '../../../Redux/Actions/productActions'

// Components
import AdminEditProductModal from './AdminEditProductModal'

class AdminProductItem extends React.Component {
  state = {}

  onConfirmDelete = () => {
    const result = window.confirm('Confirm delete, cannot be undone.')
    if (result) {
      this.props.deleteProduct(this.props.id)
    }
  }

  render() {
    const {
      id,
      title,
      name,
      imgUrl,
      priceEach,
      numManuals,
      getOneProduct
    } = this.props

    return (
      <React.Fragment>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 p-2">
          <div className="card card-red-hover mb-4">
            <img src={imgUrl} className="card-img-top" alt="..." />

            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                ${priceEach} <small className="text-muted">/ ea</small>
              </h1>
              <div>
                <ul className="list-unstyled text-muted mt-3 mb-4">
                  <li className="font-italic">
                    <h3 className="mb-0">{title}</h3>
                  </li>
                  <li style={{ fontSize: '12px' }}>
                    <small>(Pack of {numManuals} manuals)</small>
                  </li>
                  <li>
                    <div className="col d-flex justify-content-center align-items-center px-0 mt-5">
                      <div className="row">
                        <div className="col-sm-12 col-md-4 d-flex align-items-center justify-content-center justify-content-md-end pl-0 pr-1">
                          <div className="mb-sm-1">
                            <h6
                              className="mb-0"
                              htmlFor="quantity"
                              style={{ fontSize: '16px' }}
                            >
                              Qty:
                            </h6>
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-8 d-flex justify-content-center align-items-center px-0">
                          <select
                            className="form-control-sm"
                            name={name}
                            id="quantity"
                          >
                            <option value="0">Select</option>
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
                  </li>
                </ul>
                <div className="col p-4 d-flex justify-content-around">
                  <div className="row">
                    <div className="col">
                      <button
                        className="btn btn-primary m-2"
                        data-toggle="modal"
                        data-target="#editModal"
                        onClick={() => getOneProduct(id)}
                      >
                        <i className="fas fa-edit" />
                      </button>
                    </div>
                    <div className="col">
                      <button
                        className="btn btn-danger m-2"
                        onClick={this.onConfirmDelete}
                      >
                        <span>
                          <i className="fas fa-trash-alt" />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <AdminEditProductModal />
      </React.Fragment>
    )
  }
}

export default connect(
  null,
  { updateProduct }
)(AdminProductItem)
