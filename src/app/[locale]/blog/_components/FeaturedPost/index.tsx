import Link from 'next/link';

import { featuredBlogPost } from '@/constants/Posts';
import { urls } from '@/constants/urls';
import { getStringDate } from '@/helpers';
import { getDictionary } from '@/lib/getDictionary';
import { ILocaleProps } from '@/types';

import styles from './styles.module.scss';

const {
  title: postTitleText,
  description: descriptionTitleText,
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
  const { readMoreLinkText } = featuredPostData;

  const stringDate = getStringDate(createdPostDate);

  return (
    <section className={background}>
      <div className={wrapper}>
        <div className={content}>
          <span className={subtitle}>FEATURED POST</span>
          <h3 className={postTittle}>{postTitleText}</h3>
          <span className={info}>
            {postInfo}
            <Link className={authorLink} href={`/${locale}${authorPageUrl}/${authorId}`}>
              {postAuthor}
            </Link>
            {` | ${stringDate}`}
          </span>
          <p className={description}>{descriptionTitleText}</p>
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
