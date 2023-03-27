import { BrandLogo } from '@/assets/illustrations';
import { Brand, Button, HR, TextInput } from '@/components/core';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaGoogle, FaTwitch, FaTwitter } from 'react-icons/fa';
import { HiEye, HiEyeOff } from 'react-icons/hi';

function SignupForm() {
  const [passwordShown, setPasswordShown] = useState(false);

  return (
    <form className="flex w-96 flex-col items-center gap-6 p-8">
      <Brand size="base" BrandIcon={BrandLogo} takesToHomePage />
      <h1 className="text-center text-xl font-bold text-zinc-900 dark:text-zinc-100">
        Join Transfer Coins!
      </h1>
      <div className="flex w-full flex-col gap-3">
        <Button variant="google" size="base" LeftIcon={FaGoogle}>
          Join with Google
        </Button>
        <Button variant="twitter" size="base" LeftIcon={FaTwitter}>
          Join with Twitter
        </Button>
        <Button variant="twitch" size="base" LeftIcon={FaTwitch}>
          Join with Twitch
        </Button>
      </div>
      <div className="flex w-full flex-row items-center gap-3">
        <HR className="flex w-full flex-col" />
        <span className="text-sm font-normal text-gray-400 dark:text-gray-500">or</span>
        <HR className="flex w-full flex-col" />
      </div>
      <div className="flex w-full flex-col gap-5">
        <TextInput id="username" label="Username" placeholder="Enter your new username" />
        <TextInput
          id="email-address"
          label="Email address"
          placeholder="Enter your email address"
        />
        <TextInput
          type={passwordShown ? 'text' : 'password'}
          id="password"
          label="Password"
          helperText="By creating an account, you aggree to our Terms of Service and Privacy Policy."
          buttonIcon={passwordShown ? HiEyeOff : HiEye}
          buttonOnClick={() => {
            setPasswordShown(!passwordShown);
          }}
        />
      </div>
      <div className="flex w-full flex-col gap-4">
        <Button>Join</Button>
        <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
          Already on Transfer Coins?{' '}
          <Link
            href="/login"
            className="text-sm font-semibold text-teal-600 hover:underline dark:text-teal-700 lg:decoration-2"
          >
            Log in
          </Link>
        </span>
      </div>
    </form>
  );
}

export default SignupForm;
