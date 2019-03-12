import React from 'react'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'
import { removeAllFromCart } from '../../../Redux/Actions/cartActions'
import store from '../../../Redux/store'

const CURRENCY = 'USD'

const fromUSDToCent = amount => amount * 100

const successPayment = data => {
  alert('Thank you! You should recieve an email with an order receipt.')
}

const errorPayment = data => {
  alert('Payment Error.')
}

const onToken = (
  amount,
  description,
  history,
  clearShipToInfoAfterPurchase
) => async (token, billingAndShipping) => {
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
      localStorage.removeItem('shippingId')
      clearShipToInfoAfterPurchase()
      store.dispatch(removeAllFromCart())
      successPayment(data)
      history.push('/')
    }
  } catch (error) {
    console.log('ERROR: ', error)
    errorPayment(error)
  }
}

const UseStripeCheckout = ({
  name,
  description,
  amount,
  disabled,
  history,
  clearShipToInfoAfterPurchase
}) => (
  <StripeCheckout
    disabled={disabled}
    shippingAddress
    billingAddress
    name={name}
    description={description}
    amount={fromUSDToCent(amount)}
    token={onToken(amount, description, history, clearShipToInfoAfterPurchase)}
    currency={CURRENCY}
    stripeKey={'pk_test_N5G46PWAuwD9vbalsOsx3ivw'}
    image="https://stripe.com/img/documentation/checkout/marketplace.png"
  />
)

export default UseStripeCheckout
