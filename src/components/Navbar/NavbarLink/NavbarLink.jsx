import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

function NavbarLink({ children, href }) {
  return (
    <Link
      className="font-medium text-gray-900 dark:text-gray-100 xs:rounded-lg xs:p-4 xs:text-xl xs:hover:bg-gray-100 xs:focus:ring-gray-300 xs:focus:ring dark:xs:hover:bg-gray-700 dark:xs:focus:ring-gray-600 lg:rounded-none lg:p-0 lg:text-base lg:decoration-1 lg:underline-offset-4 lg:hover:bg-transparent lg:hover:underline lg:focus:ring-0 dark:lg:hover:bg-transparent"
      href={href}
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
