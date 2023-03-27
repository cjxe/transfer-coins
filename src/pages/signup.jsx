import { NavbarTemplate } from '@/components/templates/common';
import SignupForm from '@/components/templates/signup-page/signup-form';
import Head from 'next/head';
import React from 'react';

function Signup() {
  return (
    <div>
      <Head>
        <title>Transfer Coins - Sign up</title>
        <meta
          name="description"
          content="Welcome to Transfer Coins! We are delighted that you chose us! ❤️"
        />
        <meta
          name="keywords"
          content="transfer, coins, sign, up, join, us, create, new, account, register, page"
        />
      </Head>
      <NavbarTemplate />
      <main className="flex h-screen justify-center bg-neutral-100 pt-16 dark:bg-neutral-900 lg:pt-0">
        <SignupForm />
      </main>
    </div>
  );
}

export default Signup;
