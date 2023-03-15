import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

function NavbarLink({ children, to }) {
  return (
    <Link
      className="text-base font-medium text-gray-900 decoration-1 underline-offset-4 hover:underline"
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
