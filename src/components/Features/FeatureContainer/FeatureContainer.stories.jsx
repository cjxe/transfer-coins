import FeatureContainer from '@/components/Features/FeatureContainer/FeatureContainer';
import {
  MetaMaskIcon,
  TrezorIcon,
  LedgerIcon,
  WalletConnectIcon,
  PhantomIcon,
  BitcoinIcon,
  BNBIcon,
  EthereumIcon,
  ArbitrumIcon,
  OptimismIcon,
  PolygonIcon,
  FantomIcon,
  AvalancheIcon,
  TronIcon,
  SolanaIcon,
  LitecoinIcon,
  DogecoinIcon,
} from '@/assets/icons/cc/index';
import {
  SecureIllustration,
  QRCodeIllustration,
  EthereumConnectedPathsIllustration,
  WebDesignerIllustration,
  StreamerOnBrowserIllustration,
} from '@/assets/illustrations/index';
import { StreamelementsIcon, StreamlabsIcon } from '@/assets/icons/socialMedia';

export default {
  title: 'Blocks/Marketing/Features/FeatureContainer',
  component: FeatureContainer,
  tags: ['autodocs'],
};

export const SendAndReceiveSafely = {
  args: {
    id: 'SendAndReceiveSafely',
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

export const ShareCoinsAndNetworks = {
  args: {
    id: 'ShareCoinsAndNetworks',
    headingText: 'Share hundreds of coin and network combinations',
    descriptionText: [
      'Easily share all your cryptocurrency addresses and the networks they are on. You can also configure custom addresses for specific coins!',
    ],
    icons: [
      EthereumIcon,
      ArbitrumIcon,
      OptimismIcon,
      PolygonIcon,
      BNBIcon,
      FantomIcon,
      AvalancheIcon,
      TronIcon,
      SolanaIcon,
      BitcoinIcon,
      LitecoinIcon,
      DogecoinIcon,
    ],
    iconGap: 'gap-5',
    Illustration: EthereumConnectedPathsIllustration,
  },
};

export const GenerateAQRCode = {
  args: {
    id: 'GenerateAQRCode',
    headingText: 'Generate a QR code',
    descriptionText: [
      'Display it on your social profile, on your shop’s window, on the door of your minivan, and on your business card. The possibilities are endless.',
    ],
    Illustration: QRCodeIllustration,
  },
};

export const CustomiseYourPage = {
  args: {
    id: 'CustomiseYourPage',
    headingText: 'Customise your page',
    descriptionText: [
      'Change the background colour to something you want! We have a few default options that we think suit the best but you can also choose your own.',
    ],
    Illustration: WebDesignerIllustration,
  },
};

export const IntegrateWithinYourLivestream = {
  args: {
    id: 'IntegrateWithinYourLivestream',
    headingText: 'Integrate user messages within your livestream',
    descriptionText: [
      'Receive cryptocurrency donations on your livestream with a message from the viewer! Currently, we support Streamlabs and StreamElements integrations.',
    ],
    icons: [StreamlabsIcon, StreamelementsIcon],
    Illustration: StreamerOnBrowserIllustration,
  },
};
