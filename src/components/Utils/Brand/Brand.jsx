import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from 'next/link';

const IconSizes = {
  xs: 'w-6 h-6',
  sm: 'w-8 h-8',
  base: 'w-12 h-12',
  lg: 'w-16 h-16',
  xl: 'w-24 h-24',
};

const NameSizes = {
  xs: 'text-lg',
  sm: 'text-2xl',
  base: 'text-4xl',
  lg: 'text-6xl',
  xl: 'text-8xl',
};

function Brand({ BrandIcon, size, brandName, takesToHomePage }) {
  return (
    <Link className="inline-flex flex-row items-center gap-3" href={takesToHomePage ? '/' : '#'}>
      <div className={IconSizes[size]}>
        <BrandIcon className="h-full w-full" />
      </div>
      {brandName && (
        <p
          className={classNames(NameSizes[size], 'font-semibold text-zinc-900 dark:text-zinc-100')}
        >
          {brandName}
        </p>
      )}
    </Link>
  );
}

Brand.propTypes = {
  BrandIcon: PropTypes.oneOfType([
    PropTypes.shape({
      type: PropTypes.oneOf(['img', 'svg']),
    }),
    PropTypes.func,
  ]).isRequired,
  size: PropTypes.oneOf(['xs', 'sm', 'base', 'lg', 'xl']),
  brandName: PropTypes.string,
  takesToHomePage: PropTypes.bool,
};

Brand.defaultProps = {
  size: 'base',
  brandName: '',
  takesToHomePage: false,
};

export default Brand;
