import React from 'react';
import Head from 'next/head';
import { useTheme } from 'next-themes';
import Navbar from '@/components/Navbar/Navbar';
import { VerticalSeparator } from '@/assets/other';
import { BrandLogo } from '@/assets/illustrations';
import ButtonWithIcon from '@/components/Buttons/ButtonWithIcon';
import Button from '@/components/Buttons/Button';
import Footer from '@/components/Footer/Footer';
import Brand from '@/components/Utils/Brand/Brand';
import HR from '@/components/Utils/HR/HR';
import { HiMoon, HiSun } from 'react-icons/hi';
import { BsDiscord, BsTwitter } from 'react-icons/bs';
import SectionContainer from '@/components/SectionContainer/SectionContainer';
import Accordion from '@/components/Accordion/Accordion';
import TextInput from '@/components/TextInput/TextInput';
import TextArea from '@/components/TextArea/TextArea';

function Help() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div>
      <Head>
        <title>Transfer Coins - Help</title>
        <meta name="description" content="Transfer Coin's help page" />
        <meta
          name="keywords"
          content="transfer, coins, help, faq, contact, us, email, twitter, discord"
        />
      </Head>
      <Navbar>
        <div className="flex flex-row justify-between">
          <Navbar.Brand
            BrandIcon={BrandLogo}
            brandName="Transfer Coins"
            size="sm"
            takesToHomePage
          />
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <div className="flex xs:flex-col xs:gap-4 lg:flex-row lg:gap-8">
            <Navbar.Link href="/#features">Features</Navbar.Link>
            <Navbar.Link href="/#pricing">Pricing</Navbar.Link>
            <Navbar.Link href="/help#faq">FAQ</Navbar.Link>
            <Navbar.Link href="/help#contact">Contact</Navbar.Link>
          </div>
          <div className="flex gap-4 xs:flex-col lg:flex-row lg:items-center">
            <VerticalSeparator className="stroke-zinc-200 dark:stroke-zinc-700 xs:hidden lg:block" />
            <ButtonWithIcon
              onClick={() => {
                return currentTheme === 'dark' ? setTheme('light') : setTheme('dark');
              }}
              variant="secondary"
              size="base"
              Icon={currentTheme === 'dark' ? HiMoon : HiSun}
              aria-label="dark mode"
            />
            <Button variant="secondary" size="base" className="lg:px-3 lg:py-2 lg:text-sm">
              Log in
            </Button>
            <Button variant="primary" size="base" className="lg:px-3 lg:py-2 lg:text-sm">
              Join now
            </Button>
          </div>
        </Navbar.Collapse>
      </Navbar>
      <div className="[&>*:nth-child(even)]:bg-zinc-50 dark:[&>*:nth-child(even)]:bg-zinc-900">
        <SectionContainer headingText="Frequently asked questions" sectionId="faq">
          <Accordion>
            <Accordion.Item>
              <Accordion.Heading>What is &quot;Transfer Coins&quot;?</Accordion.Heading>
              <Accordion.Description>
                Transfer Coins is a web application that helps the sender to easily navigate through
                the cryptocurrencies (i.e., coins) that the receiver accepts. We provide this by
                allowing the receiver to customise their page and donation settings. We also provide
                additional solutions such as sending and receiving messages, allowing the receiver
                to share a QR code where they accept a specific coin and a specific amount.
              </Accordion.Description>
            </Accordion.Item>

            <Accordion.Item>
              <Accordion.Heading>Why is it free?</Accordion.Heading>
              <Accordion.Description>
                It does not cost much to have many users that use the Free plan. We also have enough
                users who are opted into the Creative plan and Partner plan.
              </Accordion.Description>
            </Accordion.Item>
          </Accordion>
        </SectionContainer>
        <SectionContainer headingText="Contact us" sectionId="contact">
          <div className="flex w-full max-w-2xl flex-col gap-8">
            <TextInput
              id="email-address"
              label="Your email address"
              placeholder="Enter your email address"
            />
            <TextInput
              id="email-subject"
              label="Subject"
              placeholder="Explain your issue in a few words"
            />
            <TextArea
              id="email-content"
              label="Your message"
              placeholder="Explain your issue in detail"
              rows={8}
            />
            <Button>Send message</Button>
            <p className="text-zinc-500 dark:text-zinc-400">info@transfercoins.com</p>
          </div>
        </SectionContainer>
      </div>
      <Footer>
        <div className="flex justify-between xs:flex-col xs:gap-4 lg:flex-row lg:gap-0">
          <Brand size="sm" BrandIcon={BrandLogo} brandName="Transfer Coins" takesToHomePage />
          <hr className="my-4 h-[1px] border-0 bg-zinc-700 xs:inline-block lg:hidden" />
          <div className="flex gap-10 xs:flex-col lg:flex-row">
            <Footer.Link href="/help#faq">FAQ</Footer.Link>
            <Footer.Link href="/help#contact">Contact</Footer.Link>
            <Footer.Link href="/legal/privacy-policy">Privacy Policy</Footer.Link>
            <Footer.Link href="/legal/terms-of-servce">Terms of Service</Footer.Link>
          </div>
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
    </div>
  );
}

export default Help;
