// const configurePaypal = require('paypal-rest-sdk')

const PAYPAL_SECRET_KEY =
  process.env.NODE_ENV === 'production'
    ? 'sk_live_MY_SECRET_KEY'
    : {
        'mode': 'sandbox', // sandebox or live
        'client_id':
          'AbOnf4RmtcLWbIxu3BdfTilVSGI9-lGl2Z3dwc91fMvy0RulFBeSTV2sXSsZCDa3Alny5PmHIkIqQ4c8',
        'client_secret':
          'ECyg9oTePJ8_HjQvrAu82q9cBFG7-mqZOCW1DVPUUkT1Bkw42tQSzE8yuSy0t0MqnJ53m5CcgZLJgCG5'
      }

// const paypal = configurePaypal.configure(PAYPAL_SECRET_KEY)

module.exports = PAYPAL_SECRET_KEY