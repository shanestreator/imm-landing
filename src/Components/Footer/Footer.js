import React from 'react'

import './Footer.css'

export default function Footer() {
  return (
    <footer className="text-center">
      Copyright &copy; {new Date().getFullYear()} Champion Productions, LLC
    </footer>
  )
}
