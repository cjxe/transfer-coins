import FeatureMinicard from './FeatureMinicard';
import {
  MetaMaskIcon,
  TrezorIcon,
  LedgerIcon,
  WalletConnectIcon,
  PhantomIcon,
} from '../../../assets/icons/cc/index';

export default {
  title: 'Components/Features/FeatureMinicard',
  component: FeatureMinicard,
};

export const Base = {
  args: {
    headingText: 'Send and receive safely',
    descriptionText:
      'Stop exporting your private keys to others. Instead, copy and paste the receiving address to your favourite cryptocurrency wallet or use our cryptocurrency wallet integrations. \n \n “Not your keys, not your coins.”',
    icons: [MetaMaskIcon, TrezorIcon, LedgerIcon, WalletConnectIcon, PhantomIcon],
    iconGap: 'gap-7',
  },
};
