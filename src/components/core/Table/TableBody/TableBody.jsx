import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function TableBody({ className, children }) {
  return (
    <tbody
      className={classNames(
        'divide-y divide-zinc-200 text-sm font-semibold text-zinc-900 dark:divide-zinc-800 dark:text-zinc-100 xs:block md:table-row-group',
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
