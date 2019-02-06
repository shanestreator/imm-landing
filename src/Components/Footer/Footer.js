import React from 'react'

import './Footer.css'

export default function Footer() {
  return (
    <footer className="text-center container bg-light">
      <div className="py-5" />
      Copyright &copy; {new Date().getFullYear()} Champion Productions, LLC
    </footer>
  )
}
