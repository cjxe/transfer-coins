import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';

function MenuList({ href, Icon, children }) {
  return (
    <Link
      href={href}
      className="group flex flex-row rounded-lg p-2 transition duration-150 ease-out hover:bg-gray-200 focus:bg-teal-600"
    >
      <div className="flex flex-row items-center gap-3">
        {Icon && (
          <div className="h-6 w-6">
            <Icon className="h-full w-full bg-transparent fill-gray-500 stroke-gray-500 transition duration-150 ease-out group-hover:fill-gray-600 group-hover:stroke-gray-600 group-focus:fill-white group-focus:stroke-white" />
          </div>
        )}
        <div className="text-base font-medium text-gray-900 group-focus:font-bold group-focus:text-white">
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
  Icon: false,
};

export default MenuList;
