import React from 'react'
import { Link } from 'react-router-dom'
import commaNumber from 'comma-number'
import { calcForCartTotal } from '../../../Utils/Utils'

export default function OrderSummaryTable({
  productsInCart,
  totalManuals,
  total
}) {
  return (
    <table className="w-100">
      <tbody>
        <tr>
          <td>
            <h4 className="pt-sm-3 pt-md-4 pl-3 mb-3">
              <span className=" row text-muted">Order Summary</span>
            </h4>
          </td>
        </tr>

        <tr
          className="mb-2 py-1 d-flex justify-content-between"
          style={{ fontSize: '14px' }}
        >
          <td>Total Manuals:</td>
          <td className="">{commaNumber(totalManuals)}</td>
        </tr>

        <tr
          className="mb-0 py-1 d-flex justify-content-between"
          style={{ fontSize: '14px' }}
        >
          <td>
            {productsInCart.length === 1 ? 'item' : 'items'}(
            {productsInCart.length}):
          </td>
          <td className="">
            ${total}
            .00
          </td>
        </tr>

        <tr
          className="mb-0 py-1 d-flex justify-content-between"
          style={{ fontSize: '14px' }}
        >
          <td>Shipping & handling:</td>
          <td className="">$0.00</td>
        </tr>

        <tr
          className="mb-0 d-flex justify-content-between align-items-center"
          style={{ fontSize: '14px' }}
        >
          <td style={{ width: '75%' }} />
          <td className="p-0" style={{ width: '25%' }}>
            <hr className="py-1 m-0" style={{}} />
          </td>
        </tr>

        <tr
          className="mb-0 pb-2 d-flex justify-content-between"
          style={{ fontSize: '14px' }}
        >
          <td>Total before tax:</td>
          <td className="">
            ${total}
            .00
          </td>
        </tr>

        <tr
          className="mb-0 pb-1 d-flex justify-content-between align-items-center"
          style={{ fontSize: '14px' }}
        >
          <td>Estimated tax:</td>
          <td className="">
            ${commaNumber(Math.round(calcForCartTotal(productsInCart) / 10))}
            .00
          </td>
        </tr>

        <tr
          className="mb-0 d-flex justify-content-between align-items-center"
          style={{ fontSize: '14px' }}
        >
          <td className="w-100">
            <hr className="py-1 m-0" style={{}} />
          </td>
        </tr>

        <tr
          className="mb-0 pb-1 d-flex justify-content-between align-items-center cart__text-color-red"
          style={{ fontSize: '16px', fontWeight: 'bold' }}
        >
          <td>Order Total:</td>
          <td>
            $
            {commaNumber(
              calcForCartTotal(productsInCart) +
                Math.round(calcForCartTotal(productsInCart) / 10)
            )}
            .00
          </td>
        </tr>

        <tr>
          <td>
            {/* ----------------- PROCEED TO CHECKOUT ----------------- */}
            {calcForCartTotal(productsInCart) > 0 && (
              <div className="col-12 d-flex justify-content-center align-items-center mt-5 pr-0">
                <Link
                  to="/checkout"
                  className="btn store__add-button"
                  style={{ fontWeight: 'bold' }}
                >
                  Proceed to Checkout
                </Link>
              </div>
            )}
          </td>
        </tr>
      </tbody>
    </table>
  )
}
