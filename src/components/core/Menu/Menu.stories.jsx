import { HiUser, HiQrcode, HiInboxIn, HiLockClosed, HiCreditCard } from 'react-icons/hi';
import { RiHandCoinFill } from 'react-icons/ri';
import Menu from '@/components/core/Menu/Menu';
import Divider from '@/components/core/Utils/Divider/Divider';

export default {
  title: 'Components/Navigation/Menu',
  component: Menu,
  tags: ['autodocs'],
};

export const SingleMenu = {
  args: {
    children: (
      <Menu.UList>
        <Menu.Title>Public</Menu.Title>
        <Menu.List href="/account/public-profile" Icon={HiUser}>
          Public profile
        </Menu.List>
        <Menu.List href="/account/donation-settings" Icon={RiHandCoinFill}>
          Donation settings
        </Menu.List>
      </Menu.UList>
    ),
  },
};

export const MultipleMenus = {
  args: {
    children: (
      <>
        <Menu.UList>
          <Menu.Title>Public</Menu.Title>
          <Menu.List href="/account/public-profile" Icon={HiUser}>
            Public profile
          </Menu.List>
          <Menu.List href="/account/donation-settings" Icon={RiHandCoinFill}>
            Donation settings
          </Menu.List>
        </Menu.UList>

        <Divider orientation="horizontal" className="my-4" />

        <Menu.UList>
          <Menu.Title>Media</Menu.Title>
          <Menu.List href="/account/qr-code-generator" Icon={HiQrcode}>
            QR code generator
          </Menu.List>
          <Menu.List href="/account/inbox" Icon={HiInboxIn}>
            Inbox
          </Menu.List>
        </Menu.UList>

        <Divider orientation="horizontal" className="my-4" />

        <Menu.UList>
          <Menu.Title>Security</Menu.Title>
          <Menu.List href="/account/public-profile" Icon={HiLockClosed}>
            Security
          </Menu.List>
          <Menu.List href="/account/donation-settings" Icon={HiCreditCard}>
            Billing and plans
          </Menu.List>
        </Menu.UList>
      </>
    ),
  },
};
