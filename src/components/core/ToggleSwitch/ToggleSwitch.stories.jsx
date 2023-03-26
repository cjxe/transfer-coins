import ToggleSwitch from '@/components/core/ToggleSwitch/ToggleSwitch';

export default {
  title: 'Components/Data input/ToggleSwitch',
  component: ToggleSwitch,
  tags: ['autodocs'],
};

export const Base = {
  args: {
    id: 'base',
  },
};

export const Full = {
  args: {
    id: 'full',
    labelText: 'Dark mode',
    helperText: "This option is saved in your browser's cookies",
    // checked: 'checked', // ...props
  },
};
