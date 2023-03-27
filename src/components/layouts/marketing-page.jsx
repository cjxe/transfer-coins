import React from 'react';
import { NavbarTemplate, FooterTemplate } from '../templates/common';

function MarketingPageLayout({ children }) {
  return (
    <>
      <NavbarTemplate />
      <main className="pt-16 lg:pt-0 [&>*:nth-child(even)]:bg-zinc-100 dark:[&>*:nth-child(even)]:bg-zinc-900">
        {children}
      </main>
      <FooterTemplate />
    </>
  );
}

export default MarketingPageLayout;
