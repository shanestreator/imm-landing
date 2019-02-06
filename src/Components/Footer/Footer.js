import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.css'

export default function Footer() {
  return (
    <footer className="text-center container bg-light">
      <div className="py-5" />
      <div className="row">
        <div className="col">
          <Link
            style={{ textDecoration: 'none' }}
            className="text-dark"
            to="/home"
          >
            Home
          </Link>
        </div>
        <div className="col">
          <Link
            style={{ textDecoration: 'none' }}
            className="text-dark"
            to="/about"
          >
            About
          </Link>
        </div>
        <div className="col">
          <Link
            style={{ textDecoration: 'none' }}
            className="text-dark"
            to="/about"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <div className="py-2" />
      Copyright &copy; {new Date().getFullYear()} Champion Productions, LLC
      <div className="py-2" />
    </footer>
  )
}
