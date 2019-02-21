const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const volleyball = require('volleyball')
const path = require('path')

const app = express()

// Logging Middleware
app.use(volleyball)

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// DB Config
const db = require('./config/keys').mongoURI

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

// Use Routes
const admin = require('./routes/admin')
const product = require('./routes/api/product')
const payment = require('./routes/api/payment')
const stripe = require('./routes/api/order/stripe')
const paypal = require('./routes/api/order/paypal')

app.use('/admin', admin)
app.use('/api/products', product)
app.use('/api/payment', payment)
app.use('/api/order/stripe', stripe)
app.use('/api/order/paypal', paypal)

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.use((err, req, res, next) => {
  // console.log('ERROR: ', err.res)
  return res.status(400).send(err.res)
})

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on port ${port}...`))

// mongoConnect(client => {
//   console.log(client)
//   app.listen(port)
// })
