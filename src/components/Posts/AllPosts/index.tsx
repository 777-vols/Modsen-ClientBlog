import Link from 'next/link';
import { v4 } from 'uuid';

import { allPosts } from '@/constants/Posts';
import { urls } from '@/constants/urls';
import { getDictionary } from '@/lib/getDictionary';
import { ILocaleProps } from '@/types';

import Post from './Post';
import styles from './styles.module.scss';

const { blog } = urls;

const { wrapper, title, viewAllLink, postWrapper } = styles;

const AllPosts = async ({ locale }: ILocaleProps) => {
  const { postsBlock } = await getDictionary(locale);
  const { allPosts: allPostsData, postInfo } = postsBlock;
  const { titleText, viewAllLinkText } = allPostsData;

  return (
    <div className={wrapper}>
      <Link href={`/${locale}${blog}`} className={viewAllLink}>
        {viewAllLinkText}
      </Link>
      <h3 className={title}>{titleText}</h3>
      <div className={postWrapper}>
        {allPosts.map((postData) => (
          <Post key={v4()} locale={locale} postData={postData} />
        ))}
      </div>
    </div>
  );
};

export default AllPosts;