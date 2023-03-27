import React, { useEffect } from 'react';
import { Navbar, Button, ButtonWithIcon } from '@/components/core';
import { useTheme } from 'next-themes';
import { HiMoon, HiSun } from 'react-icons/hi';
import { BrandLogo } from '@/assets/illustrations';
import { VerticalSeparator } from '@/assets/other';
import Link from 'next/link';

function NavbarTemplate() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    document.body.style.overflow = 'auto';
  }, []);

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
            Icon={currentTheme === 'dark' ? HiSun : HiMoon}
            aria-label="dark mode"
            className="lg:rounded-lg lg:p-1.5"
          />
          <Link href="/auth/login" passHref>
            <Button variant="secondary" size="lg" className="w-full lg:px-3 lg:py-2 lg:text-sm">
              Log in
            </Button>
          </Link>
          <Link href="/auth/signup" passHref>
            <Button variant="primary" size="lg" className="w-full lg:px-3 lg:py-2 lg:text-sm">
              Join now
            </Button>
          </Link>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarTemplate;
