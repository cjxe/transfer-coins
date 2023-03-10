import TextInput from './TextInput';
import TestSVG from '../assets/icons/test.svg';

export default {
  title: 'Components/TextInput',
  component: TextInput,
};

export const Base = {
  args: {
    id: 'one',
    label: 'First name',
    placeholder: 'Input text',
    size: 'base',
    buttonIcon: TestSVG,
    LeftIcon: TestSVG,
    helperText: 'We’ll never share your details. See our Privacy Policy.',
  },
};
