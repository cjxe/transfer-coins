import React from 'react';
import NavbarBrand from '../Utils/Brand/Brand';
import NavbarLink from './NavbarLink/NavbarLink';

// TODO
// - [ ] responsive
// - [ ] logged in

function Navbar({ children }) {
  return <div className="flex flex-row items-center justify-between bg-white p-6">{children}</div>;
}

Navbar.Brand = NavbarBrand;
Navbar.Link = NavbarLink;

export default Navbar;
