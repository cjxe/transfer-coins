import React, { useContext } from 'react';
import { NavbarContext } from '../NavbarContext/NavbarContext';

function NavbarCollapse({ children }) {
  const [isOpen] = useContext(NavbarContext);

  return (
    <div
      className={
        isOpen
          ? 'flex grow xs:mt-8 xs:flex-col xs:justify-between xs:p-0 lg:mt-0 lg:flex-row lg:items-center lg:justify-end lg:gap-8 lg:p-0'
          : 'grow xs:mt-8 xs:hidden xs:flex-col xs:justify-between xs:p-0 lg:mt-0 lg:flex lg:flex-row lg:items-center lg:justify-end lg:gap-8 lg:p-0'
      }
    >
      {children}
    </div>
  );
}

export default NavbarCollapse;
