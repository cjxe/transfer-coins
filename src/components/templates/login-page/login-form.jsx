import React, { useState, useContext } from 'react';
import { BrandLogo } from '@/assets/illustrations';
import {
  Brand,
  Button,
  Checkbox,
  Divider,
  TextInput,
  Alert,
  ButtonWithIcon,
  Toast,
} from '@/components/core';
import { ToastContext } from '@/components/core/Toast/ToastContext/ToastContext';
import Link from 'next/link';
import { FaGoogle, FaTwitch, FaTwitter } from 'react-icons/fa';
import { HiEye, HiEyeOff, HiX } from 'react-icons/hi';
import { signIn } from 'next-auth/react';

function LogInButtonAlert() {
  // eslint-disable-next-line no-unused-vars
  const [_, setIsHidden] = useContext(ToastContext);

  return (
    <Alert
      severity="warning"
      action={
        <ButtonWithIcon
          size="sm"
          Icon={HiX}
          variant="none"
          className="focus:ring-yellow-300 hover:enabled:bg-yellow-200 dark:focus:ring-yellow-700 dark:hover:enabled:bg-yellow-800"
          onClick={() => {
            return setIsHidden(true);
          }}
        />
      }
    >
      Please use social log ins for now!
    </Alert>
  );
}

// # buttons
function LogInWithPasswordButton() {
  // eslint-disable-next-line no-unused-vars
  const [_, setIsHidden] = useContext(ToastContext);

  return (
    <Button
      onClick={() => {
        return setIsHidden(false);
      }}
    >
      Log in
    </Button>
  );
}

// # main component
function LoginForm() {
  const [passwordShown, setPasswordShown] = useState(false);

  return (
    <form className="flex w-full max-w-sm flex-col items-center gap-6 p-8">
      <Brand size="base" BrandIcon={BrandLogo} takesToHomePage />
      <h1 className="text-center text-xl font-bold text-zinc-900 dark:text-zinc-100">
        Welcome back!
      </h1>
      <div className="flex w-full flex-col gap-3">
        <Button
          variant="google"
          size="base"
          LeftIcon={FaGoogle}
          onClick={() => {
            signIn('google');
          }}
        >
          Log in with Google
        </Button>
        <Button
          variant="twitter"
          size="base"
          LeftIcon={FaTwitter}
          onClick={() => {
            signIn('twitter');
          }}
        >
          Log in with Twitter
        </Button>
        <Button
          variant="twitch"
          size="base"
          LeftIcon={FaTwitch}
          onClick={() => {
            signIn('twitch');
          }}
        >
          Log in with Twitch
        </Button>
      </div>
      <div className="flex w-full flex-row items-center gap-3">
        <Divider orientation="horizontal" className="flex w-full flex-col" />
        <span className="text-sm font-normal text-gray-400 dark:text-gray-500">or</span>
        <Divider orientation="horizontal" className="flex w-full flex-col" />
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
        <Toast
          location="bottom-right"
          autoHide
          duration={5000}
          ToastChildren={<LogInButtonAlert />}
        >
          <LogInWithPasswordButton />
        </Toast>
        <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
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
