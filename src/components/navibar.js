import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import PropTypes from "prop-types"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function NaviBar({ siteTitle }) {
  return (
    <Navbar expand="md" className="navbar-transparent">
      <Navbar.Brand href="#home">{siteTitle}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" as="ul">
          <Nav.Item as="li">
            <a className='nav-link' href="https://github.com/jacksondieter">
              <FaGithub />
              GitHub
            </a>
          </Nav.Item>
          <Nav.Item as="li">
            <a className='nav-link' href="https://www.linkedin.com/in/jacksondieter/">
              <FaLinkedin />
              Linkedin
            </a>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

NaviBar.propTypes = {
  siteTitle: PropTypes.string,
}

NaviBar.defaultProps = {
  siteTitle: ``,
}
