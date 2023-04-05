import AvatarImage from './AvatarImage';

export default {
  title: 'Components/Data display/Avatar/Image',
  component: AvatarImage,
};

export const RandomImage = {
  args: {
    src: 'https://i.pravatar.cc/300',
    alt: 'Avatar image',
  },
};

export const ErrorImage = {
  args: {
    src: 'https://i.pravatar.cc/300?img=-1',
    alt: 'Avatar image',
  },
};
