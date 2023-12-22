import Image from 'next/image';
import Link from 'next/link';

import { allImages, urls } from '@/constants';
import { rgbDataURL } from '@/helpers';
import { getDictionary } from '@/i18n/getDictionary';
import { ILocaleProps } from '@/types';

import styles from './styles.module.scss';

const { aboutUs } = urls;

const { whyWeStartedBanner } = allImages;

const WhyWeStarted = ({ locale }: ILocaleProps) => {
  const { whyWeStarted } = getDictionary(locale);
  const { titleText, subtitleText, descriptionText, buttonText } = whyWeStarted;

  return (
    <section className={styles.wrapper}>
      <div className={styles.bannerWrapper}>
        <Image
          src={whyWeStartedBanner}
          alt="banner"
          placeholder="blur"
          blurDataURL={rgbDataURL()}
          fill
          priority
        />
      </div>
      <div className={styles.content}>
        <span className={styles.subtitle}>{subtitleText}</span>
        <h1 className={styles.title}>{titleText}</h1>
        <p className={styles.description}>{descriptionText}</p>
        <Link
          data-cy="whyWeStartedLink"
          className={styles.ourStoryLink}
          href={`/${locale}${aboutUs}`}>
          {buttonText}
        </Link>
      </div>
    </section>
  );
};

export default WhyWeStarted;
