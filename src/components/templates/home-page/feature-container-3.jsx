import React from 'react';
import { FeatureContainer } from '@/components/core';
import { QRCodeIllustration } from '@/assets/illustrations';

function FeatureContainer3() {
  return (
    <FeatureContainer
      id="GenerateAQRCode"
      headingText="Generate a QR code"
      descriptionText={[
        'Display it on your social profile, on your shop’s window, on the door of your minivan, and on your business card. The possibilities are endless.',
      ]}
      Illustration={QRCodeIllustration}
    />
  );
}

export default FeatureContainer3;
