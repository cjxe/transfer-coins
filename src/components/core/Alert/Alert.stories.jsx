import { HiX } from 'react-icons/hi';
import { Button, ButtonWithIcon } from '..';
import Alert from './Alert';

export default {
  title: 'Components/Data display/Alert',
  component: Alert,
  tags: ['autodocs'],
};

export const Error = {
  args: {
    severity: 'error',
    children: 'This is an error alert',
  },
};

export const Warning = {
  args: {
    severity: 'warning',
    children: 'This is a warning alert',
  },
};

export const Info = {
  args: {
    severity: 'info',
    children: 'This is an info alert',
  },
};

export const Success = {
  args: {
    severity: 'success',
    children: 'This is a success alert',
  },
};

export const CustomIcon = {
  args: {
    children: 'This is a custom icon alert',
    CustomIcon: () => {
      return <span>🎉</span>;
    },
  },
};

export const WithTitleAndActions = {
  args: {
    severity: 'success',
    children: (
      <>
        <Alert.Title>This is Alert.Title</Alert.Title>
        <div>
          This is an alert with a title. This is an alert with a title. This is an alert with a
          title. This is an alert with a title
        </div>
        <div className="flex flex-row gap-2">
          <Button size="xs" className="w-fit">
            Details
          </Button>
          <Button variant="secondary" size="xs" className="w-fit">
            Dismiss
          </Button>
        </div>
      </>
    ),
    action: (
      <div className="mt-[-0.38rem]">
        <ButtonWithIcon
          size="sm"
          Icon={HiX}
          variant="none"
          className="focus:ring-green-300 hover:enabled:bg-green-200 dark:focus:ring-green-700 dark:hover:enabled:bg-green-800"
        />
      </div>
    ),
  },
};

export const WithAction = {
  args: {
    children: 'This is an alert with an action',
    severity: 'success',
    action: (
      <ButtonWithIcon
        size="sm"
        Icon={HiX}
        variant="none"
        className="focus:ring-green-300 hover:enabled:bg-green-200 dark:focus:ring-green-700 dark:hover:enabled:bg-green-800"
      />
    ),
  },
};
