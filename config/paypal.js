// const configurePaypal = require('paypal-rest-sdk')

const PAYPAL_SECRET_KEY =
  process.env.NODE_ENV === 'production'
    ? 'sk_live_MY_SECRET_KEY'
    : {
        environment: braintree.Environment.Sandbox,
        merchantId: 'useYourMerchantId',
        publicKey: 'useYourPublicKey',
        privateKey: 'useYourPrivateKey'
      }

// const paypal = configurePaypal.configure(PAYPAL_SECRET_KEY)

module.exports = PAYPAL_SECRET_KEY
