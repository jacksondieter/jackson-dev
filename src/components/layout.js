/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import "bootstrap/dist/css/bootstrap.min.css"

import Header from "./header"

import Footer from "./footer"

const Layout = ({ children }) => (
    <>
      <Header/>
      <main>{children}</main>
      <Footer />
    </>
  )

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
