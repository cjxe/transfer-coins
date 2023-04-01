import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function TableCell({ className, children, ...props }) {
  return (
    <td
      className={classNames(
        'xs:relative xs:block xs:pl-[50%] xs:before:absolute xs:before:top-0 xs:before:left-0 xs:before:text-neutral-500 xs:before:content-[attr(data-label)] xs:before:dark:text-neutral-400 md:static md:table-cell md:p-4 md:before:hidden',
        className
      )}
      {...props}
    >
      {children}
    </td>
  );
}

TableCell.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TableCell;
