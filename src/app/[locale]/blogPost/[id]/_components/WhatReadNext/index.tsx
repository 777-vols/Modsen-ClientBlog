'use client';

import { useMemo } from 'react';

import { allPosts } from '@/constants/posts';
import { getDictionary } from '@/i18n/getDictionary';
import { ILocaleWithPost } from '@/types';

import Post from './Post';
import styles from './styles.module.scss';

const numberOfPosts = 3;

const WhatReadNext = ({ locale, postData }: ILocaleWithPost) => {
  const { blogPostTitle } = getDictionary(locale);

  const { id: currentPostId, category: currentPostCategory } = postData;

  const recommendedPosts = useMemo(
    () =>
      allPosts
        .filter((post) => post.category === currentPostCategory && post.id !== currentPostId)
        .slice(0, numberOfPosts)
        .map((recommendedPost) => (
          <Post key={recommendedPost.id} locale={locale} postData={recommendedPost} />
        )),
    [currentPostCategory, currentPostId, locale],
  );

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>{blogPostTitle}</h2>
      <div className={styles.postsWrapper}>{recommendedPosts}</div>
    </section>
  );
};

export default WhatReadNext;
