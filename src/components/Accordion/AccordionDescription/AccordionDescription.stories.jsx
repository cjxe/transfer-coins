import AccordionDescription from '@/components/Accordion/AccordionDescription/AccordionDescription';

export default {
  title: 'Components/Data display/Accordion/Description',
  component: AccordionDescription,
};

export const StringAnswer = {
  args: {
    children:
      'Transfer Coins is a web application that helps the sender to easily navigate through the cryptocurrencies (i.e., coins) that the receiver accepts. We provide this by allowing the receiver to customise their page and donation settings. We also provide additional solutions such as sending and receiving messages, allowing the receiver to share a QR code where they accept a specific coin and a specific amount.',
  },
};

export const ElementAnswer = {
  args: {
    children: (
      <p className="text-red-500 dark:text-red-400">
        Transfer Coins is a web application that helps the sender to easily navigate through the
        cryptocurrencies (i.e., coins) that the receiver accepts. We provide this by allowing the
        receiver to customise their page and donation settings. We also provide additional solutions
        such as sending and receiving messages, allowing the receiver to share a QR code where they
        accept a specific coin and a specific amount.
      </p>
    ),
  },
};
