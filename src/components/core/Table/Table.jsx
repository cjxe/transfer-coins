import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TableHead from './TableHead/TableHead';
import TableRow from './TableRow/TableRow';
import TableCell from './TableCell/TableCell';
import TableBody from './TableBody/TableBody';

function Table({ className, children }) {
  return (
    <table
      className={classNames(
        'w-full overflow-hidden rounded-lg shadow xs:block md:table',
        className
      )}
    >
      {children}
    </table>
  );
}

Table.propTypes = {
  children: PropTypes.node.isRequired,
};

Table.Head = TableHead;
Table.Row = TableRow;
Table.Cell = TableCell;
Table.Body = TableBody;

export default Table;
