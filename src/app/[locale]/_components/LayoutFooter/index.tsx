import Link from 'next/link';
import { v4 } from 'uuid';

import NavMenu from '@/components/NavMenu';
import { socials } from '@/constants';
import { getDictionary } from '@/lib/getDictionary';
import { ILocaleProps } from '@/types';

import SendMessageForm from './SendMessageForm';
import styles from './styles.module.scss';

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
            {socials.map(({ icon, href }) => (
              <Link className={styles.socialLink} key={v4()} href={href}>
                {icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LayoutFooter;
