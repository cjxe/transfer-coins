import { HiCollection, HiFingerPrint, HiSparkles } from 'react-icons/hi';
import SectionContainer from '@/components/SectionContainer/SectionContainer';
import FeatureMinicard from '@/components/Features/FeatureMinicard/FeatureMinicard';
import Navbar from '@/components/Navbar/Navbar';
import { BrandLogo } from '@/assets/illustrations';

function Test() {
  return (
    <div>
      <Navbar>
        <Navbar.Brand BrandIcon={BrandLogo} brandName="test" />
        <Navbar.Link to="#features">Features</Navbar.Link>
      </Navbar>
      <div>
        <SectionContainer
          headingText="Transferring coins made easy"
          descriptionText="We did all the thinking so you don’t have to."
          sectionId="features"
        >
          <div className="flex flex-row md:gap-16">
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
