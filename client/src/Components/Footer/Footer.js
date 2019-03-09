import React from 'react'
import { connect } from 'react-redux'
import FooterMenu from './FooterMenu'
import FooterTestimonials from './FooterTestimonials'

class Footer extends React.Component {
  state = {
    toggleTestimonials: false
  }

  render() {
    return (
      <footer
        id="container"
        className="container footer__container-shadow bg-light"
      >
        {/*
          <div className="text-center">
            <FooterTestimonials />
          </div>
        */}
        <FooterMenu />
        <div className="py-2" />
        <div className="text-center">
          Copyright &copy; {new Date().getFullYear()} Champion Productions
        </div>
        <div className="py-2" />
      </footer>
    )
  }
}

const mapState = ({ auth, product }) => ({ auth, product })

export default connect(mapState)(Footer)
