import React from 'react'
import axios from 'axios'

// import STRIPE_PUBLISHABLE from '../../../Config/stripe'
// import PAYMENT_SERVER_URL from '../../../Config/server'

// import { removeAllFromCart } from '../../../Redux/Actions/cartActions'

// import store from '../../../Redux/store'

// // console.log('STORE: ', store.getState().cart.productsInCart)

// const CURRENCY = 'USD'

// const successPayment = data => {
//   alert(
//     'Payment Successful. You should recieve an email with your order details.'
//   )
// }

// const errorPayment = data => {
//   alert('Payment Error.')
// }

const fetchPayPalCheckout = async (name, productsInCart) => {
  try {
    // console.log('NAME: ', name)
    // console.log('PRODUCTS_IN_CART: ', productsInCart)
    // const orderInfo = { name, productsInCart }
    const paypalRequest = await axios.post('/api/order/paypal', {
      productsInCart
    })
    console.log('PAYPAL_REQUEST: ', paypalRequest)
  } catch (error) {
    console.log('ERROR: ', error)
  }
}

const Checkout = ({ name, productsInCart }) => {
  return (
    <button
      className="btn btn-secondary p-1 mt-2"
      onClick={() => fetchPayPalCheckout(name, productsInCart)}
    >
      PayPal
    </button>
  )
}

export default Checkout
