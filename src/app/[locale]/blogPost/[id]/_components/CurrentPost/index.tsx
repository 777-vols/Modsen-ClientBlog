'use client';

import Image from 'next/image';
import Link from 'next/link';
import { memo, useMemo } from 'react';

import { allImages, urls } from '@/constants';
import { allAuthors } from '@/constants/Authors';
import { getStringDate } from '@/helpers';
import { getDictionary } from '@/i18n/getDictionary';
import { ILocaleWithPost } from '@/types';

import styles from './styles.module.scss';

const { author: authorPageUrl } = urls;

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
    <section className={styles.wrapper}>
      <div className={styles.blogInnerHeader}>
        <div className={styles.userBlock}>
          <div className={styles.userAvatar}>
            <Image src={authorAvatar} alt="post picture" fill priority />
          </div>
          <div>
            <Link href={`/${locale}${authorPageUrl}/${authorId}`}>
              <h3 className={styles.userName}>{authorNameText}</h3>
            </Link>
            <span className={styles.dateInfo}>{`${blogPostInfo}${textDate}`}</span>
          </div>
        </div>
        <h1 className={styles.postTitle}>{postTitleText}</h1>
        <h4 className={styles.categoryWrapper}>
          {categoryImage}
          {categoryName}
        </h4>
      </div>
      <div className={styles.imageWrapper}>
        <Image src={postImage} alt="post picture" fill priority />
      </div>
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: text! }} />
    </section>
  );
};

export default memo(CurrentPost);
