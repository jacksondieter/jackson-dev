import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Newsletter from "../components/newsletter"
import NaviBar from "../components/navibar"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return(
  <Layout>
    <SEO title="Jackson dev" />
    <NaviBar siteTitle={data.site.siteMetadata?.title || `Title`} />
    <div className="main">      
      <div className="container">
        <h1 className="logo cursive">Code, eat, sleep, repeat</h1>
        <div className="content">
          <h4 className="motto">Really awesome apps coming soon.</h4>
          <Newsletter />
        </div>
      </div>
    </div>
  </Layout>
)}

export default IndexPage

