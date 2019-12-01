
import React from "react"
import { Link } from "gatsby"
import Logo from "../../images/logo.png"
import { StyledHeader } from "./index.styles" 

import PropTypes from "prop-types"

const Header = ({ siteTitle }) =>  (
  <>
  <StyledHeader className="row">
    <div className="d-flex align-items-center col-xs-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 pr-0 justify-content-between">
      <Link to="/" className="navbar-brand d-flex align-items-center">
        <img src={ Logo } alt="hobbies logo" />
        <p className="">HobbiEs</p>
      </Link>
    <div className="d-flex centered-nav">
      <Link className="nav-link" to="/">Catalog<span className="sr-only">(current)</span></Link>

      <Link className="nav-link" to="/">About us</Link>

      <Link className="nav-link" to="/">Help</Link>

      <Link className="nav-link" to="/">Contacts</Link>
    </div>

    </div>

    <div className="d-flex align-items-center end-nav col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
      <Link className="nav-link" to="/">
        <button className="signup-btn">Sign Up</button>
      </Link>
      <Link className="nav-link" to="/">
        <button className="signin-btn">Sign In</button>
      </Link>
    </div>

  </StyledHeader>

  </>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
