import React from 'react';
import { NavbarTemplate } from '@/components/templates/common';

export function AuthPageLayout({ children }) {
  return (
    <>
      <NavbarTemplate />
      <main className="flex min-h-screen justify-center bg-zinc-100 pt-16 dark:bg-zinc-900 lg:pb-40 lg:pt-0">
        {children}
      </main>
    </>
  );
}

export default AuthPageLayout;
