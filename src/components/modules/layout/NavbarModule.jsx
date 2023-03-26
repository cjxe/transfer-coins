import React from 'react';
import { Navbar, Button, ButtonWithIcon } from '@/components/core';
import { useTheme } from 'next-themes';
import { HiMoon, HiSun } from 'react-icons/hi';
import { BrandLogo } from '@/assets/illustrations';
import { VerticalSeparator } from '@/assets/other';

function NavbarModule() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <Navbar>
      <div className="flex flex-row justify-between">
        <Navbar.Brand BrandIcon={BrandLogo} brandName="Transfer Coins" size="sm" takesToHomePage />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <nav className="flex xs:flex-col xs:gap-4 lg:flex-row lg:gap-8">
          <Navbar.Link href="/#features">Features</Navbar.Link>
          <Navbar.Link href="/#pricing">Pricing</Navbar.Link>
          <Navbar.Link href="/help#faq">FAQ</Navbar.Link>
          <Navbar.Link href="/help#contact">Contact</Navbar.Link>
        </nav>
        <div className="flex gap-4 xs:flex-col lg:flex-row lg:items-center">
          <VerticalSeparator className="stroke-zinc-200 dark:stroke-zinc-700 xs:hidden lg:block" />
          <ButtonWithIcon
            onClick={() => {
              return currentTheme === 'dark' ? setTheme('light') : setTheme('dark');
            }}
            variant="secondary"
            size="lg"
            Icon={currentTheme === 'dark' ? HiMoon : HiSun}
            aria-label="dark mode"
            className="lg:rounded-lg lg:p-1.5"
          />
          <Button variant="secondary" size="lg" className="lg:px-3 lg:py-2 lg:text-sm">
            Log in
          </Button>
          <Button variant="primary" size="lg" className="lg:px-3 lg:py-2 lg:text-sm">
            Join now
          </Button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarModule;
