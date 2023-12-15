import Link from 'next/link';

import styles from './styles.module.scss';
import { IProps } from './types';

const { wrapper, title, info, authorLink } = styles;

const Post = ({ locale, postData }: IProps) => {
  const { title: postTitle, createdDate, author } = postData;

  return (
    <div className={wrapper}>
      <span className={info}>
        By{' '}
        <Link className={authorLink} href={`/${locale}`}>
          {author}
        </Link>
        {` ${createdDate.getMonth()} ${createdDate.getDay()} ${createdDate.getFullYear()}`}
      </span>
      <h5 className={title}>{postTitle}</h5>
    </div>
  );
};

export default Post;
