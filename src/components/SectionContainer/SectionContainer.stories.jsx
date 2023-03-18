import { HiCollection, HiFingerPrint, HiSparkles } from 'react-icons/hi';
import SectionContainer from '@/components/SectionContainer/SectionContainer';
import FeatureMinicard from '@/components/Features/FeatureMinicard/FeatureMinicard';

export default {
  title: 'Components/Data display/SectionContainer',
  component: SectionContainer,
  tags: ['autodocs'],
};

export const Base = {
  args: {
    headingText: 'Transferring coins made easy',
    descriptionText: 'We did all the thinking so you don’t have to.',
    sectionId: 'test',
  },
};

export const FeatureCard = {
  args: {
    headingText: 'Transferring coins made easy',
    descriptionText: 'We did all the thinking so you don’t have to.',
    sectionId: 'features',
    children: (
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
    ),
  },
};
