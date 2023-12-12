'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

import { getLinks } from '@/helpers/getLinks';

import styles from './styles.module.scss';
import { IProps } from './types';

const { wrapper, headerTitle, navWrapper, linksWrapper, itemLink, modalButton } = styles;

const Navbar: FC<IProps> = (props) => {
  const { title, locale, linksNames, isFooterNav } = props;

  // const pathname = usePathname();

  const linksList = getLinks(locale, linksNames, isFooterNav).map(({ name, path }) => (
    <li className={itemLink} key={path}>
      <Link href={path}>{name}</Link>
    </li>
  ));

  return (
    <div className={wrapper}>
      <h4 className={headerTitle}>{title}</h4>
      <div className={navWrapper}>
        <nav>
          <ul className={linksWrapper}>{linksList}</ul>
        </nav>
        {!isFooterNav && (
          <button className={modalButton} type="button">
            Video about us
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
