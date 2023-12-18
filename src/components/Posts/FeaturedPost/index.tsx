import Link from 'next/link';

import { urls } from '@/constants';
import { featuredHomePost } from '@/constants/Posts';
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
} = featuredHomePost;

const {
  wrapper,
  title,
  postWrapper,
  imageWrapper,
  readMoreLink,
  info,
  postTittle,
  description,
  authorLink,
} = styles;

const { author: authorPageUrl, blogPost: blogPostPageUrl } = urls;

const FeaturedPost = ({ locale }: ILocaleProps) => {
  const { postsBlock } = getDictionary(locale);
  const { featuredPost: featuredPostData, postInfo } = postsBlock;
  const { titleText, readMoreLinkText } = featuredPostData;

  const stringDate = getStringDate(createdPostDate);

  return (
    <div className={wrapper}>
      <h2 className={title}>{titleText}</h2>
      <article className={postWrapper}>
        <div className={imageWrapper}>{postImage}</div>
        <span className={info}>
          {postInfo}
          <Link className={authorLink} href={`/${locale}${authorPageUrl}/${authorId}`}>
            {postAuthor}
          </Link>
          {` ${stringDate}`}
        </span>
        <h3 className={postTittle}>{postTitleText}</h3>
        <p className={description}>{descriptionTitleText}</p>
        <Link className={readMoreLink} href={`/${locale}${blogPostPageUrl}/${postId}`}>
          {readMoreLinkText}
        </Link>
      </article>
    </div>
  );
};

export default FeaturedPost;
