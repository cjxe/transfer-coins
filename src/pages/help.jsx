import React from 'react';
import Head from 'next/head';
import { NavbarModule, FooterModule } from '@/components/modules/layout';
import { FAQModule, ContactUsModule } from '@/components/modules/help';

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
      <NavbarModule />
      <main className="pt-16 lg:pt-0 [&>*:nth-child(even)]:bg-zinc-50 dark:[&>*:nth-child(even)]:bg-zinc-900">
        <FAQModule />
        <ContactUsModule />
      </main>
      <FooterModule />
    </div>
  );
}

export default Help;
