import { ILocaleProps } from '@/types';

import AllPosts from './AllPosts';
import FeaturedPost from './FeaturedPost';
import styles from './styles.module.scss';

const { wrapper } = styles;

const Posts = ({ locale }: ILocaleProps) => {
  return (
    <section className={wrapper}>
      <FeaturedPost locale={locale} />
      <AllPosts locale={locale} />
    </section>
  );
};

export default Posts;
