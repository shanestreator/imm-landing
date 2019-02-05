import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Pages
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Store from './Pages/Store/Store'

// Components
import Navbar from './Components/Navbar/Navbar'
import ScrollToTop from './Utils/ScrollToTop'
import Footer from './Components/Footer/Footer'

import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <div id="wrapper" className="container">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/store" component={Store} />
            </Switch>
            <Footer />
          </div>
        </ScrollToTop>
      </BrowserRouter>
    )
  }
}

export default App
