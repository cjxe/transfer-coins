import React, { useState } from 'react';
import clsx from 'clsx';
import NavbarBrand from '@/components/Utils/Brand/Brand';
import NavbarCollapse from '@/components/Navbar/NavbarCollapse/NavbarCollapse';
import NavbarLink from '@/components/Navbar/NavbarLink/NavbarLink';
import NavbarToggle from '@/components/Navbar/NavbarToggle/NavbarToggle';
import { NavbarContext } from '@/components/Navbar/NavbarContext/NavbarContext';

// TODO
// - [ ] logged in

function Navbar({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavbarContext.Provider value={[isOpen, setIsOpen]}>
      <div
        className={clsx(
          'z-10 flex w-full bg-white dark:bg-neutral-900 xs:fixed xs:flex-col xs:overflow-hidden xs:p-4 lg:sticky lg:top-0 lg:flex-row lg:justify-center lg:p-6',
          isOpen ? 'xs:h-full xs:flex-col' : 'shadow-sm dark:shadow-gray-700'
        )}
      >
        <div className="flex w-full max-w-5xl xs:h-full xs:flex-col lg:flex-row">{children}</div>
      </div>
    </NavbarContext.Provider>
  );
}

Navbar.Brand = NavbarBrand;
Navbar.Link = NavbarLink;
Navbar.Collapse = NavbarCollapse;
Navbar.Toggle = NavbarToggle;

export default Navbar;
