import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { NavbarContext } from '@/components/Navbar/NavbarContext/NavbarContext';

function NavbarLink({ children, href }) {
  const [isOpen, setIsOpen] = useContext(NavbarContext);

  return (
    <Link
      className="font-medium text-zinc-900 dark:text-zinc-100 xs:rounded-lg xs:p-4 xs:text-xl xs:hover:bg-zinc-100 xs:focus:ring-zinc-300 xs:focus:ring dark:xs:hover:bg-zinc-700 dark:xs:focus:ring-zinc-600 lg:rounded-none lg:p-0 lg:text-base lg:decoration-1 lg:underline-offset-4 lg:hover:bg-transparent lg:hover:underline lg:focus:ring-0 dark:lg:hover:bg-transparent"
      href={href}
      onClick={() => {
        setIsOpen(false);
        document.body.style.overflow = 'auto';
      }}
      scroll={false}
    >
      {children}
    </Link>
  );
}

NavbarLink.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default NavbarLink;
