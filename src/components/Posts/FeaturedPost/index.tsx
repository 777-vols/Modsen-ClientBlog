import Link from 'next/link';

import { allImages } from '@/constants/allImages';
import { featuredPost } from '@/constants/Posts';
import { getDictionary } from '@/lib/getDictionary';
import { ILocaleProps } from '@/types';

import styles from './styles.module.scss';

const { featuredPostImage } = allImages;

const {
  title: postTitleText,
  description: descriptionTitleText,
  createdDate: createdPostDate,
  author: postAuthor,
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

const FeaturedPost = ({ locale }: ILocaleProps) => {
  const { postsBlock } = getDictionary(locale);
  const { featuredPost: featuredPostData, postInfo } = postsBlock;
  const { titleText, readMoreLinkText } = featuredPostData;

  return (
    <div className={wrapper}>
      <h3 className={title}>{titleText}</h3>
      <article className={postWrapper}>
        <div className={imageWrapper}>{featuredPostImage}</div>
        <span className={info}>
          {postInfo}
          <Link className={authorLink} href={`/${locale}`}>
            {postAuthor}
          </Link>
          {` ${String(createdPostDate.getMonth() + 1).padStart(2, '0')} ${String(
            createdPostDate.getDate(),
          ).padStart(2, '0')} ${createdPostDate.getFullYear()}`}
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
