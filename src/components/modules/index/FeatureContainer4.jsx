import React from 'react';
import { FeatureContainer } from '@/components/core';
import { WebDesignerIllustration } from '@/assets/illustrations';

function FeatureContainer4() {
  return (
    <FeatureContainer
      id="CustomiseYourPage"
      headingText="Customise your page"
      descriptionText={[
        'Change the background colour to something you want! We have a few default options that we think suit the best but you can also choose your own.',
      ]}
      Illustration={WebDesignerIllustration}
      isIllustrationOnTheLeft={false}
    />
  );
}

export default FeatureContainer4;
