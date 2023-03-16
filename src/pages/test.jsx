import { HiCollection, HiFingerPrint, HiSparkles, HiMoon } from 'react-icons/hi';
import SectionContainer from '@/components/SectionContainer/SectionContainer';
import FeatureMinicard from '@/components/Features/FeatureMinicard/FeatureMinicard';
import Navbar from '@/components/Navbar/Navbar';
import { BrandLogo } from '@/assets/illustrations';
import { VerticalSeparator } from '@/assets/other';
import ButtonWithIcon from '@/components/Button/ButtonWithIcon';
import Button from '@/components/Button/Button';

function Test() {
  return (
    <div>
      {/* //TODO BITTIKTEN SONRA `Navbar.stories.jsx`'i updatele  */}
      <Navbar>
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
            <Button className="rounded-lg border border-gray-200 bg-white font-semibold text-gray-800 hover:bg-gray-100 focus:ring focus:ring-gray-300 xs:px-5 xs:py-2.5 xs:text-sm lg:px-3 lg:py-2 lg:text-sm">
              Log in
            </Button>
            <Button className="rounded-lg bg-teal-700 font-semibold text-white hover:bg-teal-800 focus:ring focus:ring-teal-200 xs:px-5 xs:py-2.5 xs:text-sm lg:px-3 lg:py-2 lg:text-sm">
              Join now
            </Button>
          </div>
        </Navbar.Collapse>
      </Navbar>
      <div>
        <SectionContainer
          headingText="Transferring coins made easy"
          descriptionText="We did all the thinking so you don’t have to."
          sectionId="features"
        >
          <div className="flex xs:flex-col xs:gap-12 lg:mx-8 lg:flex-row lg:gap-8">
            <FeatureMinicard
              headingText="Secure transfer"
              descriptionText="Connect your favourite wallet and we will take care of the rest."
              Icon={HiFingerPrint}
            />
            <FeatureMinicard
              headingText="All-in-One link"
              descriptionText="Stop sending multiple cryptocurrency addresses with incomplete information."
              Icon={HiCollection}
            />
            <FeatureMinicard
              headingText="Personalized page"
              descriptionText="Add custom colours to your page; be unique, 
      be different."
              Icon={HiSparkles}
            />
          </div>
        </SectionContainer>
      </div>
      <div>
        <SectionContainer
          headingText="Transferring coins made easy"
          descriptionText="We did all the thinking so you don’t have to."
          sectionId="features"
        >
          <div className="flex xs:flex-col xs:gap-12 lg:mx-8 lg:flex-row lg:gap-8">
            <FeatureMinicard
              headingText="Secure transfer"
              descriptionText="Connect your favourite wallet and we will take care of the rest."
              Icon={HiFingerPrint}
            />
            <FeatureMinicard
              headingText="All-in-One link"
              descriptionText="Stop sending multiple cryptocurrency addresses with incomplete information."
              Icon={HiCollection}
            />
            <FeatureMinicard
              headingText="Personalized page"
              descriptionText="Add custom colours to your page; be unique, 
      be different."
              Icon={HiSparkles}
            />
          </div>
        </SectionContainer>
      </div>
    </div>
  );
}

export default Test;
