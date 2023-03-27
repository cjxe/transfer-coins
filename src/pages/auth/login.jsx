import { AuthPageLayout } from '@/components/layouts';
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

      <AuthPageLayout>
        <LoginForm />
      </AuthPageLayout>
    </div>
  );
}

export default Login;
