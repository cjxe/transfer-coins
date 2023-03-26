import React from 'react';
import { Footer, Brand, HR, ButtonWithIcon } from '@/components/core';
import { BsDiscord, BsTwitter } from 'react-icons/bs';
import { BrandLogo } from '@/assets/illustrations';

function FooterModule() {
  return (
    <Footer>
      <div className="flex justify-between xs:flex-col xs:gap-4 lg:flex-row lg:gap-0">
        <Brand size="sm" BrandIcon={BrandLogo} brandName="Transfer Coins" takesToHomePage />
        <hr className="my-4 h-[1px] border-0 bg-zinc-700 xs:inline-block lg:hidden" />
        <nav className="flex gap-10 xs:flex-col lg:flex-row">
          <Footer.Link href="/help#faq">FAQ</Footer.Link>
          <Footer.Link href="/help#contact">Contact</Footer.Link>
          <Footer.Link href="/legal/privacy-policy">Privacy Policy</Footer.Link>
          <Footer.Link href="/legal/terms-of-servce">Terms of Service</Footer.Link>
        </nav>
      </div>
      <HR />
      <div className="flex justify-between">
        <p className="text-base font-normal text-zinc-400 xs:hidden lg:inline-block">
          © Transfer Coins. All rights reserved.
        </p>
        <div className="flex gap-4">
          <ButtonWithIcon
            variant="secondary"
            size="base"
            Icon={BsDiscord}
            aria-label="discord server"
          />
          <ButtonWithIcon
            variant="secondary"
            size="base"
            Icon={BsTwitter}
            aria-label="twitter account"
          />
        </div>
      </div>
    </Footer>
  );
}

export default FooterModule;
