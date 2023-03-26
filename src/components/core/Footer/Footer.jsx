import React from 'react';
import FooterLink from '@/components/core/Footer/FooterLink/FooterLink';

function Footer({ children }) {
  return (
    <div className="dark flex w-full flex-col items-center gap-4 bg-black px-4 py-16">
      <div className="flex w-full max-w-5xl flex-col">{children}</div>
    </div>
  );
}

Footer.Link = FooterLink;

export default Footer;
