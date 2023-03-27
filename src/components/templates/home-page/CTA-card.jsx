import React from 'react';
import { SectionContainer, Button } from '@/components/core';
import { HiArrowRight } from 'react-icons/hi';
import Link from 'next/link';

function CTACard() {
  return (
    <SectionContainer
      headingText="Try it out, it’s free anyway"
      descriptionText="Got any questions? Check out the FAQ."
      sectionId="CTA"
    >
      <Link href="/signup">
        <Button variant="primary" size="lg" RightIcon={HiArrowRight}>
          Get started
        </Button>
      </Link>
    </SectionContainer>
  );
}

export default CTACard;
