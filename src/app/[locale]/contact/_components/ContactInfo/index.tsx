import { getDictionary } from '@/i18n/getDictionary';
import { ILocaleProps } from '@/types';

import styles from './styles.module.scss';

export const ContactInfo = ({ locale }: ILocaleProps) => {
  const { contactBlock } = getDictionary(locale);
  const {
    subtitleText,
    titleText,
    descriptionText,
    mondayToFridayText,
    hoursText,
    ourTeamText,
    contactUsText,
    workingHoursText,
  } = contactBlock;

  return (
    <div className={styles.wrapper}>
      <div className={styles.head}>
        <span className={styles.subtitle}>{subtitleText}</span>
        <h1 className={styles.title}>{titleText}</h1>
        <p className={styles.description}>{descriptionText} </p>
      </div>
      <div className={styles.content}>
        <div className={styles.schedule}>
          <span className={styles.infoText}>{workingHoursText}</span>
          <div className={styles.contentInnerBlock}>
            <h5 className={styles.smallHeading}>{mondayToFridayText}</h5>
            <h5 className={styles.smallHeading}>{hoursText} </h5>
            <span className={styles.infoText}>{ourTeamText}</span>
          </div>
        </div>
        <div className={styles.contactUs}>
          <span className={styles.infoText}>{contactUsText}</span>
          <div className={styles.contentInnerBlock}>
            <h5 className={styles.smallHeading}>020 7993 2905</h5>
            <span className={styles.infoText}>hello@finsweet.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};
