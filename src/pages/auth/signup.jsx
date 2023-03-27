import { AuthPageLayout } from '@/components/layouts';
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

      <AuthPageLayout>
        <SignupForm />
      </AuthPageLayout>
    </div>
  );
}

export default Signup;
