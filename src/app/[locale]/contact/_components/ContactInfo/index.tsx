import { ILocaleProps } from '@/types';

import styles from './styles.module.scss';

const {
  wrapper,
  head,
  content,
  subtitle,
  title,
  description,
  schedule,
  infoText,
  contactUs,
  smallHeading,
  contentInnerBlock,
} = styles;

export const ContactInfo = ({ locale }: ILocaleProps) => {
  return (
    <div className={wrapper}>
      <div className={head}>
        <span className={subtitle}>CONTACT US</span>
        <h1 className={title}>Let’s Start a Conversation</h1>
        <p className={description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim.
        </p>
      </div>
      <div className={content}>
        <div className={schedule}>
          <span className={infoText}>Working hours</span>
          <div className={contentInnerBlock}>
            <h5 className={smallHeading}>Monday To Friday</h5>
            <h5 className={smallHeading}>9:00 AM to 8:00 PM </h5>
            <span className={infoText}>Our Support Team is available 24/7</span>
          </div>
        </div>
        <div className={contactUs}>
          <span className={infoText}>Contact Us</span>
          <div className={contentInnerBlock}>
            <h5 className={smallHeading}>020 7993 2905</h5>
            <span className={infoText}>hello@finsweet.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};
