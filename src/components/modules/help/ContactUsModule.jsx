import React from 'react';
import { SectionContainer, TextInput, TextArea, Button } from '@/components/core';

function ContactUsModule() {
  return (
    <SectionContainer headingText="Contact us" sectionId="contact">
      <div className="flex w-full max-w-2xl flex-col gap-8">
        <TextInput
          id="email-address"
          label="Your email address"
          placeholder="Enter your email address"
        />
        <TextInput
          id="email-subject"
          label="Subject"
          placeholder="Explain your issue in a few words"
        />
        <TextArea
          id="email-content"
          label="Your message"
          placeholder="Explain your issue in detail"
          rows={8}
        />
        <Button>Send message</Button>
        <p className="text-zinc-500 dark:text-zinc-400">
          info@transfercoins.com (this email is NOT real)
        </p>
      </div>
    </SectionContainer>
  );
}

export default ContactUsModule;
