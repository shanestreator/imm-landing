import React from 'react'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'
import STRIPE_PUBLISHABLE from '../../../Config/stripe'
import { removeAllFromCart } from '../../../Redux/Actions/cartActions'
import store from '../../../Redux/store'

const CURRENCY = 'USD'

const fromUSDToCent = amount => amount * 100

const successPayment = data => {
  alert(
    'Payment Successful. You should recieve an email with your order details.'
  )
}

const errorPayment = data => {
  alert('Payment Error.')
}

const onToken = (amount, description) => async (token, billingAndShipping) => {
  try {
    const productsInCart = store.getState().cart.productsInCart
    const { email, client_ip } = token
    const order = {
      email,
      client_ip,
      billingAndShipping,
      productsInCart,
      description,
      source: token.id,
      currency: CURRENCY
    }
    const data = await axios.post('/api/order/stripe', order)

    if (data.status === 200) {
      store.dispatch(removeAllFromCart())
      successPayment(data)
    }
  } catch (error) {
    console.log('ERROR: ', error)
    errorPayment(error)
  }
}

const Checkout = ({ name, description, amount, disabled }) => (
  <StripeCheckout
    disabled={disabled}
    shippingAddress
    billingAddress
    name={name}
    description={description}
    amount={fromUSDToCent(amount)}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
    image="https://stripe.com/img/documentation/checkout/marketplace.png"
  />
)

export default Checkout
