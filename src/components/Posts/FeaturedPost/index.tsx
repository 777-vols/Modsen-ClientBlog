import Link from 'next/link';

import { urls } from '@/constants';
import { featuredHomePost } from '@/constants/Posts';
import { getStringDate } from '@/helpers';
import { getDictionary } from '@/lib/getDictionary';
import { ILocaleProps } from '@/types';

import styles from './styles.module.scss';

const {
  title: postTitleText,
  preview: previewText,
  createdDate: createdPostDate,
  authorName: postAuthor,
  authorId,
  image: postImage,
  id: postId,
} = featuredHomePost;

const { author: authorPageUrl, blogPost: blogPostPageUrl } = urls;

const FeaturedPost = ({ locale }: ILocaleProps) => {
  const { postsBlock } = getDictionary(locale);
  const { featuredPost: featuredPostData, postInfo } = postsBlock;
  const { titleText, readMoreLinkText } = featuredPostData;

  const stringDate = getStringDate(createdPostDate);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{titleText}</h2>
      <article className={styles.postWrapper}>
        <div className={styles.imageWrapper}>{postImage}</div>
        <span className={styles.info}>
          {postInfo}
          <Link className={styles.authorLink} href={`/${locale}${authorPageUrl}/${authorId}`}>
            {postAuthor}
          </Link>
          {` | ${stringDate}`}
        </span>
        <h3 className={styles.postTittle}>{postTitleText}</h3>
        <p className={styles.description}>{previewText}</p>
        <Link className={styles.readMoreLink} href={`/${locale}${blogPostPageUrl}/${postId}`}>
          {readMoreLinkText}
        </Link>
      </article>
    </div>
  );
};

export default FeaturedPost;
