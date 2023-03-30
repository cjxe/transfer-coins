import Checkbox from '@/components/core/Checkbox/Checkbox';

export default {
  title: 'Components/Data input/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
};

export const Base = {
  args: {
    id: 'base',
    disabled: false,
  },
};

export const WithLabel = {
  args: {
    id: 'WithLabel',
    labelText: 'Remember me',
    disabled: false,
  },
};

export const Full = {
  args: {
    id: 'full',
    labelText: 'Remember me',
    helperText: 'This option resets every 2 weeks',
    disabled: false,
    // checked: true, // passed in as `...props`
  },
};
