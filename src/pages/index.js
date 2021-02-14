import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"
import Newsletter from "../components/newsletter"
import { Video } from "../components/video"

const IndexPage = () => (
  <Layout>
    <SEO title="Jackson dev" />
    <div className="overlay"></div>
    <Video />

    <div className="masthead">
      <div className="masthead-bg"></div>
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-12 my-auto">
            <div className="masthead-content text-white py-5 py-md-0">
              <h1 className="mb-3">Coming Soon!</h1>
              <p className="mb-5">
                We're working hard to finish the development of this site!
                <br/> Sign up for updates using the
                form below!!
              </p>
              <Newsletter />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="social-icons">
      <ul className="list-unstyled text-center mb-0">
        <li className="list-unstyled-item">
          <a href="#">
            <FaTwitter />
          </a>
        </li>
        <li className="list-unstyled-item">
          <a href="#">
            <FaLinkedin />
          </a>
        </li>
        <li className="list-unstyled-item">
          <a href="#">
            <FaGithub />
          </a>
        </li>
      </ul>
    </div>
  </Layout>
)

export default IndexPage
