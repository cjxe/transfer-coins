import React from 'react';
import Head from 'next/head';
import { NavbarTemplate, FooterTemplate } from '@/components/templates/common';
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
      <NavbarTemplate />
      <main className="[&>*:nth-child(even)]:bg-zinc-50 dark:[&>*:nth-child(even)]:bg-zinc-900">
        <HeroCard />
        <FeaturesSectionCard />
        <FeatureContainer1 />
        <FeatureContainer2 />
        <FeatureContainer3 />
        <FeatureContainer4 />
        <FeatureContainer5 />
        <PlanSectionCard />
        <CTACard />
      </main>
      <FooterTemplate />
    </div>
  );
}

export default Home;
