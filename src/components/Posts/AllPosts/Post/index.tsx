import Link from 'next/link';

import { urls } from '@/constants';
import { getStringDate } from '@/helpers';
import { getDictionary } from '@/lib/getDictionary';

import styles from './styles.module.scss';
import { IProps } from './types';

const { author: authorPageUrl } = urls;

const Post = ({ locale, postData }: IProps) => {
  const { title: postTitle, createdDate, authorName, authorId } = postData;

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
      <h4 className={styles.title}>{postTitle}</h4>
    </div>
  );
};

export default Post;
