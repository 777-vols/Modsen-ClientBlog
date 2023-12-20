import Link from 'next/link';

import { urls } from '@/constants';
import { getDictionary } from '@/i18n/getDictionary';
import { ILocaleProps } from '@/types';

import styles from './styles.module.scss';

const { aboutUs } = urls;

const AboutUs = ({ locale }: ILocaleProps) => {
  const { aboutUsBlock } = getDictionary(locale);
  const { aboutUs: aboutUsData, ourMission } = aboutUsBlock;
  const { aboutUsTitle, aboutUsSubtitle, aboutUsDescription, linkText } = aboutUsData;
  const { ourMissionTitle, ourMissionSubtitle, ourMissionDescription } = ourMission;

  return (
    <section className={styles.wrapper}>
      <div className={styles.shape}>
        <div className={styles.purpleShape} />
      </div>
      <div className={styles.content}>
        <div className={styles.contentBlock}>
          <span className={styles.subtitle}>{aboutUsSubtitle}</span>
          <h2 className={styles.bigTitle}>{aboutUsTitle}</h2>
          <p className={styles.description}>{aboutUsDescription}</p>
          <Link className={styles.readMoreLink} href={`/${locale}${aboutUs}`}>
            {linkText}
          </Link>
        </div>
        <div className={styles.contentBlock}>
          <span className={styles.subtitle}>{ourMissionSubtitle}</span>
          <h3 className={styles.smallTitle}>{ourMissionTitle}</h3>
          <p className={styles.description}>{ourMissionDescription}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
