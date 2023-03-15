import { HiMoon } from 'react-icons/hi';
import { BrandLogo } from '@/assets/illustrations';
import { VerticalSeparator } from '@/assets/other';
import Navbar from './Navbar';
import Button from '../Button/Button';
import ButtonWithIcon from '../Button/ButtonWithIcon';

export default {
  title: 'Components/Navbar',
  component: Navbar,
};

export const NotSignedIn = {
  args: {
    children: (
      <>
        <Navbar.Brand BrandIcon={BrandLogo} brandName="Transfer Coins" size="sm" />
        <div className="flex flex-row items-center gap-8">
          <div className="flex flex-row gap-8">
            <Navbar.Link to="#features">Features</Navbar.Link>
            <Navbar.Link to="#pricing">Pricing</Navbar.Link>
            <Navbar.Link to="#faq">FAQ</Navbar.Link>
            <Navbar.Link to="#contact">Contact</Navbar.Link>
          </div>
          <div className="flex items-center gap-4">
            <VerticalSeparator />
            <ButtonWithIcon variant="secondary" size="base" Icon={HiMoon} />
            <Button variant="secondary" size="sm">
              Log in
            </Button>
            <Button variant="primary" size="sm">
              Join now
            </Button>
          </div>
        </div>
      </>
    ),
  },
};
