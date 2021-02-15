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
            <Nav.Link to="https://github.com/jacksondieter">
              <FaGithub />
              GitHub
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link to="https://www.linkedin.com/in/jacksondieter/">
              <FaLinkedin />
              Linkedin
            </Nav.Link>
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
