import Link from 'next/link';

import { urls } from '@/constants';
import { getStringDate } from '@/helpers';
import { getDictionary } from '@/i18n/getDictionary';
import { ILocaleWithPost } from '@/types';

import styles from './styles.module.scss';

const { author: authorPageUrl, blogPost: blogPostPageUrl } = urls;

const Post = ({ locale, postData }: ILocaleWithPost) => {
  const {
    title: postTitleText,
    preview: previewText,
    createdDate: createdPostDate,
    authorName: postAuthor,
    authorId,
    image: postImage,
    id: postId,
  } = postData;

  const { postsBlock } = getDictionary(locale);
  const { postInfo } = postsBlock;

  const stringDate = getStringDate(createdPostDate);

  return (
    <div className={styles.wrapper}>
      <article className={styles.postWrapper}>
        <Link href={`/${locale}${blogPostPageUrl}/${postId}`}>
          <div className={styles.imageWrapper}>{postImage}</div>
        </Link>
        <span className={styles.info}>
          {postInfo}
          <Link className={styles.authorLink} href={`/${locale}${authorPageUrl}/${authorId}`}>
            {postAuthor}
          </Link>
          {` | ${stringDate}`}
        </span>
        <h3 className={styles.postTittle}>{postTitleText}</h3>
        <p className={styles.description}>{previewText}</p>
      </article>
    </div>
  );
};

export default Post;
