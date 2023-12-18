import Link from 'next/link';

import { urls } from '@/constants';
import { getStringDate } from '@/helpers';
import { getDictionary } from '@/lib/getDictionary';

import styles from './styles.module.scss';
import { IProps } from './types';

const { wrapper, postWrapper, imageWrapper, info, postTittle, description, authorLink } = styles;

const { author: authorPageUrl, blogPost: blogPostPageUrl } = urls;

const Post = ({ locale, postData }: IProps) => {
  const {
    title: postTitleText,
    description: descriptionTitleText,
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
    <div className={wrapper}>
      <article className={postWrapper}>
        <Link href={`/${locale}${blogPostPageUrl}/${postId}`}>
          <div className={imageWrapper}>{postImage}</div>
        </Link>
        <span className={info}>
          {postInfo}
          <Link className={authorLink} href={`/${locale}${authorPageUrl}/${authorId}`}>
            {postAuthor}
          </Link>
          {` | ${stringDate}`}
        </span>
        <h3 className={postTittle}>{postTitleText}</h3>
        <p className={description}>{descriptionTitleText}</p>
      </article>
    </div>
  );
};

export default Post;
