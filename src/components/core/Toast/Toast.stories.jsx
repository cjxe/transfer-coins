import { HiX } from 'react-icons/hi';
import React, { useContext } from 'react';
import { Toast, Alert, ButtonWithIcon } from '..';
import { ToastContext } from './ToastContext/ToastContext';

export default {
  title: 'Components/Data display/Toast',
  component: Toast,
  tags: ['autodocs'],
};

// # functions
// have to use functions because we need to use the `ToastContext`
function DismissableErrorAlert() {
  // eslint-disable-next-line no-unused-vars
  const [_, setIsHidden] = useContext(ToastContext);

  return (
    <Alert
      severity="error"
      action={
        <ButtonWithIcon
          size="sm"
          Icon={HiX}
          variant="none"
          className="focus:ring-red-300 hover:enabled:bg-red-200 dark:focus:ring-red-700 dark:hover:enabled:bg-red-800"
          onClick={() => {
            return setIsHidden(true);
          }}
        />
      }
    >
      This is a dismissable error alert
    </Alert>
  );
}

function DismissableWarningAlert() {
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
      This is a dismissable warning alert
    </Alert>
  );
}

function DismissableInfoAlert() {
  // eslint-disable-next-line no-unused-vars
  const [_, setIsHidden] = useContext(ToastContext);

  return (
    <Alert
      severity="info"
      action={
        <ButtonWithIcon
          size="sm"
          Icon={HiX}
          variant="none"
          className="focus:ring-teal-300 hover:enabled:bg-teal-200 dark:focus:ring-teal-700 dark:hover:enabled:bg-teal-800"
          onClick={() => {
            return setIsHidden(true);
          }}
        />
      }
    >
      This is a dismissable info alert
    </Alert>
  );
}

function DismissableSuccessAlert() {
  // eslint-disable-next-line no-unused-vars
  const [_, setIsHidden] = useContext(ToastContext);

  return (
    <Alert
      severity="success"
      action={
        <ButtonWithIcon
          size="sm"
          Icon={HiX}
          variant="none"
          className="focus:ring-green-300 hover:enabled:bg-green-200 dark:focus:ring-green-700 dark:hover:enabled:bg-green-800"
          onClick={() => {
            return setIsHidden(true);
          }}
        />
      }
    >
      This is a dismissable success alert
    </Alert>
  );
}

// # stories
export const VerySimpleToast = {
  args: {
    autoHide: true,
    autoHideDuration: 3000,
    location: 'top-left',
    children: <div className="bg-red-500 font-bold text-white">Simple toast</div>,
  },
};

export const SimpleAlert = {
  args: {
    autoHide: true,
    autoHideDuration: 5000,
    location: 'top-left',
    children: <Alert>This is NOT a dismissable success alert</Alert>,
  },
};

export const TopLeftErrorAlert = {
  args: {
    autoHide: true,
    autoHideDuration: 3000,
    location: 'top-left',
    children: <DismissableErrorAlert />,
  },
};

export const TopRightWarningAlert = {
  args: {
    autoHide: true,
    autoHideDuration: 3000,
    location: 'top-right',
    children: <DismissableWarningAlert />,
  },
};

export const BottomLeftInfoAlert = {
  args: {
    autoHide: true,
    autoHideDuration: 3000,
    location: 'bottom-left',
    children: <DismissableInfoAlert />,
  },
};

export const BottomRightSuccessAlert = {
  args: {
    autoHide: true,
    autoHideDuration: 3000,
    location: 'bottom-right',
    children: <DismissableSuccessAlert />,
  },
};

export const NotAutoHidden = {
  args: {
    autoHide: false,
    location: 'top-left',
    children: <DismissableErrorAlert />,
  },
};
