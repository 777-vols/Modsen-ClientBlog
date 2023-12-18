import Link from 'next/link';

import { urls } from '@/constants';

import styles from './styles.module.scss';
import { IProps } from './types';

const { wrapper, imageWrapper, postTittle, description, subtitle, content } = styles;

const { blogPost: blogPostPageUrl } = urls;

const Post = ({ locale, postData }: IProps) => {
  const {
    title: postTitleText,
    description: descriptionTitleText,
    category,
    image: postImage,
    id: postId,
  } = postData;

  return (
    <Link href={`/${locale}${blogPostPageUrl}/${postId}`}>
      <div className={wrapper}>
        <div className={imageWrapper}>{postImage}</div>
        <div className={content}>
          <h6 className={subtitle}>{category.toUpperCase()}</h6>
          <h2 className={postTittle}>{postTitleText}</h2>
          <p className={description}>{descriptionTitleText}</p>
        </div>
      </div>
    </Link>
  );
};

export default Post;
