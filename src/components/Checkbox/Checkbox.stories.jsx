import Checkbox from '@/components/Checkbox/Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
};

export const Base = {
  args: {
    id: 'base',
  },
};

export const Full = {
  args: {
    id: 'full',
    labelText: 'Remember me',
    helperText: 'This option resets every 2 weeks',
    // checked: 'checked', // ...props
  },
};
