import React, { Component, lazy, Suspense } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { setCurrentUser, logoutUser } from './Redux/Actions/authActions'

// Authentication
import jwt_decode from 'jwt-decode'
import setAuthToken from './Utils/setAuthToken'

// Components
import MainLoader from './Components/Common/MainLoader/MainLoader'
import Navbar from './Components/Navbar/Navbar'
import Spacer from './Components/Spacer/Spacer'
import ScrollToTop from './Utils/ScrollToTop'
import Footer from './Components/Footer/Footer'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'

import 'normalize.css/normalize.css'
import './App.scss'

import store from './Redux/store'

// Pages
import Home from './Pages/Home/Home'
import NotFound from './Pages/404/404'
// import Store from './Pages/Store/Store'
const Store = lazy(() => import('./Pages/Store/Store'))
// import Cart from './Pages/Cart/Cart'
const Cart = lazy(() => import('./Pages/Cart/Cart'))
// import Checkout from './Pages/Checkout/Checkout'
const Checkout = lazy(() => import('./Pages/Checkout/Checkout'))
// import ContactUs from './Pages/ContactUs/ContactUs'
const ContactUs = lazy(() => import('./Pages/ContactUs/ContactUs'))
// const NotFound = lazy(() => import('./Pages/404/404'))

// Hidden /admin/login
// import AdminLogin from './Pages/AdminLogin/AdminLogin'
const AdminLogin = lazy(() => import('./Pages/AdminLogin/AdminLogin'))
// import AdminDashboard from './Pages/AdminDashboard/AdminDashboard'
const AdminDashboard = lazy(() =>
  import('./Pages/AdminDashboard/AdminDashboard')
)
// import AdminProducts from './Pages/AdminProducts/AdminProducts'
const AdminProducts = lazy(() => import('./Pages/AdminProducts/AdminProducts'))

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

              <Switch>
                <Route exact path="/" component={Home} />

                <Suspense fallback={<MainLoader />}>
                  <Route exact path="/store" render={() => <Store />} />

                  <Route exact path="/cart" render={() => <Cart />} />

                  <Route exact path="/contact" render={() => <ContactUs />} />

                  <Route exact path="/checkout" render={() => <Checkout />} />

                  <Route
                    exact
                    path="/admin/login"
                    render={() => <AdminLogin />}
                  />

                  <PrivateRoute
                    exact
                    path="/admin/dashboard"
                    render={() => <AdminDashboard />}
                  />

                  <PrivateRoute
                    exact
                    path="/admin/products"
                    render={() => <AdminProducts />}
                  />
                </Suspense>
                <Route path="*" component={NotFound} />
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
