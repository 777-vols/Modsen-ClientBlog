import Link from 'next/link';
import { v4 } from 'uuid';

import { urls } from '@/constants';
import { allPosts } from '@/constants/Posts';
import { getDictionary } from '@/lib/getDictionary';
import { ILocaleProps } from '@/types';

import Post from './Post';
import styles from './styles.module.scss';

const { blog } = urls;

const { wrapper, title, viewAllLink, postWrapper } = styles;

const AllPosts = ({ locale }: ILocaleProps) => {
  const { postsBlock } = getDictionary(locale);
  const { allPosts: allPostsData } = postsBlock;
  const { titleText, viewAllLinkText } = allPostsData;
  const postsArray = allPosts.slice(0, 4);

  return (
    <div className={wrapper}>
      <Link href={`/${locale}${blog}`} className={viewAllLink}>
        {viewAllLinkText}
      </Link>
      <h3 className={title}>{titleText}</h3>
      <div className={postWrapper}>
        {postsArray.map((postData) => (
          <Post key={v4()} locale={locale} postData={postData} />
        ))}
      </div>
    </div>
  );
};

export default AllPosts;
