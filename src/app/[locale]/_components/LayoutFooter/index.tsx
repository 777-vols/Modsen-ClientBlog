import Image from 'next/image';
import Link from 'next/link';

import NavMenu from '@/components/UI/NavMenu';
import { socials } from '@/constants';
import { rgbDataURL } from '@/helpers';
import { getDictionary } from '@/i18n/getDictionary';
import { ILocaleProps } from '@/types';

import SendMessageForm from './SendMessageForm';
import styles from './styles.module.scss';

const socialIconSize = 16;

const LayoutFooter = ({ locale }: ILocaleProps) => {
  const { footer, navbar } = getDictionary(locale);
  const { titleText, adressText, emailText } = footer;
  const { title } = navbar;

  return (
    <footer id="footer" className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.navbarWrapper}>
          <h4 className={styles.headerTitle}>{title}</h4>
          <NavMenu locale={locale} isFooterNav />
        </div>
        <div className={styles.content}>
          <h2 className={styles.subscribeText}>{titleText}</h2>

          <SendMessageForm locale={locale} />
        </div>
        <div className={styles.info}>
          <div className={styles.contacts}>
            <span className={styles.contactItem}>{adressText}</span>
            <span className={styles.contactItem}>{emailText}</span>
          </div>
          <div className={styles.socialsWrapper}>
            {socials.map(({ id, icon, href }) => (
              <Link
                data-cy="social"
                className={styles.socialLink}
                key={id}
                href={href}
                target="_blank">
                <Image
                  src={icon}
                  alt="social-icon"
                  width={socialIconSize}
                  height={socialIconSize}
                  placeholder="blur"
                  blurDataURL={rgbDataURL()}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LayoutFooter;
