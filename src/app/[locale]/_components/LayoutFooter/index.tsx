import Link from 'next/link';
import { v4 } from 'uuid';

import { Navbar } from '@/components';
import { socials } from '@/constants';
import { getDictionary } from '@/lib/getDictionary';
import { ILocaleProps } from '@/types';

import SendMessageForm from './SendMessageForm';
import styles from './styles.module.scss';

const {
  wrapper,
  container,
  content,
  subscribeText,
  info,
  contacts,
  contactItem,
  socialsWrapper,
  socialLink,
} = styles;

const LayoutFooter = ({ locale }: ILocaleProps) => {
  const { navbar, footer } = getDictionary(locale);
  const { titleText, adressText, emailText } = footer;

  return (
    <footer id="footer" className={wrapper}>
      <div className={container}>
        <Navbar navbar={navbar} locale={locale} isFooterNav />
        <div className={content}>
          <h2 className={subscribeText}>{titleText}</h2>

          <SendMessageForm locale={locale} />
        </div>
        <div className={info}>
          <div className={contacts}>
            <span className={contactItem}>{adressText}</span>
            <span className={contactItem}>{emailText}</span>
          </div>
          <div className={socialsWrapper}>
            {socials.map(({ icon, href }) => (
              <Link className={socialLink} key={v4()} href={href}>
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
