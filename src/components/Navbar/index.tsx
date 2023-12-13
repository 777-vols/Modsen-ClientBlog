'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, useCallback, useMemo, useState } from 'react';
import { Portal } from 'react-portal';

import AboutUsModal from '@/app/[locale]/_components/LayoutNavbar/AboutUsModal';
import { urls } from '@/constants/urls';
import { activePathHelper, getLinks } from '@/helpers';

import styles from './styles.module.scss';
import { IProps } from './types';

const { wrapper, headerTitle, navWrapper, linksWrapper, itemLink, activeLink, videoButton } =
  styles;

const { home } = urls;

const Navbar: FC<IProps> = ({ navbar, locale, isFooterNav }) => {
  const { title, linksNames, videoButtonName } = navbar;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  const linksList = useMemo(
    () =>
      getLinks(locale, linksNames, isFooterNav).map(({ name, path }) => {
        return (
          <li className={activePathHelper(pathname, path) ? activeLink : itemLink} key={path}>
            <Link href={path}>{name}</Link>
          </li>
        );
      }),
    [isFooterNav, linksNames, locale, pathname],
  );

  const handleOpenCloseModal = useCallback(() => {
    setIsModalOpen((prevState) => !prevState);
  }, []);

  return (
    <div className={wrapper}>
      <Link href={`/${locale}${home}`}>
        <h4 className={headerTitle}>{title}</h4>
      </Link>
      <div className={navWrapper}>
        <nav>
          <ul className={linksWrapper}>{linksList}</ul>
        </nav>
        {!isFooterNav && (
          <button className={videoButton} type="button" onClick={handleOpenCloseModal}>
            {videoButtonName}
          </button>
        )}
      </div>
      <Portal>{isModalOpen && <AboutUsModal handleCloseModal={handleOpenCloseModal} />}</Portal>
    </div>
  );
};

export default Navbar;
