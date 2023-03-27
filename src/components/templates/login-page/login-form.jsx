import { BrandLogo } from '@/assets/illustrations';
import { Brand, Button, Checkbox, HR, TextInput } from '@/components/core';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaGoogle, FaTwitch, FaTwitter } from 'react-icons/fa';
import { HiEye, HiEyeOff } from 'react-icons/hi';

function LoginForm() {
  const [passwordShown, setPasswordShown] = useState(false);

  return (
    <form className="flex w-full max-w-sm flex-col items-center gap-6 p-8">
      <Brand size="base" BrandIcon={BrandLogo} takesToHomePage />
      <h1 className="text-center text-xl font-bold text-zinc-900 dark:text-zinc-100">
        Welcome back!
      </h1>
      <div className="flex w-full flex-col gap-3">
        <Button variant="google" size="base" LeftIcon={FaGoogle}>
          Log in with Google
        </Button>
        <Button variant="twitter" size="base" LeftIcon={FaTwitter}>
          Log in with Twitter
        </Button>
        <Button variant="twitch" size="base" LeftIcon={FaTwitch}>
          Log in with Twitch
        </Button>
      </div>
      <div className="flex w-full flex-row items-center gap-3">
        <HR className="flex w-full flex-col" />
        <span className="text-sm font-normal text-gray-400 dark:text-gray-500">or</span>
        <HR className="flex w-full flex-col" />
      </div>
      <div className="flex w-full flex-col gap-5">
        <TextInput
          id="email-address"
          label="Username or email address"
          placeholder="Enter your username or email address"
        />
        <TextInput
          type={passwordShown ? 'text' : 'password'}
          id="password"
          label="Password"
          buttonIcon={passwordShown ? HiEyeOff : HiEye}
          buttonOnClick={() => {
            setPasswordShown(!passwordShown);
          }}
        />
      </div>
      <div className="flex w-full flex-row items-center justify-between">
        <Checkbox id="remember-me" labelText="Remember me" />
        <Link
          href="/auth/forgot-password"
          className="text-sm font-semibold text-teal-600 hover:underline dark:text-teal-700 lg:decoration-2"
        >
          Forgot password?
        </Link>
      </div>
      <div className="flex w-full flex-col gap-4">
        <Button>Log in</Button>
        <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
          New to Transfer Coins?{' '}
          <Link
            href="/auth/signup"
            className="text-sm font-semibold text-teal-600 hover:underline dark:text-teal-700 lg:decoration-2"
          >
            Join now
          </Link>
        </span>
      </div>
    </form>
  );
}

export default LoginForm;
