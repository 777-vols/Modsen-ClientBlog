import { Navbar } from '@/components';
import { socials } from '@/constants/socials';
import { getDictionary } from '@/lib/getDictionary';

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

const LayoutFooter = async ({ locale }: IProps) => {
  const { navbar, footer } = await getDictionary(locale);
  const { subscribeTitle, subscribeButton, emailPlaceholder, ourAdress, ourEmail } = footer;

  return (
    <footer className={wrapper}>
      <div className={container}>
        <Navbar navbar={navbar} locale={locale} isFooterNav />
        <div className={content}>
          <h3 className={subscribeText}>{subscribeTitle}</h3>
          <form className={form}>
            <input className={formInput} placeholder={emailPlaceholder} />
            <button className={formButton} type="submit">
              {subscribeButton}
            </button>
          </form>
        </div>
        <div className={info}>
          <div className={contacts}>
            <span className={contactItem}>{ourAdress}</span>
            <span className={contactItem}>{ourEmail}</span>
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
