import React from 'react';
import { SectionContainer, PlanCard, Button } from '@/components/core';

function PlanSectionCard() {
  return (
    <SectionContainer
      headingText="Choose the right plan for your business"
      descriptionText="You can start with the starter plan and upgrade it in the future."
      sectionId="pricing"
    >
      <div className="flex xs:flex-col xs:gap-2 lg:flex-row lg:gap-4 2xl:gap-12">
        <PlanCard>
          <div className="flex flex-col gap-4">
            <PlanCard.Name>Starter</PlanCard.Name>
            <PlanCard.Description>Everything that you need to get you started</PlanCard.Description>
          </div>
          <div className="flex flex-col content-end justify-end lg:mt-10">
            <div className="mb-10 flex flex-row items-end justify-center gap-2">
              <PlanCard.Price>Free</PlanCard.Price>
            </div>
            <ul className="mt-4 mb-10 flex flex-col gap-5">
              <PlanCard.Feature isIncluded>5 cryptocurrencies</PlanCard.Feature>
              <PlanCard.Feature isIncluded>2 networks</PlanCard.Feature>
              <PlanCard.Feature isIncluded>Receive messages</PlanCard.Feature>
              <PlanCard.Feature isIncluded>Generate a QR code</PlanCard.Feature>
              <PlanCard.Feature isIncluded={false}>Customise your page</PlanCard.Feature>
              <PlanCard.Feature isIncluded={false}>
                Integrate Streamlabs and StreamElements
              </PlanCard.Feature>
              <PlanCard.Feature isIncluded={false}>
                Add your own cryptocurrency or network to your home page
              </PlanCard.Feature>
            </ul>
            <Button variant="primary" size="base">
              Choose plan
            </Button>
          </div>
        </PlanCard>
        <PlanCard isRainbow>
          <div className="flex flex-col gap-4">
            <PlanCard.Name>Creative</PlanCard.Name>
            <PlanCard.Description>
              The push you need to enrich your customer experience
            </PlanCard.Description>
          </div>
          <div className="flex flex-col content-end justify-end lg:mt-10">
            <div className="mb-10 flex flex-row items-end justify-center gap-2">
              <PlanCard.Price>$2</PlanCard.Price>
              <PlanCard.Description>/month</PlanCard.Description>
            </div>
            <ul className="mt-4 mb-10 flex flex-col gap-5">
              <PlanCard.Feature isIncluded>Over 100 cryptocurrencies</PlanCard.Feature>
              <PlanCard.Feature isIncluded>Over 5 networks</PlanCard.Feature>
              <PlanCard.Feature isIncluded>Receive messages</PlanCard.Feature>
              <PlanCard.Feature isIncluded>Generate a QR code</PlanCard.Feature>
              <PlanCard.Feature isIncluded>Customise your page</PlanCard.Feature>
              <PlanCard.Feature isIncluded>
                Integrate Streamlabs and StreamElements
              </PlanCard.Feature>
              <PlanCard.Feature isIncluded={false}>
                Add your own cryptocurrency or network to your home page
              </PlanCard.Feature>
            </ul>
            <Button variant="gradientRainbow" size="base">
              Choose plan
            </Button>
          </div>
        </PlanCard>
        <PlanCard>
          <div className="flex flex-col gap-4">
            <PlanCard.Name>Partner</PlanCard.Name>
            <PlanCard.Description>
              The ultimate plan to personalise your customer experience
            </PlanCard.Description>
          </div>
          <div className="flex flex-col content-end justify-end lg:mt-10">
            <div className="mb-10 flex flex-row items-end justify-center gap-2">
              <PlanCard.Price>Custom</PlanCard.Price>
            </div>
            <ul className="mt-4 mb-10 flex flex-col gap-5">
              <PlanCard.Feature isIncluded>Over 100 cryptocurrencies</PlanCard.Feature>
              <PlanCard.Feature isIncluded>Over 5 networks</PlanCard.Feature>
              <PlanCard.Feature isIncluded>Receive messages</PlanCard.Feature>
              <PlanCard.Feature isIncluded>Generate a QR code</PlanCard.Feature>
              <PlanCard.Feature isIncluded>Customise your page</PlanCard.Feature>
              <PlanCard.Feature isIncluded>
                Integrate Streamlabs and StreamElements
              </PlanCard.Feature>
              <PlanCard.Feature isIncluded>
                Add your own cryptocurrency or network to your home page
              </PlanCard.Feature>
            </ul>
            <Button variant="primary" size="base">
              Talk to sales
            </Button>
          </div>
        </PlanCard>
      </div>
    </SectionContainer>
  );
}

export default PlanSectionCard;