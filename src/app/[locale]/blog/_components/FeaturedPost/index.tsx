import Link from 'next/link';

import { urls } from '@/constants';
import { featuredBlogPost } from '@/constants/Posts';
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
} = featuredBlogPost;

const {
  wrapper,
  background,
  imageWrapper,
  readMoreLink,
  info,
  postTittle,
  description,
  authorLink,
  subtitle,
  content,
} = styles;

const { author: authorPageUrl, blogPost: blogPostPageUrl } = urls;

const FeaturedPost = ({ locale }: ILocaleProps) => {
  const { postsBlock } = getDictionary(locale);
  const { featuredPost: featuredPostData, postInfo } = postsBlock;
  const { readMoreLinkText, subtitleText } = featuredPostData;

  const stringDate = getStringDate(createdPostDate);

  return (
    <section className={background}>
      <div className={wrapper}>
        <div className={content}>
          <span className={subtitle}>{subtitleText}</span>
          <h2 className={postTittle}>{postTitleText}</h2>
          <span className={info}>
            {postInfo}
            <Link className={authorLink} href={`/${locale}${authorPageUrl}/${authorId}`}>
              {postAuthor}
            </Link>
            {` | ${stringDate}`}
          </span>
          <p className={description}>{previewText}</p>
          <Link className={readMoreLink} href={`/${locale}${blogPostPageUrl}/${postId}`}>
            {readMoreLinkText}
          </Link>
        </div>
        <div className={imageWrapper}>{postImage}</div>
      </div>
    </section>
  );
};

export default FeaturedPost;
