'use client';

import { useMemo } from 'react';

import { allPosts } from '@/constants/Posts';
import { getDictionary } from '@/lib/getDictionary';
import { ILocaleWithPost } from '@/types';

import Post from './Post';
import styles from './styles.module.scss';

const { wrapper, title, postsWrapper } = styles;

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
    <section className={wrapper}>
      <h2 className={title}>{blogPostTitle}</h2>
      <div className={postsWrapper}>{recommendedPosts}</div>
    </section>
  );
};

export default WhatReadNext;
