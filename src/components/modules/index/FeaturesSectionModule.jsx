import React from 'react';
import { SectionContainer, FeatureMinicard } from '@/components/core';
import { HiCollection, HiFingerPrint, HiSparkles } from 'react-icons/hi';

function FeaturesSectionModule() {
  return (
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
          href="#SendAndReceiveSafely"
        />
        <FeatureMinicard
          headingText="All-in-One link"
          descriptionText="Stop sending multiple cryptocurrency addresses with incomplete information."
          Icon={HiCollection}
          href="#ShareCoinsAndNetworks"
        />
        <FeatureMinicard
          headingText="Personalized page"
          descriptionText="Add custom colours to your page; be unique, 
be different."
          Icon={HiSparkles}
          href="#CustomiseYourPage"
        />
      </div>
    </SectionContainer>
  );
}

export default FeaturesSectionModule;
