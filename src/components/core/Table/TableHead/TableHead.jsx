import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function TableHead({ className, children }) {
  return (
    <thead
      className={classNames(
        'border-b border-neutral-200 bg-neutral-100 text-xs font-semibold uppercase text-neutral-500 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 xs:absolute xs:top-[-9999px] xs:left-[-9999px] xs:block md:static md:top-0 md:left-0 md:table-header-group',
        className
      )}
    >
      {children}
    </thead>
  );
}

TableHead.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TableHead;

//         '',
