import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Pages
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Store from './Pages/Store/Store'

// Components
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id="wrapper" className="container">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/store" component={Store} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
