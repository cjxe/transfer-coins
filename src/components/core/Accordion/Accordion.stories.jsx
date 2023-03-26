import Accordion from '@/components/core/Accordion/Accordion';

export default {
  title: 'Components/Data display/Accordion',
  component: Accordion,
  tags: ['autodocs'],
};

export const SingleAccordion = {
  args: {
    children: (
      <Accordion.Item>
        <Accordion.Heading>What is &quot;Transfer Coins?&quot;</Accordion.Heading>
        <Accordion.Description>
          Transfer Coins is a web application that helps the sender to easily navigate through the
          cryptocurrencies (i.e., coins) that the receiver accepts. We provide this by allowing the
          receiver to customise their page and donation settings. We also provide additional
          solutions such as sending and receiving messages, allowing the receiver to share a QR code
          where they accept a specific coin and a specific amount.
        </Accordion.Description>
      </Accordion.Item>
    ),
  },
};

export const MultipleAccordions = {
  args: {
    children: (
      <>
        <Accordion.Item>
          <Accordion.Heading>What is &quot;Transfer Coins&quot;?</Accordion.Heading>
          <Accordion.Description>
            Transfer Coins is a web application that helps the sender to easily navigate through the
            cryptocurrencies (i.e., coins) that the receiver accepts. We provide this by allowing
            the receiver to customise their page and donation settings. We also provide additional
            solutions such as sending and receiving messages, allowing the receiver to share a QR
            code where they accept a specific coin and a specific amount.
          </Accordion.Description>
        </Accordion.Item>

        <Accordion.Item>
          <Accordion.Heading>Why is it free?</Accordion.Heading>
          <Accordion.Description>
            It does not cost much to have many users that use the Free plan. We also have enough
            users who are opted into the Creative plan and Partner plan.
          </Accordion.Description>
        </Accordion.Item>
      </>
    ),
  },
};
