import { AuthPageLayout } from '@/components/layouts';
import ForgotPasswordForm from '@/components/templates/forgot-password-page/forgot-password-form';
import Head from 'next/head';
import React from 'react';

function ForgotPassword() {
  return (
    <div>
      <Head>
        <title>Transfer Coins - Forgot password</title>
        <meta
          name="description"
          content="Did you forget your password? Happens to the best of us. Just type in your username or email address and we’ll email you instructions to reset your password."
        />
        <meta name="keywords" content="transfer, coins, forgot, reset, password, page" />
      </Head>

      <AuthPageLayout>
        <ForgotPasswordForm />
      </AuthPageLayout>
    </div>
  );
}

export default ForgotPassword;
