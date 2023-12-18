import { getDictionary } from '@/lib/getDictionary';
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
    <div className={wrapper}>
      <div className={head}>
        <span className={subtitle}>{subtitleText}</span>
        <h1 className={title}>{titleText}</h1>
        <p className={description}>{descriptionText} </p>
      </div>
      <div className={content}>
        <div className={schedule}>
          <span className={infoText}>{workingHoursText}</span>
          <div className={contentInnerBlock}>
            <h5 className={smallHeading}>{mondayToFridayText}</h5>
            <h5 className={smallHeading}>{hoursText} </h5>
            <span className={infoText}>{ourTeamText}</span>
          </div>
        </div>
        <div className={contactUs}>
          <span className={infoText}>{contactUsText}</span>
          <div className={contentInnerBlock}>
            <h5 className={smallHeading}>020 7993 2905</h5>
            <span className={infoText}>hello@finsweet.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};
