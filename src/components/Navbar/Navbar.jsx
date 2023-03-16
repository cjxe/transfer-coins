import { useState } from 'react';
import NavbarBrand from '../Utils/Brand/Brand';
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
        className={
          isOpen
            ? 'z-10 flex w-full bg-white xs:fixed xs:h-full xs:flex-col xs:overflow-hidden xs:p-4 xs:shadow-none lg:sticky lg:top-0 lg:h-fit lg:flex-row lg:justify-between lg:p-6'
            : 'z-10 flex h-fit w-full bg-white shadow-sm xs:fixed xs:flex-col xs:overflow-hidden xs:p-4 lg:sticky lg:top-0 lg:flex-row lg:justify-between lg:p-6'
        }
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
