import { HiEye, HiMail, HiUser } from 'react-icons/hi';
import ClipboardDocument from '@/assets/icons/ClipboardDocument.svg';
import TextInput from '@/components/core/TextInput/TextInput';

export default {
  title: 'Components/Data input/TextInput',
  component: TextInput,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    id: 'one',
    size: 'base',
    disabled: false,
  },
};

export const WithLeftIcon = {
  args: {
    id: 'one',
    size: 'base',
    label: 'Email address',
    placeholder: 'Enter your email address',
    LeftIcon: HiMail,
    disabled: false,
  },
};

export const WithRightButton = {
  args: {
    id: 'one',
    size: 'base',
    label: 'Password',
    buttonIcon: HiEye,
    helperText: 'By creating an account, you agree to our Terms of Service and Privacy Policy.',
    disabled: false,
  },
};

export const WithIconAndButton = {
  args: {
    id: 'one',
    size: 'base',
    label: 'Name',
    placeholder: 'Enter your name',
    LeftIcon: HiUser,
    buttonIcon: ClipboardDocument,
    helperText: 'This name will be displayed on the screen after sending the money.',
    maxlength: 16, // included in ...props
    disabled: false,
  },
};
