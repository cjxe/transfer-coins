import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

function FooterLink({ children, href }) {
  return (
    <Link
      className="w-fit text-base font-medium text-zinc-100 underline-offset-4 hover:underline"
      href={href}
      scroll={false}
    >
      {children}
    </Link>
  );
}

FooterLink.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default FooterLink;
