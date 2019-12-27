import React from 'react'
import PropTypes from 'prop-types'
//import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Footer from "./Footer"
import Nav from "./Nav"

//import Header from './header'
import '../css/main.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        {/* <Helmet title={data.site.siteMetadata.title} />
        <Header siteTitle={data.site.siteMetadata.title} /> */}
        <Nav/>
        <div className='page-wrapper'>
          {children}
        </div>
        <Footer/>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout

