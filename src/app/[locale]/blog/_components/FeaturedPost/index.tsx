import Image from 'next/image';
import Link from 'next/link';

import { urls } from '@/constants';
import { featuredBlogPost } from '@/constants/Posts';
import { getStringDate } from '@/helpers';
import { getDictionary } from '@/i18n/getDictionary';
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
} = featuredBlogPost;

const { author: authorPageUrl, blogPost: blogPostPageUrl } = urls;

const FeaturedPost = ({ locale }: ILocaleProps) => {
  const { postsBlock } = getDictionary(locale);
  const { featuredPost: featuredPostData, postInfo } = postsBlock;
  const { readMoreLinkText, subtitleText } = featuredPostData;

  const stringDate = getStringDate(createdPostDate);

  return (
    <section className={styles.background}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <span className={styles.subtitle}>{subtitleText}</span>
          <h2 className={styles.postTittle}>{postTitleText}</h2>
          <span className={styles.info}>
            {postInfo}
            <Link className={styles.authorLink} href={`/${locale}${authorPageUrl}/${authorId}`}>
              {postAuthor}
            </Link>
            {` | ${stringDate}`}
          </span>
          <p className={styles.description}>{previewText}</p>
          <Link className={styles.readMoreLink} href={`/${locale}${blogPostPageUrl}/${postId}`}>
            {readMoreLinkText}
          </Link>
        </div>
        <div className={styles.imageWrapper}>
          <Image src={postImage} alt="feature post picture" fill priority />
        </div>
      </div>
    </section>
  );
};

export default FeaturedPost;
