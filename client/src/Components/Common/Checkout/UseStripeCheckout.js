import React from 'react'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'

import STRIPE_PUBLISHABLE from '../../../Config/stripe'
import PAYMENT_SERVER_URL from '../../../Config/server'

import { removeAllFromCart } from '../../../Redux/Actions/cartActions'

import store from '../../../Redux/store'

// console.log('STORE: ', store.getState().cart.productsInCart)

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
    const { email, card, client_ip } = token
    const order = {
      email,
      client_ip,
      billingAndShipping,
      productsInCart,
      description,
      source: token.id,
      currency: CURRENCY
      // amount: fromUSDToCent(amount)
    }
    const data = await axios.post('/api/order/stripe', order)
    // console.log('RES: ', res)

    // const data = await axios.post(PAYMENT_SERVER_URL, {
    //   description,
    //   source: token.id,
    //   currency: CURRENCY,
    //   amount: fromUSDToCent(amount)
    // })
    // console.log('TOKEN: ', token)
    // console.log('SHIP: ', billingAndShipping)

    if (data.status === 200) {
      store.dispatch(removeAllFromCart())
      successPayment(data)
    }
  } catch (error) {
    console.log('ERROR: ', error)
    errorPayment(error)
  }
}

const Checkout = ({ name, description, amount }) => (
  <StripeCheckout
    shippingAddress
    billingAddress
    name={name}
    description={description}
    amount={fromUSDToCent(amount)}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
  />
)

export default Checkout
