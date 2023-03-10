import ButtonWithIcon from './ButtonWithIcon';
import TestSVG from '../assets/icons/test.svg';

export default {
  title: 'Components/ButtonWithIcon',
  component: ButtonWithIcon,
};

export const Primary = {
  args: {
    variant: 'primary',
    size: 'base',
    Icon: TestSVG,
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    size: 'base',
    Icon: TestSVG,
  },
};
