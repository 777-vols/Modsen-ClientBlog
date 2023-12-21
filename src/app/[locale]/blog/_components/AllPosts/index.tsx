'use client';

import { FC, useMemo, useState } from 'react';

import { allPosts } from '@/constants/Posts';
import { getDictionary } from '@/i18n/getDictionary';
import { ILocaleProps } from '@/types';

import Post from './Post';
import styles from './styles.module.scss';

const numberOfPosts = 5;

const AllPosts: FC<ILocaleProps> = ({ locale }) => {
  const { postsBlock: postsBlockData } = getDictionary(locale);
  const { allPosts: allPostsData } = postsBlockData;
  const { titleText, prevButtonText, nextButtonText } = allPostsData;

  const [currentPage, setCurrentPage] = useState(1);

  const numberOfPages = Math.ceil(allPosts.length / numberOfPosts);

  const handlePrevious = () => {
    if (currentPage !== 1) {
      setCurrentPage((prevState) => prevState - 1);
    }
  };

  const handleNext = () => {
    if (currentPage !== numberOfPages) {
      setCurrentPage((prevState) => prevState + 1);
    }
  };

  const postsComponents = useMemo(() => {
    const lastPost = currentPage * numberOfPosts;
    if (currentPage <= numberOfPages) {
      const postsArray = allPosts.slice(lastPost - numberOfPosts, lastPost);
      return postsArray.map((post) => <Post key={post.id} locale={locale} postData={post} />);
    }
    return [];
  }, [currentPage, locale, numberOfPages]);

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>{titleText}</h1>
      <div className={styles.postsBlock}>{postsComponents}</div>
      <div className={styles.controls}>
        <div className={styles.buttonWrapper}>
          <button
            data-cy="prevPageButton"
            className={
              currentPage !== 1 ? styles.activePrevNextButton : styles.disabledPrevNextButton
            }
            type="button"
            onClick={handlePrevious}>
            {prevButtonText}
          </button>
        </div>
        <div className={styles.buttonWrapper}>
          <button
            data-cy="nextPageButton"
            className={
              currentPage !== numberOfPages
                ? styles.activePrevNextButton
                : styles.disabledPrevNextButton
            }
            type="button"
            onClick={handleNext}>
            {nextButtonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AllPosts;
