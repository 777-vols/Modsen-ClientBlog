import dynamic from 'next/dynamic';

import Loading from '@/app/[locale]/loading';
import { ILocaleProps } from '@/types';

import FeaturedPost from './FeaturedPost';
import styles from './styles.module.scss';

const LazyLoadAllPosts = dynamic(() => import('./AllPosts'), {
  loading: () => <Loading />,
});

const Posts = ({ locale }: ILocaleProps) => {
  return (
    <section className={styles.wrapper}>
      <FeaturedPost locale={locale} />
      <LazyLoadAllPosts locale={locale} />
    </section>
  );
};

export default Posts;
