import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AccordionItemContext } from '@/components/Accordion/AccordionItemContext/AccordionItemContext';
import classNames from 'classnames';
import { HiQuestionMarkCircle, HiChevronDown, HiChevronUp } from 'react-icons/hi';

function AccordionHeading({ children }) {
  const [isOpen, setIsOpen] = useContext(AccordionItemContext);

  return (
    <button
      type="button"
      className={classNames(
        !isOpen
          ? 'text-zinc-500 dark:text-zinc-400'
          : 'bg-zinc-100 text-teal-600 dark:bg-zinc-800 dark:text-teal-500',
        'flex w-full items-center justify-between p-4 text-left font-medium first:rounded-t-lg last:rounded-b-lg hover:bg-zinc-100 focus:ring-zinc-200 focus:ring-4 focus:dark:ring-zinc-700'
      )}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <div className="flex flex-row items-center gap-2">
        <HiQuestionMarkCircle className="h-5 w-5 shrink-0" />
        <h3>{children}</h3>
      </div>
      {!isOpen ? (
        <HiChevronDown className="h-6 w-6 shrink-0" />
      ) : (
        <HiChevronUp className="h-6 w-6 shrink-0" />
      )}
    </button>
  );
}

AccordionHeading.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
};

export default AccordionHeading;
