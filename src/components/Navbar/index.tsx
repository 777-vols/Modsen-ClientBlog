'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, useCallback, useRef, useState } from 'react';
import { Portal } from 'react-portal';

import AboutUsModal from '@/app/[locale]/_components/LayoutNavbar/AboutUsModal';
import NavMenu from '@/components/NavMenu';
import { urls } from '@/constants';
import { useOnClickOutside } from '@/hooks';
import { useIsMounted } from '@/hooks/useIsMounted';
import { getDictionary } from '@/i18n/getDictionary';
import { i18n } from '@/i18n/i18n.config';
import { ILocaleProps } from '@/types';

import styles from './styles.module.scss';

const { home } = urls;

const Navbar: FC<ILocaleProps> = ({ locale }) => {
  const { navbar } = getDictionary(locale);
  const { title, videoButtonName } = navbar;

  const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState<boolean>(false);
  const menuRef = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const mounted = useIsMounted();
  const pathname = usePathname();
  const splittedPathname = pathname.split('/');
  const [, currentLanguage, ...restUrl] = splittedPathname;

  const burgerButtonHandler = useCallback(() => {
    setBurgerMenuIsOpen((prevState) => !prevState);
  }, []);

  const handleOpenCloseModal = useCallback(() => {
    if (burgerMenuIsOpen) {
      burgerButtonHandler();
    }
    setIsModalOpen((prevState) => !prevState);
  }, [burgerButtonHandler, burgerMenuIsOpen]);

  useOnClickOutside(menuRef, () => {
    if (burgerMenuIsOpen) {
      burgerButtonHandler();
    }
  });

  return (
    <div ref={menuRef} className={styles.wrapper}>
      <button
        type="button"
        className={burgerMenuIsOpen ? styles.activeBurgerButton : styles.burgerButton}
        onClick={burgerButtonHandler}>
        <span className={styles.styledBar} />
        <span className={styles.styledBar} />
        <span className={styles.styledBar} />
      </button>

      <Link href={`/${locale}${home}`}>
        <h4 className={styles.headerTitle}>{title}</h4>
      </Link>

      <div className={burgerMenuIsOpen ? styles.mobileNavWrapper : styles.navWrapper}>
        <NavMenu locale={locale} isMobileNav={burgerMenuIsOpen} closeMenu={burgerButtonHandler} />

        <div className={styles.controls}>
          <button className={styles.videoButton} type="button" onClick={handleOpenCloseModal}>
            {videoButtonName}
          </button>
          <Link
            className={styles.language}
            href={
              currentLanguage === i18n.locales[0]
                ? `/${i18n.locales[1]}/${restUrl.join('/')}`
                : `/${i18n.locales[0]}/${restUrl.join('/')}`
            }>
            en/ru
          </Link>
        </div>
      </div>

      {mounted && (
        <Portal>{isModalOpen && <AboutUsModal handleCloseModal={handleOpenCloseModal} />}</Portal>
      )}
    </div>
  );
};

export default Navbar;
