import React from 'react';
import FooterLink from '@/components/Footer/FooterLink/FooterLink';

function Footer({ children }) {
  return <div className="dark flex flex-col gap-4 bg-black px-4 py-16">{children}</div>;
}

Footer.Link = FooterLink;

export default Footer;
