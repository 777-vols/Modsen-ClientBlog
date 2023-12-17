import dynamic from 'next/dynamic';

import Loading from '@/app/[locale]/loading';
import { getDictionary } from '@/lib/getDictionary';
import { ILocaleProps } from '@/types';

import styles from './styles.module.scss';

const { wrapper, wrappeInner, content, carousel, subtitle, title, description } = styles;

const LazyLoadAllPosts = dynamic(() => import('./Carousel'), {
  loading: () => <Loading />,
});

const Testimonials = ({ locale }: ILocaleProps) => {
  const { testimonials } = getDictionary(locale);
  const { titleText, subtitleText, descriptionText } = testimonials;

  return (
    <section className={wrapper}>
      <div className={wrappeInner}>
        <div className={content}>
          <h5 className={subtitle}>{subtitleText}</h5>
          <h3 className={title}>{titleText}</h3>
          <p className={description}>{descriptionText}</p>
        </div>
        <div className={carousel}>
          <LazyLoadAllPosts />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
