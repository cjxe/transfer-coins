import React from 'react';
import { SectionContainer, Button } from '@/components/core';
import { HiArrowRight } from 'react-icons/hi';

function CTACard() {
  return (
    <SectionContainer
      headingText="Try it out, it’s free anyway"
      descriptionText="Got any questions? Check out the FAQ."
      sectionId="CTA"
    >
      <Button variant="primary" size="lg" RightIcon={HiArrowRight}>
        Get started
      </Button>
    </SectionContainer>
  );
}

export default CTACard;
