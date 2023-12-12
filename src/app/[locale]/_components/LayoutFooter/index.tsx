import { Navbar } from '@/components';
import { socials } from '@/constants/socials';

import styles from './styles.module.scss';
import { IProps } from './types';

const {
  wrapper,
  container,
  content,
  subscribeText,
  form,
  formInput,
  formButton,
  info,
  contacts,
  contactItem,
  socialsWrapper,
  socialLink,
} = styles;

const LayoutFooter = ({ title, locale, linksNames }: IProps) => {
  return (
    <footer className={wrapper}>
      <div className={container}>
        <Navbar locale={locale} linksNames={linksNames} isFooterNav />
        <div className={content}>
          <h3 className={subscribeText}>
            Subscribe to our news letter to get latest updates and news
          </h3>
          <form className={form}>
            <input className={formInput} placeholder="Enter Your Email" />
            <button className={formButton} type="submit">
              Subscribe
            </button>
          </form>
        </div>
        <div className={info}>
          <div className={contacts}>
            <span className={contactItem}>Finstreet 118 2561 Fintown</span>
            <span className={contactItem}>Hello@finsweet.com 020 7993 2905</span>
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
