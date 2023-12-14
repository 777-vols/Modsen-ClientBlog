'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, useCallback, useMemo, useState } from 'react';
import { Portal } from 'react-portal';

import AboutUsModal from '@/app/[locale]/_components/LayoutNavbar/AboutUsModal';
import { urls } from '@/constants/urls';
import { activePathHelper, getLinks } from '@/helpers';
import { useIsMounted } from '@/hooks/useIsMounted';
import { i18n } from '@/lib/i18n.config';

import styles from './styles.module.scss';
import { IProps } from './types';

const {
  wrapper,
  headerTitle,
  navWrapper,
  linksWrapper,
  itemLink,
  activeLink,
  videoButton,
  language,
} = styles;

const { home } = urls;

const Navbar: FC<IProps> = ({ navbar, locale, isFooterNav }) => {
  const { title, linksNames, videoButtonName } = navbar;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const mounted = useIsMounted();
  const pathname = usePathname();
  const splittedPathname = pathname.split('/');
  const [, currentLanguage, ...restUrl] = splittedPathname;

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
          <>
            <button className={videoButton} type="button" onClick={handleOpenCloseModal}>
              {videoButtonName}
            </button>
            <Link
              className={language}
              href={
                currentLanguage === i18n.locales[0]
                  ? `/${i18n.locales[1]}/${restUrl.join('/')}`
                  : `/${i18n.locales[0]}/${restUrl.join('/')}`
              }>
              {currentLanguage === i18n.locales[0] ? i18n.locales[1] : i18n.locales[0]}
            </Link>
          </>
        )}
      </div>
      {mounted && (
        <Portal>{isModalOpen && <AboutUsModal handleCloseModal={handleOpenCloseModal} />}</Portal>
      )}
    </div>
  );
};

export default Navbar;
