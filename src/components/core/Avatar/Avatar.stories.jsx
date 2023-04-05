import Image from 'next/image';
import Avatar from './Avatar';

export default {
  title: 'Components/Data display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    children: <Avatar.Image src="https://i.pravatar.cc/300" alt="Avatar image" />,
  },
};

export const TextFallback = {
  args: {
    children: (
      <>
        <Avatar.Image src="https://i.pravatar.cc/300?img=-1" alt="Avatar image" />
        <Avatar.Fallback>AB</Avatar.Fallback>
      </>
    ),
  },
};

export const ImageFallback = {
  args: {
    children: (
      <>
        <Avatar.Image src="https://i.pravatar.cc/300?img=-1" alt="Avatar image" />
        <Avatar.Fallback>
          <Image src="https://i.pravatar.cc/300?img=5" fill alt="Avatar image" />
        </Avatar.Fallback>
      </>
    ),
  },
};
