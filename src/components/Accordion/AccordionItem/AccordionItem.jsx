import React, { useState } from 'react';
import { AccordionItemContext } from '@/components/Accordion/AccordionItemContext/AccordionItemContext';

function AccordionItem({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AccordionItemContext.Provider value={[isOpen, setIsOpen]}>
      {children}
    </AccordionItemContext.Provider>
  );
}

export default AccordionItem;
