import { HiMoon } from 'react-icons/hi';
import { BrandLogo } from '@/assets/illustrations';
import { VerticalSeparator } from '@/assets/other';
import Navbar from './Navbar';
import Button from '../Buttons/Button';
import ButtonWithIcon from '../Buttons/ButtonWithIcon';

export default {
  title: 'Components/Navbar',
  component: Navbar,
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
            <Navbar.Link to="#features">Features</Navbar.Link>
            <Navbar.Link to="#pricing">Pricing</Navbar.Link>
            <Navbar.Link to="#faq">FAQ</Navbar.Link>
            <Navbar.Link to="#contact">Contact</Navbar.Link>
          </div>
          <div className="flex gap-4 xs:flex-col lg:flex-row lg:items-center">
            <VerticalSeparator className="xs:hidden lg:block" />
            <ButtonWithIcon variant="secondary" size="base" Icon={HiMoon} />
            <Button className="rounded-lg bg-white font-semibold text-gray-800 inner-border inner-border-gray-200 hover:bg-gray-100 focus:ring-gray-300 focus:ring xs:px-5 xs:py-2.5 xs:text-sm lg:px-3 lg:py-2 lg:text-sm">
              Log in
            </Button>
            <Button className="rounded-lg bg-teal-700 font-semibold text-white hover:bg-teal-800 focus:ring-teal-200 focus:ring xs:px-5 xs:py-2.5 xs:text-sm lg:px-3 lg:px-3 lg:py-2 lg:text-sm">
              Join now
            </Button>
          </div>
        </Navbar.Collapse>
      </>
    ),
  },
};
