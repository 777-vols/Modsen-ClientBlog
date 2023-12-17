'use client';

import { FC, useMemo, useState } from 'react';
import { v4 } from 'uuid';

import { allPosts } from '@/constants/Posts';
import { getDictionary } from '@/lib/getDictionary';
import { ILocaleProps } from '@/types';

import Post from './Post';
import styles from './styles.module.scss';

const {
  wrapper,
  title,
  postsBlock,
  controls,
  buttonWrapper,
  activePrevNextButton,
  disabledPrevNextButton,
} = styles;

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
      return postsArray.map((post) => <Post key={v4()} locale={locale} postData={post} />);
    }
    return [];
  }, [currentPage, locale, numberOfPages]);

  return (
    <section className={wrapper}>
      <h2 className={title}>{titleText}</h2>
      <div className={postsBlock}>{postsComponents}</div>
      <div className={controls}>
        <div className={buttonWrapper}>
          <button
            className={currentPage !== 1 ? activePrevNextButton : disabledPrevNextButton}
            type="button"
            onClick={handlePrevious}>
            {prevButtonText}
          </button>
        </div>
        <div className={buttonWrapper}>
          <button
            className={
              currentPage !== numberOfPages ? activePrevNextButton : disabledPrevNextButton
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
