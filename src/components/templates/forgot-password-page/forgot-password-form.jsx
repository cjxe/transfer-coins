import { BrandLogo } from '@/assets/illustrations';
import { Brand, Button, TextInput } from '@/components/core';
import React from 'react';

function ForgotPasswordForm() {
  return (
    <form className="flex w-full max-w-sm flex-col items-center gap-6 p-8">
      <Brand size="base" BrandIcon={BrandLogo} takesToHomePage />
      <div className="flex w-full flex-col gap-4">
        <h1 className="text-center text-xl font-bold text-zinc-900 dark:text-zinc-100">
          Forgot your password?
        </h1>
        <p className="text-center text-base font-normal text-gray-500 dark:text-gray-400">
          Happens to the best of us. Just type in your username or email address and we’ll email you
          instructions to reset your password.
        </p>
      </div>
      <div className="flex w-full flex-col">
        <TextInput
          id="email-address"
          label="Username or email address"
          placeholder="Enter your username or email address"
        />
      </div>
      <div className="flex w-full flex-col">
        <Button>Send password reset email</Button>
      </div>
    </form>
  );
}

export default ForgotPasswordForm;
