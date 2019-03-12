// Production
module.exports = {
  mongoURI: process.env.mongoURI,
  secretOrKey: process.env.secretOrKey,
  FRONTEND_URLS: 'https://www.yourdomain.com',
  // Gmail
  GMAIL_USER: process.env.GMAIL_USER,
  GMAIL_PASS: process.env.GMAIL_PASS,
  // Paypal
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,
  PAYPAL_SECRET: process.env.PAYPAL_SECRET,
  // Stripe
  STRIPE_PUBLISHABLE: process.env.STRIPE_PUBLISHABLE,
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY
}
