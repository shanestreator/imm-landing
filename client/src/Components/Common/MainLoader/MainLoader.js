import React from 'react'
import spinner from './spinner.gif'

export default function MainLoader() {
  return (
    <div
      id="container"
      className="container home__container-shadow py-5 px-md-5 bg-light"
    >
      <div className="container-md px-md-4">
        <img
          src={spinner}
          style={{ width: '200px', margin: 'auto', display: 'block' }}
          alt="Loading..."
        />
      </div>
    </div>
  )
}
