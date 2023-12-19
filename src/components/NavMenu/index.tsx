'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { memo, useCallback, useMemo } from 'react';

import { IProps } from '@/components/NavMenu/types';
import { activePathHelper, getLinks } from '@/helpers';
import { getDictionary } from '@/lib/getDictionary';

import styles from './styles.module.scss';

const NavMenu = ({ locale, isFooterNav, isMobileNav, closeMenu }: IProps) => {
  const { navbar } = getDictionary(locale);
  const { linksNames } = navbar;

  const pathname = usePathname();

  const handleCloseMenu = useCallback(() => {
    if (isMobileNav && closeMenu) {
      closeMenu();
    }
  }, [closeMenu, isMobileNav]);

  const linksList = useMemo(
    () =>
      getLinks(locale, linksNames, isFooterNav ?? isMobileNav).map(({ name, path }) => {
        return (
          <li
            className={activePathHelper(pathname, path) ? styles.activeLink : styles.itemLink}
            key={path}>
            <Link href={path} onClick={handleCloseMenu}>
              {name}
            </Link>
          </li>
        );
      }),
    [handleCloseMenu, isFooterNav, isMobileNav, linksNames, locale, pathname],
  );

  return (
    <nav className={styles.wrapper}>
      <ul className={isMobileNav ? styles.mobileLinksWrapper : styles.linksWrapper}>{linksList}</ul>
    </nav>
  );
};

export default memo(NavMenu);
