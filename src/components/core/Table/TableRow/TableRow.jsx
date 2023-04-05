import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function TableRow({ className, children }) {
  return (
    <tr
      className={classNames(
        'hover:bg-zinc-200 dark:hover:bg-zinc-800 xs:block xs:p-2 md:table-row md:p-0',
        className
      )}
    >
      {children}
    </tr>
  );
}

TableRow.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TableRow;
