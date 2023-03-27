import React from 'react';
import { SectionContainer, Accordion } from '@/components/core';

function FAQCard() {
  return (
    <SectionContainer headingText="Frequently asked questions" sectionId="faq">
      <Accordion>
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
      </Accordion>
    </SectionContainer>
  );
}

export default FAQCard;
