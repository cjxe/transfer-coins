import { BrandLogo } from '@/assets/illustrations';
import { Brand, Button, Divider, Toast, TextInput, Alert, ButtonWithIcon } from '@/components/core';
import { ToastContext } from '@/components/core/Toast/ToastContext/ToastContext';
import Link from 'next/link';
import React, { useState, useContext } from 'react';
import { FaGoogle, FaTwitch, FaTwitter } from 'react-icons/fa';
import { HiEye, HiEyeOff, HiX } from 'react-icons/hi';

function SignUpButtonAlert() {
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
      Sign up will be added very soon!
    </Alert>
  );
}

// # buttons
function SignUpWithGoogleButton() {
  // eslint-disable-next-line no-unused-vars
  const [_, setIsHidden] = useContext(ToastContext);

  return (
    <Button
      variant="google"
      size="base"
      LeftIcon={FaGoogle}
      onClick={() => {
        return setIsHidden(false);
      }}
    >
      Join with Google
    </Button>
  );
}

function SignUpWithTwitterButton() {
  // eslint-disable-next-line no-unused-vars
  const [_, setIsHidden] = useContext(ToastContext);

  return (
    <Button
      variant="twitter"
      size="base"
      LeftIcon={FaTwitter}
      onClick={() => {
        return setIsHidden(false);
      }}
    >
      Join with Twitter
    </Button>
  );
}

function SignUpWithTwitchButton() {
  // eslint-disable-next-line no-unused-vars
  const [_, setIsHidden] = useContext(ToastContext);

  return (
    <Button
      variant="twitch"
      size="base"
      LeftIcon={FaTwitch}
      onClick={() => {
        return setIsHidden(false);
      }}
    >
      Join with Twitch
    </Button>
  );
}

function SignUpWithPasswordButton() {
  // eslint-disable-next-line no-unused-vars
  const [_, setIsHidden] = useContext(ToastContext);

  return (
    <Button
      onClick={() => {
        return setIsHidden(false);
      }}
    >
      Join
    </Button>
  );
}

// # main component
function SignupForm() {
  const [passwordShown, setPasswordShown] = useState(false);

  return (
    <form className="flex w-full max-w-sm flex-col items-center gap-6 p-8">
      <Brand size="base" BrandIcon={BrandLogo} takesToHomePage />
      <h1 className="text-center text-xl font-bold text-zinc-900 dark:text-zinc-100">
        Join Transfer Coins!
      </h1>
      <div className="flex w-full flex-col gap-3">
        <Toast
          location="bottom-right"
          autoHide
          duration={5000}
          ToastChildren={<SignUpButtonAlert />}
        >
          <SignUpWithGoogleButton />
        </Toast>
        <Toast
          location="bottom-right"
          autoHide
          duration={5000}
          ToastChildren={<SignUpButtonAlert />}
        >
          <SignUpWithTwitterButton />
        </Toast>
        <Toast
          location="bottom-right"
          autoHide
          duration={5000}
          ToastChildren={<SignUpButtonAlert />}
        >
          <SignUpWithTwitchButton />
        </Toast>
      </div>
      <div className="flex w-full flex-row items-center gap-3">
        <Divider orientation="horizontal" className="flex w-full flex-col" />
        <span className="text-sm font-normal text-gray-400 dark:text-gray-500">or</span>
        <Divider orientation="horizontal" className="flex w-full flex-col" />
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
          helperText={
            <div>
              By creating an account, you aggree to our{' '}
              <Link
                href="/legal/terms-of-service"
                className="text-sm font-semibold text-teal-600 hover:underline dark:text-teal-700 lg:decoration-2"
              >
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link
                href="/legal/privacy-policy"
                className="text-sm font-semibold text-teal-600 hover:underline dark:text-teal-700 lg:decoration-2"
              >
                Privacy Policy
              </Link>
            </div>
          }
          buttonIcon={passwordShown ? HiEyeOff : HiEye}
          buttonOnClick={() => {
            setPasswordShown(!passwordShown);
          }}
        />
      </div>
      <div className="flex w-full flex-col gap-4">
        <Toast
          location="bottom-right"
          autoHide
          duration={5000}
          ToastChildren={<SignUpButtonAlert />}
        >
          <SignUpWithPasswordButton />
        </Toast>
        <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          Already on Transfer Coins?{' '}
          <Link
            href="/auth/login"
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
