import React from 'react';
import Head from 'next/head';
import { MarketingPageLayout } from '@/components/layouts';
import {
  HeroCard,
  FeaturesSectionCard,
  FeatureContainer1,
  FeatureContainer2,
  FeatureContainer3,
  FeatureContainer4,
  FeatureContainer5,
  PlanSectionCard,
  CTACard,
} from '@/components/templates/home-page/index';

function Home() {
  return (
    <div>
      <Head>
        <title>Transfer Coins - Home page</title>
        <meta
          name="description"
          content="A new, safe and easy way to share all of your cryptocurrency addresses with one link!"
        />
        <meta
          name="keywords"
          content="transfer, coins, crypto, payment, cryptocurrency, address, share, network, all"
        />
      </Head>

      <MarketingPageLayout>
        <HeroCard />
        <FeaturesSectionCard />
        <FeatureContainer1 />
        <FeatureContainer2 />
        <FeatureContainer3 />
        <FeatureContainer4 />
        <FeatureContainer5 />
        <PlanSectionCard />
        <CTACard />
      </MarketingPageLayout>
    </div>
  );
}

export default Home;
