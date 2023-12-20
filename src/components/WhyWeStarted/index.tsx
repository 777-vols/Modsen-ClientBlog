import Link from 'next/link';

import { allImages, urls } from '@/constants';
import { getDictionary } from '@/lib/getDictionary';
import { ILocaleProps } from '@/types';

import styles from './styles.module.scss';

const { aboutUs } = urls;

const { whyWeStartedBanner } = allImages;

const WhyWeStarted = ({ locale }: ILocaleProps) => {
  const { whyWeStarted } = getDictionary(locale);
  const { titleText, subtitleText, descriptionText, buttonText } = whyWeStarted;

  return (
    <section className={styles.wrapper}>
      <div className={styles.bannerWrapper}>{whyWeStartedBanner}</div>
      <div className={styles.content}>
        <span className={styles.subtitle}>{subtitleText}</span>
        <h1 className={styles.title}>{titleText}</h1>
        <p className={styles.description}>{descriptionText}</p>
        <Link className={styles.ourStoryLink} href={`/${locale}${aboutUs}`}>
          {buttonText}
        </Link>
      </div>
    </section>
  );
};

export default WhyWeStarted;
