import Link from 'next/link';

import { allImages } from '@/constants/allImages';
import { urls } from '@/constants/urls';
import { ILocaleProps } from '@/types';

import styles from './styles.module.scss';

const { aboutUs } = urls;

const { whyWeStartedBanner } = allImages;

const { wrapper, bannerWrapper, content, subtitle, title, description, ourStoryLink } = styles;

const WhyWeStarted = ({ locale }: ILocaleProps) => (
  <section className={wrapper}>
    <div className={bannerWrapper}>{whyWeStartedBanner}</div>
    <div className={content}>
      <h5 className={subtitle}>WHY WE STARTED</h5>
      <h3 className={title}>It started out as a simple idea and evolved into our passion</h3>
      <p className={description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip.
      </p>
      <Link className={ourStoryLink} href={`/${locale}${aboutUs}`}>{`Discover our story >`}</Link>
    </div>
  </section>
);

export default WhyWeStarted;
