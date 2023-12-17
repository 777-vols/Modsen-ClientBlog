import Link from 'next/link';

import { allImages } from '@/constants/allImages';
import { featuredPost } from '@/constants/Posts';
import { urls } from '@/constants/urls';
import { getStringDate } from '@/helpers';
import { getDictionary } from '@/lib/getDictionary';
import { ILocaleProps } from '@/types';

import styles from './styles.module.scss';

const { featuredPostImage } = allImages;

const {
  title: postTitleText,
  description: descriptionTitleText,
  createdDate: createdPostDate,
  authorName: postAuthor,
  authorId,
} = featuredPost;

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

const { author: authorPageUrl } = urls;

const FeaturedPost = ({ locale }: ILocaleProps) => {
  const { postsBlock } = getDictionary(locale);
  const { featuredPost: featuredPostData, postInfo } = postsBlock;
  const { titleText, readMoreLinkText } = featuredPostData;

  const stringDate = getStringDate(createdPostDate);

  return (
    <div className={wrapper}>
      <h3 className={title}>{titleText}</h3>
      <article className={postWrapper}>
        <div className={imageWrapper}>{featuredPostImage}</div>
        <span className={info}>
          {postInfo}
          <Link className={authorLink} href={`/${locale}${authorPageUrl}/${authorId}`}>
            {postAuthor}
          </Link>
          {` ${stringDate}`}
        </span>
        <h5 className={postTittle}>{postTitleText}</h5>
        <p className={description}>{descriptionTitleText}</p>
        <Link className={readMoreLink} href={`/${locale}`}>
          {readMoreLinkText}
        </Link>
      </article>
    </div>
  );
};

export default FeaturedPost;
