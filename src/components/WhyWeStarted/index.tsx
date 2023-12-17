import Link from 'next/link';

import { allImages, urls } from '@/constants';
import { getDictionary } from '@/lib/getDictionary';
import { ILocaleProps } from '@/types';

import styles from './styles.module.scss';

const { aboutUs } = urls;

const { whyWeStartedBanner } = allImages;

const { wrapper, bannerWrapper, content, subtitle, title, description, ourStoryLink } = styles;

const WhyWeStarted = ({ locale }: ILocaleProps) => {
  const { whyWeStarted } = getDictionary(locale);
  const { titleText, subtitleText, descriptionText, buttonText } = whyWeStarted;

  return (
    <section className={wrapper}>
      <div className={bannerWrapper}>{whyWeStartedBanner}</div>
      <div className={content}>
        <h5 className={subtitle}>{subtitleText}</h5>
        <h3 className={title}>{titleText}</h3>
        <p className={description}>{descriptionText}</p>
        <Link className={ourStoryLink} href={`/${locale}${aboutUs}`}>
          {buttonText}
        </Link>
      </div>
    </section>
  );
};

export default WhyWeStarted;
