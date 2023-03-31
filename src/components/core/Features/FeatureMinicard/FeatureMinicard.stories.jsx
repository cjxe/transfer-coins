import { HiCollection } from 'react-icons/hi';
import FeatureMinicard from './FeatureMinicard';

export default {
  title: 'Blocks/Marketing/Features/FeatureMinicard',
  component: FeatureMinicard,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    headingText: 'All-in-One link',
    descriptionText: 'Stop sending multiple cryptocurrency addresses with incomplete information.',
    Icon: HiCollection,
    href: '#ShareCoinsAndNetworks',
  },
};
