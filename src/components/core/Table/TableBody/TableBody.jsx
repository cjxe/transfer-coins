import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function TableBody({ className, children }) {
  return (
    <tbody
      className={classNames(
        'divide-y divide-neutral-200 text-sm font-semibold text-neutral-900 dark:divide-neutral-800 dark:text-neutral-100 xs:block md:table-row-group',
        className
      )}
    >
      {children}
    </tbody>
  );
}

TableBody.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TableBody;
