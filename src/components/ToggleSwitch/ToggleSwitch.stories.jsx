import ToggleSwitch from '@/components/ToggleSwitch/ToggleSwitch';

export default {
  title: 'Components/ToggleSwitch',
  component: ToggleSwitch,
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
