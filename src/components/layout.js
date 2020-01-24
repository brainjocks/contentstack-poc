import React from 'react'
import PropTypes from 'prop-types'
import Footer from './footer'
import Header from './nav'

const Layout = props => {
  return (
    <div>
      <Header />
      <div className="page-wrapper">{props.children}</div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
