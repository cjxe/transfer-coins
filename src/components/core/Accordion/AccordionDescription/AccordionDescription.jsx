import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AccordionItemContext } from '@/components/core/Accordion/AccordionItemContext/AccordionItemContext';
import classNames from 'classnames';

function AccordionDescription({ children }) {
  const [isOpen] = useContext(AccordionItemContext);

  return (
    <div
      className={classNames(
        isOpen === false ? 'hidden' : 'block',
        'p-5 font-medium text-zinc-900 dark:text-zinc-100'
      )}
    >
      {children}
    </div>
  );
}

AccordionDescription.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.array]).isRequired,
};

export default AccordionDescription;
