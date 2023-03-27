import React from 'react';
import { FeatureContainer } from '@/components/core';
import { StreamelementsIcon, StreamlabsIcon } from '@/assets/icons/socialMedia';
import { StreamerOnBrowserIllustration } from '@/assets/illustrations';

function FeatureContainer5() {
  return (
    <FeatureContainer
      id="IntegrateWithinYourLivestream"
      headingText="Integrate user messages within your livestream"
      descriptionText={[
        'Receive cryptocurrency donations on your livestream with a message from the viewer! Currently, we support Streamlabs and StreamElements integrations.',
      ]}
      icons={[StreamlabsIcon, StreamelementsIcon]}
      Illustration={StreamerOnBrowserIllustration}
    />
  );
}

export default FeatureContainer5;
