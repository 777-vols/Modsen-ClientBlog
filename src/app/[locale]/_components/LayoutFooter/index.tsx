import { Navbar } from '@/components';
import { socials } from '@/constants/socials';
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

const LayoutFooter = async ({ locale }: ILocaleProps) => {
  const { navbar, footer } = await getDictionary(locale);
  const { titleText, adressText, emailText, footerForm } = footer;

  return (
    <footer className={wrapper}>
      <div className={container}>
        <Navbar navbar={navbar} locale={locale} isFooterNav />
        <div className={content}>
          <h3 className={subscribeText}>{titleText}</h3>

          <SendMessageForm footerForm={footerForm} />
        </div>
        <div className={info}>
          <div className={contacts}>
            <span className={contactItem}>{adressText}</span>
            <span className={contactItem}>{emailText}</span>
          </div>
          <div className={socialsWrapper}>
            {socials.map(({ icon, href }) => (
              <a className={socialLink} key={href} href={href}>
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LayoutFooter;
