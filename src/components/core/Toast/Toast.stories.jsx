import { HiX } from 'react-icons/hi';
import React, { useContext } from 'react';
import { Toast, Alert, ButtonWithIcon, Button } from '..';
import { ToastContext } from './ToastContext/ToastContext';

export default {
  title: 'Components/Data display/Toast',
  component: Toast,
  tags: ['autodocs'],
};

// # functions
// have to use functions because we need to use the `ToastContext`
function ViewAlertButton({ children }) {
  // eslint-disable-next-line no-unused-vars
  const [_, setIsHidden] = useContext(ToastContext);

  return (
    <div className="flex h-screen items-center justify-center">
      <Button
        onClick={() => {
          return setIsHidden(false);
        }}
      >
        {children}
      </Button>
    </div>
  );
}

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
    ToastChildren: <div className="bg-red-500 font-bold text-white">Simple toast</div>,
    children: <ViewAlertButton>View &quot;very simple toast&quot;</ViewAlertButton>,
  },
};

export const SimpleAlert = {
  args: {
    autoHide: true,
    autoHideDuration: 5000,
    location: 'top-left',
    ToastChildren: <Alert>This is NOT a dismissable alert</Alert>,
    children: <ViewAlertButton>View &quot;simple alert&quot;</ViewAlertButton>,
  },
};

export const TopLeftErrorAlert = {
  args: {
    autoHide: true,
    autoHideDuration: 3000,
    location: 'top-left',
    ToastChildren: <DismissableErrorAlert />,
    children: <ViewAlertButton>View &quot;top left error alert&quot;</ViewAlertButton>,
  },
};

export const TopRightWarningAlert = {
  args: {
    autoHide: true,
    autoHideDuration: 3000,
    location: 'top-right',
    ToastChildren: <DismissableWarningAlert />,
    children: <ViewAlertButton>View &quot;top right warning alert&quot;</ViewAlertButton>,
  },
};

export const BottomLeftInfoAlert = {
  args: {
    autoHide: true,
    autoHideDuration: 3000,
    location: 'bottom-left',
    ToastChildren: <DismissableInfoAlert />,
    children: <ViewAlertButton>View &quot;bottom left info alert&quot;</ViewAlertButton>,
  },
};

export const BottomRightSuccessAlert = {
  args: {
    autoHide: true,
    autoHideDuration: 3000,
    location: 'bottom-right',
    ToastChildren: <DismissableSuccessAlert />,
    children: <ViewAlertButton>View &quot;bottom right success alert&quot;</ViewAlertButton>,
  },
};

export const NotAutoHiddenAlert = {
  args: {
    autoHide: false,
    location: 'bottom-right',
    ToastChildren: <DismissableErrorAlert />,
    children: <ViewAlertButton>View &quot;not auto hidden&quot;</ViewAlertButton>,
  },
};
