import Link from 'next/link';

import { urls } from '@/constants/urls';
import { getDictionary } from '@/lib/getDictionary';
import { ILocaleProps } from '@/types';

import styles from './styles.module.scss';

const { aboutUs } = urls;

const {
  wrapper,
  shape,
  purpleShape,
  content,
  contentBlock,
  subtitle,
  smallTitle,
  bigTitle,
  description,
  readMoreLink,
} = styles;

const AboutUs = ({ locale }: ILocaleProps) => {
  const { aboutUsBlock } = getDictionary(locale);
  const { aboutUs: aboutUsData, ourMission } = aboutUsBlock;
  const { aboutUsTitle, aboutUsSubtitle, aboutUsDescription, linkText } = aboutUsData;
  const { ourMissionTitle, ourMissionSubtitle, ourMissionDescription } = ourMission;

  return (
    <section className={wrapper}>
      <div className={shape}>
        <div className={purpleShape} />
      </div>
      <div className={content}>
        <div className={contentBlock}>
          <h5 className={subtitle}>{aboutUsSubtitle}</h5>
          <h3 className={bigTitle}>{aboutUsTitle}</h3>
          <p className={description}>{aboutUsDescription}</p>
          <Link className={readMoreLink} href={`/${locale}${aboutUs}`}>
            {linkText}
          </Link>
        </div>
        <div className={contentBlock}>
          <h5 className={subtitle}>{ourMissionSubtitle}</h5>
          <h3 className={smallTitle}>{ourMissionTitle}</h3>
          <p className={description}>{ourMissionDescription}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
