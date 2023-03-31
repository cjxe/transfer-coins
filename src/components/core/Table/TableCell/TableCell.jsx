import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function TableCell({ className, children }) {
  return <td className={classNames('p-4 xs:block md:table-cell', className)}>{children}</td>;
}

TableCell.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TableCell;
