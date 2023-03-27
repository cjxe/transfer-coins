import React from 'react';
import Head from 'next/head';
import { MarketingPageLayout } from '@/components/layouts';
import { FAQCard, ContactUsCard } from '@/components/templates/help-page';

function Help() {
  return (
    <div>
      <Head>
        <title>Transfer Coins - Help</title>
        <meta
          name="description"
          content="Do you need help with Transfer Coins? You are at the right place!"
        />
        <meta
          name="keywords"
          content="transfer, coins, help, faq, contact, us, email, twitter, discord"
        />
      </Head>

      <MarketingPageLayout>
        <FAQCard />
        <ContactUsCard />
      </MarketingPageLayout>
    </div>
  );
}

export default Help;
