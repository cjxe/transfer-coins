import { NavbarTemplate } from '@/components/templates/common';
import LoginForm from '@/components/templates/login-page/login-form';
import Head from 'next/head';
import React from 'react';

function Login() {
  return (
    <div>
      <Head>
        <title>Transfer Coins - Log in</title>
        <meta name="description" content="Log in to Transfer Coins." />
        <meta name="keywords" content="transfer, coins, log, in, sign, page" />
      </Head>
      <NavbarTemplate />
      <main className="flex h-screen justify-center bg-neutral-100 pt-16 dark:bg-neutral-900 lg:pt-0">
        <LoginForm />
      </main>
    </div>
  );
}

export default Login;
