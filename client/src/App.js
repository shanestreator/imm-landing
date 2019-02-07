import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Pages
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Store from './Pages/Store/Store'
import Cart from './Pages/Cart/Cart'
import ContactUs from './Pages/ContactUs/ContactUs'

// Components
import Navbar from './Components/Navbar/Navbar'
import Spacer from './Components/Spacer/Spacer'
import ScrollToTop from './Utils/ScrollToTop'
import Footer from './Components/Footer/Footer'

import './App.css'

import store from './Redux/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ScrollToTop>
            <div id="wrapper" className="container">
              <Navbar />
              <Spacer />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/store" component={Store} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/contact" component={ContactUs} />
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
