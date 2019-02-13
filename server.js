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

app.use('/admin', admin)
app.use('/api/product', product)

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on port ${port}...`))

// mongoConnect(client => {
//   console.log(client)
//   app.listen(port)
// })
