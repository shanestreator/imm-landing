import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { setCurrentUser, logoutUser } from './Redux/Actions/authActions'

// Authentication
import jwt_decode from 'jwt-decode'
import setAuthToken from './Utils/setAuthToken'

// Pages
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Store from './Pages/Store/Store'
import Cart from './Pages/Cart/Cart'
import ContactUs from './Pages/ContactUs/ContactUs'
// Hidden /admin/login
import AdminLogin from './Pages/AdminLogin/AdminLogin'
import AdminProducts from './Pages/AdminProducts/AdminProducts'

// Components
import Navbar from './Components/Navbar/Navbar'
import Spacer from './Components/Spacer/Spacer'
import ScrollToTop from './Utils/ScrollToTop'
import Footer from './Components/Footer/Footer'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'

import 'normalize.css/normalize.css'
import './App.scss'

import store from './Redux/store'

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken)

  const decoded = jwt_decode(localStorage.jwtToken) // Decode token to get user info and exp

  store.dispatch(setCurrentUser(decoded)) // Set user and isAuthenticated

  const currentTime = Date.now() / 1000 // Check for expired token
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser())

    // store.dispatch(clearCurrentProfile()) // Clear current profile

    window.location.href = '/admin/login' // Redirect to login
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ScrollToTop>
            <div>
              <Navbar />
              <Spacer />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/store" component={Store} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/contact" component={ContactUs} />
                <Route exact path="/admin/login" component={AdminLogin} />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/admin/products"
                  component={AdminProducts}
                />
              </Switch>
              <Footer />
            </div>
          </ScrollToTop>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App

// <Switch>
// <PrivateRoute
//   exact
//   path="/admin/login"
//   component={AdminLogin}
// />
// </Switch>
