import React from 'react';

import { Link } from "gatsby"
import Logo from "../../images/logo.png"
import { StyledFooter } from './index.styles'

const Footer = () => (
  <StyledFooter className="m-0 p-5 border-top bg-light w-100 d-flex justify-content-between">
    <Link to="/" className="d-flex align-items-center">
      <img  src={ Logo } alt="" />
      <p>HobbiEs</p>
    </Link>
    <div className="d-flex align-items-center">
      <Link to="/" className="px-5">Catalogue</Link>
      <Link to="/" className="px-5">About us</Link>
      <Link to="/" className="px-5">Contacts</Link>
      <Link to="/" className="px-5">Contacts</Link>
    </div>

  </StyledFooter>
);

export default Footer;
