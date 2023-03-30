import React from 'react';
import { SectionContainer, Button } from '@/components/core';
import { HiArrowRight } from 'react-icons/hi';
import Link from 'next/link';

function CTACard() {
  return (
    <SectionContainer
      headingText="Try it out, it’s free anyway"
      descriptionText={
        <div>
          Got any questions? Check out the{' '}
          <Link
            href="/help#faq"
            className="font-semibold text-teal-600 hover:underline dark:text-teal-700 lg:decoration-2"
          >
            FAQ
          </Link>
          .
        </div>
      }
      sectionId="CTA"
    >
      <Link href="/auth/signup">
        <Button variant="primary" size="lg" RightIcon={HiArrowRight}>
          Get started
        </Button>
      </Link>
    </SectionContainer>
  );
}

export default CTACard;
