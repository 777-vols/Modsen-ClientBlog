import Link from 'next/link';

import { urls } from '@/constants';
import { allPosts } from '@/constants/Posts';
import { getDictionary } from '@/i18n/getDictionary';
import { ILocaleProps } from '@/types';

import Post from './Post';
import styles from './styles.module.scss';

const { blog } = urls;

const numberOfPosts = 4;

const AllPosts = ({ locale }: ILocaleProps) => {
  const { postsBlock } = getDictionary(locale);
  const { allPosts: allPostsData } = postsBlock;
  const { titleText, viewAllLinkText } = allPostsData;
  const postsArray = allPosts.slice(0, numberOfPosts);

  return (
    <div className={styles.wrapper}>
      <Link href={`/${locale}${blog}`} className={styles.viewAllLink}>
        {viewAllLinkText}
      </Link>
      <h2 className={styles.title}>{titleText}</h2>
      <div className={styles.postWrapper}>
        {postsArray.map((postData) => (
          <Post key={postData.id} locale={locale} postData={postData} />
        ))}
      </div>
    </div>
  );
};

export default AllPosts;
