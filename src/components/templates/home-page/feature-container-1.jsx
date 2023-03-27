import React from 'react';
import { FeatureContainer } from '@/components/core';
import {
  MetaMaskIcon,
  TrezorIcon,
  LedgerIcon,
  WalletConnectIcon,
  PhantomIcon,
} from '@/assets/icons/cc/index';
import { SecureIllustration } from '@/assets/illustrations';

function FeatureContainer1() {
  return (
    <FeatureContainer
      id="SendAndReceiveSafely"
      headingText="Send and receive safely"
      descriptionText={[
        'Stop exporting your private keys to others. Instead, copy and paste the receiving address to your favourite cryptocurrency wallet or use our cryptocurrency wallet integrations.',
        <br />,
        <br />,
        '“Not your keys, not your coins.”',
      ]}
      icons={[MetaMaskIcon, TrezorIcon, LedgerIcon, WalletConnectIcon, PhantomIcon]}
      iconGap="gap-7"
      Illustration={SecureIllustration}
    />
  );
}

export default FeatureContainer1;
