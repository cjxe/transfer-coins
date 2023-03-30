import { HiUser } from 'react-icons/hi';
import MenuList from '@/components/core/Menu/MenuList/MenuList';

export default {
  title: 'Components/Navigation/Menu/List',
  component: MenuList,
  tags: ['autodocs'],
};

export const Base = {
  args: {
    href: '/',
    children: 'Menu list',
    disabled: false,
  },
};

export const WithIcon = {
  args: {
    href: '/account/public-profile',
    children: 'Public profile',
    Icon: HiUser,
    disabled: false,
  },
};
