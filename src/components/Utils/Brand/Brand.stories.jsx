import { BrandLogo } from '@/assets/illustrations';
import Brand from './Brand';

export default {
  title: 'Components/Utils/Brand',
  component: Brand,
  tags: ['autodocs'],
};

export const Base = {
  args: {
    BrandIcon: BrandLogo,
    takesToHomePage: false,
  },
};

export const WithBrandName = {
  args: {
    BrandIcon: BrandLogo,
    brandName: 'Transfer Coins',
  },
};
