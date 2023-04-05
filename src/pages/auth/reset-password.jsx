import ResetPasswordForm from '@/components/templates/reset-password-page/reset-password-form';
import Head from 'next/head';
import React from 'react';

function ResetPassword() {
  return (
    <div>
      <Head>
        <title>Transfer Coins - Create a new password</title>
        <meta name="description" content="Create a new password." />
        <meta name="keywords" content="transfer, coins, reset, create, new, password" />
      </Head>

      <main className="flex min-h-screen items-center justify-center bg-zinc-100 pt-16 dark:bg-zinc-900 lg:pb-40 lg:pt-0">
        <ResetPasswordForm />
      </main>
    </div>
  );
}

export default ResetPassword;
