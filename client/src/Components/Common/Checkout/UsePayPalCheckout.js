import React from 'react'
import axios from 'axios'

const fetchPayPalCheckout = async (name, productsInCart) => {
  try {
    const paypalRequest = await axios.post('/api/order/paypal', {
      productsInCart
    })
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
