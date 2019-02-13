import React from 'react'

// Components
import StoreCartItem from '../../Components/Common/StoreCartItem'

const AdminProductItem = ({
  name,
  priceEach,
  numManuals,
  item,
  onClickGoToCart,
  onChange,
  onSubmit
}) => {
  return (
    <React.Fragment>
      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 ">
        <div className="card card-red-hover mb-4">
          <img
            src="/images/manuals/imm-2.png"
            className="card-img-top"
            alt="..."
          />

          <div className="card-body">
            <h1 className="card-title pricing-card-title">
              ${priceEach} <small className="text-muted">/ ea</small>
            </h1>
            <form onSubmit={onSubmit}>
              <ul className="list-unstyled text-muted mt-3 mb-4">
                <li className="font-italic">
                  <h3 className="mb-0">{name}</h3>
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
                          onChange={onChange}
                          name="couplePack"
                          // defaultValue={this.state.couplePack}
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
              <div className="p-4">
                <button
                  type="submit"
                  className="btn btn-primary"
                  // disabled={!+this.state.couplePack}
                  data-toggle="modal"
                  data-target="#couplePackModal"
                >
                  <strong>Add To Cart</strong>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="couplePackModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="couplePackModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="couplePackModalLabel">
                Added To Cart
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <StoreCartItem item={item} />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                aria-label="Close"
              >
                Continue Shopping
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={onClickGoToCart}
              >
                Go To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AdminProductItem
