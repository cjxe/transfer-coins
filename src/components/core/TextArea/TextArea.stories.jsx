import TextArea from '@/components/core/TextArea/TextArea';

export default {
  title: 'Components/Data input/TextArea',
  component: TextArea,
  tags: ['autodocs'],
};

export const Base = {
  args: {
    id: 'one',
    size: 'base',
    rows: 20,
    cols: 2,
  },
};

export const Full = {
  args: {
    id: 'one',
    size: 'base',
    label: 'Your message',
    placeholder: 'Explain your issue in detail',
    helperText: 'info@transfercoins.com',
    rows: 6,
    cols: 2,
  },
};
