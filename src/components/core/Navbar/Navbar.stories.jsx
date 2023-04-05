import { HiMoon } from 'react-icons/hi';
import { BrandLogo } from '@/assets/illustrations';
import { Navbar, Button, ButtonWithIcon, Divider } from '..';

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
          <nav className="flex xs:flex-col xs:gap-4 lg:flex-row lg:gap-8">
            <Navbar.Link href="/#features">Features</Navbar.Link>
            <Navbar.Link href="/#pricing">Pricing</Navbar.Link>
            <Navbar.Link href="/help#faq">FAQ</Navbar.Link>
            <Navbar.Link href="/help#contact">Contact</Navbar.Link>
          </nav>
          <div className="flex gap-4 xs:flex-col lg:flex-row lg:items-center">
            <Divider orientation="vertical" className="h-5 xs:hidden lg:block" />
            <ButtonWithIcon
              variant="secondary"
              size="lg"
              Icon={HiMoon}
              aria-label="dark mode"
              className="lg:rounded-lg lg:p-1.5"
            />
            {/* // ! wrap the buttons in <Link> in production */}
            <a href="/auth/login">
              <Button variant="secondary" size="lg" className="w-full lg:px-3 lg:py-2 lg:text-sm">
                Log in
              </Button>
            </a>
            <a href="/auth/signup">
              <Button variant="primary" size="lg" className="w-full lg:px-3 lg:py-2 lg:text-sm">
                Join now
              </Button>
            </a>
          </div>
        </Navbar.Collapse>
      </>
    ),
  },
};
