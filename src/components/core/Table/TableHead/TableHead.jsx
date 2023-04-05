import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function TableHead({ className, children }) {
  return (
    <thead
      className={classNames(
        'border-b border-zinc-200 bg-zinc-100 text-xs font-semibold uppercase text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 xs:absolute xs:top-[-9999px] xs:left-[-9999px] xs:block md:static md:top-0 md:left-0 md:table-header-group',
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
