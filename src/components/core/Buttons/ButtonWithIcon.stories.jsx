import ButtonWithIcon from '@/components/core/Buttons/ButtonWithIcon';
import TestSVG from '@/assets/icons/test.svg';

export default {
  title: 'Components/Action/Buttons/ButtonWithIcon',
  component: ButtonWithIcon,
  tags: ['autodocs'],
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
