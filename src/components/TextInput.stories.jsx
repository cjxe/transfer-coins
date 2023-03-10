import TextInput from './TextInput';
import TestSVG from '../assets/icons/test.svg';

export default {
  title: 'Components/TextInput',
  component: TextInput,
};

export const WithLeftIcon = {
  args: {
    id: 'one',
    size: 'base',
    buttonIcon: TestSVG,
    LeftIcon: TestSVG,
  },
};

export const WithoutLeftIcon = {
  args: {
    id: 'one',
    size: 'base',
    buttonIcon: TestSVG,
  },
};
