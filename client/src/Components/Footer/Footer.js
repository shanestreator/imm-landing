import React from 'react'
import { connect } from 'react-redux'
import FooterMenu from './FooterMenu'

class Footer extends React.Component {
  render() {
    return (
      <footer id="container" className="container bg-light">
        <div className="py-5" />
        <div className="text-center mb-5">TODO: CAROUSEL OF TESTIMONIALS</div>
        <FooterMenu />
        <div className="py-2" />
        <div className="text-center mt-5">
          Copyright &copy; {new Date().getFullYear()} Champion Productions
        </div>
        <div className="py-2" />
      </footer>
    )
  }
}

const mapState = ({ auth }) => ({ auth })

export default connect(mapState)(Footer)
