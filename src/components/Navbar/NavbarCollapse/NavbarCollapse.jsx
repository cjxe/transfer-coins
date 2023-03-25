import classNames from 'classnames';
import React, { useContext } from 'react';
import { NavbarContext } from '@/components/Navbar/NavbarContext/NavbarContext';

function NavbarCollapse({ children }) {
  const [isOpen] = useContext(NavbarContext);

  return (
    <div
      className={classNames(
        'h-full grow transition-opacity duration-300 ease-in xs:mt-8 xs:flex-col xs:justify-between xs:p-0 lg:mt-0 lg:flex lg:flex-row lg:items-center lg:justify-end lg:gap-8 lg:p-0',
        isOpen ? 'flex opacity-100' : 'xs:absolute xs:mt-96 xs:opacity-10 lg:static lg:opacity-100'
      )}
    >
      {children}
    </div>
  );
}

export default NavbarCollapse;
