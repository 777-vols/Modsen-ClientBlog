import Link from 'next/link';

import { getDictionary } from '@/lib/getDictionary';

import styles from './styles.module.scss';
import { IProps } from './types';

const { wrapper, title, info, authorLink } = styles;

const Post = ({ locale, postData }: IProps) => {
  const { title: postTitle, createdDate, author } = postData;

  const { postsBlock } = getDictionary(locale);
  const { postInfo } = postsBlock;

  return (
    <div className={wrapper}>
      <span className={info}>
        {postInfo}
        <Link className={authorLink} href={`/${locale}`}>
          {author}
        </Link>
        {` ${String(createdDate.getMonth() + 1).padStart(2, '0')} ${String(
          createdDate.getDate(),
        ).padStart(2, '0')} ${createdDate.getFullYear()}`}
      </span>
      <h5 className={title}>{postTitle}</h5>
    </div>
  );
};

export default Post;
