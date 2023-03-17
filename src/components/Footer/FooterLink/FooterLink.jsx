import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

function FooterLink({ children, to }) {
  return (
    <Link
      className="w-fit text-base font-medium text-gray-100 underline-offset-4 hover:underline"
      href={to}
    >
      {children}
    </Link>
  );
}

FooterLink.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default FooterLink;
