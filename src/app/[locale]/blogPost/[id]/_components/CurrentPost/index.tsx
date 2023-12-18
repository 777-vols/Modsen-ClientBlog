'use client';

import Link from 'next/link';
import { useMemo } from 'react';

import { allImages, urls } from '@/constants';
import { allAuthors } from '@/constants/Authors';
import { getStringDate } from '@/helpers';
import { getDictionary } from '@/lib/getDictionary';
import { ILocaleWithPost } from '@/types';

import styles from './styles.module.scss';

const { author: authorPageUrl } = urls;

const {
  wrapper,
  imageWrapper,
  blogInnerHeader,
  content,
  dateInfo,
  userAvatar,
  userBlock,
  userName,
  postTitle,
  categoryWrapper,
} = styles;

const CurrentPost = ({ locale, postData }: ILocaleWithPost) => {
  const {
    title: postTitleText,
    createdDate,
    authorName: authorNameText,
    category,
    text,
    authorId,
    image: postImage,
  } = postData;

  const { category: categoryData, blogPostInfo } = getDictionary(locale);
  const { categoriesList } = categoryData;
  const categoryName = categoriesList[category].titleText;
  const categoryImage = allImages.categoryImages[category];

  const authorData = useMemo(() => allAuthors.find((author) => author.id === authorId), [authorId]);

  const { image: authorAvatar } = authorData!;

  const textDate = getStringDate(createdDate);

  return (
    <section className={wrapper}>
      <div className={blogInnerHeader}>
        <div className={userBlock}>
          <div className={userAvatar}>{authorAvatar}</div>
          <div>
            <Link href={`/${locale}${authorPageUrl}/${authorId}`}>
              <h3 className={userName}>{authorNameText}</h3>
            </Link>
            <span className={dateInfo}>{`${blogPostInfo}${textDate}`}</span>
          </div>
        </div>
        <h1 className={postTitle}>{postTitleText}</h1>
        <h4 className={categoryWrapper}>
          {categoryImage}
          {categoryName}
        </h4>
      </div>
      <div className={imageWrapper}>{postImage}</div>
      <div className={content} dangerouslySetInnerHTML={{ __html: text! }} />
    </section>
  );
};

export default CurrentPost;
