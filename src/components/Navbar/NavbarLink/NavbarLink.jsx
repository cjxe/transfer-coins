import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

function NavbarLink({ children, to }) {
  return (
    <Link
      className="font-medium text-gray-900 xs:rounded-lg xs:p-4 xs:text-xl xs:hover:bg-gray-100 xs:focus:ring xs:focus:ring-gray-300 lg:rounded-none lg:p-0 lg:text-base lg:decoration-1 lg:underline-offset-4 lg:hover:bg-transparent lg:hover:underline lg:focus:ring-0"
      href={to}
    >
      {children}
    </Link>
  );
}

NavbarLink.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default NavbarLink;
