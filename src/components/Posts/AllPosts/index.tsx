import Link from 'next/link';
import { v4 } from 'uuid';

import { allPosts } from '@/constants/posts';
import { urls } from '@/constants/urls';
import { ILocaleProps } from '@/types';

import Post from './Post';
import styles from './styles.module.scss';

const { blog } = urls;

const { wrapper, title, viewAllLink, postWrapper } = styles;

const AllPosts = ({ locale }: ILocaleProps) => {
  return (
    <div className={wrapper}>
      <Link href={`/${locale}${blog}`} className={viewAllLink}>
        View All
      </Link>
      <h3 className={title}>All Posts</h3>
      <div className={postWrapper}>
        {allPosts.map((postData) => (
          <Post key={v4()} locale={locale} postData={postData} />
        ))}
      </div>
    </div>
  );
};

export default AllPosts;
