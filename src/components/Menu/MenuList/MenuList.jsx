import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';

function MenuList({ href, Icon, children }) {
  return (
    <Link
      href={href}
      className="group flex flex-row rounded-lg p-2 transition duration-150 ease-out hover:bg-gray-100 focus:bg-teal-600 dark:hover:bg-gray-800 dark:focus:bg-teal-700"
    >
      <div className="flex flex-row items-center gap-3">
        {Icon && (
          <div className="h-6 w-6">
            <Icon className="h-full w-full bg-transparent fill-gray-500 stroke-gray-500 transition duration-150 ease-out group-hover:fill-gray-600 group-hover:stroke-gray-600 group-focus:fill-white group-focus:stroke-white dark:fill-gray-500 dark:stroke-gray-500 dark:group-hover:fill-gray-400 dark:group-hover:stroke-gray-400 dark:group-focus:fill-gray-200 dark:group-focus:stroke-gray-200" />
          </div>
        )}
        <div className="text-base font-medium text-gray-900 group-focus:font-bold group-focus:text-white dark:text-gray-400 dark:group-focus:text-gray-200">
          {children}
        </div>
      </div>
      {/* // TODO insert <Badge> */}
    </Link>
  );
}

MenuList.propTypes = {
  href: PropTypes.string.isRequired,
  Icon: PropTypes.oneOfType([
    PropTypes.shape({
      type: PropTypes.oneOf(['img', 'svg']),
    }),
    PropTypes.func,
  ]),
  children: PropTypes.string.isRequired,
};

MenuList.defaultProps = {
  Icon: undefined,
};

export default MenuList;
