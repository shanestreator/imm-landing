import React, { Component } from 'react'

export default class Cart extends Component {
  render() {
    return (
      <div className="container pt-5 bg-light text-center">
        <h1>Boston Red Sox Hat</h1>
        <h2>Buy For $25</h2>
        <form action="/pay" method="post">
          <input type="submit" value="Buy" />
        </form>
      </div>
    )
  }
}
