import dynamic from 'next/dynamic';

import Loading from '@/app/[locale]/loading';
import { getDictionary } from '@/lib/getDictionary';
import { ILocaleProps } from '@/types';

import styles from './styles.module.scss';

const LazyLoadAllPosts = dynamic(() => import('./Carousel'), {
  loading: () => <Loading />,
});

const Testimonials = ({ locale }: ILocaleProps) => {
  const { testimonials } = getDictionary(locale);
  const { titleText, subtitleText, descriptionText } = testimonials;

  return (
    <section className={styles.wrapper}>
      <div className={styles.wrappeInner}>
        <div className={styles.content}>
          <span className={styles.subtitle}>{subtitleText}</span>
          <h2 className={styles.title}>{titleText}</h2>
          <p className={styles.description}>{descriptionText}</p>
        </div>
        <div className={styles.carousel}>
          <LazyLoadAllPosts />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
