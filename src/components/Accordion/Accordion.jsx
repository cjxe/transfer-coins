import React from 'react';
import PropTypes from 'prop-types';
import AccordionHeading from '@/components/Accordion/AccordionHeading/AccordionHeading';
import AccordionDescription from '@/components/Accordion/AccordionDescription/AccordionDescription';
import AccordionItem from '@/components/Accordion/AccordionItem/AccordionItem';

function Accordion({ children }) {
  return (
    <div className="w-full max-w-2xl divide-y divide-zinc-200 rounded-lg border border-zinc-200 dark:divide-zinc-700 dark:border-zinc-700">
      {children}
    </div>
  );
}

Accordion.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
};

Accordion.Item = AccordionItem;
Accordion.Heading = AccordionHeading;
Accordion.Description = AccordionDescription;

export default Accordion;
