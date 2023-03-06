import ButtonWithIcon from './ButtonWithIcon';
import TestSVG from '../assets/icons/test.svg';

export default {
  title: 'Components/ButtoWithIcon',
  component: ButtonWithIcon,
};

export const Primary = {
  args: {
    variant: 'primary',
    size: 'base',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    size: 'base',
    icon: <TestSVG />,
  },
};
