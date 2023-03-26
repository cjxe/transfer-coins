import React from 'react';
import Head from 'next/head';
import { NavbarModule, FooterModule } from '@/components/modules/layout';
import {
  HeroModule,
  FeaturesSectionModule,
  FeatureContainer1,
  FeatureContainer2,
  FeatureContainer3,
  FeatureContainer4,
  FeatureContainer5,
  PlanSectionModule,
  CTAModule,
} from '@/components/modules/index';

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
      <NavbarModule />
      <main className="[&>*:nth-child(even)]:bg-zinc-50 dark:[&>*:nth-child(even)]:bg-zinc-900">
        <HeroModule />
        <FeaturesSectionModule />
        <FeatureContainer1 />
        <FeatureContainer2 />
        <FeatureContainer3 />
        <FeatureContainer4 />
        <FeatureContainer5 />
        <PlanSectionModule />
        <CTAModule />
      </main>
      <FooterModule />
    </div>
  );
}

export default Home;
