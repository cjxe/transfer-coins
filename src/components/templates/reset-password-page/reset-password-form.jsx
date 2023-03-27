import { BrandLogo } from '@/assets/illustrations';
import { Brand, Button, TextInput } from '@/components/core';
import React, { useState } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';

function ResetPasswordForm() {
  const [passwordShown, setPasswordShown] = useState(false);
  return (
    <form className="flex w-full max-w-sm flex-col items-center gap-6 p-8">
      <Brand size="base" BrandIcon={BrandLogo} />
      <h1 className="text-center text-xl font-bold text-zinc-900 dark:text-zinc-100">
        Create a new password
      </h1>
      <div className="flex w-full flex-col gap-4">
        <div className="flex w-full flex-col gap-5">
          {/* // TODO get email address */}
          <TextInput
            id="email-address"
            label="Email address"
            placeholder="llllllllll???"
            className="disabled"
          />
          <TextInput
            type={passwordShown ? 'text' : 'password'}
            id="password"
            label="New password"
            buttonIcon={passwordShown ? HiEyeOff : HiEye}
            buttonOnClick={() => {
              setPasswordShown(!passwordShown);
            }}
          />
          <TextInput
            type={passwordShown ? 'text' : 'password'}
            id="confirm-password"
            label="Confirm password"
            buttonIcon={passwordShown ? HiEyeOff : HiEye}
            buttonOnClick={() => {
              setPasswordShown(!passwordShown);
            }}
          />
        </div>
      </div>
      <div className="flex w-full flex-col gap-4">
        <Button>Reset password</Button>
      </div>
    </form>
  );
}

export default ResetPasswordForm;
