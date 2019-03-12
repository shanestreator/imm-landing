import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div
      id="container"
      className="container cart__container-shadow min-vh-100 bg-light py-5"
    >
      <div className="container-md px-lg-4">
        <h1 className="display-4 text-center">404 Page Not Found</h1>
        <h5 className="mt-5 text-center">
          Page not found{' '}
          <Link
            to="/"
            className="base__hover-link-underline"
            style={{ color: '#be141b' }}
          >
            Click Here
          </Link>{' '}
          to go to the home page
        </h5>
      </div>
    </div>
  )
}

export default NotFound