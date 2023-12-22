'use client';

import Image from 'next/image';
import { useState } from 'react';

import { allAuthors } from '@/constants/Authors';
import { rgbDataURL } from '@/helpers';

import styles from './styles.module.scss';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const { from, image, name, review, id: slideId } = allAuthors[currentSlide];

  const handlePrevious = () => {
    if (currentSlide !== 0) {
      setCurrentSlide((prevState) => prevState - 1);
    }
  };

  const handleNext = () => {
    if (currentSlide !== allAuthors.length - 1) {
      setCurrentSlide((prevState) => prevState + 1);
    }
  };

  return (
    <div>
      <p data-cy={`slideText${slideId}`} className={styles.message}>
        {review}
      </p>
      <div className={styles.panel}>
        <div className={styles.author}>
          <div className={styles.avatar}>
            <Image
              src={image}
              alt="avatar"
              placeholder="blur"
              blurDataURL={rgbDataURL()}
              fill
              priority
            />
          </div>
          <div className={styles.info}>
            <h4 data-cy="slideAuthorFullName" className={styles.fullName}>
              {name}
            </h4>
            <h4 className={styles.adress}>{from}</h4>
          </div>
        </div>
        <div className={styles.controls}>
          <div className={styles.buttonWrapper}>
            <button
              data-cy="prevSlideButton"
              className={
                currentSlide !== 0 ? styles.activePrevNextButton : styles.disabledPrevNextButton
              }
              type="button"
              onClick={handlePrevious}>
              ←
            </button>
          </div>
          <div className={styles.buttonWrapper}>
            <button
              data-cy="nextSlideButton"
              className={
                currentSlide !== allAuthors.length - 1
                  ? styles.activePrevNextButton
                  : styles.disabledPrevNextButton
              }
              type="button"
              onClick={handleNext}>
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
