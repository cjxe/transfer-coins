import React from 'react';
import { FeatureContainer } from '@/components/core';
import {
  BitcoinIcon,
  BNBIcon,
  EthereumIcon,
  ArbitrumIcon,
  OptimismIcon,
  PolygonIcon,
  FantomIcon,
  AvalancheIcon,
  TronIcon,
  SolanaIcon,
  LitecoinIcon,
  DogecoinIcon,
} from '@/assets/icons/cc/index';
import { EthereumConnectedPathsIllustration } from '@/assets/illustrations';

function FeatureContainer2() {
  return (
    <FeatureContainer
      id="ShareCoinsAndNetworks"
      headingText="Share hundreds of coin and network combinations"
      descriptionText={[
        'Easily share all your cryptocurrency addresses and the networks they are on. You can also configure custom addresses for specific coins!',
      ]}
      icons={[
        EthereumIcon,
        ArbitrumIcon,
        OptimismIcon,
        PolygonIcon,
        BNBIcon,
        FantomIcon,
        AvalancheIcon,
        TronIcon,
        SolanaIcon,
        BitcoinIcon,
        LitecoinIcon,
        DogecoinIcon,
      ]}
      iconGap="gap-5"
      Illustration={EthereumConnectedPathsIllustration}
      isIllustrationOnTheLeft={false}
    />
  );
}

export default FeatureContainer2;
