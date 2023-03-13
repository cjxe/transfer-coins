import { HiCollection } from 'react-icons/hi';
import FeatureMinicard from './FeatureMinicard';

export default {
  title: 'Components/Features/FeatureMinicard',
  component: FeatureMinicard,
};

export const Base = {
  args: {
    headingText: 'All-in-One link',
    descriptionText: 'Stop sending multiple cryptocurrency addresses with incomplete information.',
    Icon: HiCollection,
  },
};
