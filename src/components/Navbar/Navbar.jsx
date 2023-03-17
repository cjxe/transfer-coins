import React, { useState } from 'react';
import clsx from 'clsx';
import NavbarBrand from '@/components/Utils/Brand/Brand';
import NavbarCollapse from './NavbarCollapse/NavbarCollapse';
import NavbarLink from './NavbarLink/NavbarLink';
import NavbarToggle from './NavbarToggle/NavbarToggle';
import { NavbarContext } from './NavbarContext/NavbarContext';

// TODO
// - [ ] logged in

function Navbar({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavbarContext.Provider value={[isOpen, setIsOpen]}>
      <div
        className={clsx(
          'z-10 flex w-full bg-white xs:fixed xs:flex-col xs:overflow-hidden xs:p-4 lg:sticky lg:top-0 lg:flex-row  lg:justify-between lg:p-6',
          isOpen ? 'xs:h-full xs:flex-col' : 'shadow-sm'
        )}
      >
        {children}
      </div>
    </NavbarContext.Provider>
  );
}

Navbar.Brand = NavbarBrand;
Navbar.Link = NavbarLink;
Navbar.Collapse = NavbarCollapse;
Navbar.Toggle = NavbarToggle;

export default Navbar;
