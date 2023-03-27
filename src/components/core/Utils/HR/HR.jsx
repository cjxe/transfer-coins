import React from 'react';
import classNames from 'classnames';

function HR({ className }) {
  return <hr className={classNames('h-[1px] border-0 bg-zinc-200 dark:bg-zinc-700', className)} />;
}

export default HR;
