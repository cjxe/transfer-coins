import React from 'react';
import Head from 'next/head';
import { NavbarTemplate, FooterTemplate } from '@/components/templates/common';
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
      <NavbarTemplate />
      <main className="pt-16 lg:pt-0 [&>*:nth-child(even)]:bg-zinc-100 dark:[&>*:nth-child(even)]:bg-zinc-900">
        <FAQCard />
        <ContactUsCard />
      </main>
      <FooterTemplate />
    </div>
  );
}

export default Help;
