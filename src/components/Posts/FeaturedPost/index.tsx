import { ILocaleProps } from '@/types';

import styles from './styles.module.scss';

const { wrapper, title, postWrapper } = styles;

const FeaturedPost = ({ locale }: ILocaleProps) => {
  return (
    <div className={wrapper}>
      <h3 className={title}>Featured Post</h3>
      <article className={postWrapper}>post</article>
    </div>
  );
};

export default FeaturedPost;
