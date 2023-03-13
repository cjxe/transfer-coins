import FeatureContainer from './FeatureContainer';
import {
  MetaMaskIcon,
  TrezorIcon,
  LedgerIcon,
  WalletConnectIcon,
  PhantomIcon,
} from '@/assets/icons/cc/index';
import { SecureIllustration, QRCodeIllustration } from '@/assets/illustrations/index';

export default {
  title: 'Components/Features/FeatureContainer',
  component: FeatureContainer,
};

export const Base = {
  args: {
    headingText: 'Generate a QR code',
    descriptionText: [
      'Display it on your social profile, on your shop’s window, on the door of your minivan, and on your business card. The possibilities are endless.',
    ],
    Illustration: QRCodeIllustration,
  },
};

export const WithIcons = {
  args: {
    headingText: 'Send and receive safely',
    descriptionText: [
      'Stop exporting your private keys to others. Instead, copy and paste the receiving address to your favourite cryptocurrency wallet or use our cryptocurrency wallet integrations.',
      <br />,
      <br />,
      '“Not your keys, not your coins.”',
    ],
    icons: [MetaMaskIcon, TrezorIcon, LedgerIcon, WalletConnectIcon, PhantomIcon],
    iconGap: 'gap-7',
    Illustration: SecureIllustration,
  },
};
