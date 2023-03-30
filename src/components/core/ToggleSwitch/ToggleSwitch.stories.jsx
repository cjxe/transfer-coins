import ToggleSwitch from '@/components/core/ToggleSwitch/ToggleSwitch';

export default {
  title: 'Components/Data input/ToggleSwitch',
  component: ToggleSwitch,
  tags: ['autodocs'],
};

export const Base = {
  args: {
    id: 'base',
    disabled: false,
  },
};

export const Full = {
  args: {
    id: 'full',
    labelText: 'Dark mode',
    helperText: "This option is saved in your browser's cookies",
    disabled: false,
    // checked: 'checked', // ...props
  },
};
