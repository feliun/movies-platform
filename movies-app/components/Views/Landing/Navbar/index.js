import React from 'react';
import './style.scss';

const Navbar = () => (
  <navbar id="navbar-main" className="sticky-top d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
    <h5 id="navbar-title" className="my-0 mr-md-auto font-weight-normal">The Movies Platform</h5>
    <nav className="my-2 my-md-0 mr-md-3">
      <a className="p-2 navbar-item" href="#features">Features</a>
      <a className="p-2 navbar-item" href="#timeline">Stack</a>
      <a className="p-2 navbar-item" href="#team">About</a>
      <a className="p-2 navbar-item" href="#footer">Contact</a>
    </nav>
  </navbar>
);

export default Navbar;
