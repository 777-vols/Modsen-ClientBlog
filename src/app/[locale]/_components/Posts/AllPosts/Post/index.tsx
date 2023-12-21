import Link from 'next/link';

import { urls } from '@/constants';
import { getStringDate } from '@/helpers';
import { getDictionary } from '@/i18n/getDictionary';

import styles from './styles.module.scss';
import { IProps } from './types';

const { author: authorPageUrl, blogPost: blogPostPageUrl } = urls;

const Post = ({ locale, postData }: IProps) => {
  const { id: postId, title: postTitle, createdDate, authorName, authorId } = postData;

  const { postsBlock } = getDictionary(locale);
  const { postInfo } = postsBlock;

  const stringDate = getStringDate(createdDate);

  return (
    <div className={styles.wrapper}>
      <span className={styles.info}>
        {postInfo}
        <Link className={styles.authorLink} href={`/${locale}${authorPageUrl}/${authorId}`}>
          {authorName}
        </Link>
        {` | ${stringDate}`}
      </span>
      <Link className={styles.readMoreLink} href={`/${locale}${blogPostPageUrl}/${postId}`}>
        <h4 className={styles.title}>{postTitle}</h4>
      </Link>
    </div>
  );
};

export default Post;
