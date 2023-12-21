import Image from 'next/image';
import Link from 'next/link';

import { urls } from '@/constants';

import styles from './styles.module.scss';
import { IProps } from './types';

const { blogPost: blogPostPageUrl } = urls;

const Post = ({ locale, postData }: IProps) => {
  const {
    title: postTitleText,
    preview: previewText,
    category,
    image: postImage,
    id: postId,
  } = postData;

  return (
    <Link
      data-cy="postItem"
      className={styles.wrapper}
      href={`/${locale}${blogPostPageUrl}/${postId}`}>
      <div className={styles.imageWrapper}>
        <Image src={postImage} alt="post picture" fill priority />
      </div>
      <div className={styles.content}>
        <h6 className={styles.subtitle}>{category.toUpperCase()}</h6>
        <h2 className={styles.postTittle}>{postTitleText}</h2>
        <p className={styles.description}>{previewText}</p>
      </div>
    </Link>
  );
};

export default Post;
