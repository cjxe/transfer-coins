import { HiMoon } from 'react-icons/hi';
import { BrandLogo } from '@/assets/illustrations';
import { VerticalSeparator } from '@/assets/other';
import Navbar from '@/components/Navbar/Navbar';
import Button from '@/components/Buttons/Button';
import ButtonWithIcon from '@/components/Buttons/ButtonWithIcon';

export default {
  title: 'Components/Navigation/Navbar',
  component: Navbar,
  tags: ['autodocs'],
};

export const NotSignedIn = {
  args: {
    children: (
      <>
        <div className="flex flex-row justify-between">
          <Navbar.Brand BrandIcon={BrandLogo} brandName="Transfer Coins" size="sm" />
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
            <ButtonWithIcon variant="secondary" size="base" Icon={HiMoon} aria-label="dark mode" />
            <Button variant="secondary" size="base" className="lg:px-3 lg:py-2 lg:text-sm">
              Log in
            </Button>
            <Button variant="primary" size="base" className="lg:px-3 lg:py-2 lg:text-sm">
              Join now
            </Button>
          </div>
        </Navbar.Collapse>
      </>
    ),
  },
};
