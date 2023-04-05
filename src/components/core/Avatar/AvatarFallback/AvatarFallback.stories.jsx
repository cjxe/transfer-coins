import Image from 'next/image';
import AvatarFallback from './AvatarFallback';

export default {
  title: 'Components/Data display/Avatar/Fallback',
  component: AvatarFallback,
  tags: ['autodocs'],
};

export const StaticText = {
  args: {
    children: 'AB',
  },
};

export const StaticImage = {
  args: {
    children: (
      <Image src="https://i.pravatar.cc/300?img=4" height="100" width="100" alt="Avatar image" />
    ),
  },
};
