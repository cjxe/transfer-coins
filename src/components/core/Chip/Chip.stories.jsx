import { FaSmileBeam } from 'react-icons/fa';
import Chip from './Chip';

export default {
  title: 'Components/Data display/Chip',
  component: Chip,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    children: 'Default chip',
  },
};

export const Small = {
  args: {
    color: 'primary',
    size: 'sm',
    children: 'Small chip',
  },
};

export const Medium = {
  args: {
    color: 'green',
    size: 'md',
    children: 'Medium chip',
  },
};

export const Large = {
  args: {
    color: 'red',
    size: 'lg',
    children: 'Large chip',
  },
};

export const MediumWithIcon = {
  args: {
    Icon: FaSmileBeam,
    children: 'Medium chip with icon',
  },
};
