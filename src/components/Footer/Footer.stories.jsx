import { BsDiscord, BsTwitter } from 'react-icons/bs';
import { BrandLogo } from '@/assets/illustrations';
import ButtonWithIcon from '@/components/Buttons/ButtonWithIcon';
import HR from '@/components/Utils/Brand/HR/HR';
import Footer from '@/components/Footer/Footer';
import Brand from '@/components/Utils/Brand/Brand';

export default {
  title: 'Components/Footer',
  component: Footer,
};

export const Base = {
  args: {
    children: (
      <>
        <div className="flex justify-between xs:flex-col xs:gap-4 lg:flex-row lg:gap-0">
          <Brand size="sm" BrandIcon={BrandLogo} brandName="Transfer Coins" />
          <hr className="my-4 h-[1px] border-0 bg-gray-700 xs:inline-block lg:hidden" />
          <div className="flex gap-10 xs:flex-col lg:flex-row">
            <Footer.Link to="/help#contact">Contact</Footer.Link>
            <Footer.Link to="/help#faq">FAQ</Footer.Link>
            <Footer.Link to="/legal/privacy-policy">Privacy Policy</Footer.Link>
            <Footer.Link to="/legal/terms-of-servce">Terms of Service</Footer.Link>
          </div>
        </div>
        <HR />
        <div className="flex justify-between">
          <p className="text-base font-normal text-gray-400 xs:hidden lg:inline-block">
            © Transfer Coins. All rights reserved.
          </p>
          <div className="flex gap-4">
            <ButtonWithIcon variant="secondary" size="base" Icon={BsDiscord} />
            <ButtonWithIcon variant="secondary" size="base" Icon={BsTwitter} />
          </div>
        </div>
      </>
    ),
  },
};