import AccordionItem from '@/components/core/Accordion/AccordionItem/AccordionItem';
import AccordionHeading from '@/components/core/Accordion/AccordionHeading/AccordionHeading';
import AccordionDescription from '@/components/core/Accordion/AccordionDescription/AccordionDescription';

export default {
  title: 'Components/Data display/Accordion/Item',
  component: AccordionItem,
};

export const Base = {
  args: {
    children: (
      <>
        <AccordionHeading>What is &quot;Transfer Coins&quot;?</AccordionHeading>
        <AccordionDescription>
          Transfer Coins is a web application that helps the sender to easily navigate through the
          cryptocurrencies (i.e., coins) that the receiver accepts. We provide this by allowing the
          receiver to customise their page and donation settings. We also provide additional
          solutions such as sending and receiving messages, allowing the receiver to share a QR code
          where they accept a specific coin and a specific amount.
        </AccordionDescription>
      </>
    ),
  },
};
