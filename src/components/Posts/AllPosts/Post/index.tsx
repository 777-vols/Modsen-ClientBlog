import Link from 'next/link';

import { urls } from '@/constants/urls';
import { getStringDate } from '@/helpers';
import { getDictionary } from '@/lib/getDictionary';

import styles from './styles.module.scss';
import { IProps } from './types';

const { author: authorPageUrl } = urls;

const { wrapper, title, info, authorLink } = styles;

const Post = ({ locale, postData }: IProps) => {
  const { title: postTitle, createdDate, authorName, authorId } = postData;

  const { postsBlock } = getDictionary(locale);
  const { postInfo } = postsBlock;

  const stringDate = getStringDate(createdDate);

  return (
    <div className={wrapper}>
      <span className={info}>
        {postInfo}
        <Link className={authorLink} href={`/${locale}${authorPageUrl}/${authorId}`}>
          {authorName}
        </Link>
        {` ${stringDate}`}
      </span>
      <h5 className={title}>{postTitle}</h5>
    </div>
  );
};

export default Post;
